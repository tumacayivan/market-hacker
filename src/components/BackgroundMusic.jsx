import { useEffect, useRef } from 'react'
import { getLenis } from '../hooks/useLenis.js'

const SRC = '/background-music.mp3'

/**
 * Looped background music. Browsers usually block autoplay until a user gesture.
 * We try on load, then start on first scroll (including Lenis), click, or key.
 */
export default function BackgroundMusic() {
  const startedRef = useRef(false)

  useEffect(() => {
    const audio = new Audio()
    audio.src = SRC
    audio.loop = true
    audio.volume = 0.35
    audio.preload = 'auto'
    audio.playsInline = true

    let cancelled = false

    const markStarted = () => {
      if (startedRef.current) return
      startedRef.current = true
      removeUnlockListeners()
    }

    /** Must stay sync inside pointer/click handlers — no await before play() — or gesture is lost. */
    const tryPlayFromGesture = () => {
      if (startedRef.current || cancelled) return
      const p = audio.play()
      if (p !== undefined) {
        p.then(markStarted).catch(() => {})
      } else {
        markStarted()
      }
    }

    const tryPlayInitial = () => {
      if (startedRef.current || cancelled) return
      const p = audio.play()
      if (p !== undefined) {
        p.then(markStarted).catch(() => {})
      }
    }

    const removeUnlockListeners = () => {
      window.removeEventListener('scroll', onUnlock, listenerOpts)
      window.removeEventListener('wheel', onUnlock, listenerOpts)
      document.removeEventListener('click', onUnlock, true)
      document.removeEventListener('pointerdown', onUnlock, true)
      document.removeEventListener('touchstart', onUnlock, listenerOpts)
      document.removeEventListener('keydown', onUnlock)
      document.removeEventListener('mousemove', onUnlock, listenerOnce)
      lenis?.off('scroll', onLenisScroll)
    }

    const listenerOpts = { capture: true, passive: true }
    const listenerOnce = { capture: true, passive: true, once: true }

    const onUnlock = () => tryPlayFromGesture()

    const onLenisScroll = () => tryPlayFromGesture()

    const onCanPlay = () => {
      if (!cancelled) tryPlayInitial()
    }

    const onError = () => {
      if (import.meta.env.DEV) {
        // eslint-disable-next-line no-console
        console.warn(
          `[BackgroundMusic] Could not load ${SRC}. Add the file to /public/background-music.mp3`,
        )
      }
    }

    audio.addEventListener('canplay', onCanPlay, { once: true })
    audio.addEventListener('error', onError)

    window.addEventListener('scroll', onUnlock, listenerOpts)
    window.addEventListener('wheel', onUnlock, listenerOpts)
    document.addEventListener('click', onUnlock, true)
    document.addEventListener('pointerdown', onUnlock, true)
    document.addEventListener('touchstart', onUnlock, listenerOpts)
    document.addEventListener('keydown', onUnlock)
    // First mouse move often counts as engagement when scroll is smoothed (Lenis)
    document.addEventListener('mousemove', onUnlock, listenerOnce)

    const lenis = getLenis()
    lenis?.on('scroll', onLenisScroll)

    audio.load()
    tryPlayInitial()

    return () => {
      cancelled = true
      removeUnlockListeners()
      audio.removeEventListener('error', onError)
      audio.pause()
      audio.src = ''
      audio.load()
    }
  }, [])

  return null
}
