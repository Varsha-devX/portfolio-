import { useState } from 'react';
import { portfolio } from '../data/portfolio';
import { MapPin, GraduationCap, Building2, Code2, Sparkles, CheckCircle2, FileText, ArrowUpRight } from 'lucide-react';

export function About() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <section id="about" className="section-shell section-spacing border-t border-slate-200/70">
      <div className="flex flex-col gap-3 mb-10">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            About Me
          </span>
          <span className="h-px flex-1 max-w-[60px] bg-slate-300" />
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Building practical software solutions with an engineering mindset.
        </h2>
      </div>

      {/* Main Grid */}
      <div className="grid gap-8 lg:grid-cols-12">
        {/* Left Column: Interactive Story & Tabs */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Tab buttons */}
          <div className="flex gap-2 border-b border-slate-200 pb-2">
            {[
              { id: 'overview', label: 'Background & Bio' },
              { id: 'focus', label: 'Technical Focus' },
              { id: 'mindset', label: 'Engineering Mindset' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-xl px-4 py-2 text-xs font-bold transition ${
                  activeTab === tab.id
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-200/60 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="rounded-2xl border border-slate-200/90 bg-white/80 p-6 shadow-xs leading-relaxed text-slate-700">
            {activeTab === 'overview' && (
              <div className="space-y-4 animate-fade-up">
                <p className="text-base leading-relaxed">
                  {portfolio.about}
                </p>
                <p className="text-sm text-slate-600">
                  Currently in my 4th year of Computer Science and Engineering at{' '}
                  <strong className="font-semibold text-slate-900">
                    Maharaja Institute of Technology Mysore
                  </strong>
                  . I have worked on projects spanning interactive learning systems and verification tools, combining intuitive UI with robust backend logic.
                </p>
              </div>
            )}

            {activeTab === 'focus' && (
              <div className="space-y-4 animate-fade-up">
                <p className="text-base leading-relaxed">
                  My technical focus revolves around full-stack web engineering, database architecture, and algorithmic optimization in Python:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Frontend Engineering:</strong> React component structures, modern CSS, state management, and accessible UI.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Backend & API Design:</strong> Python RESTful endpoints, API error handling, and JSON pipelines.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Databases & SQL:</strong> Schema modeling, DBMS normalization, queries, and ACID guarantees.</span>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === 'mindset' && (
              <div className="space-y-4 animate-fade-up">
                <p className="text-base leading-relaxed">
                  I believe in writing code that is clean, practical, and maintainable:
                </p>
                <div className="grid gap-3 sm:grid-cols-2 text-xs">
                  <div className="rounded-xl border border-slate-100 bg-slate-50/80 p-3.5">
                    <h4 className="font-bold text-slate-900 mb-1">Practical Impact</h4>
                    <p className="text-slate-600">Building software that solves clear real-world needs and gives instant value to users.</p>
                  </div>
                  <div className="rounded-xl border border-slate-100 bg-slate-50/80 p-3.5">
                    <h4 className="font-bold text-slate-900 mb-1">Continuous Learning</h4>
                    <p className="text-slate-600">Sharpening problem solving with daily DSA practice and staying updated with modern tooling.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center gap-4">
            <a
              href={portfolio.resumePath}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-semibold text-white shadow-xs transition hover:bg-slate-800"
            >
              <FileText className="h-4 w-4" />
              <span>Download / View Resume</span>
              <ArrowUpRight className="h-3.5 w-3.5 opacity-70" />
            </a>
          </div>
        </div>

        {/* Right Column: Key Details Cards */}
        <div className="lg:col-span-5 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-1">
          <div className="flex items-start gap-3.5 rounded-2xl border border-slate-200/90 bg-white/90 p-4 shadow-xs transition hover:border-slate-300">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-800">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Education</div>
              <div className="text-sm font-bold text-slate-900">{portfolio.education.degree}</div>
              <div className="text-xs text-slate-600">{portfolio.education.college}</div>
              <div className="mt-1 text-[11px] font-semibold text-slate-500">{portfolio.education.duration} • 4th Year</div>
            </div>
          </div>

          <div className="flex items-start gap-3.5 rounded-2xl border border-slate-200/90 bg-white/90 p-4 shadow-xs transition hover:border-slate-300">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
              <Building2 className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Internship</div>
              <div className="text-sm font-bold text-slate-900">{portfolio.experience.company}</div>
              <div className="text-xs text-slate-600">{portfolio.experience.role}</div>
              <div className="mt-1 inline-flex items-center rounded-md bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800">
                {portfolio.experience.badge}
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3.5 rounded-2xl border border-slate-200/90 bg-white/90 p-4 shadow-xs transition hover:border-slate-300">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Location</div>
              <div className="text-sm font-bold text-slate-900">{portfolio.location}</div>
              <div className="text-xs text-slate-600">Open to Remote / Hybrid / Onsite Roles</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
