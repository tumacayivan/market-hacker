import { useRef } from 'react'
import { useGsapReveal } from '../hooks/useGsapReveal'

const VOICES = [
  {
    quote:
      'The framework stripped every extra indicator off my chart. I trade half as often and make twice the returns — the discipline is the edge.',
    name: 'Mara K.',
    role: 'FX trader',
    location: 'London, UK',
    tag: 'FX',
  },
  {
    quote:
      'The live chart reads changed how I see liquidity. It is one thing to read about order blocks, another to watch someone call them in real time.',
    name: 'Diego R.',
    role: 'Crypto swing trader',
    location: 'Buenos Aires, AR',
    tag: 'CRYPTO',
  },
  {
    quote:
      'Joined a year ago with a busted account. The process, the journaling, and the community accountability rebuilt it. Nothing flashy — just the work.',
    name: 'Ivy T.',
    role: 'Equities / Indices',
    location: 'Singapore',
    tag: 'INDICES',
  },
  {
    quote:
      'What surprised me most is how quiet it is. No hype. No calls. Just sharp reads, shared risk templates, and traders who actually answer when you ask.',
    name: 'Samir A.',
    role: 'Part-time systems trader',
    location: 'Dubai, UAE',
    tag: 'FX',
  },
  {
    quote:
      'Ivan\u2019s risk-first lens is a rare thing online. The sizing template alone protected my account through two volatile months this year.',
    name: 'Nina F.',
    role: 'Gold + BTC',
    location: 'Lisbon, PT',
    tag: 'METALS',
  },
  {
    quote:
      'Finally a community that treats trading like a craft. The weekly debrief is the single most valuable hour of my week.',
    name: 'Oliver J.',
    role: 'Indices scalper',
    location: 'Melbourne, AU',
    tag: 'INDICES',
  },
]

function QuoteMark() {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden
      className="h-7 w-7 text-neutral-950"
    >
      <path
        d="M11.5 9C7.4 10.8 5 14.4 5 18.8V24h7v-7.2h-3.5c0-2.6 1.1-4.5 3.5-5.4L11.5 9zM24.5 9C20.4 10.8 18 14.4 18 18.8V24h7v-7.2h-3.5c0-2.6 1.1-4.5 3.5-5.4L24.5 9z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Testimonials() {
  const rootRef = useRef(null)
  useGsapReveal(rootRef, [])

  return (
    <section
      id="voices"
      className="relative overflow-hidden bg-[#fafafa] px-5 py-24 sm:px-10 sm:py-32"
    >
      <div ref={rootRef} className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-6 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p
              data-reveal
              className="text-xs font-medium uppercase tracking-[0.35em] text-neutral-500"
            >
              Voices
            </p>
            <h2
              data-reveal
              className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-4xl lg:text-5xl"
            >
              From the network.
            </h2>
            <p
              data-reveal
              className="mt-5 max-w-xl text-sm leading-relaxed text-neutral-600 sm:text-base"
            >
              Active members from five continents. Different markets, same
              discipline — here is what the inside sounds like.
            </p>
          </div>

          <div
            data-reveal
            className="flex items-center gap-6 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-neutral-500"
          >
            <div className="flex -space-x-2">
              {['AT', 'DR', 'IT', 'MK', 'NF'].map((ini, i) => (
                <span
                  key={ini}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-950 bg-white text-[0.65rem] font-bold text-neutral-950"
                  style={{ zIndex: 5 - i }}
                >
                  {ini}
                </span>
              ))}
            </div>
            <span className="hidden sm:block">+1,200 active members</span>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VOICES.map((v) => (
            <article
              key={v.name}
              data-reveal
              className="group relative flex h-full flex-col justify-between overflow-hidden border border-neutral-200 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-neutral-950 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)] sm:p-7"
            >
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-neutral-950 transition-transform duration-500 group-hover:scale-x-100"
              />
              <div className="flex items-start justify-between gap-4">
                <QuoteMark />
                <span className="border border-neutral-300 bg-[#fafafa] px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.25em] text-neutral-600">
                  {v.tag}
                </span>
              </div>
              <p className="mt-5 text-[0.95rem] leading-relaxed text-neutral-800">
                &ldquo;{v.quote}&rdquo;
              </p>

              <div className="mt-8 flex items-center justify-between border-t border-neutral-200 pt-5">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-950 text-[0.65rem] font-bold text-neutral-950"
                  >
                    {v.name
                      .split(' ')
                      .map((w) => w[0])
                      .join('')
                      .slice(0, 2)}
                  </span>
                  <div className="leading-tight">
                    <p className="text-sm font-semibold text-neutral-950">
                      {v.name}
                    </p>
                    <p className="text-xs text-neutral-500">{v.role}</p>
                  </div>
                </div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-neutral-400">
                  {v.location}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
