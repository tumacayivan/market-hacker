import { useEffect, useRef, useState } from 'react'

/**
 * Very subtle pointer-based offset for a premium, restrained parallax feel.
 */
export function useMouseParallax(strength = 8) {
  const ref = useRef(null)
  const [transform, setTransform] = useState('translate3d(0,0,0)')

  useEffect(() => {
    const el = ref.current
    if (!el || strength === 0) return

    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      const cx = r.left + r.width / 2
      const cy = r.top + r.height / 2
      const dx = (e.clientX - cx) / (window.innerWidth / 2)
      const dy = (e.clientY - cy) / (window.innerHeight / 2)
      const x = dx * strength
      const y = dy * strength
      setTransform(`translate3d(${x}px, ${y}px, 0)`)
    }

    const onLeave = () => setTransform('translate3d(0,0,0)')

    window.addEventListener('pointermove', onMove, { passive: true })
    el.addEventListener('pointerleave', onLeave)

    return () => {
      window.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
    }
  }, [strength])

  return { ref, style: { transform } }
}
