import { useRef, useState } from 'react'
import { useGsapReveal } from '../hooks/useGsapReveal'
import DiscordCta from './DiscordCta.jsx'

const QUESTIONS = [
  {
    q: 'Who is Market Hackers for?',
    a: 'Traders who would rather master one process than collect a thousand signals. You should already be comfortable reading a chart and willing to journal every session.',
  },
  {
    q: 'Which markets do you focus on?',
    a: 'Primarily FX majors, Gold, Bitcoin and Ethereum pairs, and US indices. The framework transfers cleanly across any liquid instrument.',
  },
  {
    q: 'Is there a cost to join?',
    a: 'The Discord community has a free tier with open discussion, plus curated rooms for members who commit to the process. Join first, evaluate, then decide.',
  },
  {
    q: 'Do you provide signals?',
    a: 'No. We publish live chart reads and biases, but execution remains your responsibility. The goal is to build your own edge — not to rent ours.',
  },
  {
    q: 'How active is the community?',
    a: 'Messages flow around the clock. Core live sessions follow the Asia, London, and New York opens, with a weekly deep-dive review on weekends.',
  },
  {
    q: 'Do I need to trade full-time?',
    a: 'No. Many members trade part-time alongside careers. The framework is intentionally small so it compresses into a 30-minute daily routine.',
  },
]

function PlusIcon({ open }) {
  return (
    <span
      aria-hidden
      className="relative flex h-6 w-6 shrink-0 items-center justify-center"
    >
      <span className="absolute h-px w-4 bg-neutral-950" />
      <span
        className={`absolute h-4 w-px bg-neutral-950 transition-transform duration-500 ${
          open ? 'scale-y-0' : 'scale-y-100'
        }`}
      />
    </span>
  )
}

export default function FAQ() {
  const rootRef = useRef(null)
  useGsapReveal(rootRef, [])
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <section
      id="faq"
      className="border-t border-neutral-200/80 bg-white px-6 py-28 sm:px-10 sm:py-36"
    >
      <div ref={rootRef} className="mx-auto max-w-4xl">
        <div className="mb-12 text-center sm:mb-16">
          <p
            data-reveal
            className="text-xs font-medium uppercase tracking-[0.35em] text-neutral-500"
          >
            FAQ
          </p>
          <h2
            data-reveal
            className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl"
          >
            Questions we hear most.
          </h2>
          <p
            data-reveal
            className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-neutral-600 sm:text-base"
          >
            If yours isn’t here, the Discord is the fastest way to get a direct
            answer from the team.
          </p>
        </div>

        <ul data-reveal className="divide-y divide-neutral-200 border-y border-neutral-200">
          {QUESTIONS.map((item, i) => {
            const open = openIdx === i
            return (
              <li key={item.q}>
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenIdx(open ? -1 : i)}
                  className="group flex w-full items-center justify-between gap-6 py-6 text-left transition-colors duration-300 hover:bg-[#fafafa] sm:py-7"
                >
                  <span className="flex items-start gap-5">
                    <span className="pt-1 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-neutral-400">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-base font-medium tracking-tight text-neutral-950 sm:text-lg">
                      {item.q}
                    </span>
                  </span>
                  <PlusIcon open={open} />
                </button>
                <div
                  className="accordion-content px-12 pr-6"
                  data-open={open ? 'true' : 'false'}
                >
                  <div className="inner">
                    <p className="pb-7 text-sm leading-relaxed text-neutral-600 sm:text-[0.95rem]">
                      {item.a}
                    </p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:mt-14 sm:flex-row sm:gap-6">
          <DiscordCta variant="outline">Ask in Discord</DiscordCta>
          <p className="max-w-md text-center text-sm text-neutral-500 sm:text-left">
            Real answers, from real members — usually within the hour.
          </p>
        </div>
      </div>
    </section>
  )
}
