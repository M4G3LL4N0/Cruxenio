import { createServerSupabaseClient } from '@/lib/supabase/server';
import { MoveRow } from '@/lib/moves';
import { redirect } from 'next/navigation';
import { SubmitButton } from '@/components/ui/submit-button';

export default async function Admin() {
  let supabase;
  try {
    supabase = createServerSupabaseClient();
  } catch (error) {
    console.error('Failed to initialize Supabase client:', error);
    return (
      <main className="p-10 text-white">
        <div className="bg-red-500 text-white p-4 rounded mb-6">
          Failed to initialize database connection
        </div>
      </main>
    );
  }

  const { data, error } = await supabase
    .schema('cruxenio')
    .from('moves')
    .select('*')
    .eq('status', 'draft')
    .returns<MoveRow[]>();

  return (
    <main className="p-10 text-white">
      <h1 className="text-3xl mb-6">Admin</h1>

      {error && (
        <div className="bg-red-500 text-white p-4 rounded mb-6">
          Error loading drafts: {error.message}
        </div>
      )}
      {data && data.length > 0 ? (
        data.map((m: MoveRow) => (
        <div key={m.id} className="mb-6 border p-4 rounded">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-medium">{m.title}</h2>
              <p className="mt-1 text-white/80">{m.summary}</p>
            </div>
            <form action={`/api/approve-move`} method="POST">
              <input type="hidden" name="id" value={m.id} />
              <SubmitButton
                className="bg-white text-black px-3 py-1 text-sm rounded hover:bg-white/90"
                pendingText="Approving..."
              >
                Approve
              </SubmitButton>
            </form>
          </div>
        </div>
        ))
      ) : (
        <div className="text-white/80">No draft moves found</div>
      )}
    </main>
  );
}
