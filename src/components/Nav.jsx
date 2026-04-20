import { useEffect, useState } from 'react'
import { DISCORD_INVITE_URL } from '../config/links.js'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#principles', label: 'Principles' },
  { href: '#capabilities', label: 'Capabilities' },
  { href: '#process', label: 'Process' },
  { href: '#faq', label: 'FAQ' },
]

/**
 * Sticky top nav. Invisible at the top (so the hero remains full-bleed),
 * condenses in with a blur/border once the user has scrolled past ~70vh.
 */
export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.7)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[80] transition-all duration-500 ${
        scrolled
          ? 'pointer-events-auto translate-y-0 border-b border-neutral-200/70 bg-[#fafafa]/85 backdrop-blur-lg'
          : 'pointer-events-none -translate-y-4 border-b border-transparent bg-transparent'
      }`}
      aria-label="Primary"
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 transition-all duration-500 sm:px-10 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <a
          href="#top"
          className="group flex items-center gap-2 text-sm font-semibold tracking-tight text-neutral-950"
        >
          <span
            aria-hidden
            className="flex h-6 w-6 items-center justify-center border border-neutral-950 bg-neutral-950 text-[10px] font-bold text-white transition-transform duration-300 group-hover:rotate-3"
          >
            MH
          </span>
          <span className="tracking-[-0.02em]">Market Hackers</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-[0.8rem] font-medium uppercase tracking-[0.18em] text-neutral-600 transition-colors hover:text-neutral-950"
            >
              {l.label}
              <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-neutral-950 transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        <a
          href={DISCORD_INVITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 border border-neutral-950 bg-neutral-950 px-4 py-2 text-xs font-medium text-white transition-colors duration-300 hover:bg-neutral-800"
        >
          <span>Join Discord</span>
          <span
            aria-hidden
            className="inline-block transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </a>
      </div>
    </nav>
  )
}
