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
    <form onSubmit={onSubmit} className="flex w-full flex-col gap-3 sm:flex-row">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="glass h-12 rounded-2xl px-4 text-sm text-white placeholder:text-white/40 outline-none transition focus:ring-2 focus:ring-[#ff7e5f]"
      />
      <input
        type="email"
        placeholder="Email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="glass h-12 flex-1 rounded-2xl px-4 text-sm text-white placeholder:text-white/40 outline-none transition focus:ring-2 focus:ring-[#ff7e5f]"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="h-12 rounded-2xl bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] px-5 text-sm font-semibold text-black transition-all hover-glow disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white"
      >
        {status === 'loading' ? 'Joining...' : 'Join waitlist'}
      </button>

      {message ? (
        <p className={`text-sm sm:basis-full ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
          {message}
        </p>
      ) : null}
    </form>
  );
}
