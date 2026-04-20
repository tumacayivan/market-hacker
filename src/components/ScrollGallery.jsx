import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  CINEMATIC_BEATS,
  CINEMATIC_BEAT_COUNT,
} from '../config/cinematicBeats.js'
import { getLenis } from '../hooks/useLenis.js'
import { useMouseParallax } from '../hooks/useMouseParallax.js'
import DiscordCta from './DiscordCta.jsx'

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

function useCompactSequenceMode() {
  const [compact, setCompact] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(max-width: 1024px)').matches
      : false,
  )

  useLayoutEffect(() => {
    const mq = window.matchMedia('(max-width: 1024px)')
    const onChange = () => setCompact(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return compact
}

function ChevronLeftIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  )
}

function ChevronRightIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  )
}

function BackgroundParallax({ strength, children }) {
  const { ref, style } = useMouseParallax(strength)
  const expanded = strength > 0
  return (
    <div
      ref={ref}
      style={style}
      className={`absolute will-change-transform ${
        expanded
          ? '-inset-[12%] h-[124%] w-[124%]'
          : 'inset-0 h-full w-full'
      }`}
    >
      {children}
    </div>
  )
}

/**
 * Full-viewport pinned sequence: scroll progress crossfades background frames,
 * copy updates per beat, optional mouse parallax on the oversized image plane.
 *
 * Responsive: content stays bottom-aligned on mobile with a top-right step
 * chip, and switches to a side-aligned layout on large screens.
 */
