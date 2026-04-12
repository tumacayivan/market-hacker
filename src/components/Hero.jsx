import { FOUNDER_NAME } from '../config/links.js'
import DiscordCta from './DiscordCta.jsx'
import { useMouseParallax } from '../hooks/useMouseParallax'

export default function Hero() {
  const { ref: parallaxRef, style: parallaxStyle } = useMouseParallax(10)

  return (
    <header className="relative flex min-h-[100dvh] flex-col justify-end overflow-hidden bg-black px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-4 sm:px-8 lg:px-10 xl:px-14">
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
      </div>
      <div
        ref={parallaxRef}
        style={parallaxStyle}
        className="relative z-10 flex w-full justify-center transition-transform duration-300 ease-out will-change-transform lg:justify-start"
      >
        {/* Same compact card on every breakpoint — matches ScrollGallery width */}
        <article
          className="w-full max-w-lg rounded-sm border border-neutral-200/90 bg-[#fafafa]/[0.92] p-4 shadow-[0_1px_0_rgba(0,0,0,0.06)] backdrop-blur-md sm:p-5 lg:max-w-[min(100%,440px)]"
          aria-label="Market Hackers introduction"
        >
          <h1 className="text-[clamp(1.75rem,5vw,3rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-neutral-950">
            Market Hackers
          </h1>
          <p className="mt-2 text-sm font-medium tracking-wide text-neutral-500">
            Founded by {FOUNDER_NAME}
          </p>
          <div className="mt-3">
            <DiscordCta variant="primary">Join Discord</DiscordCta>
          </div>
        </article>
      </div>
    </header>
  )
}
