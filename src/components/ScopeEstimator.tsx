import React, { useState, useMemo } from 'react';
import { Sparkles, ArrowRight, MessageCircle, Mail, CheckCircle2, Clock, ShieldCheck, RefreshCw } from 'lucide-react';
import { calculateProjectEstimate, validateEmail, validatePhoneNumber, ScopeConfig } from '../utils/estimator';
import confetti from 'canvas-confetti';

const SERVICE_OPTIONS = [
  { id: 'web-dev', label: 'Website Development', desc: 'Bespoke web flagship, JAMStack or CMS' },
  { id: 'custom-software', label: 'Custom Software / SaaS', desc: 'Scalable multi-tenant cloud platform' },
  { id: 'app-dev', label: 'Mobile App Development', desc: 'iOS & Android with React Native / Flutter' },
  { id: 'ai-integration', label: 'AI & LLM Integration', desc: 'RAG, custom models & cognitive pipelines' },
  { id: 'chatbots-agents', label: 'Autonomous AI Agents', desc: 'Goal-oriented multi-agent automation' },
  { id: 'api-integration', label: 'API & Cloud Integrations', desc: 'Stripe, ERPs, CRMs & high-throughput webhooks' },
  { id: 'digital-marketing', label: 'Digital Marketing & CRO', desc: 'Growth funnels, Klaviyo, attribution' },
  { id: 'seo-aeo', label: 'AEO & Generative SEO', desc: 'Search engine & ChatGPT/Perplexity ranking' },
  { id: 'google-ads', label: 'Google Ads & Paid Media', desc: 'High-ROAS search & Performance Max' },
  { id: 'cgi-vfx', label: 'CGI / VFX 3D Videos', desc: 'Photoreal 3D product renders & animations' },
  { id: 'project-management', label: 'Agile Project Oversight', desc: 'Sprint planning, Jira/Linear & QA testing' },
  { id: 'engineering-product', label: 'Engineering & IoT', desc: 'Hardware-to-cloud & bespoke tech R&D' },
];

const PLATFORM_OPTIONS = [
  { id: 'custom', label: 'Custom Next.js / React 19' },
  { id: 'shopify', label: 'Shopify / Shopify Plus' },
  { id: 'wordpress', label: 'WordPress / WooCommerce' },
  { id: 'webflow', label: 'Webflow' },
  { id: 'wix-squarespace', label: 'Wix Studio / Squarespace' },
  { id: 'kajabi', label: 'Kajabi LMS' },
];

interface ScopeEstimatorProps {
  initialServiceId?: string;
}

