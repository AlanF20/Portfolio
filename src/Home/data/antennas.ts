export interface AntennaTelemetry {
  id: string
  name: string
  model: string
  status: 'online' | 'offline'
  frequency: number
  channel: number
  signal: number
  noise: number
  snr: number
  txPower: number
  rxPower: number
  download: number
  upload: number
  throughput: number
  burst: number
  latency: number
  packetLoss: number
  ip: string
  temperature: number
  uptime: string
}

export const MOCK_ANTENNAS: AntennaTelemetry[] = [
  {
    id: 'ANT-042',
    name: 'ANT-042',
    model: 'XYZ-9000',
    status: 'online',
    frequency: 5.8,
    channel: 149,
    signal: -62,
    noise: -91,
    snr: 29,
    txPower: 21,
    rxPower: -56,
    download: 184,
    upload: 47,
    throughput: 231,
    burst: 312,
    latency: 11,
    packetLoss: 0.2,
    ip: '192.168.1.42',
    temperature: 43,
    uptime: '14d 07h',
  },
  {
    id: 'ANT-017',
    name: 'ANT-017',
    model: 'AX-4800',
    status: 'online',
    frequency: 5.4,
    channel: 108,
    signal: -68,
    noise: -95,
    snr: 27,
    txPower: 18,
    rxPower: -63,
    download: 142,
    upload: 39,
    throughput: 181,
    burst: 244,
    latency: 14,
    packetLoss: 0.6,
    ip: '192.168.1.17',
    temperature: 47,
    uptime: '6d 21h',
  },
  {
    id: 'ANT-091',
    name: 'ANT-091',
    model: 'GX-6200',
    status: 'online',
    frequency: 6.1,
    channel: 165,
    signal: -57,
    noise: -88,
    snr: 31,
    txPower: 24,
    rxPower: -51,
    download: 221,
    upload: 61,
    throughput: 282,
    burst: 366,
    latency: 9,
    packetLoss: 0.1,
    ip: '192.168.1.91',
    temperature: 41,
    uptime: '28d 03h',
  },
  {
    id: 'ANT-025',
    name: 'ANT-025',
    model: 'XB-5200',
    status: 'online',
    frequency: 5.2,
    channel: 44,
    signal: -74,
    noise: -98,
    snr: 24,
    txPower: 16,
    rxPower: -69,
    download: 98,
    upload: 28,
    throughput: 126,
    burst: 175,
    latency: 19,
    packetLoss: 1.2,
    ip: '192.168.1.25',
    temperature: 51,
    uptime: '2d 11h',
  },
  {
    id: 'ANT-134',
    name: 'ANT-134',
    model: 'VX-7000',
    status: 'online',
    frequency: 5.9,
    channel: 153,
    signal: -60,
    noise: -90,
    snr: 30,
    txPower: 22,
    rxPower: -54,
    download: 198,
    upload: 54,
    throughput: 252,
    burst: 330,
    latency: 10,
    packetLoss: 0.2,
    ip: '192.168.1.134',
    temperature: 44,
    uptime: '9d 15h',
  },
]

export type PipelinePhase = 'idle' | 'extracting' | 'processing' | 'updating'

export interface PipelineState {
  sourceIndex: number
  dashIndex: number
  phase: PipelinePhase
  highlighted: TelemetryField | null
}

export type TelemetryField = keyof Pick<
  AntennaTelemetry,
  'frequency' | 'signal' | 'noise' | 'snr' | 'download' | 'upload' | 'throughput' | 'burst' | 'latency' | 'packetLoss'
>

export const EXTRACTION_FIELDS: TelemetryField[] = [
  'frequency',
  'signal',
  'download',
  'throughput',
  'latency',
  'noise',
]
