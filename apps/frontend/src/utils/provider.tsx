'use client'

import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth'
import { Toaster } from '@frontend/components/ui/toaster'
import { ThemeProvider } from 'next-themes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { useState } from 'react'
import { ConfirmationDialogContextProvider } from '@frontend/hooks/ConfirmDialog'

export function Provider({ children, session }: { children: React.ReactNode; session?: Session }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // staleTime: 60 * 1000,
            refetchOnWindowFocus: false
          }
        }
      })
  )

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <ConfirmationDialogContextProvider>
          <ThemeProvider>{children}</ThemeProvider>
          <Toaster />
          <ReactQueryDevtools buttonPosition='bottom-left' />
        </ConfirmationDialogContextProvider>
      </SessionProvider>
    </QueryClientProvider>
  )
}
