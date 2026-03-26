import { createServerSupabaseClient } from '@/lib/supabase/server';

export default async function Admin() {
  const supabase = createServerSupabaseClient();

  const { data } = await supabase
    .schema('cruxenio')
    .from('moves')
    .select('*')
    .eq('status', 'draft');

  return (
    <main className="p-10 text-white">
      <h1 className="text-3xl mb-6">Admin</h1>

      {data?.map((m) => (
        <div key={m.id} className="mb-6 border p-4 rounded">
          <h2>{m.title}</h2>
          <p>{m.summary}</p>
        </div>
      ))}
    </main>
  );
}
