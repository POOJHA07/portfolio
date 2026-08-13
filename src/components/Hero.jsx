function Hero() {
  return (
    <section className="min-h-screen bg-black px-6 text-white">
      <div className="mx-auto flex min-h-screen max-w-6xl items-center">
        <div className="max-w-4xl">

          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-gray-400">
            Software Engineer · AI · Cloud · Data
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl">
            Building software
            <br />
            that solves
            <br />
            <span className="text-gray-500">real problems.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-400">
            I'm Poojha, an Integrated M.Tech Software Engineering student
            passionate about building intelligent, scalable and reliable
            software systems.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-105"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium transition hover:bg-white hover:text-black"
            >
              Contact Me
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero