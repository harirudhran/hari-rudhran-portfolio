import { Award, ShieldCheck } from 'lucide-react';
import { certifications } from '../data';
import SectionHeading from './SectionHeading';
import { useReveal } from '../hooks/useReveal';

export default function Certifications() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="certifications" className="px-4 sm:px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Proof of grind" title="Certifications" center />

        <div ref={ref} data-reveal-group className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <div
              key={cert.name}
              className="reveal bg-surface border-[3px] border-primary rounded-lg shadow-chunky p-5 flex flex-col hover:-translate-y-1.5 hover:shadow-glow transition-all duration-200"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="grid place-items-center w-11 h-11 rounded-md bg-neutral border-2 border-primary mb-4">
                <Award className="w-5 h-5 text-tertiary" strokeWidth={2.25} />
              </div>
              <h3 className="font-display text-base text-primary mb-1 leading-snug">{cert.name}</h3>
              <p className="font-body text-sm text-secondary mb-1">{cert.platform}</p>
              <p className="font-label text-[0.6rem] uppercase text-secondary mb-4">{cert.date}</p>
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 font-label text-[0.65rem] uppercase text-tertiary hover:underline"
              >
                <ShieldCheck className="w-4 h-4" strokeWidth={2.5} />
                Verify Credential
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
