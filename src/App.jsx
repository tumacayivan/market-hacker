import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BackgroundMusic from './components/BackgroundMusic.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import TickerStrip from './components/TickerStrip.jsx'
import ScrollGallery from './components/ScrollGallery.jsx'
import About from './components/About.jsx'
import Manifesto from './components/Manifesto.jsx'
import Features from './components/Features.jsx'
import Stats from './components/Stats.jsx'
import Process from './components/Process.jsx'
import FAQ from './components/FAQ.jsx'
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
      <Nav />
      <Hero />
      <TickerStrip />
      <ScrollGallery />
      <About />
      <Manifesto />
      <Features />
      <Stats />
      <Process />
      <FAQ />
      <CTA />
      <footer className="border-t border-neutral-200/80 bg-white px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <a href="#top" className="inline-flex items-center gap-2 text-sm font-semibold tracking-tight text-neutral-950">
              <span
                aria-hidden
                className="flex h-6 w-6 items-center justify-center border border-neutral-950 bg-neutral-950 text-[10px] font-bold text-white"
              >
                MH
              </span>
              <span>Market Hackers</span>
            </a>
            <p className="text-sm leading-relaxed text-neutral-500">
              A disciplined network for traders who think in systems, risk, and
              execution — not noise.
            </p>
          </div>

          <nav aria-label="Explore" className="space-y-3">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-neutral-400">
              Explore
            </p>
            <ul className="space-y-2 text-sm text-neutral-700">
              <li>
                <a href="#about" className="transition hover:text-neutral-950">About</a>
              </li>
              <li>
                <a href="#principles" className="transition hover:text-neutral-950">Principles</a>
              </li>
              <li>
                <a href="#capabilities" className="transition hover:text-neutral-950">Capabilities</a>
              </li>
              <li>
                <a href="#process" className="transition hover:text-neutral-950">Process</a>
              </li>
              <li>
                <a href="#faq" className="transition hover:text-neutral-950">FAQ</a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Connect" className="space-y-3">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-neutral-400">
              Connect
            </p>
            <ul className="space-y-2 text-sm text-neutral-700">
              <li>
                <a
                  href={DISCORD_INVITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-neutral-950"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="transition hover:text-neutral-950"
                >
                  Email {FOUNDER_NAME.split(' ')[0]}
                </a>
              </li>
              <li>
                <a href="#join" className="transition hover:text-neutral-950">
                  Join the network
                </a>
              </li>
            </ul>
          </nav>

          <div className="space-y-3">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-neutral-400">
              Disclaimer
            </p>
            <p className="text-xs leading-relaxed text-neutral-500">
              Market Hackers is an educational community. Nothing shared here or
              in the Discord constitutes financial advice. Trade at your own
              risk; past performance is not indicative of future results.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-14 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-neutral-200/80 pt-8 text-xs text-neutral-500 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} Market Hackers. All rights reserved.</p>
          <p className="text-neutral-400">Founded by {FOUNDER_NAME}</p>
        </div>
      </footer>
    </div>
  )
}
