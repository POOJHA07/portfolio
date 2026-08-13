function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-5">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        
        <a href="#" className="text-xl font-bold tracking-tight">
          POOJHA.
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#about" className="text-sm text-gray-400 transition hover:text-white">
            About
          </a>

          <a href="#skills" className="text-sm text-gray-400 transition hover:text-white">
            Skills
          </a>

          <a href="#projects" className="text-sm text-gray-400 transition hover:text-white">
            Projects
          </a>

          <a href="#contact" className="text-sm text-gray-400 transition hover:text-white">
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className="rounded-full border border-white/20 px-5 py-2 text-sm transition hover:bg-white hover:text-black"
        >
          Let's Talk
        </a>

      </div>
    </nav>
  )
}

export default Navbar