import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemeLayoutWrapper from './ThemeLayoutWrapper'

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
    <html lang="en">
      <body className={inter.className}>
        <ThemeLayoutWrapper>{children}</ThemeLayoutWrapper>
      </body>
    </html>
  )
}
