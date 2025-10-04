import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Founders Summit 2025 - Startup Networking & Demos',
  description: 'Join the premier startup networking event featuring founders, investors, and innovators. Connect, learn, and grow your startup at Founders Summit 2025.',
  keywords: 'startup, networking, founders, investors, demos, entrepreneurship, innovation',
  authors: [{ name: 'Founders Summit' }],
  creator: 'Founders Summit',
  publisher: 'Founders Summit',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://founderssummit.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Founders Summit 2025 - Startup Networking & Demos',
    description: 'Join the premier startup networking event featuring founders, investors, and innovators.',
    url: 'https://founderssummit.com',
    siteName: 'Founders Summit',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Founders Summit 2025',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Founders Summit 2025 - Startup Networking & Demos',
    description: 'Join the premier startup networking event featuring founders, investors, and innovators.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0B0D0F" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
