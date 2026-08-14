const education = [
  {
    degree: 'Integrated M.Tech in Software Engineering',
    institution: 'Vellore Institute of Technology',
    period: '2022 — 2027',
    details: 'CGPA: 9.53 / 10',
  },
  {
    degree: 'Class XII',
    institution: 'Ethiraj Matriculation School',
    period: '2022',
    details: '95.8%',
  },
  {
    degree: 'Class X',
    institution: 'Ethiraj Matriculation School',
    period: '2020',
    details: '97.8%',
  },
]

function Education() {
  return (
    <section id="education" className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">

        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-500">
          Education
        </p>

        <h2 className="mb-12 text-4xl font-semibold sm:text-5xl">
          My <span className="text-gray-500">education.</span>
        </h2>

        <div className="space-y-8">
          {education.map((item) => (
            <article
              key={`${item.degree}-${item.institution}`}
              className="grid gap-4 border-t border-white/10 pt-8 md:grid-cols-[220px_1fr_auto]"
            >
              <p className="text-sm text-gray-500">
                {item.period}
              </p>

              <div>
                <h3 className="text-xl font-medium">
                  {item.degree}
                </h3>

                <p className="mt-2 text-gray-400">
                  {item.institution}
                </p>
              </div>

              <p className="text-sm text-gray-400">
                {item.details}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Education