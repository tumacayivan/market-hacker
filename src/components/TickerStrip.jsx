import { useState } from 'react'

const TOKENS = [
  'EUR / USD',
  'BTC / USDT',
  'XAU / USD',
  'NASDAQ 100',
  'GBP / JPY',
  'ETH / USDT',
  'USDJPY',
  'S&P 500',
  'SOL / USDT',
  'DXY',
  'WTI',
  'DAX',
  'AUD / USD',
  'HSI',
  'NZD / USD',
]

/**
 * Single-line, monochrome marquee that sits between hero and the pinned gallery.
 * Duplicates the token list so the CSS keyframe can translate -50% seamlessly.
 */
export default function TickerStrip() {
  const [paused, setPaused] = useState(false)

  return (
    <section
      aria-label="Markets covered"
      className="relative isolate border-y border-neutral-200/80 bg-neutral-950 text-white"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-neutral-950 to-transparent" aria-hidden />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-neutral-950 to-transparent" aria-hidden />

      <div
        className="relative flex items-center gap-2 overflow-hidden py-4"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className={`marquee-track flex items-center gap-10 pl-10 text-[0.72rem] font-medium uppercase tracking-[0.32em] text-neutral-300 ${
            paused ? 'paused' : ''
          }`}
        >
          {[...TOKENS, ...TOKENS].map((t, i) => (
            <span key={`${t}-${i}`} className="flex items-center gap-10 whitespace-nowrap">
              <span className="flex items-center gap-3">
                <span
                  className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 blink-pulse"
                  aria-hidden
                />
                <span>{t}</span>
              </span>
              <span className="text-neutral-600" aria-hidden>
                ·
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
