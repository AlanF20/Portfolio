import { CONTACT_EMAIL, LOCATION } from '../data/content'
import { Section } from './Section'

export function Contact() {
  return (
    <Section id="contact" eyebrow="contact" title="¿Construimos algo juntos?">
      <div className="flex flex-col items-start gap-8 rounded-3xl border border-edge/70 bg-panel/60 p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h3 className="text-2xl font-bold text-slate-50">Hablemos de tu próximo proyecto</h3>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-400">
            Estoy disponible para proyectos freelance, roles full stack o posiciones de liderazgo
            frontend. Escríbeme y responderé a la brevedad.
          </p>
          <p className="mt-4 flex items-center gap-2 font-mono text-sm text-slate-500">
            <span className="text-accent" aria-hidden="true">
              ▸
            </span>
            {LOCATION}
          </p>
        </div>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-ink shadow-[0_0_32px_rgba(34,211,238,0.35)] transition-transform hover:-translate-y-0.5"
        >
          {CONTACT_EMAIL}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M7 17L17 7M9 7h8v8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </Section>
  )
}
