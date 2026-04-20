import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

const LINES = [
  'We eliminate noise. Only data remains.',
  'We model structure, liquidity, and flow.',
  'Every trade is a hypothesis. Every hypothesis is risk-defined.',
  'Edge is statistical. Discipline is execution.',
]

const PRINCIPLES = [
  {
    n: '01',
    t: 'Clarity over speed',
    d: 'We move slowly enough to be right — then act without hesitation.',
  },
  {
    n: '02',
    t: 'Risk before return',
    d: 'Position sizing and invalidation precede any idea about direction.',
  },
  {
    n: '03',
    t: 'Process, not prediction',
    d: 'We follow repeatable procedures. Opinions decay; systems compound.',
  },
  {
    n: '04',
    t: 'Network as leverage',
    d: 'Shared intelligence accelerates conviction. Solitude compounds error.',
  },
]

export default function Manifesto() {
  const root = useRef(null)
  const principlesRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal the word spans (rendered by JSX) — safe even if JS reloads.
      gsap.to('.manifesto-word', {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.035,
        scrollTrigger: {
          trigger: root.current,
          start: 'top 78%',
          once: true,
        },
      })

      // Animate the principles grid — slide in with a faint blur-off
      gsap.from(
        principlesRef.current?.querySelectorAll('.principle-card') ?? [],
        {
          opacity: 0,
          y: 32,
          filter: 'blur(6px)',
          duration: 0.95,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: principlesRef.current,
            start: 'top 80%',
            once: true,
          },
        },
      )
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="principles"
      ref={root}
      className="relative isolate overflow-hidden border-y border-neutral-200/80 bg-white px-5 pb-14 pt-16 sm:px-8 sm:pb-22 sm:pt-24 lg:px-10 lg:pb-32 lg:pt-32"
    >
      {/* Faint grid backdrop — matches minimalist theme */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage:
            'radial-gradient(ellipse at center, rgba(0,0,0,0.9) 0%, transparent 70%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at center, rgba(0,0,0,0.9) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-neutral-500">
          Manifesto
        </p>
        <div className="mt-5 space-y-2.5 sm:mt-6 sm:space-y-4">
          {LINES.map((line) => (
            <p
              key={line}
              className="text-[clamp(1.45rem,4.2vw,2.8rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-neutral-950"
            >
              {line.split(/\s+/).map((word, wi) => (
                <span
                  key={`${line}-${wi}`}
                  className="inline-block overflow-hidden align-bottom"
                >
                  <span className="manifesto-word inline-block translate-y-full opacity-0 will-change-transform">
                    {word}
                  </span>
                  {wi < line.split(/\s+/).length - 1 ? '\u00A0' : ''}
                </span>
              ))}
            </p>
          ))}
        </div>

        {/* <div
          ref={principlesRef}
          className="mt-8 grid gap-3.5 sm:mt-14 sm:gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4"
        >
          {PRINCIPLES.map((p) => (
            <article
              key={p.n}
              className="principle-card group relative flex h-full flex-col justify-between border border-neutral-200 bg-[#fafafa] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-neutral-950 hover:bg-white hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)] sm:p-6"
            >
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-neutral-950 transition-transform duration-500 group-hover:scale-x-100"
              />
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-neutral-400">
                {p.n}
              </p>
              <h3 className="mt-6 text-lg font-semibold tracking-tight text-neutral-950">
                {p.t}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {p.d}
              </p>
            </article>
          ))}
        </div> */}
      </div>
    </section>
  )
}
