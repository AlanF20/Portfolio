export interface ExperienceItem {
  role: string
  company: string
  period: string
  summary: string
  highlights: string[]
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Frontend Lead & Systems Engineer',
    company: 'Terameg Networks',
    period: 'Septiembre 2025 — Presente',
    summary:
      'Lidero la arquitectura UI/UX del producto principal y estandarizo los procesos de CI/CD de la empresa.',
    highlights: [
      'Landing page corporativa para Kuentix con pasarela de pagos Openpay integrada de forma nativa.',
      'Infraestructura backend de suscripciones recurrentes en NestJS con autenticación Passport.js.',
      'Panel administrativo para gestión de empresas, planes y ligas de pago personalizadas.',
      'Automatización de CI/CD con GitHub Actions y contenedorización con Docker en +7 proyectos.',
      'Sistema interno de facturación electrónica que eliminó costos de proveedores externos.',
      'Guías interactivas con React Joyride que redujeron la curva de aprendizaje de usuarios.',
    ],
  },
  {
    role: 'Desarrollador Full Stack',
    company: 'Union — Proyecto',
    period: 'Junio 2025 — Junio 2026',
    summary:
      'Plataforma para una academia con más de 120 usuarios activos mensuales y alta exigencia de estabilidad.',
    highlights: [
      'Arquitectura robusta con BullMQ para cron jobs y colas de renovaciones automatizadas.',
      'Garantía de estabilidad bajo carga constante para más de 120 usuarios activos al mes.',
    ],
  },
  {
    role: 'Desarrollador de Sistemas',
    company: 'Ultralink Plus',
    period: '2022 — 2025',
    summary:
      'Automatización de procesos operativos y extracción de datos a gran escala.',
    highlights: [
      'Extracción automatizada con Playwright: de 15 minutos a segundos por cliente.',
      'Los técnicos pasaron a procesar hasta 30 clientes en el tiempo que tomaba atender a uno.',
      'Eliminación de cuellos de botella operativos mediante ingeniería de precisión.',
    ],
  },
]

export interface SkillGroup {
  category: string
  skills: string[]
}

export const SKILLS: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'Nuxt.js', 'TypeScript', 'Tailwind CSS', 'Shadcn UI', 'TanStack Query', 'GSAP'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'NestJS', 'Prisma ORM', 'PostgreSQL', 'Passport.js', 'BullMQ', 'Openpay'],
  },
  {
    category: 'Cloud & DevOps',
    skills: ['Docker', 'GitHub Actions', 'AWS EC2 · S3 · RDS', 'Linux (Ubuntu)', 'Nginx', 'PM2'],
  },
  {
    category: 'Herramientas & Monitoreo',
    skills: ['Playwright', 'Git', 'Splunk', 'New Relic'],
  },
  {
    category: 'Inteligencia Artificial',
    skills: ['Claude Code', 'Gemini Pro'],
  },
]

export interface ProjectItem {
  title: string
  description: string
  tags: string[]
}

export const PROJECTS: ProjectItem[] = [
  {
    title: 'Telemetry Data Pipeline',
    description:
      'Sistema de adquisición de telemetría: extrae datos de la interfaz web de antenas, los procesa y almacena, y los despliega en un dashboard propio. Simulado aquí con datos en vivo.',
    tags: ['React', 'TypeScript', 'GSAP', 'ETL', 'Telemetría'],
  },
  {
    title: 'Kuentix — Landing & Payments',
    description:
      'Landing page corporativa para la plataforma SaaS de facturación en línea, con checkout seguro integrado con la pasarela de pagos Openpay.',
    tags: ['React', 'Tailwind CSS', 'Openpay', 'SaaS'],
  },
  {
    title: 'Subscription Backend',
    description:
      'Backend de suscripciones recurrentes para el producto principal, con autenticación Passport.js y arquitectura modular por capas.',
    tags: ['NestJS', 'Passport.js', 'Prisma', 'PostgreSQL'],
  },
  {
    title: 'Admin Panel de Planes',
    description:
      'Aplicación administrativa para controlar timbres de facturación, generar ligas de pago personalizadas y gestionar planes y empresas dinámicamente.',
    tags: ['React', 'TanStack Query', 'Shadcn UI'],
  },
  {
    title: 'Sistema de Facturación Interno',
    description:
      'Sustituyó proveedores externos de facturación electrónica, eliminando costos de terceros y centralizando la gestión financiera.',
    tags: ['Node.js', 'Facturación', 'Automatización'],
  },
  {
    title: 'Extracción Automatizada',
    description:
      'Automatización de la extracción de datos con Playwright: redujo el tiempo de búsqueda de 15 minutos a segundos por cliente.',
    tags: ['Playwright', 'Node.js', 'Automation'],
  },
]

export const PROFILE_HIGHLIGHTS: string[] = [
  'Más de 4 años construyendo aplicaciones web escalables y de alto rendimiento.',
  'Frontend Lead: arquitecturas UI/UX accesibles y estandarización de CI/CD.',
  'Experto en el ecosistema JavaScript: React, Next.js y NestJS.',
  'Manejo avanzado de nube y contenedores: AWS, Linux y Docker.',
  'Enfoque en optimización: reducciones drásticas de tiempos y costos operativos.',
]

export const CONTACT_EMAIL = 'alj20915@gmail.com'
export const LOCATION = 'Nuevo Laredo, México'
