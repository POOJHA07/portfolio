const projects = [
  {
    title: 'Real-Time Air Quality Monitoring',
    description:
      'A real-time data pipeline that collects air-quality information and processes streaming data using Kafka.',
    technologies: ['Python', 'Kafka', 'Pandas', 'Streamlit', 'WAQI API'],
  },
  {
    title: 'FinVision',
    description:
      'An AI-powered personal finance application for tracking expenses and identifying financial patterns and anomalies.',
    technologies: ['Flutter', 'Flask', 'MongoDB', 'Scikit-learn'],
  },
  {
    title: 'InfoSecNudge',
    description:
      'An insider-threat detection and log-integrity system combining anomaly detection with cryptographic verification.',
    technologies: ['Flask', 'MongoDB', 'SHA-256', 'Machine Learning'],
  },
  {
    title: 'AI Model Compression & Deployment',
    description:
      'An optimization pipeline focused on reducing model inference latency and improving deployment efficiency.',
    technologies: ['PyTorch', 'ONNX Runtime', 'Optuna'],
  },
]

function Projects() {
  return (
    <section id="projects" className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">

        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-500">
          Projects
        </p>

        <h2 className="mb-12 text-4xl font-semibold sm:text-5xl">
          Things I've <span className="text-gray-500">built.</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group rounded-2xl border border-white/10 p-7 transition hover:-translate-y-1 hover:border-white/25"
            >
              <p className="mb-6 text-sm text-gray-600">
                0{index + 1}
              </p>

              <h3 className="text-2xl font-medium">
                {project.title}
              </h3>

              <p className="mt-4 leading-relaxed text-gray-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-gray-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <button className="mt-8 text-sm text-white transition group-hover:text-gray-400">
                View project →
              </button>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects