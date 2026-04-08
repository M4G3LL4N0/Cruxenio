import type { Metadata } from 'next';
import './globals.css';
import { createServerSupabaseClient } from '@/lib/supabase/server';

export const metadata: Metadata = {
  title: 'Cruxenio',
  description: 'Learn how to move through life better.'
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Initialize Supabase client early to catch any errors
  try {
    const supabase = createServerSupabaseClient();
    // Test connection
    await supabase.from('moves').select('*').limit(1);
  } catch (error) {
    console.error('Failed to initialize Supabase:', error);
    process.exit(1);
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
