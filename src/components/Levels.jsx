import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import DiscordCta from './DiscordCta.jsx'

const LEVELS = [
  {
    n: '01',
    level: 'Level 1',
    role: 'Rookie',
    title: 'Learning the System',
    intro:
      'You are introduced to the architecture of the financial markets. You learn how price behaves, how liquidity moves, and how traders interact with the system. This is where curiosity turns into understanding.',
    items: [
      'How financial markets operate',
      'Market structure and price behavior',
      'Risk management principles',
      'Trading psychology and discipline',
      'Understanding volatility and liquidity',
      'Basic systematic trading concepts',
    ],
    tagline: 'The goal is to understand the system first.',
  },
  {
    n: '02',
    level: 'Level 2',
    role: 'Engineer',
    title: 'Building the Strategy',
    intro:
      'Once you understand the system, the next step is building tools and frameworks to interact with it. Engineers build systems, models, and strategies that can be tested, refined, and improved.',
    items: [
      'Strategy development frameworks',
      'Backtesting trading strategies',
      'Identifying market inefficiencies',
      'Data-driven trading analysis',
      'Multi-timeframe market structure',
      'Building rule-based trading systems',
    ],
    tagline: 'Engineers design the systems behind signals.',
  },
  {
    n: '03',
    level: 'Level 3',
    role: 'Hacker',
    title: 'Exploiting Market Inefficiencies',
    intro:
      'Trading evolves into system engineering. Hackers learn how to combine strategy, data, and technology to create quantitative trading systems capable of interacting with the market intelligently.',
    items: [
      'Quantitative trading strategies',
      'Algorithmic trading systems',
      'Data science for financial markets',
      'Machine learning trading models',
      'Strategy validation and optimization',
      'Portfolio and risk management systems',
    ],
    tagline: 'Hackers build systems designed to exploit the market.',
  },
]

/* Three distinct visual treatments to reinforce progression:
   1. Rookie  → white card
   2. Engineer → soft neutral card
   3. Hacker  → full dark card (the destination)
*/
const THEMES = [
  {
    card: 'bg-white border-neutral-200 text-neutral-950',
    kicker: 'text-neutral-400',
    role: 'text-neutral-950',
    rule: 'bg-neutral-950',
    muted: 'text-neutral-600',
    bullet: 'border-neutral-300 text-neutral-500',
    bulletHover: 'group-hover:border-neutral-950 group-hover:text-neutral-950',
    tagBar: 'border-neutral-200 text-neutral-600',
    hoverShadow:
      'hover:-translate-y-2 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)] hover:border-neutral-950',
  },
  {
    card: 'bg-[#f2f2f2] border-neutral-300 text-neutral-950',
    kicker: 'text-neutral-500',
    role: 'text-neutral-950',
    rule: 'bg-neutral-950',
    muted: 'text-neutral-700',
    bullet: 'border-neutral-400 text-neutral-600',
    bulletHover: 'group-hover:border-neutral-950 group-hover:text-neutral-950',
    tagBar: 'border-neutral-300 text-neutral-600',
    hoverShadow:
      'hover:-translate-y-2 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)] hover:border-neutral-950',
  },
  {
    card: 'bg-neutral-950 border-neutral-900 text-white',
    kicker: 'text-neutral-500',
    role: 'text-white',
    rule: 'bg-white',
    muted: 'text-neutral-300',
    bullet: 'border-white/30 text-neutral-400',
    bulletHover: 'group-hover:border-white group-hover:text-white',
    tagBar: 'border-white/15 text-neutral-400',
    hoverShadow:
      'hover:-translate-y-2 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)] hover:border-white/40',
  },
]

function ArrowIcon({ className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  )
}

