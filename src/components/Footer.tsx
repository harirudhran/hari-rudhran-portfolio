import { FolderGit2, Link2, Mail, ArrowUp } from 'lucide-react';
import { profile } from '../data';

export default function Footer() {
  return (
    <footer className="px-4 sm:px-6 py-10 border-t-[3px] border-primary bg-surface">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="font-label text-xs uppercase text-secondary text-center sm:text-left">
          © {new Date().getFullYear()} {profile.footerName ?? profile.name} — Built with React &amp; Tailwind
        </p>

        <div className="flex items-center gap-3">
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid place-items-center w-9 h-9 rounded-md border-2 border-primary bg-neutral hover:bg-tertiary hover:text-onprimary transition-all"
          >
            <FolderGit2 className="w-4 h-4" strokeWidth={2.25} />
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid place-items-center w-9 h-9 rounded-md border-2 border-primary bg-neutral hover:bg-tertiary hover:text-onprimary transition-all"
          >
            <Link2 className="w-4 h-4" strokeWidth={2.25} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="grid place-items-center w-9 h-9 rounded-md border-2 border-primary bg-neutral hover:bg-tertiary hover:text-onprimary transition-all"
          >
            <Mail className="w-4 h-4" strokeWidth={2.25} />
          </a>
          <a
            href="#top"
            aria-label="Back to top"
            className="grid place-items-center w-9 h-9 rounded-md border-2 border-primary bg-tertiary text-onprimary hover:-translate-y-0.5 transition-all"
          >
            <ArrowUp className="w-4 h-4" strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </footer>
  );
}
