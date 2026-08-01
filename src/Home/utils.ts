import type { AntennaTelemetry } from './data/antennas'

export function formatDbm(value: number): string {
  return `${value} dBm`
}

export function formatGhz(value: number): string {
  return `${value.toFixed(1)} GHz`
}

export function formatMbps(value: number): string {
  return `${value} Mbps`
}

export function formatSnr(value: number): string {
  return `${value} dB`
}

export function formatMs(value: number): string {
  return `${value} ms`
}

export function formatPercent(value: number): string {
  return `${value.toFixed(1)}%`
}

export function formatPower(value: number): string {
  return `${value} dBm`
}

export type ParamTone = 'good' | 'warn' | 'danger' | 'info'

export const TONE_STYLES: Record<ParamTone, string> = {
  good: 'bg-emerald-400/10 text-emerald-300 ring-emerald-400/20',
  warn: 'bg-amber-400/10 text-amber-300 ring-amber-400/20',
  danger: 'bg-rose-400/10 text-rose-300 ring-rose-400/20',
  info: 'bg-cyan-400/10 text-cyan-300 ring-cyan-400/20',
}

export function snrTone(snr: number): ParamTone {
  if (snr >= 28) return 'good'
  if (snr >= 24) return 'warn'
  return 'danger'
}

export function latencyTone(latency: number): ParamTone {
  if (latency <= 12) return 'good'
  if (latency <= 18) return 'warn'
  return 'danger'
}

export function lossTone(packetLoss: number): ParamTone {
  if (packetLoss <= 0.3) return 'good'
  if (packetLoss <= 1) return 'warn'
  return 'danger'
}

export function sparklineSamples(antenna: AntennaTelemetry, count = 14): number[] {
  let seed = 0
  for (const char of antenna.id) seed = (seed * 31 + char.charCodeAt(0)) >>> 0
  const rand = () => {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff
    return seed / 0x7fffffff
  }
  const base = antenna.throughput
  return Array.from({ length: count }, (_, i) => {
    const drift = (rand() - 0.5) * 0.3
    return Math.max(10, Math.round(base * (0.5 + drift + (i / count) * 0.18)))
  })
}
