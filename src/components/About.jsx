import { useRef } from 'react'
import { FOUNDER_NAME } from '../config/links.js'
import { useGsapReveal } from '../hooks/useGsapReveal'
import DiscordCta from './DiscordCta.jsx'

export default function About() {
  const blockRef = useRef(null)
  useGsapReveal(blockRef, [])

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#fafafa] px-6 py-28 sm:px-10 sm:py-36"
    >
      {/* Oversized watermark type in the background — quiet decoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 left-1/2 z-0 -translate-x-1/2 select-none text-[20vw] font-semibold leading-none tracking-[-0.06em] text-neutral-100 sm:text-[14rem]"
      >
        MH
      </div>

      <div
        ref={blockRef}
        className="relative z-10 mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20"
      >
        <div>
          <p
            data-reveal
            className="text-xs font-medium uppercase tracking-[0.35em] text-neutral-500"
          >
            About
          </p>
          <h2
            data-reveal
            className="mt-6 text-3xl font-semibold leading-[1.1] tracking-tight text-neutral-950 sm:text-5xl"
          >
            A disciplined network for traders who think in systems.
          </h2>
          <p
            data-reveal
            className="mt-8 text-base leading-relaxed text-neutral-700 sm:text-lg"
          >
            Market Hackers is a focused community of traders who have chosen
            craft over spectacle. We study how price forms — not how it feels —
            and we build process around the behavior of institutional capital.
          </p>
          <p
            data-reveal
            className="mt-5 text-base leading-relaxed text-neutral-600"
          >
            No hype. No signals-by-the-minute. We meet in Discord to share
            structure reads, post-session debriefs, and the quiet discipline of
            risk management. If you want to compound a real edge, you are in
            the right place.
          </p>
          <div data-reveal className="mt-10 flex flex-wrap items-center gap-5">
            <DiscordCta variant="primary">Meet the community</DiscordCta>
            <a
              href="#principles"
              className="group inline-flex items-center gap-2 text-sm font-medium text-neutral-800 underline-offset-4 transition hover:text-neutral-950"
            >
              Read the principles
              <span
                aria-hidden
                className="inline-block transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </div>

        <aside
          data-reveal
          className="relative flex flex-col justify-between border border-neutral-200 bg-white p-7 sm:p-9"
        >
          <div
            aria-hidden
            className="absolute -left-px top-0 h-10 w-px bg-neutral-950"
          />
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-neutral-400">
              From the founder
            </p>
            <blockquote className="mt-6 text-lg leading-relaxed text-neutral-900">
              &ldquo;I built Market Hackers to surround myself with traders who
              respect the process more than the outcome. Edge is a byproduct of
              structure — we just made the structure visible.&rdquo;
            </blockquote>
          </div>
          <div className="mt-8 flex items-center gap-4 border-t border-neutral-200 pt-6">
            <span
              aria-hidden
              className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-950 text-[0.7rem] font-bold tracking-wider text-neutral-950"
            >
              IT
            </span>
            <div>
              <p className="text-sm font-semibold text-neutral-950">{FOUNDER_NAME}</p>
              <p className="text-xs text-neutral-500">Founder · Systems trader</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
