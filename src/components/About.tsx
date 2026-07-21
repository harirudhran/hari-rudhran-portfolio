import { useState } from 'react';
import { ChevronDown, MapPin, Sparkles } from 'lucide-react';
import { aboutDetailed, aboutShort, profile } from '../data';
import SectionHeading from './SectionHeading';
import { useReveal } from '../hooks/useReveal';

export default function About() {
  const [expanded, setExpanded] = useState(false);
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="px-4 sm:px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Get to know me" title="About Me" />

        <div ref={ref} className="reveal bg-surface border-[3px] border-primary rounded-lg shadow-chunky p-6 sm:p-8">
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 bg-neutral border-2 border-primary rounded-sm px-3 py-1.5 font-label text-[0.65rem] uppercase text-primary">
              <MapPin className="w-3.5 h-3.5" /> {profile.location}
            </span>
            <span className="inline-flex items-center gap-1.5 bg-neutral border-2 border-primary rounded-sm px-3 py-1.5 font-label text-[0.65rem] uppercase text-primary">
              <Sparkles className="w-3.5 h-3.5" /> {profile.domain}
            </span>
          </div>

          <p className="font-body text-base sm:text-lg text-primary leading-relaxed mb-4">
            {aboutShort}
          </p>

          <div
            className={`grid transition-all duration-500 ease-in-out ${
              expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            }`}
          >
            <div className="overflow-hidden">
              <div className="pt-2 space-y-4">
                {aboutDetailed.map((para, i) => (
                  <p key={i} className="font-body text-secondary leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={() => setExpanded((e) => !e)}
            className="mt-4 inline-flex items-center gap-2 font-label text-xs uppercase text-tertiary hover:underline"
          >
            {expanded ? 'Show less' : 'Read full story'}
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
