import { PROFILE_HIGHLIGHTS } from '../data/content'
import { Section } from './Section'

export function About() {
  return (
    <Section id="about" eyebrow="about" title="Sobre mí">
      <div className="grid gap-10 lg:grid-cols-2">
        <p className="max-w-xl text-lg leading-relaxed text-slate-400">
          Soy{' '}
          <span className="font-semibold text-slate-100">Ingeniero de Sistemas</span> y{' '}
          <span className="font-semibold text-slate-100">Desarrollador Full Stack</span> con más de
          4 años de experiencia. Actualmente me desempeño como Frontend Lead, diseñando
          arquitecturas UI/UX accesibles y liderando la estandarización de procesos de CI/CD en
          <span className="text-slate-200"> Terameg Networks</span>.
        </p>
        <ul className="space-y-3">
          {PROFILE_HIGHLIGHTS.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
