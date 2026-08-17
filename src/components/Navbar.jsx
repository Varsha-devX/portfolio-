import { useState, useEffect } from 'react';
import { portfolio } from '../data/portfolio';
import { Menu, X, FileText, Copy, Check, ArrowUpRight } from 'lucide-react';

export function Navbar({ onCopyEmail, showToast }) {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = portfolio.nav.map((item) => item.id);
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(portfolio.contact.email);
    setCopied(true);
    showToast('Email copied to clipboard: ' + portfolio.contact.email, 'success');
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'border-b border-slate-200/80 bg-[#f8f7f4]/90 backdrop-blur-md shadow-sm'
          : 'border-b border-transparent bg-[#f8f7f4]/60 backdrop-blur-xs'
      }`}
    >
      <nav className="section-shell flex items-center justify-between py-3.5 sm:py-4">
        {/* Brand */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 text-slate-900 transition focus:outline-hidden"
          aria-label="Varsha Portfolio Home"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white shadow-md transition group-hover:scale-105">
            V
          </div>
          <div className="flex flex-col">
            <span className="text-base font-extrabold tracking-tight text-slate-900">
              VARSHA
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
              Portfolio
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden items-center gap-1.5 rounded-full border border-slate-200/90 bg-white/70 px-3 py-1.5 shadow-xs backdrop-blur-md md:flex">
          {portfolio.nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200 ${
                activeSection === item.id
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={handleCopy}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-slate-300/80 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-xs transition hover:border-slate-400 hover:bg-slate-50 active:scale-95"
            title="Copy email address"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-semibold">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5 text-slate-500" />
                <span>Copy Email</span>
              </>
            )}
          </button>

          <a
            href={portfolio.resumePath}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-4 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-slate-800 hover:shadow-md active:scale-95"
          >
            <FileText className="h-3.5 w-3.5" />
            <span>Resume</span>
            <ArrowUpRight className="h-3 w-3 opacity-70" />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-800 shadow-xs md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-200 bg-[#f8f7f4] px-4 pt-2 pb-6 md:hidden animate-fade-up shadow-lg">
          <div className="flex flex-col gap-1.5">
            {portfolio.nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                  activeSection === item.id
                    ? 'bg-slate-900 text-white font-semibold'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="mt-4 flex flex-col gap-2 pt-3 border-t border-slate-200">
            <button
              onClick={() => {
                handleCopy();
                setMobileMenuOpen(false);
              }}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-xs"
            >
              {copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
              {copied ? 'Email Copied!' : 'Copy Email Address'}
            </button>
            <a
              href={portfolio.resumePath}
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FileText className="h-4 w-4" />
              View Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
