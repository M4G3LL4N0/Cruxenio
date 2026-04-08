import type { Metadata } from 'next';
import Link from 'next/link';
import { createServerSupabaseClient } from '@/lib/supabase/server';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cruxenio',
  description: 'Learn how to move through life better.'
};

export const dynamic = 'force-static';
export const revalidate = 3600;

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  let error = null;
  
  try {
    // Initialize Supabase client
    const supabase = createServerSupabaseClient();
    const { error: authError } = await supabase.auth.getSession();
    error = authError;
    
    // Test schema access
    const { error: schemaError } = await supabase
      .schema('cruxenio')
      .from('moves')
      .select('*')
      .limit(1);
      
    if (schemaError) {
      error = schemaError;
    }
  } catch (err) {
    console.error('Supabase initialization error:', err);
    error = err;
  }
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

        <div className="page-wrap">
          {error ? (
            <div className="shell">
              <div className="bg-red-500/20 p-6 rounded-lg border border-red-500/30">
                <h2 className="text-red-300 font-medium">Database Connection Error</h2>
                <p className="text-red-400/80 mt-2 text-sm">
                  {error.code === '42501' 
                    ? 'Database permissions issue detected. Please check your Supabase configuration.'
                    : 'We\'re experiencing some technical difficulties. Please try again later.'}
                </p>
              </div>
            </div>
          ) : null}
          {children}
        </div>
      </body>
    </html>
  );
}
