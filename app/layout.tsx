import './globals.css'
import type { Metadata } from 'next'
import { NabVar } from '@/components/NabVar'
import { Footer } from '@/components/Footer'


export const metadata: Metadata = {
  title: 'Car Hub',
  description: 'Discover the best cars in the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NabVar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
