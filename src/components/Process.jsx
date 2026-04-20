import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const STEPS = [
  {
    n: '01',
    t: 'Read the tape',
    d: 'We start where price is — structure, liquidity pools, and the last fingerprint of institutional intent.',
    tags: ['Structure', 'Order flow'],
  },
  {
    n: '02',
    t: 'Frame the thesis',
    d: 'Multi-timeframe alignment turns a chart into a chain of logic. If it doesn’t align, it doesn’t trade.',
    tags: ['HTF → LTF', 'Draw on liquidity'],
  },
  {
    n: '03',
    t: 'Define the risk',
    d: 'Entry, invalidation, and sizing decided before the order is placed. The plan fits on one line.',
    tags: ['Sizing', 'Stop placement'],
  },
  {
    n: '04',
    t: 'Execute + debrief',
    d: 'Pull the trigger without hesitation; review without ego. Every session feeds the next one.',
    tags: ['Journal', 'Session review'],
  },
]

export default function Process() {
  const root = useRef(null)
  const lineRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate a vertical connecting line as the user scrolls through the section
      const line = lineRef.current
      if (line) {
        gsap.fromTo(
          line,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            transformOrigin: 'top center',
            scrollTrigger: {
              trigger: root.current,
              start: 'top 70%',
              end: 'bottom 70%',
              scrub: true,
            },
          },
        )
      }

      gsap.from('.process-step', {
        opacity: 0,
        x: -32,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: root.current,
          start: 'top 78%',
          once: true,
        },
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="process"
      ref={root}
      className="bg-[#fafafa] px-6 py-28 sm:px-10 sm:py-36"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 max-w-2xl sm:mb-20">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-neutral-500">
            Process
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
            Four steps we run every session.
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-neutral-600 sm:text-base">
            The rhythm is deliberately small. Small rhythms scale. Big rhythms
            burn out.
          </p>
        </div>

        <div className="relative pl-10 sm:pl-16">
          {/* Base line */}
          <div
            aria-hidden
            className="absolute left-[14px] top-0 h-full w-px bg-neutral-200 sm:left-[22px]"
          />
          {/* Animated progress line */}
          <div
            ref={lineRef}
            aria-hidden
            className="absolute left-[14px] top-0 h-full w-px origin-top bg-neutral-950 sm:left-[22px]"
          />

          <ol className="space-y-10 sm:space-y-14">
            {STEPS.map((s) => (
              <li key={s.n} className="process-step relative">
                {/* Node */}
                <span
                  aria-hidden
                  className="absolute -left-10 top-1 flex h-7 w-7 items-center justify-center rounded-full border border-neutral-950 bg-white text-[0.65rem] font-semibold text-neutral-950 sm:-left-16 sm:h-[34px] sm:w-[34px]"
                >
                  {s.n}
                </span>
                <div className="rounded-sm border border-neutral-200 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-neutral-950 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.3)] sm:p-8">
                  <h3 className="text-xl font-semibold tracking-tight text-neutral-950 sm:text-2xl">
                    {s.t}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
                    {s.d}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {s.tags.map((tag) => (
                      <li
                        key={tag}
                        className="border border-neutral-300 bg-[#fafafa] px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-neutral-600"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
