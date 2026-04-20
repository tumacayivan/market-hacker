import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const DAYS = [
  {
    day: 'Mon',
    label: 'Week open',
    session: 'Weekly bias + narrative map',
    time: '08:00 UTC',
    tag: 'Macro',
  },
  {
    day: 'Tue',
    label: 'Deep dive',
    session: 'Structure breakdowns across FX + BTC',
    time: '13:30 UTC',
    tag: 'FX · Crypto',
  },
  {
    day: 'Wed',
    label: 'Execution lab',
    session: 'Live chart reads during London / NY overlap',
    time: '13:00 UTC',
    tag: 'Overlap',
  },
  {
    day: 'Thu',
    label: 'Risk workshop',
    session: 'Sizing, stops, and playbook refinements',
    time: '16:00 UTC',
    tag: 'Risk',
  },
  {
    day: 'Fri',
    label: 'Session review',
    session: 'Debrief the week — wins, losses, lessons',
    time: '18:00 UTC',
    tag: 'Journal',
  },
  {
    day: 'Sat',
    label: 'Open floor',
    session: 'Member chart submissions + Q&A',
    time: 'Rolling',
    tag: 'Community',
  },
  {
    day: 'Sun',
    label: 'Reset',
    session: 'Prep journal · set next week\u2019s watchlist',
    time: 'Self-paced',
    tag: 'Prep',
  },
]

export default function Schedule() {
  const root = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.schedule-row', {
        opacity: 0,
        x: -24,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.08,
        scrollTrigger: {
          trigger: root.current,
          start: 'top 80%',
          once: true,
        },
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="schedule"
      ref={root}
      className="border-t border-neutral-200/80 bg-white px-5 py-24 sm:px-10 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-4 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-neutral-500">
              Weekly cadence
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-4xl lg:text-5xl">
              A rhythm you can build a practice around.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-neutral-600 sm:text-base">
            All sessions are recorded and archived in the Discord — catch them
            live, or run them on your own clock.
          </p>
        </div>

        {/* Day rail — a single cohesive timeline */}
        <div className="overflow-hidden border border-neutral-200">
          <div className="grid grid-cols-[72px_1fr_auto] items-center gap-0 border-b border-neutral-200 bg-[#fafafa] px-5 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-neutral-500 sm:grid-cols-[96px_1fr_160px_120px] sm:px-8">
            <span>Day</span>
            <span>Session</span>
            <span className="hidden sm:block">Time</span>
            <span className="text-right">Track</span>
          </div>
          <ul>
            {DAYS.map((d, i) => (
              <li
                key={d.day}
                className="schedule-row group grid grid-cols-[72px_1fr_auto] items-center gap-4 border-b border-neutral-200 px-5 py-5 transition-colors duration-300 last:border-b-0 hover:bg-[#fafafa] sm:grid-cols-[96px_1fr_160px_120px] sm:gap-6 sm:px-8 sm:py-6"
              >
                <div className="flex flex-col">
                  <span className="text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">
                    {d.day}
                  </span>
                  <span className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-neutral-400">
                    Day {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-neutral-500">
                    {d.label}
                  </p>
                  <p className="mt-1.5 text-[0.95rem] leading-snug text-neutral-950 sm:text-base">
                    {d.session}
                  </p>
                </div>
                <div className="hidden text-sm font-medium tabular-nums text-neutral-700 sm:block">
                  {d.time}
                </div>
                <div className="flex items-center justify-end">
                  <span className="border border-neutral-300 bg-white px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.25em] text-neutral-700 transition-colors duration-300 group-hover:border-neutral-950 group-hover:bg-neutral-950 group-hover:text-white">
                    {d.tag}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Timezone + note */}
        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-neutral-200/70 pt-6 text-xs text-neutral-500 sm:flex-row sm:items-center">
          <p>
            All times in <span className="font-semibold text-neutral-950">UTC</span>.
            Your Discord localizes them automatically.
          </p>
          <p className="text-neutral-400">
            Schedule subject to market conditions + session flow.
          </p>
        </div>
      </div>
    </section>
  )
}