export default function ScrollGallery() {
  const sectionRef = useRef(null)
  const imgsRef = useRef([])
  const scrollTriggerRef = useRef(null)
  const lastBeatRef = useRef(0)
  const [activeBeat, setActiveBeat] = useState(0)

  const prefersReduced = usePrefersReducedMotion()
  const isCompact = useCompactSequenceMode()

  /** Scroll document so ScrollTrigger progress matches frame index (syncs with scrub). */
  const goToBeat = useCallback((targetIdx) => {
    const n = CINEMATIC_BEAT_COUNT
    if (n <= 1) return
    const st = scrollTriggerRef.current

    const clamped = Math.max(0, Math.min(targetIdx, n - 1))

    if (isCompact || !st || typeof st.start !== 'number' || typeof st.end !== 'number') {
      setActiveBeat(clamped)
      lastBeatRef.current = clamped
      return
    }

    const progress = clamped / (n - 1)
    const y = st.start + progress * (st.end - st.start)

    const lenis = getLenis()
    if (lenis) {
      lenis.scrollTo(y, { immediate: false })
    } else {
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }, [isCompact])

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

    scrollTriggerRef.current = null

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

      if (isCompact) {
        imgs.forEach((img, j) => {
          img.style.opacity = j === activeBeat ? '1' : '0'
        })
        lastBeatRef.current = activeBeat
        return
      }

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
        scrollTriggerRef.current = st
        return
      }

      const getEndDistance = () => {
        const h = window.innerHeight
        const narrow = window.matchMedia('(max-width: 768px)').matches
        const per = narrow ? 0.5 : 0.72
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

      scrollTriggerRef.current = st
    }

    rafOuter = requestAnimationFrame(() => {
      rafInner = requestAnimationFrame(attach)
    })

    return () => {
      cancelAnimationFrame(rafOuter)
      cancelAnimationFrame(rafInner)
      cancelAnimationFrame(retryRaf)
      if (onResize) window.removeEventListener('resize', onResize)
      scrollTriggerRef.current = null
      st?.kill()
    }
  }, [isCompact, prefersReduced])

  useLayoutEffect(() => {
    if (!isCompact) return
    const imgs = imgsRef.current.filter(Boolean)
    if (!imgs.length) return
    imgs.forEach((img, j) => {
      img.style.opacity = j === activeBeat ? '1' : '0'
    })
  }, [activeBeat, isCompact])

  const beat = CINEMATIC_BEATS[activeBeat]
  const isRight = beat.side === 'right'
  const canStep = CINEMATIC_BEAT_COUNT > 1
  const atFirst = activeBeat <= 0
  const atLast = activeBeat >= CINEMATIC_BEAT_COUNT - 1

  const btnRing =
    'flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-300 bg-white/90 text-neutral-900 shadow-sm backdrop-blur-sm transition hover:border-neutral-950 hover:bg-white disabled:pointer-events-none disabled:opacity-35 sm:h-12 sm:w-12'

  return (
    <section
      id="sequence"
      ref={sectionRef}
      className="relative isolate z-[60] bg-neutral-950"
      aria-label="Cinematic story sequence"
    >
      <div className="relative flex h-[100dvh] min-h-[100dvh] w-full flex-col overflow-hidden">
        {/* Full-screen background plane + parallax */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <BackgroundParallax strength={prefersReduced || isCompact ? 0 : 22}>
            {CINEMATIC_BEATS.map((b, i) => (
              <div
                key={b.src}
                ref={(el) => {
                  imgsRef.current[i] = el
                }}
                className="absolute inset-0 h-full w-full opacity-0"
                style={{
                  zIndex: i,
                  backfaceVisibility: 'hidden',
                  backgroundImage: `url(${b.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center top',
                  backgroundRepeat: 'no-repeat',
                }}
              />
            ))}
          </BackgroundParallax>

          {/* Readability wash.
             Mobile: stronger bottom wash so the card reads clearly; light top wash under the nav.
             Desktop: side wash follows the active side. */}
          <div
            className="absolute inset-0 z-[1] bg-gradient-to-b from-black/35 via-transparent to-[#f9f9f9]/85 md:hidden"
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

        {/* Top-right step chip — fully visible on every breakpoint */}
        <div className="pointer-events-none absolute right-4 top-4 z-20 flex items-center gap-2 rounded-full border border-white/30 bg-black/35 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-white backdrop-blur-md sm:right-6 sm:top-6">
          {/* <span
            aria-hidden
            className="h-1.5 w-1.5 rounded-full bg-emerald-400 blink-pulse"
          /> */}
          <span>Sequence</span>
          <span className="text-white/60">·</span>
          <span className="tabular-nums">
            {String(activeBeat + 1).padStart(2, '0')} /{' '}
            {String(CINEMATIC_BEAT_COUNT).padStart(2, '0')}
          </span>
        </div>

        {/* Foreground: story copy */}
        <div
          className={`relative z-10 flex h-full w-full flex-col px-4 pt-20 sm:px-8 sm:pt-24 lg:flex-row lg:items-center lg:px-10 lg:pt-16 xl:px-14 ${
            isCompact
              ? 'justify-end pb-20 sm:pb-24'
              : 'justify-end pb-24 sm:pb-28 lg:pb-14'
          }`}
        >
          <div
            className={`pointer-events-auto w-full max-w-lg lg:max-w-[min(100%,440px)] ${
              isRight ? 'lg:ml-auto lg:text-right' : 'lg:mr-auto lg:text-left'
            }`}
          >
            <article
              key={activeBeat}
              className="rounded-sm border border-white/25 bg-gradient-to-t from-white/[0.78] via-white/[0.28] to-white/[0.1] p-5 shadow-[0_-10px_44px_rgba(255,255,255,0.14),0_-2px_20px_rgba(0,0,0,0.06)] backdrop-blur-xl sm:p-7"
            >
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-neutral-500">
                {beat.kicker}
              </p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-3xl">
                {beat.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-700 sm:text-[0.95rem]">
                {beat.body}
              </p>
              <div
                className={`mt-5 ${
                  isRight ? 'flex justify-end' : 'flex justify-start'
                }`}
              >
                <DiscordCta variant="compact">Join Discord</DiscordCta>
              </div>
            </article>
          </div>
        </div>

        {/* Prev / next — anchored bottom on mobile, side on desktop */}
        {canStep && (
          <>
            {/* Mobile: centered pill pair just above the card area */}
            <div className="pointer-events-none absolute inset-x-0 bottom-4 z-20 flex items-center justify-center gap-3 sm:bottom-6 lg:hidden">
              <button
                type="button"
                className={`pointer-events-auto ${btnRing}`}
                aria-label="Previous frame"
                disabled={atFirst}
                onClick={() => goToBeat(activeBeat - 1)}
              >
                <ChevronLeftIcon />
              </button>
              <button
                type="button"
                className={`pointer-events-auto ${btnRing}`}
                aria-label="Next frame"
                disabled={atLast}
                onClick={() => goToBeat(activeBeat + 1)}
              >
                <ChevronRightIcon />
              </button>
            </div>

            {/* Desktop: side-anchored buttons */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-20 hidden w-16 items-center justify-center lg:flex">
              <button
                type="button"
                className={`pointer-events-auto ${btnRing}`}
                aria-label="Previous frame"
                disabled={atFirst}
                onClick={() => goToBeat(activeBeat - 1)}
              >
                <ChevronLeftIcon />
              </button>
            </div>
            <div className="pointer-events-none absolute inset-y-0 right-0 z-20 hidden w-16 items-center justify-center lg:flex">
              <button
                type="button"
                className={`pointer-events-auto ${btnRing}`}
                aria-label="Next frame"
                disabled={atLast}
                onClick={() => goToBeat(activeBeat + 1)}
              >
                <ChevronRightIcon />
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
