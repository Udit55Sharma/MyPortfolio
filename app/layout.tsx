import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Udit Sharma - Portfolio',
  description: 'Personal portfolio of Udit Sharma, a software developer and tech enthusiast.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <a href="#" className="text-xl font-bold text-blue-600">Udit Sharma</a>
              <div className="hidden md:flex space-x-8">
                <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
                <a href="#experience" className="text-gray-600 hover:text-blue-600">Experience</a>
                <a href="#projects" className="text-gray-600 hover:text-blue-600">Projects</a>
                <a href="#coding-profiles" className="text-gray-600 hover:text-blue-600">Coding Profiles</a>
                <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
              </div>
            </div>
          </div>
        </nav>

        <main className="pt-16">
          {children}
        </main>

        <footer className="bg-gray-50 py-8">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>© {new Date().getFullYear()} Udit Sharma. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
} 