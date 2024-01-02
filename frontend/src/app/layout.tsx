import '../../styles/_globals.scss'
import type { Metadata } from 'next'
import { Providers } from './providers'
import { cn } from '@/lib/utils'
import NextTopLoader from 'nextjs-toploader'
import { Inter } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  weight: '400'
})
export const metadata: Metadata = {
  title: 'Lâm Việt Cường',
  description: 'Generated by create next app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang='en'>
      <body className={cn('min-h-screen bg-background antialiased')}>
        <Providers>
          <NextTopLoader crawlSpeed={0} crawl={false} />
          <main className={inter.className}>{children}</main>
        </Providers>
      </body>
    </html>
  )
}