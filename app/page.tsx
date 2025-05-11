import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import CodingProfiles from '@/components/CodingProfiles'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <CodingProfiles />
      <Contact />
    </main>
  )
} 