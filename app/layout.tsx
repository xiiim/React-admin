import ColorModeProvider from '@/providers/ColorModeProvider'
import './globals.css'
import type { Metadata } from 'next'
import MyThemeProvider from '@/providers/ThemeProvider'
import { StyleProvider } from '@/providers/StyleProvider'
import Topbar from '@/components/Topbar'
import Sidebar from '@/components/Sidebar'

export const metadata: Metadata = {
  title: 'React Admin',
  description: 'React Admin App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body>
        <ColorModeProvider>
          <MyThemeProvider>
          <StyleProvider />
            <div className='flex relative'>
              <Sidebar />
              <main className='w-full h-full'>
                <Topbar></Topbar>
                {children}
              </main>
            </div>
          </MyThemeProvider> 
        </ColorModeProvider>
      </body>
    </html>
  )
}
