import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Hi, I'm <span className="text-blue-600">Udit Sharma</span>
            </h1>
            <p className="text-lg text-gray-600">
              Tech enthusiast and aspiring software developer with a strong foundation in programming, data science, and AI. Currently pursuing B.Tech in Information Technology from GL Bajaj Institute of Technology and Management.
            </p>
            <div className="flex gap-4">
              <Link
                href="/resume.pdf"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                Download Resume
              </Link>
              <Link
                href="#contact"
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600">
              <Image
                src="/Photo.JPG"
                alt="Udit Sharma"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 