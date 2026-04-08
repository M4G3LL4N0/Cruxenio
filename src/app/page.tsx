import Link from 'next/link';
import { ArrowRight, Sparkles, Waypoints, Brain, PersonStanding } from 'lucide-react';
import { WaitlistForm } from '@/components/waitlist-form';

const featuredMoves = [
  'How to enter a room calmly and confidently',
  'How to keep a conversation flowing without trying too hard',
  'How to stay composed under pressure',
  'How to make a better first impression in 10 seconds'
];

export const dynamic = 'force-static';
export const revalidate = 3600;

export default function HomePage() {
  return (
    <main>
      <section className="section">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">Behavior intelligence platform</div>

            <h1 className="hero-title">
              Master the <span className="accent">art of movement</span> in life
            </h1>

            <p className="hero-subtitle">
              Cruxenio is a behavior intelligence platform for real-world life moves:
              communication, presence, confidence, social flow, awareness, and everyday situations.
            </p>

            <div className="hero-actions">
              <Link href="/moves" className="btn-primary">
                Explore moves
                <ArrowRight size={18} />
              </Link>

              <a href="#waitlist" className="btn-secondary">
                Join waitlist
              </a>
            </div>
          </div>

          <div className="hero-strip">
            {featuredMoves.map((item) => (
              <div key={item} className="hero-pill">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="shell cards-grid">
          <div className="card">
            <div className="card-icon">
              <Waypoints size={18} />
            </div>
            <h2>Moves</h2>
            <p>
              Structured real-world behaviors you can use immediately.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">
              <Brain size={18} />
            </div>
            <h2>Why it works</h2>
            <p>
              Every move includes the underlying psychology, not just the tactic.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">
              <PersonStanding size={18} />
            </div>
            <h2>Real-life situations</h2>
            <p>
              Dating, networking, conflict, confidence, first impressions, and more.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">
              <Sparkles size={18} />
            </div>
            <h2>Compounding improvement</h2>
            <p>
              Small behavioral upgrades that stack into a smoother, stronger life.
            </p>
          </div>
        </div>
      </section>

      <section id="waitlist" className="section-tight">
        <div className="shell">
          <div className="panel waitlist-panel">
            <div className="waitlist-grid">
              <div>
                <div className="eyebrow">Early access</div>
                <h2 className="section-title">Get access before public launch.</h2>
                <p className="section-copy">
                  Join the list for early access, product updates, and the first release of Cruxenio moves.
                </p>
              </div>

              <WaitlistForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
