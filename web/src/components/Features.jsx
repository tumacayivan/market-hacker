import { useRef } from 'react'
import { useGsapReveal } from '../hooks/useGsapReveal'
import DiscordCta from './DiscordCta.jsx'

const ITEMS = [
  {
    title: 'Smart Money Concepts',
    body: 'Follow institutional footprints with clarity, not hype.',
  },
  {
    title: 'AI + Strategy Fusion',
    body: 'Models amplify discipline — they do not replace it.',
  },
  {
    title: 'Multi-Timeframe Analysis',
    body: 'Align narrative from macro structure down to execution.',
  },
  {
    title: 'Precision Execution',
    body: 'Entries and exits tuned for consistency under pressure.',
  },
]

export default function Features() {
  const gridRef = useRef(null)
  useGsapReveal(gridRef, [])

  return (
    <section className="border-t border-neutral-200/80 bg-white px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-neutral-500">
            Capabilities
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
            Engineered for focus
          </h2>
        </div>

        <div
          ref={gridRef}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {ITEMS.map((item) => (
            <article
              key={item.title}
              data-reveal
              className="group border border-neutral-200 bg-white p-6 transition-transform duration-300 ease-out hover:scale-[1.02] hover:border-neutral-950"
            >
              <h3 className="text-lg font-semibold text-neutral-950">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {item.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:mt-16 sm:flex-row sm:gap-6">
          <DiscordCta variant="primary">Join Discord</DiscordCta>
          <p className="max-w-md text-center text-sm text-neutral-500 sm:text-left">
            Trade ideas, sessions, and system updates live with the crew.
          </p>
        </div>
      </div>
    </section>
  )
}
