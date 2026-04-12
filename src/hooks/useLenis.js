import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/** Set by useLenis — used for programmatic scroll (e.g. gallery arrows). */
let lenisInstance = null

export function getLenis() {
  return lenisInstance
}

/**
 * Smooth scrolling via Lenis, wired to ScrollTrigger so scrub/pin stay in sync.
 */
export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      touchMultiplier: 1.5,
      autoRaf: false,
    })

    lenisInstance = lenis
    lenis.on('scroll', ScrollTrigger.update)

    const raf = (time) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(raf)
      lenisInstance = null
      lenis.destroy()
    }
  }, [])
}
