import { useState } from 'react'

const ROW_A = [
  'EUR / USD',
  'BTC / USD',
  'XAU / USD',
  'NASDAQ 100',
  'GBP / JPY',
  'ETH / USD',
  'USD / JPY',
  'S&P 500',
  'SOL / USD',
  'DXY',
]

const ROW_B = [
  'MARKET STRUCTURE',
  'LIQUIDITY MODELS',
  'SYSTEMATIC EXECUTION',
  'RISK MANAGEMENT',
  'FLOW ANALYTICS',
  'ORDER FLOW DATA',
  'ALPHA GENERATION',
  'PROBABILITY EDGE',
  'FRACTAL MODELS',
  'SIGNAL PROCESSING',
]

function Row({ items, reverse = false, paused }) {
  return (
    <div className="relative flex w-full items-center overflow-hidden">
      <div
        className={`marquee-track flex items-center whitespace-nowrap ${
          reverse ? 'marquee-reverse' : ''
        } ${paused ? 'paused' : ''}`}
      >
        {[...items, ...items].map((t, i) => (
          <span key={`${t}-${i}`} className="flex shrink-0 items-center">
            <span className="mx-6 sm:mx-10 lg:mx-14">{t}</span>
            <span
              aria-hidden
              className="inline-block h-3 w-3 shrink-0 rotate-45 border border-current/60"
            />
          </span>
        ))}
      </div>
    </div>
  )
}

/**
 * Two full-size display-type rows: top row crawls left, second crawls right.
 * Monochrome to match theme; softened with edge fades.
 */
export default function TickerStrip() {
  const [paused, setPaused] = useState(false)

  return (
    <section
      aria-label="Markets & principles"
      className="relative isolate overflow-hidden bg-neutral-950 text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Edge fades */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-neutral-950 to-transparent sm:w-32"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-neutral-950 to-transparent sm:w-32"
        aria-hidden
      />

      {/* Label rail */}
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-neutral-400 sm:px-10 sm:py-3 sm:text-[0.65rem] sm:tracking-[0.3em]">
        <span className="flex items-center gap-2">
          {/* <span
            aria-hidden
            className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 blink-pulse"
          /> */}
          <span>Live coverage</span>
        </span>
        <span className="hidden sm:block">Global · 24 / 7</span>
        <span>Ticker 01</span>
      </div>

      {/* Massive row — primary */}
      <div className="relative py-5 sm:py-10 lg:py-12">
        <div className="text-[clamp(2.2rem,9vw,7rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-white">
          <Row items={ROW_A} paused={paused} />
        </div>
      </div>

      {/* Thin divider */}
      <div className="border-t border-white/10" aria-hidden />

      {/* Second row — outline type, reverse direction */}
      <div className="relative py-5 sm:py-10 lg:py-12">
        <div
          className="text-[clamp(1.6rem,6.5vw,5rem)] font-semibold leading-[0.95] tracking-[-0.02em]"
          style={{
            WebkitTextStroke: '1px rgba(255,255,255,0.85)',
            color: 'transparent',
          }}
        >
          <Row items={ROW_B} reverse paused={paused} />
        </div>
      </div>

      {/* Label rail (bottom) */}
      <div className="flex items-center justify-between border-t border-white/10 px-4 py-2.5 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-neutral-400 sm:px-10 sm:py-3 sm:text-[0.65rem] sm:tracking-[0.3em]">
        <span className="truncate">FX · Crypto · Indices · Metals</span>
        <span className="hidden sm:block">Hover to pause</span>
        <span>Feed · Stable</span>
      </div>
    </section>
  )
}
