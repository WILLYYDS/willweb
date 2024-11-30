import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import LifeAndInterests from './components/LifeAndInterests'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <LifeAndInterests />
      <Footer />
    </main>
  )
}

