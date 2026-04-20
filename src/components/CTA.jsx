import { useRef } from 'react'
import { CONTACT_EMAIL, FOUNDER_NAME } from '../config/links.js'
import { useGsapReveal } from '../hooks/useGsapReveal'
import DiscordCta from './DiscordCta.jsx'

const BULLETS = [
  'Live chart reads across FX, crypto, and indices',
  'Weekly session reviews + playbooks',
  'Quiet community — signal, not noise',
]

export default function CTA() {
  const root = useRef(null)
  useGsapReveal(root, [])

  return (
    <section
      id="join"
      className="relative isolate overflow-hidden bg-neutral-950 px-6 py-28 text-white sm:px-10 sm:py-36"
    >
      {/* Animated gradient sweep border on top */}
      <span
        aria-hidden
        className="gradient-sweep absolute inset-x-0 top-0 h-px"
        style={{
          backgroundImage:
            'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.7) 50%, transparent 100%)',
        }}
      />

      {/* Faint grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage:
            'radial-gradient(ellipse at center, rgba(0,0,0,0.9) 0%, transparent 75%)',
        }}
      />

      <div
        ref={root}
        className="relative mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20"
      >
        <div>
          <p
            data-reveal
            className="text-xs font-medium uppercase tracking-[0.35em] text-neutral-400"
          >
            Join the hackers
          </p>
          <h2
            data-reveal
            className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl"
          >
            Minimal surface.
            <br />
            <span className="text-neutral-400">Maximum signal.</span>
          </h2>
          <p
            data-reveal
            className="mt-7 max-w-xl text-base leading-relaxed text-neutral-300 sm:text-lg"
          >
            Step into the Discord for live discussions, structured reviews, and
            a full stack of trading resources — or email directly if you prefer
            a private line.
          </p>

          <ul data-reveal className="mt-8 space-y-3">
            {BULLETS.map((b) => (
              <li
                key={b}
                className="flex items-center gap-4 text-sm text-neutral-200"
              >
                <span
                  aria-hidden
                  className="flex h-6 w-6 items-center justify-center border border-white/30"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3.5 w-3.5 text-white"
                  >
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div
            data-reveal
            className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:gap-5"
          >
            <a
              href="https://discord.gg/wMdbFuwR"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-[200px] items-center justify-center gap-2 border border-white bg-white px-10 py-3.5 text-sm font-medium text-neutral-950 transition-colors duration-300 hover:bg-neutral-100"
            >
              <span>Join Discord</span>
              <span aria-hidden>→</span>
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex min-w-[200px] items-center justify-center gap-2 border border-white/40 bg-transparent px-10 py-3.5 text-sm font-medium text-white transition-colors duration-300 hover:border-white hover:bg-white/10"
            >
              <span>Email {FOUNDER_NAME.split(' ')[0]}</span>
              <span aria-hidden>↗</span>
            </a>
          </div>
        </div>

        <aside
          data-reveal
          className="relative border border-white/15 bg-white/[0.03] p-7 backdrop-blur-sm sm:p-9"
        >
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-neutral-400">
            What to expect
          </p>
          <ol className="mt-8 space-y-7">
            {[
              { n: '01', t: 'Introduce yourself', d: 'Share your timezone, markets, and current process.' },
              { n: '02', t: 'Observe a session', d: 'Sit in on a live review before you trade alongside us.' },
              { n: '03', t: 'Run the protocol', d: 'Adopt the framework, journal the session, debrief with us.' },
            ].map((s) => (
              <li key={s.n} className="flex items-start gap-5">
                <span className="shrink-0 text-[0.7rem] font-semibold tracking-[0.3em] text-neutral-500">
                  {s.n}
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{s.t}</p>
                  <p className="mt-1 text-xs leading-relaxed text-neutral-400">
                    {s.d}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <span
            aria-hidden
            className="absolute -bottom-px left-0 h-px w-24 bg-gradient-to-r from-white to-transparent"
          />
        </aside>
      </div>
    </section>
  )
}
