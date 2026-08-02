import { SKILLS } from '../data/content'
import { Section } from './Section'
import { SkillIcon } from './SkillIcon'

export function Skills() {
  return (
    <Section id="skills" eyebrow="skills" title="Habilidades técnicas">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((group) => (
          <div
            key={group.category}
            className="rounded-2xl border border-edge/70 bg-panel/60 p-5 transition-colors hover:border-accent/40"
          >
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
              {group.category}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-edge bg-panel-2 px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-accent/40 hover:text-accent"
                >
                  {skill.icon && <SkillIcon icon={skill.icon} className="h-3.5 w-3.5 shrink-0" />}
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
