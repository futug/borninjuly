import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import { Header } from './components/Header/Header'

// const inter = Inter({ subsets: ['latin'] })
const space = Space_Grotesk({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={space.className}>
        <Header />
        {children}
        </body>
    </html>
  )
}