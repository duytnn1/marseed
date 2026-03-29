import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin', 'vietnamese'],
  variable: '--font-inter' 
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins' 
})

export const metadata: Metadata = {
  title: 'MarkSeed - AI-Powered Comment Seeding for Vietnamese Market',
  description: 'Tự động hóa comment seeding trên các nền tảng mạng xã hội và thương mại điện tử Việt Nam với AI được tối ưu hóa địa phương.',
  keywords: 'AI marketing, comment seeding, Vietnamese social media, Shopee, Lazada, TikTok, Facebook, Zalo',
  authors: [{ name: 'MarkSeed Team' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'MarkSeed - AI-Powered Comment Seeding Tool',
    description: 'Công cụ AI tạo comment tự động cho thị trường Việt Nam',
    type: 'website',
    locale: 'vi_VN',
    alternateLocale: 'en_US',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
          {children}
        </div>
      </body>
    </html>
  )
} 