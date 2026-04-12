import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const PANELS = [
  { k: '01', t: 'Structure' },
  { k: '02', t: 'Liquidity' },
  { k: '03', t: 'Execution' },
  { k: '04', t: 'Alpha' },
]

/**
 * Horizontal storytelling illusion: pinned track, scrubbed X translation (no real overflow scroll).
 */
export default function StoryRail() {
  const wrapRef = useRef(null)
  const trackRef = useRef(null)

  useLayoutEffect(() => {
    const wrap = wrapRef.current
    const track = trackRef.current
    if (!wrap || !track) return

    const tween = gsap.to(track, {
      x: () => {
        const travel = track.scrollWidth - wrap.clientWidth + 64
        return -Math.max(0, travel)
      },
      ease: 'none',
      scrollTrigger: {
        trigger: wrap,
        start: 'top top',
        end: () =>
          `+=${Math.max(track.scrollWidth * 0.85, wrap.clientWidth * 1.2, 1)}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        // Stay below the cinematic sequence (#sequence) when both use fixed pin
        onToggle: (self) => {
          if (self.trigger)
            self.trigger.style.zIndex = self.isActive ? '10' : ''
        },
      },
    })

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [])

  return (
    <section
      ref={wrapRef}
      className="relative z-0 bg-white"
      aria-label="Narrative strip"
    >
      <div className="flex h-[min(52vh,520px)] items-center overflow-hidden border-y border-neutral-200/70">
        <div
          ref={trackRef}
          className="flex items-stretch gap-12 px-8 sm:gap-20 sm:px-16 md:gap-28 will-change-transform"
        >
          {PANELS.map((p) => (
            <div
              key={p.k}
              className="flex min-w-[72vw] flex-col justify-center border-l border-neutral-200 pl-8 sm:min-w-[38vw] sm:pl-12 md:min-w-[28rem]"
            >
              <span className="text-xs font-medium uppercase tracking-[0.4em] text-neutral-400">
                {p.k}
              </span>
              <p className="mt-4 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl md:text-5xl">
                {p.t}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
