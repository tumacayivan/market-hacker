export default function CTA() {
  return (
    <section className="bg-[#fafafa] px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
          Join the Hackers
        </h2>
        <p className="mt-4 max-w-lg text-neutral-600">
          Minimal surface. Maximum signal. Request access when you are ready to
          operate with intent.
        </p>
        <div className="mt-10">
          <a
            href="mailto:hello@markethackers.io"
            className="inline-flex items-center justify-center border border-neutral-950 bg-transparent px-10 py-3.5 text-sm font-medium text-neutral-950 transition-colors duration-300 hover:bg-neutral-950 hover:text-white"
          >
            Request access
          </a>
        </div>
      </div>
    </section>
  )
}
