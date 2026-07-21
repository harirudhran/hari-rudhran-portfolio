import type { ReactNode } from 'react';

export default function SectionHeading({
  eyebrow,
  title,
  center = false,
}: {
  eyebrow: string;
  title: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={`mb-10 ${center ? 'text-center' : ''}`}>
      <span className="inline-block font-label text-[0.7rem] uppercase text-tertiary bg-surface border-2 border-primary rounded-sm px-3 py-1 shadow-chunky-sm mb-3">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl sm:text-4xl text-primary">{title}</h2>
    </div>
  );
}
