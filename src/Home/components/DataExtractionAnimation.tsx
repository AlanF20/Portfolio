import type { PipelinePhase } from '../data/antennas'

interface DataExtractionAnimationProps {
  phase: PipelinePhase
}

export function DataExtractionAnimation({ phase }: DataExtractionAnimationProps) {
  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      <svg
        className="h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="pipe-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        <path
          d="M 55 42 C 58 30, 53 24, 47 21"
          fill="none"
          stroke="url(#pipe-grad)"
          strokeWidth="0.6"
          strokeDasharray="2 1.6"
          strokeLinecap="round"
          className="animate-flow"
        />
      </svg>

      <span
        className="absolute rounded-full bg-accent shadow-[0_0_8px_rgba(34,211,238,0.8)]"
        style={{ left: '54.2%', top: '40.5%', width: 7, height: 7 }}
      />
      <span
        className="absolute rounded-full bg-accent shadow-[0_0_10px_rgba(34,211,238,0.9)] animate-blink"
        style={{ left: '46.4%', top: '19.2%', width: 8, height: 8 }}
      />

      {phase === 'processing' && (
        <span className="absolute left-[47%] top-[28%] inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 rounded-full border border-accent/40 bg-ink/90 px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest text-accent shadow-lg shadow-black/40">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-blink" />
          processing
        </span>
      )}
    </div>
  )
}
