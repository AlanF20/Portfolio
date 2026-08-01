import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import {
  EXTRACTION_FIELDS,
  MOCK_ANTENNAS,
  type PipelinePhase,
  type TelemetryField,
} from '../data/antennas'
import { AntennaBrowser } from './AntennaBrowser'
import { DashboardBrowser } from './DashboardBrowser'
import { DataExtractionAnimation } from './DataExtractionAnimation'

interface Point {
  x: number
  y: number
}

const IDLE_START = 0.6
const EXTRACT_START = 0.9
const FIELD_STEP = 0.62
const PROCESS_AT = EXTRACT_START + EXTRACTION_FIELDS.length * FIELD_STEP + 0.35
const UPDATE_AT = PROCESS_AT + 0.9
const IDLE_AT = UPDATE_AT + 1.15
const HOLD_AT = IDLE_AT + 0.6

function arcTween(dot: Element, from: Point, to: Point, lift: number, duration: number): gsap.core.Tween {
  const mid = { x: (from.x + to.x) / 2, y: Math.min(from.y, to.y) - lift }
  const progress = { t: 0 }
  return gsap.to(progress, {
    t: 1,
    duration,
    ease: 'power1.inOut',
    paused: true,
    onUpdate: () => {
      const u = 1 - progress.t
      const x = u * u * from.x + 2 * u * progress.t * mid.x + progress.t * progress.t * to.x
      const y = u * u * from.y + 2 * u * progress.t * mid.y + progress.t * progress.t * to.y
      gsap.set(dot, { x, y })
    },
  })
}

export function DataPipelineAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const antennaRef = useRef<HTMLDivElement>(null)
  const dashRef = useRef<HTMLDivElement>(null)
  const dotRefs = useRef<Array<HTMLSpanElement | null>>([])

  const [sourceIndex, setSourceIndex] = useState(0)
  const [dashIndex, setDashIndex] = useState(MOCK_ANTENNAS.length - 1)
  const [phase, setPhase] = useState<PipelinePhase>('idle')
  const [highlighted, setHighlighted] = useState<TelemetryField | null>(null)

  useEffect(() => {
    const container = containerRef.current
    const antennaEl = antennaRef.current
    const dashEl = dashRef.current
    if (!container || !antennaEl || !dashEl) return

    const containerRect = container.getBoundingClientRect()
    const antennaRect = antennaEl.getBoundingClientRect()
    const dashRect = dashEl.getBoundingClientRect()

    const from: Point = {
      x: antennaRect.right - containerRect.left - 4,
      y: antennaRect.bottom - containerRect.top - 36,
    }
    const to: Point = {
      x: dashRect.left - containerRect.left + 26,
      y: dashRect.top - containerRect.top + 22,
    }

    const timeline = gsap.timeline({
      onComplete: () => {
        setPhase('idle')
        setHighlighted(null)
        setSourceIndex((index) => (index + 1) % MOCK_ANTENNAS.length)
      },
    })

    timeline.call(() => setPhase('extracting'), undefined, IDLE_START)

    EXTRACTION_FIELDS.forEach((field, index) => {
      const at = EXTRACT_START + index * FIELD_STEP
      timeline.call(() => setHighlighted(field), undefined, at)
      timeline.call(() => setHighlighted(null), undefined, at + 0.5)

      const dot = dotRefs.current[index]
      if (dot) {
        const packet = gsap.timeline({ paused: true })
        packet.set(dot, { x: from.x, y: from.y, opacity: 0, scale: 0.5 })
        packet.to(dot, { opacity: 1, scale: 1, duration: 0.12, ease: 'power1.out' })
        packet.add(arcTween(dot, from, to, 70, 0.85), 0.12)
        packet.to(dot, { opacity: 0, scale: 0.4, duration: 0.14, ease: 'power1.in' })
        timeline.add(packet, at + 0.05)
      }
    })

    timeline.call(() => setPhase('processing'), undefined, PROCESS_AT)
    timeline.call(
      () => {
        setDashIndex(sourceIndex)
        setPhase('updating')
      },
      undefined,
      UPDATE_AT,
    )
    timeline.call(() => setPhase('idle'), undefined, IDLE_AT)
    timeline.to({}, { duration: HOLD_AT - IDLE_AT })

    return () => {
      timeline.kill()
    }
  }, [sourceIndex])

  return (
    <div ref={containerRef} className="relative h-[560px] w-full sm:h-[580px] lg:h-[640px]">
      <div
        className="pipeline-grid absolute inset-0 rounded-3xl border border-edge/60 bg-panel/30"
        aria-hidden="true"
      />

      <DataExtractionAnimation phase={phase} />

      <div ref={antennaRef} className="absolute left-0 top-1 z-10 h-[62%] w-[56%] -rotate-2">
        <AntennaBrowser
          telemetry={MOCK_ANTENNAS[sourceIndex]}
          phase={phase}
          highlighted={highlighted}
        />
      </div>

      <div ref={dashRef} className="absolute bottom-0 right-0 z-20 h-[88%] w-[66%] rotate-1">
        <DashboardBrowser telemetry={MOCK_ANTENNAS[dashIndex]} phase={phase} />
      </div>

      {EXTRACTION_FIELDS.map((_, index) => (
        <span
          key={index}
          ref={(element) => {
            dotRefs.current[index] = element
          }}
          className="absolute left-0 top-0 z-30 h-[7px] w-[7px] rounded-full bg-accent opacity-0 shadow-[0_0_10px_rgba(34,211,238,0.95)] will-change-transform"
          aria-hidden="true"
        />
      ))}
    </div>
  )
}
