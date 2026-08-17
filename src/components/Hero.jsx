import { ArrowRight, Mail } from 'lucide-react';
import { portfolio } from '../data/portfolio';
import { GithubIcon, LinkedinIcon } from './Icons';

export function Hero() {
  return (
    <section id="home" className="section-shell pt-12 pb-16 md:pt-20 md:pb-24">
      <div className="max-w-3xl space-y-6">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-600/20 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-800 shadow-xs">
          <span className="live-dot h-2 w-2 rounded-full bg-emerald-500" />
          <span>Available for Opportunities • 4th Year CSE</span>
        </div>

        {/* Heading */}
        <div className="space-y-2">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
            Hello, I am {portfolio.name}
          </p>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl xl:text-6xl leading-[1.15]">
            Building scalable web apps & mastering{' '}
            <span className="underline decoration-slate-300 decoration-wavy underline-offset-4">
              Full-Stack
            </span>{' '}
            systems.
          </h1>
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg leading-relaxed text-slate-600 max-w-2xl">
          {portfolio.tagline}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-3.5 pt-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-slate-900/15 transition hover:bg-slate-800 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Explore Projects</span>
            <ArrowRight className="h-4 w-4" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-xs transition hover:border-slate-400 hover:bg-slate-50 hover:-translate-y-0.5"
          >
            <Mail className="h-4 w-4 text-slate-500" />
            <span>Get in Touch</span>
          </a>

          <div className="flex items-center gap-2 pl-2">
            <a
              href={portfolio.socials.github}
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-xs transition hover:border-slate-400 hover:bg-slate-900 hover:text-white"
              aria-label="GitHub profile"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={portfolio.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-xs transition hover:border-slate-400 hover:bg-blue-600 hover:text-white"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
