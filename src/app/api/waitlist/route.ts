import { NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase/server';
import type { Database } from '@/types/database';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = String(body.email || '').trim().toLowerCase();
    const name = body.name ? String(body.name).trim() : null;

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Please enter a valid email.' }, { status: 400 });
    }

    const supabase = createServerSupabaseClient();

    const payload: Database['cruxenio']['Tables']['waitlist_signups']['Insert'] = {
      email,
      name,
      source: 'website',
      metadata: {
        userAgent: request.headers.get('user-agent')
      }
    };

    const { error } = await supabase.from('waitlist_signups').insert(payload);

    if (error && error.code === '23505') {
      return NextResponse.json({ ok: true, duplicate: true });
    }

    if (error) {
      console.error(error);
      return NextResponse.json({ error: 'Failed to join waitlist.' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }
}
