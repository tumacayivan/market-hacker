import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let registered = false

/**
 * Registers GSAP ScrollTrigger once (safe with React Strict Mode double mount).
 */
export function useGsapRegister() {
  useLayoutEffect(() => {
    if (registered) return
    gsap.registerPlugin(ScrollTrigger)
    registered = true
  }, [])
}
