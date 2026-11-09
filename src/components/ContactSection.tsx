import React, { useState } from 'react';
import {
  MessageCircle,
  Mail,
  Send,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Globe2,
  PhoneCall,
  ExternalLink
} from 'lucide-react';
import { validateEmail, validatePhoneNumber } from '../utils/estimator';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Website Development');
  const [budget, setBudget] = useState('$5k – $15k');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!name.trim()) {
      setErrorMsg('Please enter your full name or company name.');
      return;
    }

    if (!validateEmail(email)) {
      setErrorMsg('Please enter a valid business email address.');
      return;
    }

    if (phone && !validatePhoneNumber(phone)) {
      setErrorMsg('Please enter a valid international phone number.');
      return;
    }

    if (!message.trim() || message.trim().length < 10) {
      setErrorMsg('Please write a brief summary of your project goals (at least 10 characters).');
      return;
    }

    setIsSubmitting(true);

    // Simulate instant secure recording & trigger celebratory confetti
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#2563EB', '#38BDF8', '#10B981'],
      });
    }, 400);
  };

  const whatsappDirectUrl = `https://wa.me/923433524913?text=${encodeURIComponent(
    `Hi Zetasol Team, I'm reaching out from Zetasol.net regarding ${service} with a budget of ${budget}.`
  )}`;

  return (
    <section id="contact" className="py-24 bg-[#07090e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Channels & Guarantee (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-blue-400 mb-2">
                <span className="w-2 h-0.5 bg-blue-500" />
                <span>START A DIALOGUE</span>
                <span className="text-slate-600">/</span>
                <span>2-HOUR SLA</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
                Let's Build Something Exceptional.
              </h2>
              <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
                Whether you have a finalized technical specification or an ambitious concept in need of architecture,
                our engineering leadership is ready to connect.
              </p>
            </div>

            {/* Direct Instant Channels Card */}
            <div className="bg-[#0b0e16] border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
                Direct Engineering Hotlines
              </div>

              {/* WhatsApp Direct */}
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-4 bg-emerald-950/30 border border-emerald-500/30 rounded-xl hover:bg-emerald-950/50 hover:border-emerald-500/50 transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-emerald-900/40 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-emerald-400 font-semibold uppercase">
                      Fastest Response · WhatsApp Hotline
                    </div>
                    <div className="text-sm font-bold text-white font-mono mt-0.5">
                      +92 343 3524913
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* Email Direct */}
              <a
                href="mailto:zetasolltd@gmail.com?subject=Project%20Inquiry%20-%20Zetasol"
                className="flex items-center justify-between p-4 bg-slate-900/70 border border-slate-800 rounded-xl hover:bg-slate-900 hover:border-slate-700 transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase">
                      Official Project Inquiries
                    </div>
                    <div className="text-sm font-bold text-white font-mono mt-0.5">
                      zetasolltd@gmail.com
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Social Channels */}
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Official Agency Presence
              </div>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href="https://pk.linkedin.com/company/zetasol"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 text-xs font-medium text-slate-300 bg-slate-900 border border-slate-800 rounded-lg hover:text-white hover:border-blue-500/50 transition-colors flex items-center gap-2"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>

                <a
                  href="https://www.instagram.com/zetasol/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 text-xs font-medium text-slate-300 bg-slate-900 border border-slate-800 rounded-lg hover:text-white hover:border-pink-500/50 transition-colors flex items-center gap-2"
                >
                  <span>Instagram</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>

                <a
                  href="https://www.facebook.com/zetasolco/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 text-xs font-medium text-slate-300 bg-slate-900 border border-slate-800 rounded-lg hover:text-white hover:border-blue-500/50 transition-colors flex items-center gap-2"
                >
                  <span>Facebook</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Guarantees */}
            <div className="p-4 bg-slate-900/40 border border-slate-800/80 rounded-xl space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>NDA signed prior to project architecture discussions</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span>2-Hour average initial response during international business hours</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Globe2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Multi-currency invoicing: USD, GBP, EUR, AED, AUD</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Brief Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#0b0e16] border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
            {isSuccess ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white font-display">
                  Project Brief Received!
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-white font-semibold">{name}</span>. A senior Zetasol engineering partner has been assigned to your inquiry and will reach out to <span className="text-blue-400 font-mono">{email}</span> within 2 hours.
                </p>

                <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={whatsappDirectUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Open WhatsApp Chat Now</span>
                  </a>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setMessage('');
                    }}
                    className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 rounded-xl border border-slate-800"
                  >
                    Submit Another Brief
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white font-display">
                    Schedule Discovery & Technical Scoping
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Fill out the parameters below to receive an architectural breakdown and proposal.
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3 text-xs text-rose-400 bg-rose-950/40 border border-rose-500/30 rounded-xl">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-semibold">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alexander Wright"
                      className="w-full px-4 py-2.5 text-sm rounded-xl bg-slate-900 border border-slate-800 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-semibold">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. alexander@enterprise.com"
                      className="w-full px-4 py-2.5 text-sm rounded-xl bg-slate-900 border border-slate-800 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-1">
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-semibold">
                      WhatsApp / Phone
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-2.5 text-sm rounded-xl bg-slate-900 border border-slate-800 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div className="sm:col-span-1">
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-semibold">
                      Primary Service
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-3 py-2.5 text-xs rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="Website Development">Website Development</option>
                      <option value="Custom Software / SaaS">Custom Software / SaaS</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="AI Integration & RAG">AI Integration & RAG</option>
                      <option value="Autonomous Chatbots & Agents">Autonomous Chatbots & Agents</option>
                      <option value="API Integrations">API Integrations</option>
                      <option value="Digital Marketing & CRO">Digital Marketing & CRO</option>
                      <option value="AEO & SEO Optimization">AEO & SEO Optimization</option>
                      <option value="Google Ads Management">Google Ads Management</option>
                      <option value="CGI / VFX 3D Videos">CGI / VFX 3D Videos</option>
                      <option value="Project Management">Project Management</option>
                      <option value="Engineering & Product Dev">Engineering & Product Dev</option>
                    </select>
                  </div>

                  <div className="sm:col-span-1">
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-semibold">
                      Target Budget (USD)
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full px-3 py-2.5 text-xs rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="< $5k">&lt; $5,000</option>
                      <option value="$5k – $15k">$5,000 – $15,000</option>
                      <option value="$15k – $35k">$15,000 – $35,000</option>
                      <option value="$35k+">$35,000+ (Enterprise)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-semibold">
                    Project Overview & Objectives *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your project goals, desired platforms (Shopify, Custom Next.js, WordPress, etc.), and target launch dates..."
                    className="w-full px-4 py-3 text-sm rounded-xl bg-slate-900 border border-slate-800 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-xl shadow-blue-600/25 flex items-center justify-center gap-2 active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Securing Submission...' : 'Send Project Brief & Request Proposal'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
