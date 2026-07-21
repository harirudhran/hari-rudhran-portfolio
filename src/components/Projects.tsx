import { useMemo, useState } from 'react';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import { categories, projects } from '../data';
import SectionHeading from './SectionHeading';
import { useReveal } from '../hooks/useReveal';

export default function Projects() {
  const [active, setActive] = useState('All');
  const ref = useReveal<HTMLDivElement>();

  const filtered = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section id="projects" className="px-4 sm:px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="What I've built" title="Projects" center />

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-label text-xs uppercase px-4 py-2.5 rounded-md border-2 border-primary transition-all duration-150 ${
                active === cat
                  ? 'bg-tertiary text-onprimary shadow-chunky-sm translate-y-0'
                  : 'bg-surface text-primary shadow-chunky-sm hover:-translate-y-0.5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div ref={ref} data-reveal-group className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <article
              key={project.title}
              className="reveal group bg-surface border-[3px] border-primary rounded-lg shadow-chunky p-6 flex flex-col hover:-translate-y-2 hover:shadow-glow transition-all duration-200"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-label text-[0.6rem] uppercase bg-neutral border-2 border-primary text-primary rounded-sm px-2 py-1">
                  {project.category}
                </span>
                <span className="font-label text-[0.6rem] uppercase text-tertiary flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                  {project.status}
                </span>
              </div>

              <h3 className="font-display text-xl text-primary mb-3 leading-snug">
                {project.title}
              </h3>

              <ul className="space-y-2 mb-4 flex-1">
                {project.description.map((line, li) => (
                  <li key={li} className="font-body text-sm text-secondary leading-relaxed flex gap-2">
                    <span className="text-tertiary mt-1.5 shrink-0">●</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-label text-[0.6rem] uppercase bg-neutral text-secondary rounded-sm px-2 py-1 border border-secondary/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-auto">
                <a
                  href={
                    project.github.startsWith('http') ? project.github : `https://${project.github}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-label text-xs uppercase bg-primary text-onprimary rounded-md px-4 py-2.5 border-2 border-primary shadow-chunky-sm hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none transition-all flex-1 justify-center"
                >
                  <FolderGit2 className="w-4 h-4" strokeWidth={2.5} />
                  Code
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-label text-xs uppercase bg-tertiary text-onprimary rounded-md px-4 py-2.5 border-2 border-primary shadow-chunky-sm hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none transition-all flex-1 justify-center"
                  >
                    <ExternalLink className="w-4 h-4" strokeWidth={2.5} />
                    Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
