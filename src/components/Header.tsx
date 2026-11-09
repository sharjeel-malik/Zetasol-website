import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';

interface HeaderProps {
  onOpenConsultation: () => void;
}

export default function Header({ onOpenConsultation }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07090e]/90 border-b border-slate-800/80 shadow-2xl py-3.5 backdrop-blur-md'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single line, single clean brand element) */}
          <a
            href="/"
            className="flex items-center gap-3.5 group whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
          >
            <div className="relative w-9 h-9 rounded-lg overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center p-0.5 group-hover:border-blue-500/50 transition-colors">
              <img
                src="/public/assets/aistudio/WhatsApp_Image_2026-11-05_at_5.54.26_PM_6fba3fe7.jpeg"
                alt="Zetasol Logo"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-white font-display flex items-center gap-1">
                ZETASOL
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              </span>
              <span className="text-[10px] tracking-wider uppercase text-slate-400 font-mono -mt-1">
                Solution for you
              </span>
            </div>
          </a>

          {/* Zone 2: 4–5 Clean Single-Line Nav Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300"
          >
            <a
              href="#work"
              className="hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-blue-500 after:transition-all whitespace-nowrap shrink-0"
            >
              Selected Work
            </a>
            <a
              href="#services"
              className="hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-blue-500 after:transition-all whitespace-nowrap shrink-0"
            >
              Capabilities
            </a>
            <a
              href="#platforms"
              className="hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-blue-500 after:transition-all whitespace-nowrap shrink-0"
            >
              Platforms
            </a>
            <a
              href="#estimator"
              className="hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-blue-500 after:transition-all whitespace-nowrap shrink-0"
            >
              Scope Estimator
            </a>
            <a
              href="#global"
              className="hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-blue-500 after:transition-all whitespace-nowrap shrink-0"
            >
              Global Presence
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action + Quick WhatsApp Direct Link */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/923433524913?text=Hi%20Zetasol%20team%2C%20I%20would%20like%20to%20discuss%20a%20new%20project."
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-3 py-2 text-xs font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 rounded-lg hover:bg-emerald-900/40 transition-colors whitespace-nowrap shrink-0"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Direct</span>
            </a>

            <button
              onClick={onOpenConsultation}
              className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20 active:scale-[0.98] whitespace-nowrap shrink-0 flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <span>Start Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0D14] border-b border-slate-800 px-5 pt-4 pb-6 space-y-4 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            <a
              href="#work"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-blue-400 py-1"
            >
              Selected Work (17 Portfolios)
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-blue-400 py-1"
            >
              Capabilities & AI Solutions
            </a>
            <a
              href="#platforms"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-blue-400 py-1"
            >
              Platforms & Tech Stack
            </a>
            <a
              href="#estimator"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-blue-400 py-1"
            >
              Interactive Scope Estimator
            </a>
            <a
              href="#global"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-blue-400 py-1"
            >
              Global Presence & Contact
            </a>
          </nav>
          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2.5">
            <a
              href="https://wa.me/923433524913?text=Hi%20Zetasol%20team%2C%20I%20would%20like%20to%20discuss%20a%20new%20project."
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-medium text-emerald-400 bg-emerald-950/50 border border-emerald-500/30 rounded-lg"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp: +92 343 3524913</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-lg flex items-center justify-center gap-1.5 shadow-md shadow-blue-600/30"
            >
              <span>Get Immediate Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
