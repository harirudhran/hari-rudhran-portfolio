import { skillGroups } from '../data';
import SectionHeading from './SectionHeading';
import { useReveal } from '../hooks/useReveal';

export default function Skills() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="skills" className="px-4 sm:px-6 py-20 sm:py-28 bg-surface/60">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="My toolkit" title="Skills & Tools" center />

        <div ref={ref} data-reveal-group className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, gi) => (
            <div
              key={group.label}
              className="reveal bg-surface border-[3px] border-primary rounded-lg shadow-chunky p-5 hover:-translate-y-1.5 hover:shadow-glow transition-all duration-200"
              style={{ transitionDelay: `${gi * 60}ms` }}
            >
              <h3 className="font-display text-lg text-primary mb-4 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-tertiary" />
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-label text-[0.65rem] uppercase bg-neutral border-2 border-primary text-primary rounded-sm px-2.5 py-1.5 hover:bg-tertiary hover:text-onprimary hover:-translate-y-0.5 transition-all duration-150 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
