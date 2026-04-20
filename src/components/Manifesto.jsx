import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const LINES = [
  'We reject noise.',
  'We trade structure, liquidity, and intent.',
  'Every position is a thesis. Every thesis is defended by a stop.',
  'Discipline is the edge. Everything else is narrative.',
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
  const linesRef = useRef([])
  const principlesRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Split each manifesto line into word-spans and reveal on scroll.
      linesRef.current.forEach((el) => {
        if (!el || el.dataset.split === 'true') return
        const text = el.textContent
        el.textContent = ''
        text.split(/\s+/).forEach((word, i, arr) => {
          const wrap = document.createElement('span')
          wrap.className = 'inline-block overflow-hidden align-bottom'
          const inner = document.createElement('span')
          inner.className = 'manifesto-word inline-block translate-y-full opacity-0 will-change-transform'
          inner.textContent = word
          wrap.appendChild(inner)
          el.appendChild(wrap)
          if (i < arr.length - 1) el.appendChild(document.createTextNode(' '))
        })
        el.dataset.split = 'true'
      })

      gsap.to('.manifesto-word', {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.035,
        scrollTrigger: {
          trigger: root.current,
          start: 'top 75%',
          once: true,
        },
      })

      // Animate the principles grid — slide in with a faint blur-off
      gsap.from(principlesRef.current?.querySelectorAll('.principle-card') ?? [], {
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
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="principles"
      ref={root}
      className="relative isolate overflow-hidden border-y border-neutral-200/80 bg-white px-6 py-28 sm:px-10 sm:py-36"
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
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-neutral-500">
          Manifesto
        </p>
        <div className="mt-6 space-y-3 sm:space-y-4">
          {LINES.map((line, i) => (
            <p
              key={line}
              ref={(el) => {
                linesRef.current[i] = el
              }}
              className="text-[clamp(1.6rem,4.2vw,2.8rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-neutral-950"
            >
              {line}
            </p>
          ))}
        </div>

        <div
          ref={principlesRef}
          className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {PRINCIPLES.map((p) => (
            <article
              key={p.n}
              className="principle-card group relative flex h-full flex-col justify-between border border-neutral-200 bg-[#fafafa] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-neutral-950 hover:bg-white hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)]"
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
        </div>
      </div>
    </section>
  )
}
