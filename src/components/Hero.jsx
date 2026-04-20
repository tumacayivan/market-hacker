import { FOUNDER_NAME } from '../config/links.js'
import DiscordCta from './DiscordCta.jsx'
import { useMouseParallax } from '../hooks/useMouseParallax'

export default function Hero() {
  const { ref: parallaxRef, style: parallaxStyle } = useMouseParallax(10)

  return (
    <header
      id="top"
      className="relative flex min-h-[100dvh] flex-col justify-end overflow-hidden bg-black px-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-4 sm:px-8 lg:px-10 xl:px-14"
    >
      {/* Background video — loop, muted; file: public/hero-background.mp4 */}
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
        {/* Subtle vignette + scanline texture layered over the video */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/30"
          aria-hidden
        />
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-screen"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, rgba(255,255,255,0.6) 0px, rgba(255,255,255,0.6) 1px, transparent 1px, transparent 3px)',
          }}
          aria-hidden
        />
      </div>

      {/* Top corner marks — subtle live/system indicators */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-start justify-between px-5 pt-5 sm:px-8 sm:pt-6 lg:px-10 xl:px-14">
        <div className="hero-fade-up flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.3em] text-white/75" style={{ animationDelay: '0.3s' }}>
          {/* <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span> */}
          {/* <span>Live · Markets open</span> */}
        </div>
        <div
          className="hero-fade-up hidden items-center gap-4 text-[0.7rem] font-medium uppercase tracking-[0.3em] text-white/65 md:flex"
          style={{ animationDelay: '0.45s' }}
        >
          <span>v 2.0 / 2026</span>
          <span className="h-px w-8 bg-white/40" aria-hidden />
          <span>System active</span>
        </div>
      </div>

      {/* Right-aligned vertical scroll indicator — desktop only */}
      <div className="pointer-events-none absolute bottom-10 right-8 z-10 hidden flex-col items-center gap-3 lg:flex">
        <span className="rotate-180 text-[0.65rem] font-medium uppercase tracking-[0.4em] text-white/70 [writing-mode:vertical-rl]">
          Scroll to descend
        </span>
        <span className="relative flex h-16 w-px overflow-hidden bg-white/20">
          <span className="scroll-line-pulse absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-white to-transparent" />
        </span>
      </div>

      <div
        ref={parallaxRef}
        style={parallaxStyle}
        className="relative z-10 flex w-full justify-center pb-1 transition-transform duration-300 ease-out will-change-transform lg:justify-start"
      >
        {/* Same compact card on every breakpoint — matches ScrollGallery width */}
        <article
          className="hero-card w-full max-w-lg rounded-sm border border-white/25 bg-gradient-to-t from-white/[0.72] via-white/[0.18] to-transparent p-4 shadow-[0_-10px_44px_rgba(255,255,255,0.14),0_-2px_20px_rgba(0,0,0,0.06)] backdrop-blur-xl sm:p-6 lg:max-w-[min(100%,460px)]"
          aria-label="Market Hackers introduction"
        >
          <div className="hero-fade-up flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-neutral-500" style={{ animationDelay: '0.1s' }}>
            <span className="inline-block h-px w-6 bg-neutral-400" aria-hidden />
            <span>Est. 2026 · Global</span>
          </div>
          <h1
            className="hero-fade-up mt-3 text-[clamp(1.6rem,7.8vw,3.1rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-neutral-950"
            style={{ animationDelay: '0.2s' }}
          >
            Hack the market.
            <br />
            <span className="text-neutral-500">Break the system.</span>
          </h1>
          <p
            className="hero-fade-up mt-3 text-[0.88rem] leading-relaxed text-neutral-700 sm:text-[0.95rem]"
            style={{ animationDelay: '0.3s' }}
          >
            A quantitative trading community — learning the system, engineering
            the strategy, and building the tools to exploit market inefficiencies.
          </p>

          {/* <ul
            className="hero-fade-up mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-neutral-600"
            style={{ animationDelay: '0.4s' }}
          >
            {PILLARS.map((p, i) => (
              <li key={p} className="flex items-center gap-2">
                {i > 0 && <span className="h-1 w-1 rounded-full bg-neutral-400" aria-hidden />}
                <span>{p}</span>
              </li>
            ))}
          </ul> */}

          <p
            className="hero-fade-up mt-4 text-xs text-neutral-500"
            style={{ animationDelay: '0.5s' }}
          >
            Founded by{' '}
            <span className="font-semibold text-neutral-700">{FOUNDER_NAME}</span>
          </p>

          <div className="hero-fade-up mt-4 flex flex-wrap items-center gap-3 sm:mt-5" style={{ animationDelay: '0.6s' }}>
            <DiscordCta variant="primary">Join Discord</DiscordCta>
            {/* <a
              href="#about"
              className="group inline-flex items-center gap-2 text-sm font-medium text-neutral-800 underline-offset-4 transition hover:text-neutral-950"
            >
              Learn the system
              <span
                aria-hidden
                className="inline-block transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a> */}
          </div>
        </article>
      </div>
    </header>
  )
}

 