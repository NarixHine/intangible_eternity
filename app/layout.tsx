import type { Metadata } from 'next'
import { Noto_Serif_SC } from 'next/font/google'
import './globals.css'
import NavBar from './navbar'

const noto = Noto_Serif_SC({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: '非物质的永恒',
  description: '华师大二附中学子致以古老文化的现代献礼',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='zh-CN'>
      <body className={noto.className}>
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  )
}
