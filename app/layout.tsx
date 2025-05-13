import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OathOS – Make Promises You Keep',
  description: 'OathOS helps you stick to your habits by involving an accountability partner. Backed by behavior science.',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#E07A5F',
  manifest: '/manifest.json',
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
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-MMMPGPJWM1`}
        />
        <Script id="ga-init">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MMMPGPJWM1');
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
