import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Therosessom - Premium Web Design Studio',
  description: 'We create strategically built Shopify & Squarespace websites for female-led brands who are ready to flourish.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}