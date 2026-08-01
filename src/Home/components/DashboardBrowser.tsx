import type { AntennaTelemetry, PipelinePhase } from '../data/antennas'
import { useTweenedNumber } from '../hooks/useTweenedNumber'
import {
  formatDbm,
  formatMbps,
  formatMs,
  formatPercent,
  formatSnr,
  latencyTone,
  lossTone,
  snrTone,
  sparklineSamples,
  TONE_STYLES,
  type ParamTone,
} from '../utils'

interface MetricCardProps {
  label: string
  value: number
  unit: string
  tone?: string
}

function MetricCard({ label, value, unit, tone = 'text-slate-100' }: MetricCardProps) {
  return (
    <div className="rounded-lg border border-edge/70 bg-panel-2/80 px-2.5 py-2">
      <p className="text-[9px] font-semibold uppercase tracking-wider text-slate-500">{label}</p>
      <p className={`mt-0.5 font-mono text-base font-bold tabular-nums ${tone}`}>
        {Math.round(value)}
        <span className="ml-1 text-[10px] font-medium text-slate-500">{unit}</span>
      </p>
    </div>
  )
}

interface DashboardBrowserProps {
  telemetry: AntennaTelemetry
  phase: PipelinePhase
}

export function DashboardBrowser({ telemetry, phase }: DashboardBrowserProps) {
  const download = useTweenedNumber(telemetry.download)
  const upload = useTweenedNumber(telemetry.upload)
  const signal = useTweenedNumber(telemetry.signal)
  const throughput = useTweenedNumber(telemetry.throughput)

  const samples = sparklineSamples(telemetry)
  const maxSample = Math.max(...samples)

  const rows: { label: string; value: string; tone: ParamTone }[] = [
    { label: 'SNR', value: formatSnr(telemetry.snr), tone: snrTone(telemetry.snr) },
    { label: 'Noise', value: formatDbm(telemetry.noise), tone: 'good' },
    { label: 'Burst', value: formatMbps(telemetry.burst), tone: 'info' },
    { label: 'Latency', value: formatMs(telemetry.latency), tone: latencyTone(telemetry.latency) },
    { label: 'Loss', value: formatPercent(telemetry.packetLoss), tone: lossTone(telemetry.packetLoss) },
  ]

  return (
    <section
      aria-label="Aplicación: Network Dashboard"
      className={`flex h-full flex-col overflow-hidden rounded-2xl border bg-panel shadow-2xl shadow-black/60 transition-[box-shadow,border-color] duration-500 ${
        phase === 'updating'
          ? 'border-accent/50 shadow-[0_0_40px_rgba(34,211,238,0.25)]'
          : 'border-accent/20'
      }`}
    >
      <div className="flex items-center gap-2 border-b border-edge/60 bg-panel-2 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" aria-hidden="true" />
        <span className="ml-2 flex-1 truncate font-mono text-[10px] text-slate-500">
          app.flores.dev/dashboard
        </span>
        <span
          className="inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-wide text-mint"
          aria-hidden="true"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-mint animate-blink" />
          live
        </span>
      </div>

      <div className="relative flex flex-1 flex-col gap-2 overflow-hidden p-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-mono text-xs font-bold text-slate-100">{telemetry.name}</p>
            <p className="font-mono text-[9px] text-slate-500">{telemetry.model}</p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-mint/10 px-2 py-1 font-mono text-[9px] font-semibold text-mint ring-1 ring-mint/20">
            <span className="h-1.5 w-1.5 rounded-full bg-mint animate-blink" aria-hidden="true" />
            ONLINE
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-lg border border-edge/70 bg-panel-2/80 px-2.5 py-2">
            <p className="text-[9px] font-semibold uppercase tracking-wider text-slate-500">Signal</p>
            <p className="mt-0.5 font-mono text-base font-bold tabular-nums text-cyan-300">
              {Math.round(signal)}
              <span className="ml-1 text-[10px] font-medium text-slate-500">dBm</span>
            </p>
          </div>
          <div className="rounded-lg border border-edge/70 bg-panel-2/80 px-2.5 py-2">
            <p className="text-[9px] font-semibold uppercase tracking-wider text-slate-500">Frequency</p>
            <p className="mt-0.5 font-mono text-base font-bold tabular-nums text-cyan-300">
              {telemetry.frequency.toFixed(1)}
              <span className="ml-1 text-[10px] font-medium text-slate-500">GHz</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <MetricCard label="Download" value={download} unit="Mbps" tone="text-emerald-300" />
          <MetricCard label="Upload" value={upload} unit="Mbps" tone="text-accent" />
        </div>

        <div className="rounded-lg border border-edge/70 bg-panel-2/80 px-2.5 py-2">
          <div className="flex items-center justify-between">
            <p className="text-[9px] font-semibold uppercase tracking-wider text-slate-500">Throughput</p>
            <p className="font-mono text-[11px] font-bold tabular-nums text-slate-100">
              {Math.round(throughput)} <span className="text-[9px] font-medium text-slate-500">Mbps</span>
            </p>
          </div>
          <div className="mt-1.5 flex h-8 items-end gap-[3px]">
            {samples.map((value, index) => (
              <span
                key={index}
                className="flex-1 rounded-sm bg-gradient-to-t from-accent-deep to-accent transition-all duration-500"
                style={{ height: `${Math.max(12, (value / maxSample) * 100)}%` }}
                aria-hidden="true"
              />
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-edge/70 bg-panel-2/80 px-2.5 py-2">
          <p className="mb-1.5 text-[9px] font-semibold uppercase tracking-wider text-slate-500">
            Network parameters
          </p>
          <ul className="space-y-1">
            {rows.map((row) => (
              <li
                key={row.label}
                className="flex items-center justify-between gap-2 font-mono text-[10px]"
              >
                <span className="text-slate-500">{row.label}</span>
                <span className="flex items-center gap-1.5">
                  <span className="tabular-nums text-slate-200">{row.value}</span>
                  <span
                    className={`rounded-full px-1.5 py-0.5 text-[8px] font-semibold uppercase ring-1 ${TONE_STYLES[row.tone]}`}
                  >
                    {row.tone}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
