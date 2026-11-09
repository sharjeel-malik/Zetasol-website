import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PortfolioSection from './components/PortfolioSection';
import ServicesSection from './components/ServicesSection';
import PlatformExpertise from './components/PlatformExpertise';
import ScopeEstimator from './components/ScopeEstimator';
import GlobalTrustSection from './components/GlobalTrustSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { MessageCircle, X, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { validateEmail } from './utils/estimator';
import confetti from 'canvas-confetti';

export default function App() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string>('web-dev');

  // Quick RFP Modal State
  const [modalName, setModalName] = useState('');
  const [modalEmail, setModalEmail] = useState('');
  const [modalService, setModalService] = useState('Website Development');
  const [modalNotes, setModalNotes] = useState('');
  const [modalSuccess, setModalSuccess] = useState(false);
  const [modalError, setModalError] = useState('');

  const handleOpenEstimator = () => {
    const el = document.getElementById('estimator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForEstimate = (serviceId: string) => {
    setPreselectedService(serviceId);
    const el = document.getElementById('estimator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setModalError('');

    if (!modalName.trim()) {
      setModalError('Please enter your full name.');
      return;
    }

    if (!validateEmail(modalEmail)) {
      setModalError('Please enter a valid email address.');
      return;
    }

    setModalSuccess(true);
    confetti({
      particleCount: 75,
      spread: 60,
      origin: { y: 0.5 },
      colors: ['#2563EB', '#38BDF8', '#10B981'],
    });
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-[#E2E8F0] font-sans antialiased">
      {/* 3-Zone Header Contract (§2) */}
      <Header onOpenConsultation={() => setIsConsultationModalOpen(true)} />

      {/* Main Flow: Proposition -> Capabilities -> Proof -> Conversion */}
      <main>
        {/* 1. Kinetic Hero with 3D Cyber-Nexus Canvas */}
        <HeroSection onOpenEstimator={handleOpenEstimator} />

        {/* 2. 17 Live Client Portfolios Showcase */}
        <PortfolioSection />

        {/* 3. 12 Core Services with Deliverables & Stack Breakdown */}
        <ServicesSection onSelectServiceForEstimate={handleSelectServiceForEstimate} />

        {/* 4. Platform Agnostic Mastery: Custom, Shopify, WP, Webflow, Kajabi, Wix, Squarespace */}
        <PlatformExpertise />

        {/* 5. Interactive Scope & Cost Estimator */}
        <ScopeEstimator initialServiceId={preselectedService} />

        {/* 6. Global Trust & Delivery Network (US, UK, GCC, Australia Timezones) */}
        <GlobalTrustSection />

        {/* 7. Attributable International Testimonials */}
        <TestimonialsSection />

        {/* 8. Lead Capture & Direct WhatsApp/Email Channels */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Direct WhatsApp Action Button (Fixed Bottom-Right) */}
      <aside aria-label="Quick Communication">
        <a
          href="https://wa.me/923433524913?text=Hi%20Zetasol%20team%2C%20I%20would%20like%20to%20discuss%20a%20new%20project."
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs shadow-2xl shadow-emerald-600/40 hover:scale-105 active:scale-95 transition-all group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          title="Direct WhatsApp with Senior Engineer"
          aria-label="Direct WhatsApp Chat with Zetasol (+92 343 3524913)"
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5 text-white" />
            <span className="w-2 h-2 rounded-full bg-white absolute -top-0.5 -right-0.5 animate-ping" />
          </div>
          <span className="hidden sm:inline font-mono font-semibold">WhatsApp Chat</span>
        </a>
      </aside>

      {/* Quick RFP / Consultation Dialog Modal */}
      {isConsultationModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="rfp-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div className="relative w-full max-w-lg bg-[#0c1018] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold mb-1">
                  Start Your Project
                </div>
                <h3 id="rfp-title" className="text-2xl font-bold text-white font-display">
                  Initiate Technical Scoping
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Connect directly with Zetasol engineering leadership.
                </p>
              </div>
              <button
                onClick={() => {
                  setIsConsultationModalOpen(false);
                  setModalSuccess(false);
                }}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {modalSuccess ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <div className="text-lg font-bold text-white font-display">
                  Scoping Request Dispatched
                </div>
                <p className="text-xs text-slate-300">
                  Thank you, {modalName}. A lead architect will contact you within 2 hours with our preliminary technical review.
                </p>
                <div className="pt-4">
                  <a
                    href="https://wa.me/923433524913?text=Hi%20Zetasol%2C%20I%20just%20submitted%20a%20project%20scoping%20request%20on%20Zetasol.net."
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Ping on WhatsApp Now</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleModalSubmit} className="space-y-4">
                {modalError && (
                  <div className="p-2.5 text-xs text-rose-400 bg-rose-950/40 border border-rose-500/30 rounded-lg">
                    {modalError}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={modalName}
                    onChange={(e) => setModalName(e.target.value)}
                    placeholder="e.g. Marcus Vance"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-800 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={modalEmail}
                    onChange={(e) => setModalEmail(e.target.value)}
                    placeholder="e.g. marcus@firm.com"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-800 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                    Service of Interest
                  </label>
                  <select
                    value={modalService}
                    onChange={(e) => setModalService(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="Website Development">Website Development</option>
                    <option value="Custom Software / SaaS">Custom Software / SaaS</option>
                    <option value="Shopify Plus E-Commerce">Shopify Plus E-Commerce</option>
                    <option value="AI Integration & Agents">AI Integration & Agents</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="CGI / VFX 3D Videos">CGI / VFX 3D Videos</option>
                    <option value="SEO & AEO Search">SEO & AEO Search</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                    Brief Notes or Timeline
                  </label>
                  <textarea
                    rows={3}
                    value={modalNotes}
                    onChange={(e) => setModalNotes(e.target.value)}
                    placeholder="Target launch date, key requirements, or existing website URL..."
                    className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-800 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between gap-3">
                  <a
                    href="https://wa.me/923433524913?text=Hi%20Zetasol%20team%2C%20I%20would%20like%20to%20discuss%20a%20new%20project."
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-mono"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp directly</span>
                  </a>

                  <button
                    type="submit"
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg flex items-center gap-1.5 shadow-md shadow-blue-600/30 transition-all"
                  >
                    <span>Request Proposal</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
