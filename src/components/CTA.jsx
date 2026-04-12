import { CONTACT_EMAIL } from '../config/links.js'
import DiscordCta from './DiscordCta.jsx'

export default function CTA() {
  return (
    <section id="join" className="bg-[#fafafa] px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
          Join the Hackers
        </h2>
        <p className="mt-4 max-w-lg text-neutral-600">
          Minimal surface. Maximum signal. Step into the Discord for live
          discussions, resources, and the full stack — or email if you prefer a
          direct line.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
          <DiscordCta variant="primary" className="min-w-[200px] px-10 py-3.5">
            Join Discord
          </DiscordCta>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex min-w-[200px] items-center justify-center border border-neutral-950 bg-transparent px-10 py-3.5 text-sm font-medium text-neutral-950 transition-colors duration-300 hover:bg-neutral-950 hover:text-white"
          >
            Email Ivan
          </a>
        </div>
      </div>
    </section>
  )
}
