import { GraduationCap } from 'lucide-react';
import { education } from '../data';
import SectionHeading from './SectionHeading';
import { useReveal } from '../hooks/useReveal';

export default function Education() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="education" className="px-4 sm:px-6 py-20 sm:py-28 bg-surface/60">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Where it started" title="Education" center />

        <div ref={ref} data-reveal-group className="space-y-6">
          {education.map((edu) => (
            <div
              key={edu.institute}
              className="reveal flex gap-5 bg-surface border-[3px] border-primary rounded-lg shadow-chunky p-6 hover:-translate-y-1 hover:shadow-glow transition-all duration-200"
            >
              <div className="shrink-0 grid place-items-center w-14 h-14 rounded-md bg-tertiary border-2 border-primary shadow-chunky-sm">
                <GraduationCap className="w-7 h-7 text-onprimary" strokeWidth={2.25} />
              </div>
              <div>
                <h3 className="font-display text-lg sm:text-xl text-primary mb-1">{edu.degree}</h3>
                <p className="font-body text-secondary mb-1">{edu.institute} — {edu.location}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="font-label text-[0.6rem] uppercase bg-neutral border-2 border-primary text-primary rounded-sm px-2.5 py-1">
                    {edu.status}
                  </span>
                  <span className="font-label text-[0.6rem] uppercase bg-neutral border-2 border-primary text-primary rounded-sm px-2.5 py-1">
                    {edu.description}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
