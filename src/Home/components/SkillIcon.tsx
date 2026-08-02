import {
  siClaudecode,
  siDocker,
  siGit,
  siGithubactions,
  siGooglegemini,
  siGsap,
  siNestjs,
  siNewrelic,
  siNextdotjs,
  siNginx,
  siNodedotjs,
  siNuxt,
  siPassport,
  siPm2,
  siPostgresql,
  siPrisma,
  siReact,
  siReactquery,
  siShadcnui,
  siSplunk,
  siTailwindcss,
  siTypescript,
  siUbuntu,
} from 'simple-icons'
import type { SimpleIcon } from 'simple-icons'

const ICONS: Record<string, SimpleIcon> = {
  claudecode: siClaudecode,
  docker: siDocker,
  git: siGit,
  githubactions: siGithubactions,
  googlegemini: siGooglegemini,
  gsap: siGsap,
  nestjs: siNestjs,
  newrelic: siNewrelic,
  nextdotjs: siNextdotjs,
  nginx: siNginx,
  nodedotjs: siNodedotjs,
  nuxt: siNuxt,
  passport: siPassport,
  pm2: siPm2,
  postgresql: siPostgresql,
  prisma: siPrisma,
  react: siReact,
  reactquery: siReactquery,
  shadcnui: siShadcnui,
  splunk: siSplunk,
  tailwindcss: siTailwindcss,
  typescript: siTypescript,
  ubuntu: siUbuntu,
}

interface SkillIconProps {
  icon: string
  className?: string
}

export function SkillIcon({ icon, className }: SkillIconProps) {
  const simpleIcon = ICONS[icon]
  if (!simpleIcon) return null
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d={simpleIcon.path} fill="currentColor" />
    </svg>
  )
}
