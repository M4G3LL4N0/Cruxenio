import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Inter } from 'next/font/google';

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Cruxenio",
  description: "Premium strategic intelligence for high-conviction decision making.",
  metadataBase: new URL("https://cruxenio.com"),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#06070b",
};

interface RootLayoutProps {
  children: ReactNode;
}

const inter = Inter({ subsets: ['latin'] });

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${inter.className} bg-[#06070b] text-white`}>
      <body className="min-h-screen antialiased">
        <div className="fixed inset-0 -z-10 bg-[#06070b]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(255,143,107,0.1),transparent_28%),radial-gradient(circle_at_20%_20%,rgba(76,110,245,0.1),transparent_24%)]" />
        </div>
        {children}
      </body>
    </html>
  );
}
