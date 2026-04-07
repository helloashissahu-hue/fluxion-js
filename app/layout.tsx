import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fluxion - One API to control all data',
  description: 'A full data orchestration engine that replaces Axios, React Query, SWR, and basic API SDKs with a single, unified API.',
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
