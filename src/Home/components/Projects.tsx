import { Terminal } from 'lucide-react'

import { PROJECTS } from '../data/content'
import { Section } from './Section'

export function Projects() {
  return (
    <Section id="projects" eyebrow="projects" title="Proyectos destacados">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col rounded-2xl border border-edge/70 bg-panel/60 p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_12px_40px_rgba(34,211,238,0.08)]"
          >
            <div
              className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent"
              aria-hidden="true"
            >
              <Terminal className="h-5 w-5" />
            </div>
            <h3 className="text-base font-semibold text-slate-100 transition-colors group-hover:text-accent">
              {project.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{project.description}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-md border border-edge bg-panel-2 px-2 py-1 font-mono text-[11px] text-slate-400"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
