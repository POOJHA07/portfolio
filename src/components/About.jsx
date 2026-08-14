function About() {
  return (
    <section id="about" className="bg-black px-6 py-32 text-white">
      <div className="mx-auto max-w-6xl">

        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-500">
          About Me
        </p>

        <div className="grid gap-12 md:grid-cols-2">

          <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Software engineering student
            <span className="text-gray-500">
              {" "}building at the intersection of software, data and AI.
            </span>
          </h2>

          <div className="space-y-6 text-gray-400 leading-relaxed">
            <p>
              I'm an Integrated M.Tech Software Engineering student at VIT,
              passionate about building practical software systems that solve
              real-world problems.
            </p>

            <p>
              My interests span backend engineering, data engineering,
              machine learning and cloud technologies. I enjoy taking an idea
              from a problem statement to a working product.
            </p>

            <p>
              Currently, I'm focused on strengthening my foundations in
              software engineering while building projects that combine
              intelligent systems with reliable infrastructure.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default About