export default function ScopeEstimator({ initialServiceId }: ScopeEstimatorProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>(
    initialServiceId ? [initialServiceId] : ['web-dev', 'ai-integration']
  );
  const [selectedPlatform, setSelectedPlatform] = useState<string>('custom');
  const [timeline, setTimeline] = useState<'rush' | 'standard' | 'enterprise'>('standard');
  const [includeMaintenance, setIncludeMaintenance] = useState<boolean>(true);

  // Inquiry form states
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [projectNotes, setProjectNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const config: ScopeConfig = useMemo(() => ({
    services: selectedServices,
    platform: selectedPlatform,
    timeline,
    maintenance: includeMaintenance,
  }), [selectedServices, selectedPlatform, timeline, includeMaintenance]);

  const estimate = useMemo(() => calculateProjectEstimate(config), [config]);

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const whatsappMessage = useMemo(() => {
    const serviceNames = selectedServices
      .map((s) => SERVICE_OPTIONS.find((opt) => opt.id === s)?.label)
      .filter(Boolean)
      .join(', ');

    const text = `Hi Zetasol Team, I calculated an estimate on Zetasol.net:
- Services: ${serviceNames || 'General inquiry'}
- Platform: ${selectedPlatform}
- Timeline: ${timeline}
- Estimated Scope: $${estimate.basePriceMin.toLocaleString()} - $${estimate.basePriceMax.toLocaleString()} USD
- Target Duration: ~${estimate.estimatedWeeks} weeks
Looking forward to discussing our project!`;

    return encodeURIComponent(text);
  }, [selectedServices, selectedPlatform, timeline, estimate]);

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!clientName.trim()) {
      setFormError('Please enter your full name or company name.');
      return;
    }

    if (!validateEmail(clientEmail)) {
      setFormError('Please enter a valid business email address.');
      return;
    }

    if (clientPhone && !validatePhoneNumber(clientPhone)) {
      setFormError('Please enter a valid international phone/WhatsApp number.');
      return;
    }

    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#2563EB', '#38BDF8', '#10B981'],
    });

    setSubmitted(true);
  };

  return (
    <section id="estimator" className="py-24 bg-[#080B10] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-blue-400 mb-2">
            <span className="w-2 h-0.5 bg-blue-500" />
            <span>TRANSPARENT ARCHITECTURAL SCOPING</span>
            <span className="text-slate-600">/</span>
            <span>INSTANT ESTIMATOR</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            Calculate Your Project Scope
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Select your required disciplines and target platform to generate an instant baseline budget,
            timeline estimation, and recommended technology stack.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Scope Builder Controls (8 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Select Services */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                  1. Select Required Services ({selectedServices.length} Selected)
                </label>
                {selectedServices.length >= 3 && (
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                    Bundle Discount: 15% Applied
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {SERVICE_OPTIONS.map((srv) => {
                  const isChecked = selectedServices.includes(srv.id);
                  return (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => toggleService(srv.id)}
                      className={`p-3 text-left rounded-xl border transition-all flex items-start gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                        isChecked
                          ? 'bg-blue-950/40 border-blue-500 text-white'
                          : 'bg-[#0b0e16] border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 border transition-colors ${
                          isChecked ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-700 bg-slate-900'
                        }`}
                      >
                        {isChecked && <CheckCircle2 className="w-3 h-3" />}
                      </div>
                      <div className="min-w-0">
                        <div className={`text-xs font-bold font-display ${isChecked ? 'text-white' : 'text-slate-300'}`}>
                          {srv.label}
                        </div>
                        <div className="text-[11px] text-slate-400 truncate mt-0.5">
                          {srv.desc}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Preferred Platform */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-3">
                2. Target Platform & Foundation
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {PLATFORM_OPTIONS.map((p) => {
                  const isSelected = selectedPlatform === p.id;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setSelectedPlatform(p.id)}
                      className={`p-2.5 text-xs font-medium rounded-xl border text-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                        isSelected
                          ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/20'
                          : 'bg-[#0b0e16] border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {p.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Sprint Velocity / Timeline */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-3">
                3. Delivery Velocity & Timeline
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'rush', label: 'Rush Sprint', duration: '2–4 Weeks', desc: 'Accelerated milestone pacing' },
                  { id: 'standard', label: 'Standard Sprint', duration: '6–8 Weeks', desc: 'Standard agile cadence' },
                  { id: 'enterprise', label: 'Enterprise Phased', duration: '12+ Weeks', desc: 'Multi-stage enterprise rollout' },
                ].map((t) => {
                  const isSelected = timeline === t.id;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTimeline(t.id as any)}
                      className={`p-3 text-left rounded-xl border transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                        isSelected
                          ? 'bg-blue-950/40 border-blue-500 text-white'
                          : 'bg-[#0b0e16] border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div className={`text-xs font-bold font-display ${isSelected ? 'text-blue-400' : 'text-slate-300'}`}>
                        {t.label}
                      </div>
                      <div className="text-[11px] font-mono text-slate-400 mt-0.5">{t.duration}</div>
                      <div className="text-[10px] text-slate-400 mt-1 hidden sm:block">{t.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Dedicated Engineering & SLA Toggle */}
            <div className="p-4 bg-[#0b0e16] border border-slate-800 rounded-xl flex items-center justify-between gap-4">
              <div>
                <div className="text-xs font-bold text-white font-display">
                  Include 30-Day Post-Launch SLA & Continuous Maintenance
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  Includes 24/7 uptime monitoring, security patching, and on-demand sprint updates.
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIncludeMaintenance(!includeMaintenance)}
                className={`w-12 h-6 rounded-full transition-colors relative shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                  includeMaintenance ? 'bg-blue-600' : 'bg-slate-800'
                }`}
                role="switch"
                aria-checked={includeMaintenance}
              >
                <span
                  className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform ${
                    includeMaintenance ? 'left-7' : 'left-1'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Right Column: Live Estimate Summary Card & Direct Inquiry (5 cols) */}
          <div className="lg:col-span-5 bg-[#0b0e16] border border-slate-800/90 rounded-2xl p-6 sm:p-7 sticky top-24 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 font-semibold">
                  Architectural Estimate
                </span>
                <div className="text-base font-bold text-white font-display">
                  Project Scope Summary
                </div>
              </div>
              <div className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300">
                Tier: {estimate.complexity}
              </div>
            </div>

            {/* Price & Duration */}
            <div className="space-y-4 mb-6">
              <div className="p-4 bg-slate-900/80 border border-slate-800/80 rounded-xl">
                <div className="text-xs text-slate-400 font-mono">Estimated Investment Range (USD)</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-display tabular-nums mt-1">
                  ${estimate.basePriceMin.toLocaleString()} – ${estimate.basePriceMax.toLocaleString()}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  *Transparent milestone-based invoicing. Zero hidden fees.
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-slate-900/60 border border-slate-800 rounded-xl">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Clock className="w-3.5 h-3.5 text-sky-400" />
                    <span>Sprint Duration</span>
                  </div>
                  <div className="text-lg font-bold text-white font-display tabular-nums mt-1">
                    ~{estimate.estimatedWeeks} Weeks
                  </div>
                </div>

                <div className="p-3 bg-slate-900/60 border border-slate-800 rounded-xl">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>IP Ownership</span>
                  </div>
                  <div className="text-lg font-bold text-white font-display mt-1">
                    100% Client
                  </div>
                </div>
              </div>

              {/* Recommended Stack */}
              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Recommended Architecture
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {estimate.recommendedStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono text-slate-300 bg-slate-800/70 border border-slate-700/60 px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct Instant Actions */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <a
                href={`https://wa.me/923433524913?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>Discuss This Scope on WhatsApp</span>
              </a>

              <a
                href={`mailto:zetasolltd@gmail.com?subject=Project%20Scope%20Inquiry%20from%20Zetasol.net&body=${decodeURIComponent(whatsappMessage)}`}
                className="w-full py-2.5 px-4 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl flex items-center justify-center gap-2 transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Send Scope via Email (zetasolltd@gmail.com)</span>
              </a>
            </div>

            {/* Optional Immediate Callback Form */}
            <div className="mt-6 pt-5 border-t border-slate-800">
              {submitted ? (
                <div className="p-4 bg-emerald-950/40 border border-emerald-500/30 rounded-xl text-center">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                  <div className="text-sm font-bold text-white font-display">Inquiry Received</div>
                  <p className="text-xs text-slate-300 mt-1">
                    A senior engineer from Zetasol will review your scope and contact you within 2 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-3 text-xs text-emerald-400 hover:underline font-mono"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitInquiry} className="space-y-3">
                  <div className="text-xs font-mono uppercase text-slate-400 tracking-wider font-semibold">
                    Or Request Official Written Proposal
                  </div>

                  {formError && (
                    <div className="text-xs text-rose-400 bg-rose-950/40 border border-rose-500/30 p-2 rounded-lg">
                      {formError}
                    </div>
                  )}

                  <input
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Your Name / Company"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-800 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
                  />

                  <input
                    type="email"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    placeholder="Business Email (e.g. name@company.com)"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-800 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
                  />

                  <input
                    type="tel"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    placeholder="Phone / WhatsApp (+1, +44, +971...)"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-800 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
                  />

                  <button
                    type="submit"
                    className="w-full py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg flex items-center justify-center gap-1.5 shadow-md shadow-blue-600/30 transition-all focus:outline-none"
                  >
                    <span>Request Detailed Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
