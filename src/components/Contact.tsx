import { useState } from 'react';
import type { FormEvent } from 'react';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { profile } from '../data';
import SectionHeading from './SectionHeading';
import { useReveal } from '../hooks/useReveal';

export default function Contact() {
  const ref = useReveal<HTMLDivElement>();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'a visitor'}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="px-4 sm:px-6 py-20 sm:py-28 bg-surface/60">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Say hello" title="Contact Me" center />

        <div ref={ref} className="reveal grid md:grid-cols-[0.9fr_1.1fr] gap-6">
          <div className="bg-primary text-onprimary border-[3px] border-primary rounded-lg shadow-chunky p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h3 className="font-display text-xl mb-3">Let's connect</h3>
              <p className="font-body text-neutral/80 text-sm mb-8">
                {profile.availability}. Drop a message and I'll get back to you soon.
              </p>
            </div>
            <div className="space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 group"
              >
                <span className="grid place-items-center w-10 h-10 rounded-md bg-tertiary shrink-0 group-hover:-translate-y-0.5 transition-transform">
                  <Mail className="w-4 h-4 text-onprimary" strokeWidth={2.5} />
                </span>
                <span className="font-body text-sm break-all">{profile.email}</span>
              </a>
              <div className="flex items-center gap-3">
                <span className="grid place-items-center w-10 h-10 rounded-md bg-tertiary shrink-0">
                  <MapPin className="w-4 h-4 text-onprimary" strokeWidth={2.5} />
                </span>
                <span className="font-body text-sm">{profile.location}</span>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-surface border-[3px] border-primary rounded-lg shadow-chunky p-6 sm:p-8 flex flex-col gap-4"
          >
            <div>
              <label htmlFor="name" className="font-label text-[0.65rem] uppercase text-secondary block mb-1.5">
                Name
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                placeholder="Your name"
                className="w-full rounded-md border-2 border-primary bg-neutral px-4 py-3 font-body text-sm text-primary placeholder:text-secondary/60 focus:outline-none focus:ring-2 focus:ring-tertiary focus:shadow-glow transition-all"
              />
            </div>
            <div>
              <label htmlFor="email" className="font-label text-[0.65rem] uppercase text-secondary block mb-1.5">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                placeholder="you@example.com"
                className="w-full rounded-md border-2 border-primary bg-neutral px-4 py-3 font-body text-sm text-primary placeholder:text-secondary/60 focus:outline-none focus:ring-2 focus:ring-tertiary focus:shadow-glow transition-all"
              />
            </div>
            <div>
              <label htmlFor="message" className="font-label text-[0.65rem] uppercase text-secondary block mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                placeholder="Tell me about your project..."
                className="w-full rounded-md border-2 border-primary bg-neutral px-4 py-3 font-body text-sm text-primary placeholder:text-secondary/60 focus:outline-none focus:ring-2 focus:ring-tertiary focus:shadow-glow transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-tertiary text-onprimary font-label text-xs uppercase px-6 py-3.5 rounded-md border-2 border-primary shadow-chunky-sm hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none transition-all duration-150"
            >
              {sent ? (
                <>
                  <CheckCircle2 className="w-4 h-4" strokeWidth={2.5} /> Opening your mail app...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" strokeWidth={2.5} /> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
