'use client';

import { useState } from 'react';

export default function SubmitPage() {
  const [form, setForm] = useState({
    title: '',
    summary: '',
    situation: '',
    action_steps: '',
    why_it_works: '',
    tags: ''
  });

  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const [error, setError] = useState('');

  async function submit() {
    if (!form.title.trim() || !form.summary.trim()) {
      setError('Title and summary are required');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/submit-move', {
        method: 'POST',
        body: JSON.stringify({
          ...form,
          action_steps: form.action_steps.split('\n'),
          tags: form.tags.split(',').map(t => t.trim()).filter(t => t)
        })
      });

      if (!res.ok) {
        throw new Error(await res.text());
      }
      setDone(true);
    } catch (err) {
      setError(err.message || 'Submission failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16 max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6">Submit a Move</h1>

      {done ? (
        <div className="border border-green-500 bg-green-500/10 p-4 rounded">
          <h3 className="font-medium text-green-400">Submitted for review!</h3>
          <p className="mt-1 text-green-400/80">
            Your move will appear publicly after moderator approval.
          </p>
        </div>
      ) : (
        <div className="space-y-4">

          <input placeholder="Title"
            className="w-full p-3 bg-neutral-900 rounded"
            onChange={e => setForm({...form, title: e.target.value})}
          />

          <textarea placeholder="Summary"
            className="w-full p-3 bg-neutral-900 rounded"
            onChange={e => setForm({...form, summary: e.target.value})}
          />

          <textarea placeholder="Situation"
            className="w-full p-3 bg-neutral-900 rounded"
            onChange={e => setForm({...form, situation: e.target.value})}
          />

          <textarea placeholder="Action steps (one per line)"
            className="w-full p-3 bg-neutral-900 rounded"
            onChange={e => setForm({...form, action_steps: e.target.value})}
          />

          <textarea placeholder="Why it works"
            className="w-full p-3 bg-neutral-900 rounded"
            onChange={e => setForm({...form, why_it_works: e.target.value})}
          />

          <input placeholder="Tags (comma separated)"
            className="w-full p-3 bg-neutral-900 rounded"
            onChange={e => setForm({...form, tags: e.target.value})}
          />

          <button
            onClick={submit}
            className="bg-white text-black px-4 py-2 rounded"
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      )}
    </main>
  );
}
