'use client'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { useEffect, useState } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'

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
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  // Load saved theme on mount
  useEffect(() => {
    const saved = localStorage.getItem('theme') as 'light' | 'dark'
    if (saved) {
      setTheme(saved)
      document.documentElement.classList.toggle('dark', saved === 'dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-900 dark:bg-gray-900 dark:text-white`}>
        <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm z-50 border-b dark:border-gray-700">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <a href="#" className="text-xl font-bold text-blue-600 dark:text-blue-400">Udit Sharma</a>
              
              {/* Desktop Nav */}
              <div className="hidden md:flex items-center space-x-6">
                <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">About</a>
                <a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400">Experience</a>
                <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400">Projects</a>
                <a href="#coding-profiles" className="hover:text-blue-600 dark:hover:text-blue-400">Coding Profiles</a>
                <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                  aria-label="Toggle Theme"
                >
                  {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                </button>
              </div>

              {/* Mobile Menu Toggle */}
              <div className="md:hidden flex items-center gap-2">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                  aria-label="Toggle Theme"
                >
                  {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                </button>
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                  aria-label="Toggle Menu"
                >
                  {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>

            {/* Mobile Nav Menu */}
            {menuOpen && (
              <div className="md:hidden mt-2 flex flex-col space-y-4 pb-4 border-t pt-4 dark:border-gray-700">
                <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 dark:hover:text-blue-400">About</a>
                <a href="#experience" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 dark:hover:text-blue-400">Experience</a>
                <a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 dark:hover:text-blue-400">Projects</a>
                <a href="#coding-profiles" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 dark:hover:text-blue-400">Coding Profiles</a>
                <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
              </div>
            )}
          </div>
        </nav>

        <main className="pt-16">{children}</main>

        <footer className="bg-gray-100 dark:bg-gray-800 py-8">
          <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
            <p>© {new Date().getFullYear()} Udit Sharma. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
