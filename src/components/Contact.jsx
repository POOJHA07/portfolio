function Contact() {
  return (
    <section id="contact" className="bg-black px-6 py-32 text-white">
      <div className="mx-auto max-w-6xl">

        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-500">
          Contact
        </p>

        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">

          <div>
            <h2 className="max-w-3xl text-5xl font-semibold leading-tight sm:text-6xl">
              Let's build something
              <span className="text-gray-500"> meaningful.</span>
            </h2>

            <p className="mt-6 max-w-xl text-gray-400">
              I'm always open to interesting opportunities, collaborations
              and conversations about software engineering, AI and technology.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="mailto:your-email@example.com"
              className="text-lg transition hover:text-gray-400"
            >
              your-email@example.com
            </a>

            <div className="flex gap-5 text-sm text-gray-400">
              <a
                href="#"
                className="transition hover:text-white"
              >
                GitHub
              </a>

              <a
                href="#"
                className="transition hover:text-white"
              >
                LinkedIn
              </a>

              <a
                href="#"
                className="transition hover:text-white"
              >
                LeetCode
              </a>
            </div>
          </div>

        </div>

        <div className="mt-24 border-t border-white/10 pt-6 text-sm text-gray-600">
          © 2026 Poojha. Built with React.
        </div>

      </div>
    </section>
  )
}

export default Contact