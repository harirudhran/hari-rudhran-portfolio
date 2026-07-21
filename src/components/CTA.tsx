import { Rocket } from 'lucide-react';
import { profile } from '../data';
import { useReveal } from '../hooks/useReveal';

export default function CTA() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="px-4 sm:px-6 py-16">
      <div
        ref={ref}
        className="reveal mx-auto max-w-4xl bg-primary border-[3px] border-primary rounded-lg shadow-glow-lg p-10 sm:p-14 text-center relative overflow-hidden"
      >
        <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-tertiary/20 animate-float" />
        <div
          className="absolute -bottom-14 -right-10 w-48 h-48 rounded-full bg-tertiary/10 animate-float"
          style={{ animationDelay: '1.2s' }}
        />
        <div className="relative">
          <Rocket className="w-10 h-10 text-tertiary mx-auto mb-5 animate-bob" strokeWidth={2} />
          <h2 className="font-display text-3xl sm:text-4xl text-onprimary mb-4">
            {profile.ctaMessage}
          </h2>
          <p className="font-body text-neutral/80 max-w-md mx-auto mb-8">
            {profile.availability} — reach out and let's build something great together.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-tertiary text-onprimary font-label text-xs uppercase px-8 py-4 rounded-md border-2 border-onprimary shadow-chunky hover:-translate-y-1 active:translate-y-0.5 active:shadow-chunky-sm transition-all duration-150"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
