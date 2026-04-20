import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BackgroundMusic from './components/BackgroundMusic.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import TickerStrip from './components/TickerStrip.jsx'
import ScrollGallery from './components/ScrollGallery.jsx'
import About from './components/About.jsx'
import Manifesto from './components/Manifesto.jsx'
import Levels from './components/Levels.jsx'
import Features from './components/Features.jsx'
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
    <div
      id="app-shell"
      className="app-shell min-h-[100dvh] overflow-x-hidden bg-[#f9f9f9] text-neutral-950 antialiased"
    >
      <BackgroundMusic />
      {/* <Nav /> */}
      <Hero />
      <TickerStrip />
      <ScrollGallery />
      {/* <About /> */}
      <Manifesto />
      {/* <Levels /> */}
      {/* <Features /> */}
      <Process />
      {/* <FAQ /> */}
      {/* <CTA /> */}

      <footer className="border-t border-neutral-200/80 bg-white px-4 py-14 sm:px-8 sm:py-18 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="space-y-4">
            <a
              href="#top"
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-tight text-neutral-950"
            >
              <span
                aria-hidden
                className="flex h-7 w-7 items-center justify-center border border-neutral-950 bg-neutral-950 text-[10px] font-bold text-white"
              >
                MH
              </span>
              <span>Market Hackers</span>
            </a>
            <p className="max-w-sm text-sm leading-relaxed text-neutral-500">
              A quantitative trading community for traders who think in
              systems, risk, and process — not noise.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={DISCORD_INVITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Join our Discord"
                className="flex h-10 w-10 items-center justify-center border border-neutral-300 text-neutral-700 transition hover:border-neutral-950 hover:bg-neutral-950 hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                  className="h-4 w-4"
                >
                  <path d="M19.3 4.9A17.5 17.5 0 0 0 14.8 3.6a.1.1 0 0 0-.1.1 12.3 12.3 0 0 0-.5 1.1 16.2 16.2 0 0 0-4.4 0 11.3 11.3 0 0 0-.6-1.1.1.1 0 0 0-.1-.1A17.4 17.4 0 0 0 4.7 4.9a.1.1 0 0 0-.1.1C1.9 9 1.2 12.9 1.5 16.7a.2.2 0 0 0 .1.1 17.5 17.5 0 0 0 5.3 2.7.1.1 0 0 0 .2 0 12.3 12.3 0 0 0 1.1-1.7.1.1 0 0 0-.1-.2 11.4 11.4 0 0 1-1.6-.8.1.1 0 0 1 0-.2 8.6 8.6 0 0 0 .3-.2.1.1 0 0 1 .1 0 12.4 12.4 0 0 0 10.4 0 .1.1 0 0 1 .1 0l.3.2a.1.1 0 0 1 0 .2 10.9 10.9 0 0 1-1.6.8.1.1 0 0 0-.1.2 14.3 14.3 0 0 0 1.1 1.7.1.1 0 0 0 .2 0 17.4 17.4 0 0 0 5.3-2.7.1.1 0 0 0 .1-.1c.4-4.4-.6-8.2-2.8-11.7a.1.1 0 0 0-.1-.1ZM8.5 14.4c-1 0-1.8-1-1.8-2.1s.8-2.1 1.8-2.1 1.8 1 1.8 2.1-.8 2.1-1.8 2.1Zm6.9 0c-1 0-1.8-1-1.8-2.1s.8-2.1 1.8-2.1 1.8 1 1.8 2.1-.8 2.1-1.8 2.1Z" />
                </svg>
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                aria-label="Email the team"
                className="flex h-10 w-10 items-center justify-center border border-neutral-300 text-neutral-700 transition hover:border-neutral-950 hover:bg-neutral-950 hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  aria-hidden
                  className="h-4 w-4"
                >
                  <rect x="3" y="5" width="18" height="14" rx="1" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
              </a>
            </div>
          </div>

          {/* <nav aria-label="Explore" className="space-y-3">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-neutral-400">
              Explore
            </p>
            <ul className="space-y-2 text-sm text-neutral-700">
              <li>
                <a href="#about" className="transition hover:text-neutral-950">
                  About
                </a>
              </li>
              <li>
                <a href="#principles" className="transition hover:text-neutral-950">
                  Principles
                </a>
              </li>
              <li>
                <a href="#levels" className="transition hover:text-neutral-950">
                  Levels
                </a>
              </li>
              <li>
                <a href="#capabilities" className="transition hover:text-neutral-950">
                  Capabilities
                </a>
              </li>
              <li>
                <a href="#process" className="transition hover:text-neutral-950">
                  Process
                </a>
              </li>
              <li>
                <a href="#faq" className="transition hover:text-neutral-950">
                  FAQ
                </a>
              </li>
            </ul>
          </nav> */}

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
              Market Hackers is an educational community. Nothing shared here
              or in the Discord constitutes financial advice. Trade at your
              own risk; past performance is not indicative of future results.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-neutral-200/80 pt-7 text-xs text-neutral-500 sm:mt-14 sm:flex-row sm:pt-8 sm:text-left">
          <p>© {new Date().getFullYear()} Market Hackers. All rights reserved.</p>
          <p className="text-neutral-400">Founded by {FOUNDER_NAME}</p>
        </div>
      </footer>
    </div>
  )
}
