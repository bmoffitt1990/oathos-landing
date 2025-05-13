import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OathOS – Make Promises You Keep',
  description: 'OathOS helps you stick to your habits by involving an accountability partner. Backed by behavior science.',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'OathOS – Make Promises You Keep',
    description: 'OathOS helps you stick to your habits by involving an accountability partner. Backed by behavior science.',
    images: '/og.png',
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
