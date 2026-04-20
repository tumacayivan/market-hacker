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
      className="relative overflow-hidden bg-[#fafafa] px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-32"
    >
      {/* Oversized watermark type in the background — quiet decoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-4 right-0 z-0 select-none text-[28vw] font-semibold leading-none tracking-[-0.06em] text-neutral-100 sm:-top-8 sm:right-6 sm:text-[20vw] lg:right-10 lg:text-[16rem]"
      >
        MH
      </div>

      <div
        ref={blockRef}
        className="relative z-10 mx-auto grid max-w-6xl items-start gap-10 md:gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16"
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
            className="mt-5 text-2xl font-semibold leading-[1.1] tracking-tight text-neutral-950 sm:mt-6 sm:text-4xl lg:text-5xl"
          >
            A quantitative trading community built around process, not noise.
          </h2>
          <p
            data-reveal
            className="mt-6 text-base leading-relaxed text-neutral-700 sm:mt-8 sm:text-lg"
          >
            Market Hackers is a community for traders who want to think in
            systems. We study how markets are actually structured — liquidity,
            participants, and behavior — and we build rule-based strategies
            around that understanding.
          </p>
          <p
            data-reveal
            className="mt-5 text-base leading-relaxed text-neutral-600"
          >
            No hype. No signal-by-the-minute groups. We meet in Discord to
            share market reads, study sessions, and the work of turning ideas
            into testable, systematic trading processes.
          </p>
          <div data-reveal className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10 sm:gap-5">
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
          className="relative flex h-full flex-col justify-between border border-neutral-200 bg-white p-6 sm:p-8 lg:p-9"
        >
          <div
            aria-hidden
            className="absolute -left-px top-0 h-10 w-px bg-neutral-950"
          />
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-neutral-400">
              From the founder
            </p>
            <blockquote className="mt-5 text-base leading-relaxed text-neutral-900 sm:mt-6 sm:text-lg">
              &ldquo;I built Market Hackers to surround myself with traders who
              respect the process more than the outcome. Edge is a byproduct of
              structure — we just made the structure visible.&rdquo;
            </blockquote>
          </div>
          <div className="mt-7 flex items-center gap-4 border-t border-neutral-200 pt-5 sm:mt-8 sm:pt-6">
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
