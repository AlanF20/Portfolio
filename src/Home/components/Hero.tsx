import { DataPipelineAnimation } from './DataPipelineAnimation'
import { Introduction } from './Introduction'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-36">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        <div className="absolute -left-40 top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -right-20 top-64 h-80 w-80 rounded-full bg-accent-deep/20 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.05fr] lg:gap-10">
        <Introduction />
        <div>
          <DataPipelineAnimation />
          <p className="mt-10 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-slate-600">
            extract <span className="text-accent/70">→</span> process
            <span className="text-accent/70">→</span> store
            <span className="text-accent/70">→</span> display
          </p>
        </div>
      </div>
    </section>
  )
}
