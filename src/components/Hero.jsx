import { FOUNDER_NAME } from '../config/links.js'
import DiscordCta from './DiscordCta.jsx'
import { useMouseParallax } from '../hooks/useMouseParallax'

export default function Hero() {
  const { ref: parallaxRef, style: parallaxStyle } = useMouseParallax(10)

  return (
    <header className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-[#fafafa] px-6 sm:px-10">
      {/* Subtle grid — static CSS, no paint-heavy animation */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '56px 56px',
        }}
      />
      <div
        ref={parallaxRef}
        style={parallaxStyle}
        className="relative z-10 mx-auto w-full max-w-5xl transition-transform duration-300 ease-out will-change-transform"
      >
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-neutral-500">
          System
        </p>
        <h1 className="text-[clamp(2.75rem,8vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-neutral-950">
          Market Hackers
        </h1>
        <p className="mt-6 max-w-xl text-lg text-neutral-600 sm:text-xl">
          Decode the Market. Dominate the Game.
        </p>
        <p className="mt-4 text-sm font-medium tracking-wide text-neutral-500">
          Founded by {FOUNDER_NAME}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4 sm:mt-12">
          <DiscordCta variant="primary">Join Discord</DiscordCta>
          <a
            href="#sequence"
            className="inline-flex items-center justify-center border border-neutral-950 bg-transparent px-8 py-3 text-sm font-medium text-neutral-950 transition-colors duration-300 hover:bg-neutral-950 hover:text-white"
          >
            Initialize sequence
          </a>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-10 left-1/2 h-px w-24 -translate-x-1/2 bg-neutral-300" />
    </header>
  )
}