export default function Levels() {
  const root = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.level-card', {
        opacity: 0,
        y: 36,
        filter: 'blur(8px)',
        duration: 0.95,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: root.current,
          start: 'top 78%',
          once: true,
        },
      })

      gsap.from('.level-header > *', {
        opacity: 0,
        y: 20,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.08,
        scrollTrigger: {
          trigger: root.current,
          start: 'top 85%',
          once: true,
        },
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="levels"
      ref={root}
      className="relative overflow-hidden bg-[#fafafa] px-4 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24 lg:px-10 lg:pb-32 lg:pt-32"
    >
      {/* Backdrop pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage:
            'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="level-header mb-10 flex flex-col gap-4 sm:mb-14 sm:gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-neutral-500">
              Pathway
            </p>
            <h2 className="mt-3 text-2xl font-semibold leading-[1.1] tracking-tight text-neutral-950 sm:text-4xl lg:text-5xl">
              Three levels of quantitative trading.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-neutral-600 sm:text-base">
            A deliberate progression — from understanding how markets move, to
            engineering strategies, to building systems that exploit
            inefficiencies at scale.
          </p>
        </div>

        {/* Level progress rail — visible on lg+ */}
        <div className="mb-10 hidden items-center gap-3 lg:flex">
          {LEVELS.map((lvl, i) => (
            <div key={lvl.n} className="flex flex-1 items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center border border-neutral-950 bg-white text-[0.65rem] font-semibold text-neutral-950">
                {lvl.n}
              </span>
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-neutral-700">
                {lvl.role}
              </span>
              {i < LEVELS.length - 1 && (
                <span className="ml-2 h-px flex-1 bg-gradient-to-r from-neutral-950/70 via-neutral-950/30 to-neutral-950/10" />
              )}
            </div>
          ))}
        </div>

        <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
          {LEVELS.map((lvl, i) => {
            const t = THEMES[i]
            return (
              <article
                key={lvl.n}
                className={`level-card group relative flex h-full flex-col border p-5 transition-all duration-500 sm:p-7 lg:p-8 ${t.card} ${t.hoverShadow}`}
              >
                {/* Top rail */}
                <span
                  aria-hidden
                  className={`absolute inset-x-0 top-0 h-px origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 ${t.rule}`}
                />
                <div
                  className={`flex items-center justify-between border-b pb-5 ${t.tagBar}`}
                >
                  <p
                    className={`text-[0.65rem] font-semibold uppercase tracking-[0.3em] ${t.kicker}`}
                  >
                    {lvl.level}
                  </p>
                  <p
                    className={`text-[0.65rem] font-semibold uppercase tracking-[0.3em] ${t.kicker}`}
                  >
                    {lvl.n} / 03
                  </p>
                </div>

                <div className="mt-6">
                  <h3
                    className={`text-3xl font-semibold leading-none tracking-[-0.03em] sm:text-4xl lg:text-5xl ${t.role}`}
                  >
                    {lvl.role}
                  </h3>
                  <p
                    className={`mt-3 text-base font-semibold leading-tight tracking-tight sm:text-lg ${t.role}`}
                  >
                    {lvl.title}
                  </p>
                  <p
                    className={`mt-4 text-sm leading-relaxed ${t.muted}`}
                  >
                    {lvl.intro}
                  </p>
                </div>

                <ul className="mt-6 space-y-2.5 sm:space-y-3">
                  {lvl.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-start gap-3 text-sm leading-snug"
                    >
                      <span
                        aria-hidden
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border transition-colors duration-300 ${t.bullet} ${t.bulletHover}`}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-3 w-3"
                        >
                          <path d="M5 12l4 4 10-10" />
                        </svg>
                      </span>
                      <span className={t.muted}>{it}</span>
                    </li>
                  ))}
                </ul>

                <p
                  className={`mt-auto pt-8 text-sm italic sm:pt-10 ${t.muted}`}
                >
                  {lvl.tagline}
                </p>
              </article>
            )
          })}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:mt-14 sm:flex-row sm:gap-6 sm:text-left">
          <DiscordCta variant="primary">Enter the pathway</DiscordCta>
          <p className="inline-flex items-center gap-2 text-sm text-neutral-600">
            Start anywhere — progression is self-paced.
            <ArrowIcon className="h-4 w-4 text-neutral-500" />
          </p>
        </div>
      </div>
    </section>
  )
}
