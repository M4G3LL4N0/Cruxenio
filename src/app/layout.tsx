import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: "Cruxenio",
  description: "Premium strategic intelligence for high-conviction decision making.",
  metadataBase: process.env.NODE_ENV === 'production' 
    ? new URL("https://cruxenio.com")
    : new URL("http://localhost:3000"),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#06070b",
};

type RootLayoutProps = {
  children: ReactNode;
}

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  adjustFontFallback: false
})

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${inter.variable} bg-[#06070b] text-white`}>
      <body className="min-h-screen antialiased">
        <div className="fixed inset-0 -z-10 bg-[#06070b]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(255,143,107,0.1),transparent_28%),radial-gradient(circle_at_20%_20%,rgba(76,110,245,0.1),transparent_24%)]" />
        </div>
        {children}
      </body>
    </html>
  );
}
