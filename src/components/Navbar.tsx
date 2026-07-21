import { useEffect, useState } from 'react';
import { Menu, X, Download, Gamepad2 } from 'lucide-react';
import { navLinks, profile } from '../data';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <nav
        className={`mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between rounded-lg border-[3px] border-primary bg-surface/90 backdrop-blur-md transition-all duration-300 ${
          scrolled ? 'shadow-chunky-sm py-2' : 'shadow-chunky py-3'
        }`}
      >
        {/* Logo — TAP Academy style badge, not student name */}
        <a href="#top" className="flex items-center gap-2 shrink-0 group">
          <span className="grid place-items-center w-10 h-10 rounded-md bg-tertiary border-2 border-primary shadow-chunky-sm group-hover:-translate-y-0.5 group-active:translate-y-0.5 group-active:shadow-none transition-all duration-150">
            <Gamepad2 className="w-5 h-5 text-onprimary" strokeWidth={2.5} />
          </span>
          <span className="font-display font-700 text-primary text-sm sm:text-base hidden xs:block">
            TAP<span className="text-tertiary">Academy</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6 font-label text-xs uppercase tracking-wide text-primary">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative py-1 hover:text-tertiary transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0 after:bg-tertiary after:rounded-full after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-tertiary text-onprimary font-label text-xs uppercase px-4 py-2.5 rounded-md border-2 border-primary shadow-chunky-sm hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none transition-all duration-150"
          >
            <Download className="w-4 h-4" strokeWidth={2.5} />
            Download Resume
          </a>

          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
            className="md:hidden grid place-items-center w-10 h-10 rounded-md border-2 border-primary bg-neutral shadow-chunky-sm active:translate-y-0.5 active:shadow-none transition-all"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden mx-auto max-w-6xl px-4 sm:px-6 overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 mt-2' : 'max-h-0'
        }`}
      >
        <div className="rounded-lg border-[3px] border-primary bg-surface shadow-chunky p-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-label text-sm uppercase text-primary hover:text-tertiary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-tertiary text-onprimary font-label text-xs uppercase px-4 py-3 rounded-md border-2 border-primary shadow-chunky-sm active:translate-y-0.5 active:shadow-none transition-all"
          >
            <Download className="w-4 h-4" strokeWidth={2.5} />
            Download Resume
          </a>
        </div>
      </div>
    </header>
  );
}
