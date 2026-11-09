import React from 'react';
import { MessageCircle, Mail, ExternalLink, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070a] border-t border-slate-800 text-slate-400 text-xs">
      {/* Upper Footer: Brand & Primary Sitemaps */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center p-0.5">
                <img
                  src="/public/assets/aistudio/WhatsApp_Image_2026-11-05_at_5.54.26_PM_6fba3fe7.jpeg"
                  alt="Zetasol"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-white font-display">
                  ZETASOL
                </span>
                <div className="text-[10px] tracking-wider uppercase text-slate-500 font-mono -mt-1">
                  Solution for you
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              International digital engineering and web development studio.
              Delivering high-performance websites, custom SaaS platforms, mobile apps, and autonomous AI agents for clients worldwide.
            </p>

            <div className="flex items-center gap-4 text-xs font-mono text-slate-400 pt-2">
              <span>8+ Years of Craft</span>
              <span aria-hidden="true">·</span>
              <span>150+ Deliveries</span>
              <span aria-hidden="true">·</span>
              <span>Global Client Base</span>
            </div>
          </div>

          {/* Quick Nav Col */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Navigation
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#work" className="hover:text-white transition-colors">
                  Selected Work (17)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  12 Core Capabilities
                </a>
              </li>
              <li>
                <a href="#platforms" className="hover:text-white transition-colors">
                  Supported Platforms
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-white transition-colors">
                  Scope & Cost Estimator
                </a>
              </li>
              <li>
                <a href="#global" className="hover:text-white transition-colors">
                  Global Presence & SLA
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Start a Project
                </a>
              </li>
            </ul>
          </div>

          {/* Core Services Col */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Disciplines
            </div>
            <ul className="space-y-2">
              <li>Custom Next.js & React 19</li>
              <li>Shopify Plus Architecture</li>
              <li>Enterprise WordPress VIP</li>
              <li>Autonomous AI Agents & RAG</li>
              <li>Mobile iOS & Android Apps</li>
              <li>CGI / VFX 3D Videos</li>
              <li>AEO & Generative Engine SEO</li>
            </ul>
          </div>

          {/* Direct Hotlines & Socials Col */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Connect With Us
            </div>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://wa.me/923433524913"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-mono"
                >
                  <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>+92 343 3524913</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:zetasolltd@gmail.com"
                  className="flex items-center gap-2 text-slate-300 hover:text-white font-mono truncate"
                >
                  <Mail className="w-3.5 h-3.5 shrink-0 text-blue-400" />
                  <span>zetasolltd@gmail.com</span>
                </a>
              </li>
              <li className="pt-2 flex items-center gap-3">
                <a
                  href="https://pk.linkedin.com/company/zetasol"
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                  aria-label="Zetasol LinkedIn"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://www.instagram.com/zetasol/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                  aria-label="Zetasol Instagram"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://www.facebook.com/zetasolco/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                  aria-label="Zetasol Facebook"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-900 py-6 bg-[#040608]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-slate-500 text-center sm:text-left">
            © 2026 Zetasol. All rights reserved. Registered trademark.
            <span className="hidden sm:inline"> · </span>
            <span className="block sm:inline mt-1 sm:mt-0 text-slate-400">
              International Delivery Hubs: US, UK, GCC & Australia.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white font-mono transition-colors focus:outline-none"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
