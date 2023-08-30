import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from "../components/NavBar"
import { NameContextProvider } from './context/nameContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next.js Context',
  description: 'Practice Context in Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NameContextProvider>
          <NavBar />
          {children}
        </NameContextProvider>
      </body>
    </html>
  )
}
