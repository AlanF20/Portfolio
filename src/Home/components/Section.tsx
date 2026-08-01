import type { ReactNode } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

interface SectionProps {
  id: string
  eyebrow: string
  title: string
  children: ReactNode
}

export function Section({ id, eyebrow, title, children }: SectionProps) {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section id={id} ref={ref} className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="font-mono text-sm text-accent">// {eyebrow}</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">{title}</h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}
