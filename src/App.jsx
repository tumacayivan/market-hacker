import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BackgroundMusic from './components/BackgroundMusic.jsx'
import Hero from './components/Hero.jsx'
import ScrollGallery from './components/ScrollGallery.jsx'
import StoryRail from './components/StoryRail.jsx'
import About from './components/About.jsx'
import Features from './components/Features.jsx'
import CTA from './components/CTA.jsx'
import { CONTACT_EMAIL, DISCORD_INVITE_URL, FOUNDER_NAME } from './config/links.js'
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
      <BackgroundMusic />
      <Hero />
      <ScrollGallery />
      {/* <StoryRail /> */}
      {/* <About /> */}
      {/* <Features /> */}
      <CTA />
      <footer className="border-t border-neutral-200/80 bg-white px-6 py-10">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-4 text-center text-xs text-neutral-500 sm:flex-row sm:justify-between sm:text-left">
          <div className="space-y-1">
            <p>© {new Date().getFullYear()} Market Hackers. All rights reserved.</p>
            <p className="text-neutral-400">
              Founded by {FOUNDER_NAME}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a
              href={DISCORD_INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-neutral-800 underline-offset-4 transition-colors hover:text-neutral-950 hover:underline"
            >
              Discord
            </a>
            <a
              href="#join"
              className="font-medium text-neutral-800 underline-offset-4 transition-colors hover:text-neutral-950 hover:underline"
            >
              Join
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-medium text-neutral-800 underline-offset-4 transition-colors hover:text-neutral-950 hover:underline"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
