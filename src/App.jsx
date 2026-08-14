import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Navbar />

      <main className="bg-black text-white">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </main>
    </>
  )
}

export default App