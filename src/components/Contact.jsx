import { useState } from 'react';
import { portfolio } from '../data/portfolio';
import { Mail, Copy, Check, MapPin, ArrowUpRight, Sparkles, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export function Contact({ showToast }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolio.contact.email);
    setCopied(true);
    if (showToast) {
      showToast('Email address copied to clipboard!', 'success');
    }
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="section-shell section-spacing border-t border-slate-200/70">
      <div className="flex flex-col gap-3 mb-10">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            Get in Touch
          </span>
          <span className="h-px flex-1 max-w-[60px] bg-slate-300" />
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Let's connect & build something impactful.
        </h2>
        <p className="text-base text-slate-600 max-w-2xl">
          {portfolio.contact.intro}
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Email Card */}
        <div className="rounded-3xl border border-slate-200/90 bg-white/90 p-6 sm:p-7 shadow-xs flex flex-col justify-between transition hover:border-slate-300 hover:shadow-sm">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-xs">
                <Mail className="h-5 w-5" />
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Primary
              </span>
            </div>
            <h3 className="text-base font-bold text-slate-900">Email Address</h3>
            <p className="text-xs text-slate-500 mt-1 mb-4">
              Reach out directly for internships, projects, or inquiries.
            </p>
            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-3 mb-4">
              <span className="text-xs font-mono font-bold text-slate-900 break-all">
                {portfolio.contact.email}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-2">
            <a
              href={`mailto:${portfolio.contact.email}`}
              className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-slate-900 py-2.5 text-xs font-bold text-white shadow-xs transition hover:bg-slate-800 active:scale-[0.98]"
            >
              <Send className="h-3.5 w-3.5" />
              <span>Send Email</span>
            </a>
            <button
              onClick={handleCopyEmail}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-semibold text-slate-700 shadow-2xs hover:bg-slate-50 active:scale-95 transition"
              title="Copy Email"
            >
              {copied ? (
                <span className="flex items-center gap-1 text-emerald-600 font-bold">
                  <Check className="h-4 w-4" />
                </span>
              ) : (
                <span className="flex items-center gap-1">
                  <Copy className="h-4 w-4" />
                </span>
              )}
            </button>
          </div>
        </div>

        {/* LinkedIn Card */}
        <div className="rounded-3xl border border-slate-200/90 bg-white/90 p-6 sm:p-7 shadow-xs flex flex-col justify-between transition hover:border-slate-300 hover:shadow-sm">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-xs">
                <LinkedinIcon className="h-5 w-5" />
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-bold text-blue-700">
                Professional
              </span>
            </div>
            <h3 className="text-base font-bold text-slate-900">LinkedIn Profile</h3>
            <p className="text-xs text-slate-500 mt-1 mb-4">
              Connect with me, view experience, and network.
            </p>
            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-3 mb-4">
              <span className="text-xs font-mono font-bold text-slate-900">
                in/varsha-333a44350
              </span>
            </div>
          </div>

          <div className="pt-2">
            <a
              href={portfolio.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl border border-blue-200 bg-blue-50/80 py-2.5 text-xs font-bold text-blue-700 transition hover:bg-blue-600 hover:text-white active:scale-[0.98]"
            >
              <span>Connect on LinkedIn</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* GitHub Card */}
        <div className="rounded-3xl border border-slate-200/90 bg-white/90 p-6 sm:p-7 shadow-xs flex flex-col justify-between transition hover:border-slate-300 hover:shadow-sm">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-xs">
                <GithubIcon className="h-5 w-5" />
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-700">
                Open Source
              </span>
            </div>
            <h3 className="text-base font-bold text-slate-900">GitHub Repositories</h3>
            <p className="text-xs text-slate-500 mt-1 mb-4">
              Explore source code, repositories, and technical contributions.
            </p>
            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-3 mb-4">
              <span className="text-xs font-mono font-bold text-slate-900">
                github.com/Varsha-devX
              </span>
            </div>
          </div>

          <div className="pt-2">
            <a
              href={portfolio.socials.github}
              target="_blank"
              rel="noreferrer"
              className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-slate-100 py-2.5 text-xs font-bold text-slate-800 transition hover:bg-slate-900 hover:text-white active:scale-[0.98]"
            >
              <span>Explore GitHub</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Location & Availability Banner */}
      <div className="mt-8 rounded-3xl border border-slate-200/90 bg-white/90 p-6 sm:p-7 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 shrink-0">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900">{portfolio.location}</div>
            <div className="text-xs text-slate-500 flex items-center gap-1.5 mt-0.5">
              <Sparkles className="h-3.5 w-3.5 text-amber-500" />
              <span>{portfolio.contact.availability}</span>
            </div>
          </div>
        </div>

        <a
          href={`mailto:${portfolio.contact.email}`}
          className="rounded-full bg-slate-900 px-5 py-2.5 text-xs font-bold text-white transition hover:bg-slate-800 active:scale-95 inline-flex items-center gap-2 shrink-0"
        >
          <Mail className="h-3.5 w-3.5" />
          <span>Email Varsha Directly</span>
        </a>
      </div>
    </section>
  );
}
