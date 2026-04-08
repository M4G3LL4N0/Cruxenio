import { createServerSupabaseClient } from '@/lib/supabase/server';
import { MoveRow } from '@/lib/moves';

export default async function Admin() {
  const supabase = createServerSupabaseClient();

  const { data, error } = await supabase
    .schema('cruxenio')
    .from('moves')
    .select('*')
    .eq('status', 'draft');

  return (
    <main className="p-10 text-white">
      <h1 className="text-3xl mb-6">Admin</h1>

      {error && (
        <div className="bg-red-500 text-white p-4 rounded mb-6">
          Error loading drafts: {error.message}
        </div>
      )}
      {data?.map((m: MoveRow) => (
        <div key={m.id} className="mb-6 border p-4 rounded">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-medium">{m.title}</h2>
              <p className="mt-1 text-white/80">{m.summary}</p>
            </div>
            <form action={`/api/approve-move?id=${m.id}`} method="POST">
              <button
                type="submit"
                className="bg-white text-black px-3 py-1 text-sm rounded hover:bg-white/90"
              >
                Approve
              </button>
            </form>
          </div>
        </div>
      ))}
    </main>
  );
}
