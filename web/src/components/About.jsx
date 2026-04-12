import { useRef } from 'react'
import { useGsapReveal } from '../hooks/useGsapReveal'

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
      </div>
    </section>
  )
}
