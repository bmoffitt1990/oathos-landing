import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://oathos.com'),
  title: 'OathOS – Make Promises You Keep',
  description: 'OathOS helps you stick to your habits by involving an accountability partner. Backed by behavior science.',
  viewport: 'width=device-width, initial-scale=1',
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
        <meta name="theme-color" content="#E07A5F" />
      </head>
      <body className={inter.className}>
          <Script
            strategy="afterInteractive"
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
          <Script id="scroll-depth-tracker" strategy="afterInteractive">
            {`
              const thresholds = [25, 50, 75, 100];
              const fired = new Set();

              function reportScrollDepth() {
                const scrollTop = window.scrollY;
                const winHeight = window.innerHeight;
                const docHeight = document.documentElement.scrollHeight;
                const percent = Math.round((scrollTop + winHeight) / docHeight * 100);

                thresholds.forEach((t) => {
                  if (percent >= t && !fired.has(t)) {
                    window.gtag('event', 'scroll_depth', {
                      event_category: 'engagement',
                      event_label: t + '%',
                      value: t,
                    });
                    fired.add(t);
                  }
                });
              }

              window.addEventListener('scroll', () => {
                requestAnimationFrame(reportScrollDepth);
              });
            `}
            </Script>
          {children}
        </body>
    </html>
  )
}
