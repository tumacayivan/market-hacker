import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/**
 * One-shot fade + slight rise when the block enters the viewport.
 */
export function useGsapReveal(containerRef, deps = []) {
  useLayoutEffect(() => {
    const root = containerRef.current
    if (!root) return

    const targets = root.querySelectorAll('[data-reveal]')
    if (!targets.length) return

    const tween = gsap.from(targets, {
      opacity: 0,
      y: 28,
      duration: 0.95,
      ease: 'power2.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: root,
        start: 'top 82%',
        once: true,
      },
    })

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- ref identity + caller deps
  }, deps)
}
