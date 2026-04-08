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

  async function submit() {
    setLoading(true);

    const response = await fetch('/api/submit-move', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        action_steps: form.action_steps
          .split('\n')
          .map((step) => step.trim())
          .filter(Boolean),
        tags: form.tags
          .split(',')
          .map((tag) => tag.trim())
          .filter(Boolean)
      })
    });

    setLoading(false);

    if (response.ok) {
      setDone(true);
    }
  }

  return (
    <main className="submit-shell">
      <div className="eyebrow">Cruxenio</div>
      <h1 className="page-title">Submit a move</h1>
      <p className="page-subtitle">
        Add a real-world behavior that actually works.
      </p>

      <div className="panel form-panel" style={{ marginTop: '28px' }}>
        {done ? (
          <div className="waitlist-note success">Submitted. Awaiting approval.</div>
        ) : (
          <div className="form-grid">
            <input
              placeholder="Title"
              className="field"
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />

            <textarea
              placeholder="Summary"
              className="textarea"
              onChange={(e) => setForm({ ...form, summary: e.target.value })}
            />

            <textarea
              placeholder="Situation"
              className="textarea"
              onChange={(e) => setForm({ ...form, situation: e.target.value })}
            />

            <textarea
              placeholder="Action steps (one per line)"
              className="textarea"
              onChange={(e) => setForm({ ...form, action_steps: e.target.value })}
            />

            <textarea
              placeholder="Why it works"
              className="textarea"
              onChange={(e) => setForm({ ...form, why_it_works: e.target.value })}
            />

            <input
              placeholder="Tags (comma separated)"
              className="field"
              onChange={(e) => setForm({ ...form, tags: e.target.value })}
            />

            <button onClick={submit} className="btn-primary">
              {loading ? 'Submitting...' : 'Submit move'}
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
