const skillGroups = [
  {
    title: 'Languages',
    skills: ['Java', 'Python', 'C', 'C++', 'SQL', 'JavaScript'],
  },
  {
    title: 'Backend & APIs',
    skills: ['Spring Boot', 'Flask', 'REST APIs', 'Microservices'],
  },
  {
    title: 'Data & AI',
    skills: ['Kafka', 'PySpark', 'Pandas', 'Scikit-learn', 'PyTorch'],
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'MongoDB', 'PostgreSQL'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Git', 'CI/CD'],
  },
]

function Skills() {
  return (
    <section id="skills" className="bg-black px-6 py-32 text-white">
      <div className="mx-auto max-w-6xl">

        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-500">
          Skills
        </p>

        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
            Tools I use to
            <span className="text-gray-500"> build things.</span>
          </h2>

          <p className="max-w-md text-gray-400">
            A growing toolkit across software engineering, data, AI and
            cloud infrastructure.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-white/10 p-6 transition hover:border-white/25"
            >
              <h3 className="mb-6 text-lg font-medium">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-white/5 px-3 py-2 text-sm text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills