import type { Metadata } from 'next';
import './globals.css';
import { createServerSupabaseClient } from '@/lib/supabase/server';

// Initialize Supabase client at the root level
const supabase = createServerSupabaseClient();

export const metadata: Metadata = {
  title: 'Cruxenio',
  description: 'Learn how to move through life better.'
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Test Supabase connection
  try {
    await supabase.from('moves').select('*').limit(1);
  } catch (error) {
    console.error('Failed to connect to Supabase:', error);
  }
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
