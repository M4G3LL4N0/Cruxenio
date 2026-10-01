"use client";

import { useState } from "react";

export function PracticeMove({
  steps,
  nextHref,
  nextTitle,
}: {
  steps: string[];
  nextHref: string;
  nextTitle: string;
}) {
  const [done, setDone] = useState<boolean[]>(() => steps.map(() => false));
  const finished = steps.length > 0 && done.every(Boolean);

  return (
    <section className="detail-block">
      <h2>Practice this move</h2>
      <ol>
        {steps.map((step, index) => (
          <li key={`${index}-${step}`}>
            <label>
              <input
                type="checkbox"
                checked={done[index]}
                onChange={() =>
                  setDone((current) => current.map((value, item) => (item === index ? !value : value)))
                }
              />{" "}
              {step}
            </label>
          </li>
        ))}
      </ol>
      {finished ? (
        <p>
          You walked this move. Next situation: <a href={nextHref}>{nextTitle}</a>
        </p>
      ) : (
        <p>Check each step as you practice it. The next situation stays closed until this one is walked.</p>
      )}
    </section>
  );
}
