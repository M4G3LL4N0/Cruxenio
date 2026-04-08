import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cruxenio',
  description: 'Learn how to move through life better.'
};

export const dynamic = 'force-static';
export const revalidate = 3600;

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="site-bg" />
        <header className="site-header">
          <div className="shell nav-shell">
            <Link href="/" className="brand-mark">
              CRUXENIO
            </Link>

            <nav className="nav-links">
              <Link href="/moves">Moves</Link>
              <Link href="/submit">Submit</Link>
              <Link href="/admin">Admin</Link>
            </nav>
          </div>
        </header>

        <div className="page-wrap">{children}</div>
      </body>
    </html>
  );
}
