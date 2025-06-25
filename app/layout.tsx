import type { Metadata } from 'next'
import './globals.css'
import ScrollToTop from "./components/ScrollToTop"

export const metadata: Metadata = {
  title: 'FC Educaciøn',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ScrollToTop />
        {children}
      </body>
    </html>
  )
}
