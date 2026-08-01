export function Footer() {
  return (
    <footer className="border-t border-edge/70 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row sm:px-8">
        <p className="font-mono text-xs text-slate-500">
          © {new Date().getFullYear()} Alan I. Flores
        </p>
        <p className="font-mono text-xs text-slate-600">
          Diseñado y construido con React · TypeScript · Tailwind CSS · GSAP
        </p>
      </div>
    </footer>
  )
}
