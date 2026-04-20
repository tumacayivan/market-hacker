import { useRef } from 'react'
import { useGsapReveal } from '../hooks/useGsapReveal'
import DiscordCta from './DiscordCta.jsx'

// Inline SVG icons — monochrome, 24x24, keeps bundle small and on-theme
const StructureIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-6 w-6">
    <path d="M3 20h18" />
    <path d="M6 20V9l4-3 4 5 4-4v13" />
  </svg>
)

const AiIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-6 w-6">
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M9 9h6v6H9z" />
    <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
  </svg>
)

const TimeframeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-6 w-6">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
)

const ExecutionIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-6 w-6">
    <path d="M3 12h4l3-8 4 16 3-8h4" />
  </svg>
)

const RiskIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-6 w-6">
    <path d="M12 3l8 4v6c0 5-3.5 7-8 8-4.5-1-8-3-8-8V7l8-4z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
)

const NetworkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-6 w-6">
    <circle cx="5" cy="6" r="2" />
    <circle cx="19" cy="6" r="2" />
    <circle cx="5" cy="18" r="2" />
    <circle cx="19" cy="18" r="2" />
    <circle cx="12" cy="12" r="2.5" />
    <path d="M7 6l3.2 4M17 6l-3.2 4M7 18l3.2-4M17 18l-3.2-4" />
  </svg>
)

const ITEMS = [
  {
    Icon: StructureIcon,
    title: 'Smart Money Concepts',
    body: 'Follow institutional footprints with clarity, not hype — order blocks, FVGs, break of structure, and liquidity sweeps.',
  },
  {
    Icon: AiIcon,
    title: 'AI + Strategy Fusion',
    body: 'Models amplify discipline, they do not replace it. Pattern recognition paired with rule-based execution.',
  },
  {
    Icon: TimeframeIcon,
    title: 'Multi-Timeframe Analysis',
    body: 'Align narrative from the monthly draw on liquidity down to the 1-minute entry trigger — one chain of logic.',
  },
  {
    Icon: ExecutionIcon,
    title: 'Precision Execution',
    body: 'Entries and exits tuned for consistency under pressure. Process beats adrenaline — every single session.',
  },
  {
    Icon: RiskIcon,
    title: 'Risk-First Framework',
    body: 'Fixed-fractional sizing, defined invalidation, and kill-switches. Survival first, returns second.',
  },
  {
    Icon: NetworkIcon,
    title: 'Shared Intelligence',
    body: 'Live chart reviews, session debriefs, and a library of playbooks curated by the community.',
  },
]

export default function Features() {
  const gridRef = useRef(null)
  useGsapReveal(gridRef, [])

  return (
    <section
      id="capabilities"
      className="border-t border-neutral-200/80 bg-white px-6 py-24 sm:px-10 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-col gap-6 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-neutral-500">
              Capabilities
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
              Engineered for focus.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-neutral-600 sm:text-base">
              Six pillars that run through everything we teach, review, and trade
              together. Pick one — you will find the rest inside it.
            </p>
          </div>
          <a
            href="#join"
            className="group inline-flex items-center gap-2 self-start text-sm font-medium text-neutral-800 underline-offset-4 transition hover:text-neutral-950 sm:self-end"
          >
            Talk to the team
            <span
              aria-hidden
              className="inline-block transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>

        <div
          ref={gridRef}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {ITEMS.map((item, i) => (
            <article
              key={item.title}
              data-reveal
              className="group relative flex flex-col overflow-hidden border border-neutral-200 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-neutral-950 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)]"
            >
              {/* Animated sweep line at top on hover */}
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-neutral-950 transition-transform duration-500 group-hover:scale-x-100"
              />
              {/* Index marker */}
              <span className="absolute right-6 top-6 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-neutral-300 transition-colors duration-500 group-hover:text-neutral-500">
                {String(i + 1).padStart(2, '0')}
              </span>

              <span className="flex h-11 w-11 items-center justify-center border border-neutral-950 bg-white text-neutral-950 transition-all duration-500 group-hover:bg-neutral-950 group-hover:text-white">
                <item.Icon />
              </span>

              <h3 className="mt-6 text-lg font-semibold tracking-tight text-neutral-950">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {item.body}
              </p>

              <span
                aria-hidden
                className="mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-neutral-400 transition-colors duration-500 group-hover:text-neutral-950"
              >
                Inside the system
                <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
              </span>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-center gap-4 sm:mt-20 sm:flex-row sm:gap-6">
          <DiscordCta variant="primary">Join Discord</DiscordCta>
          <p className="max-w-md text-center text-sm text-neutral-500 sm:text-left">
            Trade ideas, live sessions, and system updates — right alongside the
            people running the same process.
          </p>
        </div>
      </div>
    </section>
  )
}
