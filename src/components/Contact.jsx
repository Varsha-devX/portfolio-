import { useState } from 'react';
import { portfolio } from '../data/portfolio';
import { Mail, Send, Copy, Check, MessageSquare, MapPin, CheckCircle2, Loader2, AlertCircle, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';

export function Contact({ showToast }) {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [copied, setCopied] = useState(false);
  const [charCount, setCharCount] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (name === 'message') {
      setCharCount(value.length);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolio.contact.email);
    setCopied(true);
    if (showToast) {
      showToast('Email address copied to clipboard!', 'success');
    }
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      if (showToast) {
        showToast('Please fill out all required fields before submitting.', 'info');
      }
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${portfolio.contact.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formState.name.trim(),
          email: formState.email.trim(),
          message: formState.message.trim(),
          _subject: `New Portfolio Message from ${formState.name.trim()}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const result = await response.json();

      if (response.ok && (result.success === 'true' || result.success === true || result.message)) {
        try {
          confetti({
            particleCount: 60,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#0f172a', '#10b981', '#6366f1', '#f59e0b'],
          });
        } catch {
          // Fallback
        }

        setSubmitted(true);
        if (showToast) {
          showToast(`Message sent successfully to ${portfolio.contact.email}!`, 'success');
        }
      } else {
        throw new Error(result.message || 'Failed to deliver message via form service.');
      }
    } catch (err) {
      console.error('Contact Form Submission Error:', err);
      setSubmitError(err.message || 'An error occurred while sending your message.');
      if (showToast) {
        showToast('Could not send message automatically. Please use the direct email link.', 'error');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormState({ name: '', email: '', message: '' });
    setCharCount(0);
    setSubmitted(false);
    setSubmitError(null);
  };

  const mailtoLink = `mailto:${portfolio.contact.email}?subject=${encodeURIComponent(
    `Portfolio Inquiry from ${formState.name || 'Visitor'}`
  )}&body=${encodeURIComponent(
    `${formState.message || ''}\n\n---\nFrom: ${formState.name || ''} (${formState.email || ''})`
  )}`;

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

      <div className="grid gap-10 lg:grid-cols-12">
        {/* Left Column: Direct channels & Quick Connect */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-3xl border border-slate-200/90 bg-white/90 p-6 sm:p-7 shadow-xs">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Direct Contact</h3>
            <p className="text-xs text-slate-600 mb-5">
              Feel free to send an email directly, connect on LinkedIn, or review my projects on GitHub.
            </p>

            <div className="space-y-3">
              {/* Copy Email Button Card */}
              <div className="flex items-center justify-between rounded-2xl border border-slate-200/80 bg-slate-50/80 p-3.5 transition hover:border-slate-300 hover:bg-white">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase text-slate-400">Email</div>
                    <a
                      href={`mailto:${portfolio.contact.email}`}
                      className="text-xs font-bold text-slate-900 hover:text-blue-600 transition"
                      title="Click to compose email"
                    >
                      {portfolio.contact.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <a
                    href={`mailto:${portfolio.contact.email}`}
                    className="rounded-xl border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-700 shadow-2xs hover:bg-slate-50 active:scale-95 transition"
                    title="Open mail client"
                  >
                    <Send className="h-3 w-3 text-slate-600" />
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-2xs hover:bg-slate-50 active:scale-95 transition"
                  >
                    {copied ? (
                      <span className="flex items-center gap-1 text-emerald-600">
                        <Check className="h-3.5 w-3.5" /> Copied
                      </span>
                    ) : (
                      <span className="flex items-center gap-1">
                        <Copy className="h-3.5 w-3.5" /> Copy
                      </span>
                    )}
                  </button>
                </div>
              </div>

              {/* LinkedIn */}
              <a
                href={portfolio.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-2xl border border-slate-200/80 bg-slate-50/80 p-3.5 transition hover:border-slate-300 hover:bg-white"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white">
                    <LinkedinIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase text-slate-400">LinkedIn</div>
                    <div className="text-xs font-bold text-slate-900">in/varsha-333a44350</div>
                  </div>
                </div>
                <span className="text-xs font-semibold text-blue-600">Connect →</span>
              </a>

              {/* GitHub */}
              <a
                href={portfolio.socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-2xl border border-slate-200/80 bg-slate-50/80 p-3.5 transition hover:border-slate-300 hover:bg-white"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white">
                    <GithubIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase text-slate-400">GitHub</div>
                    <div className="text-xs font-bold text-slate-900">Varsha-devX</div>
                  </div>
                </div>
                <span className="text-xs font-semibold text-slate-700">Explore →</span>
              </a>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-slate-400" />
                <span>{portfolio.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-slate-200/90 bg-white/90 p-6 sm:p-8 shadow-xs">
            {submitted ? (
              <div className="py-10 text-center space-y-4 animate-fade-up">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Message Delivered!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you for reaching out, <strong className="text-slate-900">{formState.name || 'Friend'}</strong>. Your message was sent directly to <strong className="text-slate-900">{portfolio.contact.email}</strong>. I will get back to you shortly at <strong className="text-slate-900">{formState.email}</strong>.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="rounded-full bg-slate-900 px-6 py-2.5 text-xs font-bold text-white transition hover:bg-slate-800"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                    <MessageSquare className="h-4 w-4 text-slate-500" /> Send a Direct Message
                  </span>
                  <span className="text-[11px] text-slate-400">Direct to Inbox</span>
                </div>

                {submitError && (
                  <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4 text-xs text-rose-800 animate-fade-up">
                    <div className="flex items-start gap-2.5">
                      <AlertCircle className="h-4 w-4 text-rose-600 shrink-0 mt-0.5" />
                      <div className="space-y-2 flex-1">
                        <p className="font-semibold">{submitError}</p>
                        <p className="text-rose-700">
                          You can also send your message directly via your email client or Gmail:
                        </p>
                        <div>
                          <a
                            href={mailtoLink}
                            className="inline-flex items-center gap-1.5 rounded-xl bg-rose-700 px-3 py-1.5 font-bold text-white shadow-2xs hover:bg-rose-800 transition"
                          >
                            <Mail className="h-3.5 w-3.5" />
                            <span>Send via Email Client</span>
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-bold text-slate-700">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      disabled={isSubmitting}
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:border-slate-400 focus:bg-white focus:outline-hidden transition disabled:opacity-60"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-bold text-slate-700">
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      disabled={isSubmitting}
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:border-slate-400 focus:bg-white focus:outline-hidden transition disabled:opacity-60"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label htmlFor="message" className="text-xs font-bold text-slate-700">
                      Your Message <span className="text-rose-500">*</span>
                    </label>
                    <span className="text-[10px] text-slate-400">{charCount}/500 chars</span>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    maxLength={500}
                    disabled={isSubmitting}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Hello Varsha, I'd like to discuss a project / internship opportunity..."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 text-xs text-slate-900 placeholder-slate-400 focus:border-slate-400 focus:bg-white focus:outline-hidden transition resize-none disabled:opacity-60"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-3 text-xs font-bold text-white shadow-md transition hover:bg-slate-800 active:scale-[0.99] disabled:opacity-75 cursor-pointer disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-3.5 w-3.5 animate-spin text-white" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-3.5 w-3.5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
