import { useState } from 'react';
import { portfolio } from '../data/portfolio';
import { ExternalLink, Server, Sparkles, CheckCircle2, Layers, ArrowUpRight, X, Info } from 'lucide-react';
import confetti from 'canvas-confetti';

export function Projects({ showToast }) {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'Full-Stack', 'Web App'];

  const filteredProjects = portfolio.projects.filter((project) => {
    if (selectedFilter === 'All') return true;
    return project.category === selectedFilter;
  });

  const triggerConfetti = (e) => {
    try {
      const rect = e.target.getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { x, y },
        colors: ['#0f172a', '#10b981', '#38bdf8', '#f59e0b'],
      });
    } catch {
      // Fallback silently if confetti encounters environment issues
    }
  };

  const handleLaunchProject = (e, url, name) => {
    triggerConfetti(e);
    if (showToast) {
      showToast(`Opening live project: ${name}`, 'success');
    }
  };

  return (
    <section id="projects" className="section-shell section-spacing border-t border-slate-200/70">
      <div className="flex flex-col gap-3 mb-10">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            Featured Projects
          </span>
          <span className="h-px flex-1 max-w-[60px] bg-slate-300" />
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Selected work & full-stack product builds.
        </h2>
        <p className="text-base text-slate-600 max-w-2xl">
          Live web applications featuring interactive user interfaces, dedicated REST backend integrations, and cloud deployments.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="mb-8 flex items-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedFilter(cat)}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
              selectedFilter === cat
                ? 'bg-slate-900 text-white shadow-xs'
                : 'border border-slate-200 bg-white/80 text-slate-600 hover:border-slate-300 hover:bg-white hover:text-slate-900'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <article
            key={project.name}
            className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white/90 p-6 sm:p-8 shadow-xs transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
          >
            <div>
              {/* Header Badges */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-700">
                  {project.badge}
                </span>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/60 rounded-full px-2.5 py-0.5">
                  ● Deployed & Live
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-2xl font-bold tracking-tight text-slate-900 group-hover:text-slate-950">
                {project.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {project.tagline}
              </p>

              {/* Highlights */}
              <div className="mt-5 space-y-2">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Chips */}
              <div className="mt-6 flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-slate-200/70 bg-slate-50 px-2.5 py-1 font-mono text-[11px] font-medium text-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => handleLaunchProject(e, link.url, project.name)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold shadow-xs transition ${
                    link.primary
                      ? 'bg-slate-900 text-white hover:bg-slate-800 hover:shadow-md'
                      : 'border border-slate-300 bg-white text-slate-800 hover:border-slate-400 hover:bg-slate-50'
                  }`}
                >
                  {link.primary ? (
                    <ExternalLink className="h-3.5 w-3.5" />
                  ) : (
                    <Server className="h-3.5 w-3.5 text-slate-500" />
                  )}
                  <span>{link.label}</span>
                </a>
              ))}

              <button
                onClick={() => setActiveModalProject(project)}
                className="ml-auto inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-slate-900 transition"
              >
                <Info className="h-3.5 w-3.5" />
                <span>Architecture</span>
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Project Details Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs animate-fade-up">
          <div className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xl">
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  {activeModalProject.category}
                </span>
                <h4 className="text-xl font-bold text-slate-900">
                  {activeModalProject.name}
                </h4>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                className="rounded-xl p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4 space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>{activeModalProject.description}</p>

              <div>
                <h5 className="font-bold text-slate-900 mb-2">Key Implementation Highlights:</h5>
                <ul className="space-y-1.5">
                  {activeModalProject.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="font-bold text-slate-900 mb-2">Built With:</h5>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 font-mono text-xs text-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
              <div className="flex gap-2">
                {activeModalProject.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-slate-800"
                  >
                    <span>{link.label}</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
