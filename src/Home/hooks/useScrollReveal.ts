import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const tween = gsap.fromTo(
      element,
      { opacity: 0, y: 28 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' },
    )
    tween.pause()

    const trigger = ScrollTrigger.create({
      trigger: element,
      start: 'top 86%',
      once: true,
      onEnter: () => tween.play(),
    })

    return () => {
      trigger.kill()
      tween.kill()
    }
  }, [])

  return ref
}
