import { useLayoutEffect, useRef, useState } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  CINEMATIC_BEATS,
  CINEMATIC_BEAT_COUNT,
} from '../config/cinematicBeats.js'
import { useMouseParallax } from '../hooks/useMouseParallax.js'

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false,
  )
  useLayoutEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return reduced
}

function BackgroundParallax({ strength, children }) {
  const { ref, style } = useMouseParallax(strength)
  return (
    <div
      ref={ref}
      style={style}
      className="absolute -left-[12%] -top-[12%] h-[124%] w-[124%] will-change-transform"
    >
      {children}
    </div>
  )
}

/**
 * Full-viewport pinned sequence: scroll progress crossfades background frames (object-cover),
 * copy updates per beat, optional mouse parallax on the oversized image plane.
 */
export default function ScrollGallery() {
  const sectionRef = useRef(null)
  const imgsRef = useRef([])
  const lastBeatRef = useRef(0)
  const [activeBeat, setActiveBeat] = useState(0)

  const prefersReduced = usePrefersReducedMotion()

  /** Crossfade weights across the full float range [0 .. n-1] */
  const setImageOpacities = (t) => {
    const n = CINEMATIC_BEAT_COUNT
    const imgs = imgsRef.current.filter(Boolean)
    if (imgs.length < n) return

    const clamped = Math.min(Math.max(t, 0), n - 1)
    const i = Math.floor(clamped)
    const f = clamped - i

    for (let j = 0; j < n; j++) {
      const el = imgs[j]
      if (!el) continue
      let o = 0
      if (j === i) o = i + 1 <= n - 1 ? 1 - f : 1
      else if (j === i + 1) o = f
      el.style.opacity = String(o)
    }
  }

  useLayoutEffect(() => {
    const section = sectionRef.current
    if (!section) return

    let st = null
    let rafOuter = 0
    let rafInner = 0
    let retryRaf = 0
    let onResize = null
    let attempts = 0

    const attach = () => {
      const imgs = imgsRef.current.filter(Boolean)
      if (imgs.length !== CINEMATIC_BEAT_COUNT) {
        attempts += 1
        if (attempts < 48) {
          retryRaf = requestAnimationFrame(attach)
        }
        return
      }

      setImageOpacities(0)

      if (prefersReduced) {
        st = ScrollTrigger.create({
          trigger: section,
          start: 'top top',
          end: () =>
            `+=${Math.max(
              (CINEMATIC_BEAT_COUNT - 1) * window.innerHeight * 0.55,
              window.innerHeight * 1.5,
            )}`,
          pin: true,
          scrub: true,
          // Stack above following pinned sections (e.g. StoryRail) while active
          onToggle: (self) => {
            if (self.trigger)
              self.trigger.style.zIndex = self.isActive ? '60' : ''
          },
          onUpdate: (self) => {
            const t = self.progress * (CINEMATIC_BEAT_COUNT - 1)
            const idx = Math.round(
              Math.min(CINEMATIC_BEAT_COUNT - 1, Math.max(0, t)),
            )
            imgs.forEach((img, j) => {
              img.style.opacity = j === idx ? '1' : '0'
            })
            if (idx !== lastBeatRef.current) {
              lastBeatRef.current = idx
              setActiveBeat(idx)
            }
          },
        })
        return
      }

      const getEndDistance = () => {
        const h = window.innerHeight
        const narrow = window.matchMedia('(max-width: 768px)').matches
        const per = narrow ? 0.52 : 0.72
        return Math.max((CINEMATIC_BEAT_COUNT - 1) * h * per, h * 2.4)
      }

      st = ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: () => `+=${getEndDistance()}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onToggle: (self) => {
          if (self.trigger)
            self.trigger.style.zIndex = self.isActive ? '60' : ''
        },
        onUpdate: (self) => {
          const t = self.progress * (CINEMATIC_BEAT_COUNT - 1)
          setImageOpacities(t)

          const idx = Math.round(
            Math.min(CINEMATIC_BEAT_COUNT - 1, Math.max(0, t)),
          )
          if (idx !== lastBeatRef.current) {
            lastBeatRef.current = idx
            setActiveBeat(idx)
          }
        },
      })

      onResize = () => ScrollTrigger.refresh()
      window.addEventListener('resize', onResize)
    }

    // Two rAFs: ensure all img refs are committed before measuring / pinning
    rafOuter = requestAnimationFrame(() => {
      rafInner = requestAnimationFrame(attach)
    })

    return () => {
      cancelAnimationFrame(rafOuter)
      cancelAnimationFrame(rafInner)
      cancelAnimationFrame(retryRaf)
      if (onResize) window.removeEventListener('resize', onResize)
      st?.kill()
    }
  }, [prefersReduced])

  const beat = CINEMATIC_BEATS[activeBeat]
  const isRight = beat.side === 'right'

  return (
    <section
      id="sequence"
      ref={sectionRef}
      className="relative isolate z-[60] bg-neutral-950"
      aria-label="Cinematic story sequence"
    >
      <div className="relative flex min-h-[100dvh] w-full flex-col overflow-hidden">
        {/* Full-screen background plane + parallax */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <BackgroundParallax strength={prefersReduced ? 0 : 22}>
            {CINEMATIC_BEATS.map((b, i) => (
              <img
                key={b.src}
                ref={(el) => {
                  imgsRef.current[i] = el
                }}
                src={b.src}
                alt=""
                width={1920}
                height={1080}
                decoding="async"
                loading={i < 3 ? 'eager' : 'lazy'}
                sizes="100vw"
                className="absolute inset-0 h-full w-full object-cover object-center opacity-0"
                style={{
                  zIndex: i,
                  backfaceVisibility: 'hidden',
                }}
              />
            ))}
          </BackgroundParallax>

          {/* Readability: mobile top/bottom wash; desktop side wash follows copy */}
          <div
            className="absolute inset-0 z-[1] bg-gradient-to-b from-[#f9f9f9]/55 via-transparent to-[#f9f9f9]/75 md:hidden"
            aria-hidden
          />
          <div
            className={`absolute inset-y-0 z-[1] hidden w-[min(92vw,620px)] md:block ${
              isRight
                ? 'right-0 bg-gradient-to-l from-[#fafafa]/[0.93] via-[#fafafa]/55 to-transparent'
                : 'left-0 bg-gradient-to-r from-[#fafafa]/[0.93] via-[#fafafa]/55 to-transparent'
            }`}
            aria-hidden
          />
        </div>

        {/* Foreground: story copy */}
        <div className="relative z-10 flex min-h-[100dvh] w-full flex-col justify-end px-5 pb-10 pt-24 sm:px-8 sm:pb-12 sm:pt-28 lg:flex-row lg:items-center lg:px-10 lg:pb-14 lg:pt-16 xl:px-14">
          <div
            className={`pointer-events-auto w-full max-w-lg lg:max-w-[min(100%,440px)] ${isRight ? 'lg:ml-auto lg:text-right' : 'lg:mr-auto lg:text-left'}`}
          >
            <article
              key={activeBeat}
              className="rounded-sm border border-neutral-200/90 bg-[#fafafa]/[0.92] p-6 shadow-[0_1px_0_rgba(0,0,0,0.06)] backdrop-blur-md sm:p-8"
            >
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-neutral-500">
                {beat.kicker}
              </p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-3xl">
                {beat.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-[0.95rem]">
                {beat.body}
              </p>
            </article>
          </div>
        </div>

        {/* Step indicator */}
        <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3 text-[0.65rem] font-medium tabular-nums tracking-[0.25em] text-neutral-600 sm:bottom-8">
          <span className="text-neutral-400">SCROLL</span>
          <span className="h-px w-10 bg-neutral-300" aria-hidden />
          <span>
            {String(activeBeat + 1).padStart(2, '0')} /{' '}
            {String(CINEMATIC_BEAT_COUNT).padStart(2, '0')}
          </span>
        </div>
      </div>
    </section>
  )
}
