import React from 'react';
import { ArrowDown, Sparkles, ShieldCheck, Globe2, Clock } from 'lucide-react';
import Hero3DCanvas from './Hero3DCanvas';

interface HeroSectionProps {
  onOpenEstimator: () => void;
}

export default function HeroSection({ onOpenEstimator }: HeroSectionProps) {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden border-b border-slate-800/60">
      {/* 3D WebGL Background Canvas */}
      <Hero3DCanvas />

      {/* Subtle Ambient Radial Gradients */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[480px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-[380px] h-[380px] bg-cyan-500/5 rounded-full blur-[110px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10 my-auto w-full">
        <div className="max-w-4xl">
          {/* International Presence Flag Strip */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 mb-6 text-xs text-slate-300">
            <span className="flex items-center gap-1.5 font-mono text-blue-400 font-semibold tracking-wide uppercase text-[11px]">
              <Globe2 className="w-3.5 h-3.5 text-blue-400" />
              Global Engineering Studio
            </span>
            <span className="text-slate-600" aria-hidden="true">·</span>
            <span className="text-slate-400">Serving US · UK · GCC · Australia · Worldwide</span>
          </div>

          {/* Kinetic Headline with Editorial Precision */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-display leading-[1.06] mb-6 text-balance">
            ENGINEERING <br />
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
              DIGITAL REALITIES
            </span>
            <br />
            FOR GLOBAL BRANDS.
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed mb-8">
            Zetasol is an international web development, custom software, and autonomous AI agency.
            For over <span className="text-white font-semibold">8+ years</span>, we have built bespoke digital experiences,
            mission-critical platforms, and high-converting e-commerce engines that drive measurable market dominance.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-xl shadow-blue-600/25 flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <span>Explore Selected Work (17)</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <button
              onClick={onOpenEstimator}
              className="px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-colors flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
            >
              <Sparkles className="w-4 h-4 text-sky-400" />
              <span>Interactive Scope Estimator</span>
            </button>
          </div>
        </div>

        {/* Global Impact & Trust Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-slate-800/80">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-display tabular-nums">
              8+ Years
            </div>
            <p className="text-xs text-slate-400">Continuous Engineering Excellence</p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-display tabular-nums">
              150+
            </div>
            <p className="text-xs text-slate-400">Delivered Web & Software Platforms</p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-display tabular-nums">
              17+ Portfolios
            </div>
            <p className="text-xs text-slate-400">Live Global Client Showcase</p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-display tabular-nums flex items-center gap-1.5">
              <span>99.4%</span>
              <ShieldCheck className="w-4 h-4 text-emerald-400 inline" />
            </div>
            <p className="text-xs text-slate-400">On-Time Sprint Delivery Rate</p>
          </div>
        </div>
      </div>

      {/* Kinetic Infinite Marquee Ribbon inspired by icreativecanvas */}
      <div className="w-full overflow-hidden py-3 bg-[#0c1017] border-y border-slate-800/90 select-none">
        <div className="animate-marquee whitespace-nowrap text-xs font-mono font-medium tracking-widest uppercase text-slate-400 flex items-center">
          <span className="mx-6 text-white font-semibold flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            WEBSITE DEVELOPMENT
          </span>
          <span className="mx-6 text-slate-400">CUSTOM SOFTWARE</span>
          <span className="mx-6 text-slate-600">/</span>
          <span className="mx-6 text-white font-semibold flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            AI AGENTS & SOLUTIONS
          </span>
          <span className="mx-6 text-slate-400">SHOPIFY PLUS</span>
          <span className="mx-6 text-slate-600">/</span>
          <span className="mx-6 text-slate-400">WORDPRESS & WOO</span>
          <span className="mx-6 text-slate-600">/</span>
          <span className="mx-6 text-white font-semibold flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            CGI / VFX 3D VIDEOS
          </span>
          <span className="mx-6 text-slate-400">AEO & SEO SEARCH</span>
          <span className="mx-6 text-slate-600">/</span>
          <span className="mx-6 text-slate-400">NEXT.JS 15 ARCHITECTURE</span>
          <span className="mx-6 text-slate-600">/</span>
          <span className="mx-6 text-slate-400">MOBILE APP ENGINEERING</span>
          <span className="mx-6 text-slate-600">/</span>
          <span className="mx-6 text-white font-semibold flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            WEBSITE DEVELOPMENT
          </span>
          <span className="mx-6 text-slate-400">CUSTOM SOFTWARE</span>
          <span className="mx-6 text-slate-600">/</span>
          <span className="mx-6 text-white font-semibold flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            AI AGENTS & SOLUTIONS
          </span>
          <span className="mx-6 text-slate-400">SHOPIFY PLUS</span>
          <span className="mx-6 text-slate-600">/</span>
          <span className="mx-6 text-slate-400">WORDPRESS & WOO</span>
        </div>
      </div>
    </section>
  );
}
