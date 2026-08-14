const experiences = [
  {
    role: 'Software Engineering Intern',
    company: 'Company Name',
    period: '2026',
    description:
      'Worked on software engineering tasks involving backend services, APIs and data-driven applications.',
    technologies: ['Java', 'Spring Boot', 'REST APIs', 'Git'],
  },
]

function Experience() {
  return (
    <section id="experience" className="bg-black px-6 py-32 text-white">
      <div className="mx-auto max-w-6xl">

        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-500">
          Experience
        </p>

        <h2 className="mb-16 text-4xl font-semibold sm:text-5xl">
          Where I've
          <span className="text-gray-500"> worked.</span>
        </h2>

        <div className="space-y-12">
          {experiences.map((experience) => (
            <article
              key={`${experience.company}-${experience.role}`}
              className="grid gap-8 border-t border-white/10 pt-8 md:grid-cols-[220px_1fr]"
            >
              <div>
                <p className="text-sm text-gray-500">
                  {experience.period}
                </p>

                <p className="mt-2 text-sm text-gray-400">
                  {experience.company}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-medium">
                  {experience.role}
                </h3>

                <p className="mt-4 max-w-3xl leading-relaxed text-gray-400">
                  {experience.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {experience.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Experience