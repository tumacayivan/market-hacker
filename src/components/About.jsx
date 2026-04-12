import { useRef } from 'react'
import { FOUNDER_NAME } from '../config/links.js'
import { useGsapReveal } from '../hooks/useGsapReveal'
import DiscordCta from './DiscordCta.jsx'

export default function About() {
  const blockRef = useRef(null)
  useGsapReveal(blockRef, [])

  return (
    <section className="bg-[#fafafa] px-6 py-28 sm:px-10 sm:py-36">
      <div
        ref={blockRef}
        className="mx-auto max-w-3xl text-center"
      >
        <p
          data-reveal
          className="text-xs font-medium uppercase tracking-[0.35em] text-neutral-500"
        >
          About
        </p>
        <p
          data-reveal
          className="mt-8 text-xl leading-relaxed text-neutral-800 sm:text-2xl"
        >
          We are Market Hackers — mastering structure, exploiting liquidity, and
          decoding price behavior.
        </p>
        <p
          data-reveal
          className="mt-8 text-sm leading-relaxed text-neutral-600 sm:text-base"
        >
          Founded by{' '}
          <span className="font-medium text-neutral-800">{FOUNDER_NAME}</span>
          — building a space for traders who think in systems, risk, and
          execution, not noise.
        </p>
        <div data-reveal className="mt-10 flex justify-center">
          <DiscordCta variant="outline">Meet the community</DiscordCta>
        </div>
      </div>
    </section>
  )
}
