import { NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase/server';
import { slugify } from '@/lib/utils';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.title || !body.summary) {
      return NextResponse.json({ error: 'Title and summary are required' }, { status: 400 });
    }

    const supabase = createServerSupabaseClient();

    const slug = slugify(body.title);

    const { error } = await supabase
      .schema('cruxenio')
      .from('moves')
      .insert([
        {
          slug,
          title: body.title,
          summary: body.summary,
          situation: body.situation,
          action_steps: body.action_steps,
          why_it_works: body.why_it_works,
          when_not_to_use: body.when_not_to_use || null,
          tags: body.tags || [],
          status: 'draft'
        }
      ]);

    if (error) {
      console.error(error);
      return NextResponse.json({ error: 'Insert failed' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });

  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Bad request' }, { status: 400 });
  }
}
