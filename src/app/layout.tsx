import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cruxenio',
  description: 'Learn how to move through life better.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#0a0e1a] to-[#07090d]">
        {children}
      </body>
    </html>
  );
}
