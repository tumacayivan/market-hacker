import { useEffect, useState } from 'react'
import { CONTACT_EMAIL, DISCORD_INVITE_URL } from '../config/links.js'

const LINKS = [
  // { href: '#about', label: 'About' },
  // { href: '#principles', label: 'Principles' },
  // { href: '#levels', label: 'Levels' },
  // { href: '#capabilities', label: 'Capabilities' },
  // { href: '#process', label: 'Process' },
  // { href: '#faq', label: 'FAQ' },
]

/**
 * Sticky top nav.
 * - Desktop (lg+): starts invisible and fades in with a blur/border after the
 *   user scrolls past ~70vh.
 * - Mobile / tablet: always visible and interactive so the hamburger works
 *   from the very top of the page.
 */
export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const update = () => setIsDesktop(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.6)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while mobile panel is open
  useEffect(() => {
    if (mobileOpen) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [mobileOpen])

  // On anything below lg, the nav is ALWAYS condensed and interactive.
  // On desktop, it condenses after scrolling past ~60vh.
  const condensed = !isDesktop || scrolled || mobileOpen

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[80] transition-all duration-500 ${
        condensed
          ? 'translate-y-0 border-b border-neutral-200/70 bg-[#fafafa]/90 backdrop-blur-lg'
          : '-translate-y-3 border-b border-transparent bg-transparent'
      }`}
      aria-label="Primary"
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-4 transition-all duration-500 sm:px-8 lg:px-10 ${
          condensed ? 'py-3' : 'py-5'
        }`}
      >
        <a
          href="#top"
          className="group flex items-center gap-2 text-sm font-semibold tracking-tight text-neutral-950"
          onClick={() => setMobileOpen(false)}
        >
          <span
            aria-hidden
            className="flex h-7 w-7 items-center justify-center border border-neutral-950 bg-neutral-950 text-[10px] font-bold text-white transition-transform duration-300 group-hover:rotate-3"
          >
            MH
          </span>
          <span className="hidden tracking-[-0.02em] min-[390px]:inline">Market Hackers</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-[0.75rem] font-medium uppercase tracking-[0.18em] text-neutral-600 transition-colors hover:text-neutral-950"
            >
              {l.label}
              <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-neutral-950 transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={DISCORD_INVITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden items-center gap-2 border border-neutral-950 bg-neutral-950 px-3 py-2 text-xs font-medium text-white transition-colors duration-300 hover:bg-neutral-800 sm:inline-flex lg:px-4"
          >
            <span>Join Discord</span>
            <span
              aria-hidden
              className="inline-block transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>

          {/* Hamburger — visible below lg, always interactive */}
          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center border border-neutral-950 bg-white text-neutral-950 transition hover:bg-neutral-950 hover:text-white lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 right-0 top-0 h-px bg-current transition-transform duration-300 ${
                  mobileOpen ? 'translate-y-[7px] rotate-45' : ''
                }`}
              />
              <span
                className={`absolute left-0 right-0 top-[7px] h-px bg-current transition-opacity duration-300 ${
                  mobileOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 right-0 h-px bg-current transition-transform duration-300 ${
                  mobileOpen ? '-translate-y-[7px] -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-neutral-200/70 bg-[#fafafa] transition-[max-height,opacity] duration-500 ease-in-out lg:hidden ${
          mobileOpen
            ? 'pointer-events-auto max-h-[90vh] opacity-100'
            : 'pointer-events-none max-h-0 opacity-0'
        }`}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 sm:px-8">
          {LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="group flex items-center justify-between border-b border-neutral-200/80 py-4 text-base font-medium text-neutral-950"
            >
              <span className="flex items-center gap-4">
                <span className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-neutral-400">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {l.label}
              </span>
              <span
                aria-hidden
                className="text-neutral-400 transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          ))}
          <div className="mt-5 flex flex-col gap-3">
            <a
              href={DISCORD_INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center gap-2 border border-neutral-950 bg-neutral-950 px-6 py-3 text-sm font-medium text-white"
            >
              Join Discord <span aria-hidden>→</span>
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center gap-2 border border-neutral-950 bg-transparent px-6 py-3 text-sm font-medium text-neutral-950"
            >
              Email the team <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
