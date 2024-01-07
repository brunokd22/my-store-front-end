import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import './globals.css'
import Footer from '@/components/footer'
import NavBar from '@/components/navbar'
import MainNav from '@/components/main-nav'

const font = Ubuntu({
  weight: ['300', '400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],})

export const metadata: Metadata = {
  title: 'My Shop',
  description: 'My Shop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <NavBar />
        
        {children}
        
        <Footer />
        </body>
    </html>
  )
}
