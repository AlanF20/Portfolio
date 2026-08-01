import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export function useTweenedNumber(target: number, duration = 0.9): number {
  const [display, setDisplay] = useState(target)
  const fromRef = useRef(target)

  useEffect(() => {
    const from = fromRef.current
    if (from === target) {
      setDisplay(target)
      return
    }
    fromRef.current = target
    const proxy = { value: from }
    const tween = gsap.to(proxy, {
      value: target,
      duration,
      ease: 'power2.out',
      onUpdate: () => setDisplay(proxy.value),
    })
    return () => {
      tween.kill()
    }
  }, [target, duration])

  return display
}
