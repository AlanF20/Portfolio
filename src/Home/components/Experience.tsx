import { EXPERIENCE } from '../data/content'
import { Section } from './Section'

export function Experience() {
  return (
    <Section id="experience" eyebrow="experience" title="Experiencia laboral">
      <ol className="relative space-y-12 border-l border-edge pl-8">
        {EXPERIENCE.map((job) => (
          <li key={`${job.company}-${job.period}`} className="relative">
            <span
              className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-ink"
              aria-hidden="true"
            />
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="text-lg font-semibold text-slate-100">{job.role}</h3>
              <span className="text-sm font-medium text-accent">{job.company}</span>
            </div>
            <p className="mt-0.5 font-mono text-xs text-slate-500">{job.period}</p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400">{job.summary}</p>
            <ul className="mt-4 grid max-w-3xl gap-x-8 gap-y-2 sm:grid-cols-2">
              {job.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="mt-1.5 text-accent" aria-hidden="true">
                    ▸
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}
