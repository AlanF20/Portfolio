import { ArrowUp } from 'lucide-react'

import type { AntennaTelemetry, PipelinePhase, TelemetryField } from '../data/antennas'
import {
  formatDbm,
  formatGhz,
  formatMbps,
  formatMs,
  formatSnr,
} from '../utils'

interface Row {
  key: string
  field?: TelemetryField
  label: string
  render: (antenna: AntennaTelemetry) => string
}

const ROWS: Row[] = [
  { key: 'frequency', field: 'frequency', label: 'Frequency', render: (a) => formatGhz(a.frequency) },
  { key: 'channel', label: 'Channel', render: (a) => String(a.channel) },
  { key: 'signal', field: 'signal', label: 'Signal', render: (a) => formatDbm(a.signal) },
  { key: 'noise', field: 'noise', label: 'Noise', render: (a) => formatDbm(a.noise) },
  { key: 'snr', field: 'snr', label: 'SNR', render: (a) => formatSnr(a.snr) },
  { key: 'download', field: 'download', label: 'Download', render: (a) => formatMbps(a.download) },
  { key: 'upload', field: 'upload', label: 'Upload', render: (a) => formatMbps(a.upload) },
  { key: 'throughput', field: 'throughput', label: 'Throughput', render: (a) => formatMbps(a.throughput) },
  { key: 'burst', field: 'burst', label: 'Burst', render: (a) => formatMbps(a.burst) },
  { key: 'latency', field: 'latency', label: 'Latency', render: (a) => formatMs(a.latency) },
]

interface AntennaBrowserProps {
  telemetry: AntennaTelemetry
  phase: PipelinePhase
  highlighted: TelemetryField | null
}

export function AntennaBrowser({ telemetry, phase, highlighted }: AntennaBrowserProps) {
  const isExtracting = phase === 'extracting'

  return (
    <section
      aria-label="Antena: interfaz web del dispositivo"
      className="flex h-full flex-col overflow-hidden rounded-lg border border-slate-600/50 bg-slate-950 text-slate-300 shadow-2xl shadow-black/50"
    >
      <div className="flex items-center gap-2 border-b border-slate-700/60 bg-slate-900 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-slate-600" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-600" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-600" aria-hidden="true" />
        <span className="ml-2 truncate font-mono text-[11px] text-slate-500">
          {telemetry.ip} · admin
        </span>
      </div>

      <div className="relative flex-1 overflow-hidden">
        {isExtracting && (
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-transparent via-accent/20 to-transparent animate-scan"
            aria-hidden="true"
          />
        )}

        <div className="flex items-center justify-between border-b border-slate-800 px-3 py-2">
          <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
            Antenna Management
          </h3>
          <span
            className={`inline-flex items-center gap-1.5 font-mono text-[10px] ${
              telemetry.status === 'online' ? 'text-emerald-400' : 'text-rose-400'
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                telemetry.status === 'online' ? 'bg-emerald-400 animate-blink' : 'bg-rose-400'
              }`}
              aria-hidden="true"
            />
            {telemetry.status.toUpperCase()}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-x-2 gap-y-0.5 px-3 py-2 font-mono text-[10px] text-slate-500">
          <p>
            <span className="text-slate-600">Antenna</span> {telemetry.name}
          </p>
          <p>
            <span className="text-slate-600">Model</span> {telemetry.model}
          </p>
        </div>

        <div className="px-3 pb-2">
          <p className="mb-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-500">
            Network information
          </p>
          <dl className="divide-y divide-slate-800/80 rounded-md border border-slate-800/80">
            {ROWS.map((row) => {
              const isActive = highlighted === row.field
              return (
                <div
                  key={row.key}
                  className={`relative flex items-center justify-between gap-2 px-2 py-[5px] font-mono text-[11px] transition-colors duration-200 ${
                    isActive
                      ? 'bg-accent/15 text-cyan-100'
                      : 'bg-transparent text-slate-300'
                  }`}
                >
                  <dt className="text-slate-500">{row.label}</dt>
                  <dd className="flex items-center gap-1.5 tabular-nums">
                    {isActive && (
                      <span className="inline-flex items-center gap-1 text-[9px] font-semibold uppercase tracking-wide text-accent">
                        <ArrowUp className="h-2.5 w-2.5" aria-hidden="true" />
                        extracting
                      </span>
                    )}
                    {row.render(telemetry)}
                  </dd>
                </div>
              )
            })}
          </dl>
        </div>
      </div>
    </section>
  )
}
