import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from './components/Hero.jsx'
import ScrollGallery from './components/ScrollGallery.jsx'
import StoryRail from './components/StoryRail.jsx'
import About from './components/About.jsx'
import Features from './components/Features.jsx'
import CTA from './components/CTA.jsx'
import { useGsapRegister } from './hooks/useGsapRegister.js'
import { useLenis } from './hooks/useLenis.js'

export default function App() {
  useGsapRegister()
  useLenis()

  // Recalculate pin distances after first paint (fonts, images, Lenis).
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      ScrollTrigger.refresh()
    })
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <div id="app-shell" className="app-shell min-h-[100dvh] bg-[#f9f9f9] text-neutral-950 antialiased">
      <Hero />
      <ScrollGallery />
      {/* <StoryRail /> */}
      {/* <About /> */}
      {/* <Features /> */}
      <CTA />
      <footer className="border-t border-neutral-200/80 bg-white px-6 py-10 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} Market Hackers. All rights reserved.
      </footer>
    </div>
  )
}
