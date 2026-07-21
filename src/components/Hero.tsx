import { useEffect, useState } from 'react';
import { ArrowDown, FolderGit2, Link2, Mail } from 'lucide-react';
import { profile } from '../data';

function useTypewriter(words: string[], speed = 90, pause = 1400) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: number;

    if (!deleting && text === current) {
      timeout = window.setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    } else {
      timeout = window.setTimeout(
        () => {
          setText((t) =>
            deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
          );
        },
        deleting ? speed / 2 : speed
      );
    }

    return () => window.clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(profile.typingRoles);

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-28 pb-16 px-4 sm:px-6 overflow-hidden"
    >
      {/* background bubbles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-16 w-72 h-72 rounded-full bg-tertiary/10 animate-float" />
        <div
          className="absolute top-1/3 -right-20 w-96 h-96 rounded-full bg-secondary/10 animate-float"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-56 h-56 rounded-full bg-tertiary/10 animate-float"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl w-full grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div className="animate-pop-in">
          <span className="inline-flex items-center gap-2 bg-surface border-2 border-primary rounded-md px-3 py-1.5 shadow-chunky-sm font-label text-[0.7rem] uppercase text-secondary mb-6">
            <span className="w-2 h-2 rounded-full bg-tertiary animate-blink" />
            {profile.availability}
          </span>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-primary mb-4">
            {profile.title}
          </h1>

          <div className="h-10 sm:h-12 flex items-center mb-5">
            <span className="font-display text-xl sm:text-2xl text-tertiary">
              {typed}
              <span className="inline-block w-[3px] h-6 sm:h-7 bg-tertiary ml-1 align-middle animate-blink" />
            </span>
          </div>

          <p className="font-body text-base sm:text-lg text-secondary max-w-lg mb-8">
            {profile.tagline}
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-tertiary text-onprimary font-label text-xs uppercase px-6 py-3.5 rounded-md border-2 border-primary shadow-chunky hover:-translate-y-1 active:translate-y-0.5 active:shadow-chunky-sm transition-all duration-150"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-surface text-primary font-label text-xs uppercase px-6 py-3.5 rounded-md border-2 border-primary shadow-chunky hover:-translate-y-1 active:translate-y-0.5 active:shadow-chunky-sm transition-all duration-150"
            >
              <Mail className="w-4 h-4" strokeWidth={2.5} />
              Contact Me
            </a>
          </div>

          <div className="flex items-center gap-4 mt-8">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid place-items-center w-11 h-11 rounded-md bg-surface border-2 border-primary shadow-chunky-sm hover:bg-tertiary hover:text-onprimary hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none transition-all"
            >
              <FolderGit2 className="w-5 h-5" strokeWidth={2.25} />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid place-items-center w-11 h-11 rounded-md bg-surface border-2 border-primary shadow-chunky-sm hover:bg-tertiary hover:text-onprimary hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none transition-all"
            >
              <Link2 className="w-5 h-5" strokeWidth={2.25} />
            </a>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end animate-pop-in" style={{ animationDelay: '0.15s' }}>
          <div className="relative animate-bob">
            <div className="absolute inset-0 rounded-full bg-tertiary/30 blur-2xl scale-90" />
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full border-[6px] border-primary shadow-glow-lg overflow-hidden bg-neutral">
              <img
                src={profile.photo}
                alt={profile.name}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-3 -right-2 sm:right-2 bg-surface border-2 border-primary rounded-md px-3 py-2 shadow-chunky-sm font-label text-[0.65rem] uppercase text-primary">
              {profile.domain}
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="hidden sm:grid absolute bottom-8 left-1/2 -translate-x-1/2 place-items-center w-10 h-10 rounded-full border-2 border-primary bg-surface shadow-chunky-sm animate-float"
      >
        <ArrowDown className="w-4 h-4" strokeWidth={2.5} />
      </a>
    </section>
  );
}
