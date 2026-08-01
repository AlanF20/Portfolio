export function Introduction() {
  return (
    <div className="flex flex-col items-start gap-7">
      <p className="inline-flex items-center gap-2 rounded-full border border-edge bg-panel px-3.5 py-1.5 font-mono text-xs text-accent">
        <span className="h-2 w-2 rounded-full bg-mint animate-blink" aria-hidden="true" />
        Full Stack Developer · Frontend Lead
      </p>

      <div>
        <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
          Alan I.
          <br />
          Flores
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
          Ingeniero de Sistemas con más de 4 años construyendo aplicaciones web
          escalables y de alto rendimiento. Actualmente lidero arquitecturas UI/UX
          accesibles, pipelines de telemetría y flujos CI/CD en{' '}
          <span className="text-slate-200">Terameg Networks</span>.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <a
          href="#contact"
          className="rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-ink shadow-[0_0_24px_rgba(34,211,238,0.35)] transition-transform hover:-translate-y-0.5"
        >
          Contáctame
        </a>
        <a
          href="#projects"
          className="rounded-lg border border-edge bg-panel px-5 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-accent/50 hover:text-accent"
        >
          Ver proyectos
        </a>
      </div>

      <dl className="grid w-full max-w-xl grid-cols-3 gap-4 border-t border-edge/70 pt-5 font-mono text-center">
        <div>
          <dt className="order-2 mt-1 text-[11px] uppercase tracking-wider text-slate-500">
            Años de exp.
          </dt>
          <dd className="order-1 text-xl font-bold text-accent">4+</dd>
        </div>
        <div>
          <dt className="order-2 mt-1 text-[11px] uppercase tracking-wider text-slate-500">
            Proyectos CI/CD
          </dt>
          <dd className="order-1 text-xl font-bold text-accent">7+</dd>
        </div>
        <div>
          <dt className="order-2 mt-1 text-[11px] uppercase tracking-wider text-slate-500">
            Usuarios / mes
          </dt>
          <dd className="order-1 text-xl font-bold text-accent">120+</dd>
        </div>
      </dl>
    </div>
  )
}
