import { useState, useRef, useEffect } from 'react';
import { Terminal, Code, FileJson, Play, Copy, Check, CornerDownLeft, Sparkles, RefreshCw } from 'lucide-react';
import { portfolio } from '../data/portfolio';

const QUICK_COMMANDS = ['help', 'skills', 'projects', 'experience', 'education', 'contact', 'whoami', 'clear'];

export function InteractiveTerminal({ onOpenProject, showToast }) {
  const [activeTab, setActiveTab] = useState('terminal'); // 'terminal' | 'python' | 'json'
  const [commandInput, setCommandInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: '⚡ Antigravity Terminal v2.4 initialized for Varsha (MIT Mysore).' },
    { type: 'system', text: 'Type "help" or click suggested command chips below.' },
  ]);
  const [copiedJson, setCopiedJson] = useState(false);
  const [pythonOutput, setPythonOutput] = useState(null);
  const [isExecutingPy, setIsExecutingPy] = useState(false);
  const terminalEndRef = useRef(null);

  useEffect(() => {
    if (activeTab === 'terminal') {
      terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, activeTab]);

  const executeCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    const newHistory = [...history, { type: 'input', text: `$ ${cmd}` }];

    switch (trimmed) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `Available commands:
• skills      - List programming languages, frontend, backend & databases
• projects    - View live full-stack projects & deployments
• experience  - View internship at Wizzbox Private Limited
• education   - Check college & degree details
• contact     - Display contact info & social profiles
• whoami      - Quick bio of Varsha
• clear       - Clear terminal history`,
        });
        break;
      case 'skills':
        newHistory.push({
          type: 'output',
          text: `[Technical Capabilities]
• Languages: Python, JavaScript (ES6+), SQL
• Web & UI: React.js, HTML5, CSS3, Tailwind CSS, Responsive Design
• Backend: Python REST APIs, Server Endpoints, Full-Stack Integration
• Databases: DBMS, Relational SQL, Schema Design, Query Optimization
• Core: Data Structures & Algorithms, Problem Solving`,
        });
        break;
      case 'projects':
        newHistory.push({
          type: 'output',
          text: `[Selected Projects]
1. Interactive Quiz & Learning Platform (React, Python, REST API, SQL, Render)
   Frontend: https://quiz-app-94g0.onrender.com/
   Backend API: https://hackthon1-2.onrender.com/

2. VeriScan — Fake Product Detection (React, JavaScript, Full-Stack, Netlify)
   Live Demo: https://veriscanproduct.netlify.app/`,
        });
        break;
      case 'experience':
        newHistory.push({
          type: 'output',
          text: `[Experience & Internship]
• Company: Wizzbox Private Limited
• Role: Software Development Intern
• Status: Selected ✓
• Focus: Full-stack application engineering, backend workflows & modern frontend architecture.`,
        });
        break;
      case 'education':
        newHistory.push({
          type: 'output',
          text: `[Academic Background]
• Degree: Bachelor of Engineering (B.E.)
• Program: Computer Science and Engineering
• Institution: Maharaja Institute of Technology Mysore
• Duration: 2023 – 2027 (4th Year Undergrad)`,
        });
        break;
      case 'contact':
        newHistory.push({
          type: 'output',
          text: `[Contact Channels]
• Email: ${portfolio.contact.email}
• GitHub: ${portfolio.socials.github}
• LinkedIn: ${portfolio.socials.linkedin}
• Location: Mysore, Karnataka, India`,
        });
        break;
      case 'whoami':
        newHistory.push({
          type: 'output',
          text: `Varsha — 4th Year Computer Science student at MIT Mysore. Passionate about building functional full-stack web applications, Python backend services, and solving DSA challenges.`,
        });
        break;
      case 'clear':
        setHistory([{ type: 'system', text: 'Terminal cleared. Type "help" for commands.' }]);
        setCommandInput('');
        return;
      default:
        newHistory.push({
          type: 'error',
          text: `Command not found: "${cmd}". Type "help" for a list of valid commands.`,
        });
    }

    setHistory(newHistory);
    setCommandInput('');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    executeCommand(commandInput);
  };

  const runPythonSimulation = () => {
    setIsExecutingPy(true);
    setPythonOutput(null);
    setTimeout(() => {
      setIsExecutingPy(false);
      setPythonOutput(`[EXECUTION SUCCESSFUL]
Name: Varsha
Status: 4th Year CSE Undergrad @ MIT Mysore
Company: Wizzbox Private Limited (Internship Selected)
Active Projects: ['Quiz & Learning Platform', 'VeriScan Fake Product Detection']
Core Stack: Python, React, JavaScript, SQL, REST APIs
DSA Focus: 10+ Algorithmic Topics in Python
Ready to collaborate: True!`);
      if (showToast) {
        showToast('Python script executed successfully!', 'success');
      }
    }, 600);
  };

  const copyJsonData = () => {
    const data = {
      developer: portfolio.name,
      title: portfolio.title,
      education: portfolio.education,
      internship: portfolio.experience,
      skills: portfolio.skillsData.map((g) => ({
        category: g.category,
        skills: g.items.map((i) => i.name),
      })),
      projects: portfolio.projects.map((p) => ({
        name: p.name,
        category: p.category,
        technologies: p.technologies,
        links: p.links,
      })),
    };
    navigator.clipboard.writeText(JSON.stringify(data, null, 2));
    setCopiedJson(true);
    if (showToast) {
      showToast('Developer profile JSON copied to clipboard!', 'success');
    }
    setTimeout(() => setCopiedJson(false), 2000);
  };

  const pythonCode = `# varsha_profile.py
class FullStackDeveloper:
    def __init__(self):
        self.name = "Varsha"
        self.role = "Computer Science Student & Full-Stack Developer"
        self.college = "Maharaja Institute of Technology Mysore"
        self.year = "4th Year (2023 - 2027)"
        self.internship = "Wizzbox Private Limited (Selected)"
        
        self.skills = {
            "languages": ["Python", "JavaScript", "SQL"],
            "frontend": ["React.js", "HTML5", "CSS3", "Tailwind"],
            "backend": ["Python REST APIs", "DBMS", "Database Design"],
            "core": ["Data Structures", "Algorithms", "Problem Solving"]
        }
        
        self.live_projects = [
            {"title": "Quiz & Learning Platform", "status": "Live on Render"},
            {"title": "VeriScan Fake Product Detection", "status": "Live on Netlify"}
        ]

    def build_solutions(self):
        return f"{self.name} is creating performant web applications with Python & React!"

developer = FullStackDeveloper()
print(developer.build_solutions())`;

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 text-slate-200 shadow-2xl">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between border-b border-slate-800 bg-slate-900/90 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-rose-500/80" />
            <span className="h-3 w-3 rounded-full bg-amber-500/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
          </div>
          <span className="ml-2 font-mono text-xs font-semibold text-slate-400">
            varsha@mit-mysore:~
          </span>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => setActiveTab('terminal')}
            className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-medium transition ${
              activeTab === 'terminal'
                ? 'bg-slate-800 text-white shadow-xs'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Terminal className="h-3.5 w-3.5 text-emerald-400" />
            <span>terminal.sh</span>
          </button>
          <button
            onClick={() => setActiveTab('python')}
            className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-medium transition ${
              activeTab === 'python'
                ? 'bg-slate-800 text-white shadow-xs'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Code className="h-3.5 w-3.5 text-sky-400" />
            <span>varsha.py</span>
          </button>
          <button
            onClick={() => setActiveTab('json')}
            className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-medium transition ${
              activeTab === 'json'
                ? 'bg-slate-800 text-white shadow-xs'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <FileJson className="h-3.5 w-3.5 text-amber-400" />
            <span>developer.json</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Terminal */}
      {activeTab === 'terminal' && (
        <div className="flex flex-col p-4 sm:p-5 font-mono text-xs sm:text-sm">
          <div className="max-h-72 min-h-52 overflow-y-auto space-y-2.5 pr-2">
            {history.map((item, idx) => (
              <div key={idx} className="leading-relaxed">
                {item.type === 'system' && (
                  <p className="text-slate-400">{item.text}</p>
                )}
                {item.type === 'input' && (
                  <p className="font-semibold text-emerald-400">{item.text}</p>
                )}
                {item.type === 'output' && (
                  <pre className="whitespace-pre-wrap rounded-lg bg-slate-900/60 p-2.5 text-slate-300 font-mono text-xs">
                    {item.text}
                  </pre>
                )}
                {item.type === 'error' && (
                  <p className="text-rose-400">{item.text}</p>
                )}
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Interactive Command Input */}
          <form
            onSubmit={handleFormSubmit}
            className="mt-3 flex items-center gap-2 border-t border-slate-800/90 pt-3"
          >
            <span className="text-emerald-400 font-bold">$</span>
            <input
              type="text"
              value={commandInput}
              onChange={(e) => setCommandInput(e.target.value)}
              placeholder="Try typing 'skills', 'projects', 'experience' or 'help'..."
              className="w-full bg-transparent font-mono text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-hidden"
              autoFocus={false}
            />
            <button
              type="submit"
              className="rounded-md bg-slate-800 p-1.5 text-slate-300 hover:bg-slate-700 hover:text-white"
              title="Run command"
            >
              <CornerDownLeft className="h-3.5 w-3.5" />
            </button>
          </form>

          {/* Quick command buttons */}
          <div className="mt-3 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-800/40">
            <span className="text-[11px] font-sans text-slate-500 flex items-center gap-1">
              <Sparkles className="h-3 w-3 text-amber-400" /> Suggestions:
            </span>
            {QUICK_COMMANDS.map((cmd) => (
              <button
                key={cmd}
                onClick={() => executeCommand(cmd)}
                className="rounded-md border border-slate-800 bg-slate-900/80 px-2 py-0.5 font-mono text-[11px] text-slate-300 transition hover:border-slate-700 hover:bg-slate-800 hover:text-white"
              >
                {cmd}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Python Code */}
      {activeTab === 'python' && (
        <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs text-slate-400">Python 3.11 Environment</span>
            <button
              onClick={runPythonSimulation}
              disabled={isExecutingPy}
              className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-1 text-xs font-semibold text-white shadow-xs transition hover:bg-emerald-500 disabled:opacity-50"
            >
              {isExecutingPy ? (
                <RefreshCw className="h-3.5 w-3.5 animate-spin" />
              ) : (
                <Play className="h-3.5 w-3.5 fill-current" />
              )}
              <span>{isExecutingPy ? 'Running...' : 'Run Script'}</span>
            </button>
          </div>

          <pre className="max-h-64 overflow-y-auto rounded-xl bg-slate-900/80 p-3.5 text-slate-300 text-xs leading-relaxed">
            <code>{pythonCode}</code>
          </pre>

          {pythonOutput && (
            <div className="mt-3 rounded-xl border border-emerald-500/30 bg-emerald-950/30 p-3 text-emerald-300 text-xs animate-fade-up">
              <div className="font-semibold text-emerald-400 mb-1 flex items-center gap-1">
                <Check className="h-3.5 w-3.5" /> Output:
              </div>
              <pre className="whitespace-pre-wrap font-mono">{pythonOutput}</pre>
            </div>
          )}
        </div>
      )}

      {/* Tab 3: JSON */}
      {activeTab === 'json' && (
        <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs text-slate-400">developer_payload.json</span>
            <button
              onClick={copyJsonData}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800 px-3 py-1 text-xs font-medium text-slate-200 transition hover:bg-slate-700 hover:text-white"
            >
              {copiedJson ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copiedJson ? 'Copied!' : 'Copy JSON'}</span>
            </button>
          </div>

          <pre className="max-h-64 overflow-y-auto rounded-xl bg-slate-900/80 p-3.5 text-amber-200/90 text-xs leading-relaxed">
            <code>{JSON.stringify({
              name: portfolio.name,
              title: portfolio.title,
              college: portfolio.education.college,
              year: portfolio.education.status,
              experience: {
                company: portfolio.experience.company,
                role: portfolio.experience.role,
                status: portfolio.experience.status,
              },
              topProjects: portfolio.projects.map((p) => p.name),
              skills: ['Python', 'JavaScript', 'React', 'SQL', 'REST APIs', 'DBMS', 'DSA'],
              contact: {
                email: portfolio.contact.email,
                github: portfolio.socials.github,
                linkedin: portfolio.socials.linkedin,
              }
            }, null, 2)}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
