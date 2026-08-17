import { useState } from 'react';
import { portfolio } from '../data/portfolio';
import { Search, Code2, Database, Globe, Server, Cpu, X } from 'lucide-react';

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', ...portfolio.skillsData.map((c) => c.category)];

  // Filter skills
  const filteredGroups = portfolio.skillsData
    .map((group) => {
      if (selectedCategory !== 'All' && group.category !== selectedCategory) {
        return null;
      }
      const filteredItems = group.items.filter((item) => {
        const query = searchQuery.toLowerCase();
        return (
          item.name.toLowerCase().includes(query) ||
          item.desc.toLowerCase().includes(query)
        );
      });
      if (filteredItems.length === 0) return null;
      return { ...group, items: filteredItems };
    })
    .filter(Boolean);

  const getCategoryIcon = (categoryName) => {
    if (categoryName.includes('Programming')) return <Code2 className="h-4 w-4 text-emerald-600" />;
    if (categoryName.includes('Web')) return <Globe className="h-4 w-4 text-sky-600" />;
    if (categoryName.includes('Backend')) return <Server className="h-4 w-4 text-indigo-600" />;
    if (categoryName.includes('Database')) return <Database className="h-4 w-4 text-amber-600" />;
    return <Cpu className="h-4 w-4 text-slate-700" />;
  };

  return (
    <section id="skills" className="section-shell section-spacing border-t border-slate-200/70">
      <div className="flex flex-col gap-3 mb-10">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            Skills & Competencies
          </span>
          <span className="h-px flex-1 max-w-[60px] bg-slate-300" />
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Technical capabilities & engineering stack.
        </h2>
        <p className="text-base text-slate-600 max-w-2xl">
          Structured across frontend engineering, backend services, database administration, and problem solving.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'border border-slate-200 bg-white/80 text-slate-600 hover:border-slate-300 hover:bg-white hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search skills (e.g., Python, SQL)..."
            className="w-full rounded-full border border-slate-200 bg-white/90 py-1.5 pl-9 pr-3 text-xs text-slate-900 placeholder-slate-400 focus:border-slate-400 focus:outline-hidden shadow-2xs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X className="h-3 w-3" />
            </button>
          )}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {filteredGroups.map((group) => (
          <div
            key={group.category}
            className="rounded-2xl border border-slate-200/90 bg-white/80 p-5 sm:p-6 shadow-xs transition hover:border-slate-300/80"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100">
                  {getCategoryIcon(group.category)}
                </div>
                <h3 className="text-base font-bold text-slate-900">{group.category}</h3>
              </div>
              <span className="text-xs font-semibold text-slate-400">
                {group.items.length} {group.items.length === 1 ? 'skill' : 'skills'}
              </span>
            </div>

            <div className="grid gap-3">
              {group.items.map((item) => (
                <div
                  key={item.name}
                  className="group rounded-xl border border-slate-100 bg-slate-50/70 p-3 transition hover:border-slate-300 hover:bg-white hover:shadow-2xs"
                >
                  <span className="font-semibold text-xs text-slate-900 group-hover:text-slate-950 block">
                    {item.name}
                  </span>
                  <p className="mt-1 text-[11px] text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
