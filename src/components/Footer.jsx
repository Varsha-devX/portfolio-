import { portfolio } from '../data/portfolio';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200/80 bg-white/50 backdrop-blur-xs">
      <div className="section-shell flex flex-col items-center justify-between gap-6 py-8 sm:flex-row text-xs text-slate-500">
        <div className="flex items-center gap-3">
          <span className="font-extrabold text-slate-900 tracking-wider">VARSHA</span>
          <span>•</span>
          <span>© {new Date().getFullYear()} All rights reserved</span>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={portfolio.socials.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 font-medium text-slate-700 hover:text-slate-900 transition"
          >
            <GithubIcon className="h-3.5 w-3.5" />
            <span>GitHub</span>
          </a>
          <a
            href={portfolio.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 font-medium text-slate-700 hover:text-slate-900 transition"
          >
            <LinkedinIcon className="h-3.5 w-3.5 text-blue-600" />
            <span>LinkedIn</span>
          </a>
          <a
            href={`mailto:${portfolio.contact.email}`}
            className="font-medium text-slate-700 hover:text-slate-900 transition"
          >
            Email
          </a>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-700 shadow-2xs hover:bg-slate-50 active:scale-95 transition"
            title="Scroll to top"
          >
            <ArrowUp className="h-3 w-3" />
            <span>Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
