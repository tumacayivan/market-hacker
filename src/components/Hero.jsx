import { FOUNDER_NAME } from '../config/links.js'
import DiscordCta from './DiscordCta.jsx'
import { useMouseParallax } from '../hooks/useMouseParallax'

export default function Hero() {
  const { ref: parallaxRef, style: parallaxStyle } = useMouseParallax(10)

  return (
    <header className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden bg-black px-5 sm:px-8 lg:px-10 xl:px-14">
      {/* Background video — loop, muted; no overlay (keep footage crisp); file: public/hero-background.mp4 */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
        <video
          className="absolute left-1/2 top-1/2 h-full min-h-full w-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/hero-background.mp4" type="video/mp4" />
        </video>
      </div>
      <div
        ref={parallaxRef}
        style={parallaxStyle}
        className="relative z-10 flex w-full justify-center transition-transform duration-300 ease-out will-change-transform lg:justify-start"
      >
        {/* Width + surface match ScrollGallery beat cards; left-aligned on lg+ */}
        <article
          className="w-full max-w-lg rounded-sm border border-neutral-200/90 bg-[#fafafa]/[0.92] p-6 shadow-[0_1px_0_rgba(0,0,0,0.06)] backdrop-blur-md sm:p-8 lg:max-w-[min(100%,440px)]"
          aria-label="Market Hackers introduction"
        >
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-neutral-500">
            System
          </p>
          <h1 className="mt-3 text-[clamp(2.25rem,7vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-neutral-950 sm:text-5xl">
            Market Hackers
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-600 sm:text-xl">
            Hack the Market. Break the System.
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
        </article>
      </div>
      <div className="pointer-events-none absolute bottom-10 left-1/2 z-10 h-px w-24 -translate-x-1/2 bg-neutral-300" />
    </header>
  )
}
