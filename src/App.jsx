import { useState } from 'react';
import { portfolio } from './data/portfolio';

const socials = {
  github: 'https://github.com/Varsha-devX',
  linkedin: 'https://www.linkedin.com/in/varsha-333a44350',
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-[#f5f3ef] text-slate-900 antialiased selection:bg-slate-900 selection:text-white">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#f5f3ef]/80 backdrop-blur-xl">
        <nav className="section-shell flex items-center justify-between py-4">
          <a href="#home" className="text-lg font-black tracking-[0.2em] text-slate-900" aria-label="Varsha home">
            VARSHA
          </a>

          <div className="hidden items-center gap-7 text-sm text-slate-600 md:flex">
            {portfolio.nav.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="nav-link relative transition-colors hover:text-slate-900">
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={portfolio.resumePath}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(15,23,42,0.14)] transition hover:-translate-y-0.5"
            >
              Resume
            </a>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 bg-white/60 md:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="flex flex-col gap-1.5">
                <span className="h-0.5 w-5 rounded bg-slate-900" />
                <span className="h-0.5 w-5 rounded bg-slate-900" />
                <span className="h-0.5 w-5 rounded bg-slate-900" />
              </span>
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="section-shell flex flex-col gap-3 pb-5 md:hidden">
            {portfolio.nav.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="rounded-xl border border-slate-200 bg-white/70 px-4 py-2 text-sm text-slate-700"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href={portfolio.resumePath}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
            >
              Resume
            </a>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="section-shell section-spacing">
          <div className="animate-fade-up max-w-4xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Hi, I'm Varsha.</p>
            <h1 className="max-w-3xl text-4xl font-black tracking-[-0.06em] text-slate-900 sm:text-5xl xl:text-7xl">
              {portfolio.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{portfolio.intro}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="inline-flex items-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(15,23,42,0.15)] transition hover:-translate-y-0.5">
                View My Projects
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3" aria-label="Social media links">
              <a href={socials.github} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full border border-slate-300 bg-white/60 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-white">
                GitHub
              </a>
              <a href={socials.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full border border-slate-300 bg-white/60 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-white">
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="section-shell section-spacing">
          <div className="max-w-3xl animate-fade-up">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">About Me</p>
            <h2 className="text-3xl font-black tracking-[-0.05em] text-slate-900 sm:text-5xl">
              Building practical solutions with a problem-solving mindset.
            </h2>
          </div>
          <p className="mt-8 max-w-4xl text-lg leading-8 text-slate-600 animate-fade-up">{portfolio.about}</p>
        </section>

        <section id="skills" className="section-shell section-spacing">
          <div className="mb-10 animate-fade-up">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Skills</p>
            <h2 className="text-3xl font-black tracking-[-0.05em] text-slate-900 sm:text-5xl">Technical capabilities</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 animate-fade-up">
            {[
              { title: 'Programming', skills: portfolio.skills.programming },
              { title: 'Web Development', skills: portfolio.skills.webDevelopment },
              { title: 'Backend', skills: portfolio.skills.backend },
              { title: 'Database', skills: portfolio.skills.database },
              { title: 'Core Skills', skills: portfolio.skills.core, full: true },
            ].map((group) => (
              <div key={group.title} className={`${group.full ? 'md:col-span-2' : ''} glass-panel rounded-[24px] p-6`}>
                <h3 className="mb-5 text-xl font-bold text-slate-900">{group.title}</h3>
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <span key={skill} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section-shell section-spacing">
          <div className="mb-10 animate-fade-up">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Projects</p>
            <h2 className="text-3xl font-black tracking-[-0.05em] text-slate-900 sm:text-5xl">Selected work and product builds</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 animate-fade-up">
            {portfolio.projects.map((project) => (
              <article key={project.name} className="group glass-panel rounded-[28px] p-6 transition duration-200 hover:-translate-y-1 hover:border-slate-300">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">{project.type}</p>
                <h3 className="text-2xl font-bold tracking-[-0.04em] text-slate-900">{project.name}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs text-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target={link.url.startsWith('http') ? '_blank' : undefined}
                      rel={link.url.startsWith('http') ? 'noreferrer' : undefined}
                      className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section-shell section-spacing">
          <div className="mb-10 animate-fade-up">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Experience</p>
            <h2 className="text-3xl font-black tracking-[-0.05em] text-slate-900 sm:text-5xl">Opportunities and internships</h2>
          </div>

          <div className="glass-panel rounded-[28px] p-6 sm:p-8 animate-fade-up">
            <span className="inline-flex rounded-full border border-[#1a3b2e]/20 bg-[#1a3b2e]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#1a3b2e]">
              {portfolio.experience.badge}
            </span>
            <h3 className="mt-5 text-2xl font-bold tracking-[-0.04em] text-slate-900">{portfolio.experience.company}</h3>
            <p className="mt-2 text-lg font-semibold text-slate-800">{portfolio.experience.program}</p>
            <p className="mt-4 text-base text-slate-600">
              Status: <strong className="font-bold text-slate-900">{portfolio.experience.status}</strong>
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">{portfolio.experience.text}</p>
          </div>
        </section>

        <section id="education" className="section-shell section-spacing">
          <div className="mb-10 animate-fade-up">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Education</p>
            <h2 className="text-3xl font-black tracking-[-0.05em] text-slate-900 sm:text-5xl">Academic background</h2>
          </div>

          <div className="glass-panel rounded-[28px] p-6 sm:p-8 animate-fade-up">
            <div className="mb-4 flex justify-end text-sm text-slate-500">{portfolio.education.duration}</div>
            <h3 className="text-2xl font-bold tracking-[-0.04em] text-slate-900">{portfolio.education.degree}</h3>
            <p className="mt-2 text-lg text-slate-700">{portfolio.education.program}</p>
            <p className="mt-2 text-slate-600">{portfolio.education.college}</p>
            <p className="mt-4 text-base font-semibold text-slate-900">{portfolio.education.status}</p>
          </div>
        </section>

        <section id="certifications" className="section-shell section-spacing">
          <div className="mb-10 animate-fade-up">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Certifications & Training</p>
            <h2 className="text-3xl font-black tracking-[-0.05em] text-slate-900 sm:text-5xl">Learning and upskilling</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 animate-fade-up">
            {portfolio.certifications.map((cert) => (
              <div key={cert} className="glass-panel rounded-[22px] p-4 text-slate-700">
                {cert}
              </div>
            ))}
          </div>
        </section>

        <section className="section-shell section-spacing">
          <div className="mb-10 animate-fade-up">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Problem Solving</p>
            <h2 className="text-3xl font-black tracking-[-0.05em] text-slate-900 sm:text-5xl">Preparing for software engineering roles</h2>
          </div>

          <p className="max-w-4xl text-lg leading-8 text-slate-600 animate-fade-up">{portfolio.problemSolving.summary}</p>

          <div className="mt-7 flex flex-wrap gap-2.5 animate-fade-up">
            {portfolio.problemSolving.topics.map((topic) => (
              <span key={topic} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
                {topic}
              </span>
            ))}
          </div>
        </section>

      </main>

      <footer className="border-t border-slate-200/80 bg-white/40">
        <div className="section-shell flex flex-col items-center justify-between gap-4 py-8 text-sm text-slate-600 md:flex-row">
          <p>© {new Date().getFullYear()} Varsha</p>
          <div className="flex items-center gap-5">
            <a href={socials.github} target="_blank" rel="noreferrer" className="font-medium text-slate-800 hover:underline">
              GitHub
            </a>
            <a href={socials.linkedin} target="_blank" rel="noreferrer" className="font-medium text-slate-800 hover:underline">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
