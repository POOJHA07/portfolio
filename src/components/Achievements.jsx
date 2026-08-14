const achievements = [
  {
    title: 'Academic Excellence',
    description:
      'Integrated M.Tech Software Engineering student with a strong academic record.',
  },
  {
    title: 'Abacus Competition',
    description:
      'Secured 1st place in Abacus at the Tamil Nadu and Puducherry level.',
  },
  {
    title: 'Patent / Publication',
    description:
      'Contributed to the Upiverse patent/publication.',
  },
]

function Achievements() {
  return (
    <section id="achievements" className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">

        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-500">
          Achievements
        </p>

        <h2 className="mb-12 text-4xl font-semibold sm:text-5xl">
          Beyond the <span className="text-gray-500">code.</span>
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          {achievements.map((achievement) => (
            <article
              key={achievement.title}
              className="rounded-2xl border border-white/10 p-6"
            >
              <h3 className="text-xl font-medium">
                {achievement.title}
              </h3>

              <p className="mt-4 leading-relaxed text-gray-400">
                {achievement.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Achievements