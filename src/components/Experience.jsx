import { portfolio } from '../data/portfolio';
import { GraduationCap, Award, CheckCircle2, Calendar } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="section-shell section-spacing border-t border-slate-200/70">
      {/* Experience Section */}
      <div className="mb-14">
        <div className="flex flex-col gap-3 mb-10">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Work Experience
            </span>
            <span className="h-px flex-1 max-w-[60px] bg-slate-300" />
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Industry experience & internships.
          </h2>
          <p className="text-base text-slate-600 max-w-2xl">
            Practical software engineering experience, building applications and collaborating on modern stacks.
          </p>
        </div>

        {/* Experience Timeline Card */}
        <div className="relative rounded-3xl border border-slate-200/90 bg-white/90 p-6 sm:p-8 shadow-xs transition hover:border-slate-300">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-5 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800 font-extrabold text-xl shadow-xs">
                W
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {portfolio.experience.company}
                </h3>
                <div className="text-sm font-semibold text-slate-700">
                  {portfolio.experience.role}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>{portfolio.experience.badge}</span>
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                <Calendar className="h-3 w-3" />
                <span>{portfolio.experience.period}</span>
              </span>
            </div>
          </div>

          <div className="mt-5 space-y-4">
            <p className="text-sm leading-relaxed text-slate-700">
              {portfolio.experience.description}
            </p>

            <div className="space-y-2 pt-1">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Key Contributions & Scope
              </h4>
              <div className="grid gap-2">
                {portfolio.experience.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-900 mt-1.5 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Education & Academic Journey */}
      <div id="education" className="mb-14 pt-6">
        <div className="flex flex-col gap-3 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Academic Background
            </span>
            <span className="h-px flex-1 max-w-[60px] bg-slate-300" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Education & Computer Science foundation.
          </h2>
        </div>

        <div className="rounded-3xl border border-slate-200/90 bg-white/90 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-700">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">{portfolio.education.degree}</h3>
                <div className="text-sm font-semibold text-slate-700">{portfolio.education.program}</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <Calendar className="h-3.5 w-3.5" />
              <span>{portfolio.education.duration}</span>
              <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-slate-800 font-bold">
                {portfolio.education.status}
              </span>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-sm font-semibold text-slate-800">
              {portfolio.education.college} — <span className="text-slate-500 font-normal">{portfolio.education.location}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Certifications & Upskilling */}
      <div id="certifications" className="pt-6">
        <div className="flex flex-col gap-3 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Certifications & Training
            </span>
            <span className="h-px flex-1 max-w-[60px] bg-slate-300" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Continuous learning & verified credentials.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {portfolio.certifications.map((cert) => (
            <div
              key={cert.title}
              className="flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white/90 p-5 shadow-xs transition hover:border-slate-300 hover:shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                    <Award className="h-4 w-4" />
                  </span>
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600">
                    {cert.date}
                  </span>
                </div>
                <h4 className="text-base font-bold text-slate-900">{cert.title}</h4>
                <p className="mt-1 text-xs font-semibold text-slate-600">{cert.issuer}</p>
              </div>

              <div className="mt-4 flex flex-wrap gap-1 pt-3 border-t border-slate-100">
                {cert.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded bg-slate-50 px-2 py-0.5 text-[10px] font-medium text-slate-600 border border-slate-100"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
