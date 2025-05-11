
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Profile Image */}
          <div className="order-1 md:order-2 md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-400">
              <Image
                src="/Photo.JPG"
                alt="Udit Sharma"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Text and Buttons */}
          <div className="order-2 md:order-1 md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Udit Sharma</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Tech enthusiast and aspiring software developer with a strong foundation in programming, data science, and AI. Currently pursuing B.Tech in Information Technology from GL Bajaj Institute of Technology and Management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/resume.pdf"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors dark:bg-blue-500 dark:hover:bg-blue-600"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                Download Resume
              </Link>
              <Link
                href="#contact"
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
