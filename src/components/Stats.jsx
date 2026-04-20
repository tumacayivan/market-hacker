import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const STATS = [
  {
    value: 1200,
    suffix: '+',
    label: 'Active traders',
    caption: 'Disciplined members across the Discord network.',
  },
  {
    value: 24,
    suffix: '/7',
    label: 'Global markets',
    caption: 'FX, crypto, and indices — coverage never stops.',
  },
  {
    value: 150,
    suffix: 'K',
    label: 'Messages shared',
    caption: 'Chart reads, debriefs, and system refinements.',
  },
  {
    value: 4,
    suffix: '',
    label: 'Core sessions',
    caption: 'Asia, London, New York, and the overlap in between.',
  },
]

function formatNumber(n) {
  const rounded = Math.round(n)
  if (rounded >= 1000) return rounded.toLocaleString()
  return String(rounded)
}

export default function Stats() {
  const root = useRef(null)
  const numRefs = useRef([])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      STATS.forEach((s, i) => {
        const el = numRefs.current[i]
        if (!el) return
        const counter = { v: 0 }
        gsap.to(counter, {
          v: s.value,
          duration: 2.2,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = formatNumber(counter.v)
          },
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true,
          },
        })
      })

      gsap.from('.stat-card', {
        opacity: 0,
        y: 28,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.1,
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
      ref={root}
      aria-label="By the numbers"
      className="relative overflow-hidden bg-neutral-950 px-6 py-24 text-white sm:px-10 sm:py-32"
    >
      {/* Subtle diagonal grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(135deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-14 flex flex-col gap-4">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-neutral-400">
            By the numbers
          </p>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            A quiet network —{' '}
            <span className="text-neutral-400">running at scale.</span>
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className="stat-card relative flex flex-col justify-between bg-neutral-950 p-8 transition-colors duration-500 hover:bg-neutral-900"
            >
              <div>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-neutral-500">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <p className="mt-8 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                  <span
                    ref={(el) => {
                      numRefs.current[i] = el
                    }}
                  >
                    0
                  </span>
                  <span className="text-neutral-400">{s.suffix}</span>
                </p>
              </div>
              <div className="mt-10">
                <p className="text-sm font-semibold text-white">{s.label}</p>
                <p className="mt-2 text-xs leading-relaxed text-neutral-400">
                  {s.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
