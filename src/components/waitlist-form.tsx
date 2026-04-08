'use client';

import { useState } from 'react';

export function WaitlistForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setStatus('success');
      setMessage('You’re in. We’ll send updates soon.');
      setName('');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Something went wrong');
    }
  }

  return (
    <form onSubmit={onSubmit} className="waitlist-form">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="field"
      />

      <input
        type="email"
        placeholder="Email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="field"
      />

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary"
      >
        {status === 'loading' ? 'Joining...' : 'Join waitlist'}
      </button>

      <div
        className={`waitlist-note ${
          status === 'success' ? 'success' : status === 'error' ? 'error' : ''
        }`}
      >
        {message}
      </div>
    </form>
  );
}
