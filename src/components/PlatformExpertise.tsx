import React from 'react';
import { Code, ShoppingCart, Layout, Sparkles, GraduationCap, Palette, Layers, CheckCircle } from 'lucide-react';

export default function PlatformExpertise() {
  const platforms = [
    {
      name: 'Custom Next.js & Full-Stack',
      icon: Code,
      badge: 'Bespoke / Enterprise',
      description: 'Zero limits. Custom serverless, microservices, and React 19 architectures designed for extreme performance, security, and unique business logic.',
      highlight: 'Sub-second LCP, infinite scaling, custom APIs',
      technologies: ['Next.js 15', 'React 19', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
      exampleClients: 'SaaS Properties, Tanker.ae, The Shia Wedding',
    },
    {
      name: 'Shopify & Shopify Plus',
      icon: ShoppingCart,
      badge: 'E-Commerce Powerhouse',
      description: 'High-velocity commerce with tailored Liquid themes, custom private apps, delivery date engines, and high-converting one-page checkout experiences.',
      highlight: 'High AOV, express checkouts, Klaviyo flows',
      technologies: ['Shopify Plus', 'Hydrogen / Oxygen', 'Liquid', 'Storefront API', 'Stripe'],
      exampleClients: 'Manna Dew, Island Hobby Nut, KnowEar, DocoPet',
    },
    {
      name: 'WordPress & WooCommerce',
      icon: Layout,
      badge: 'Flexible & Scalable',
      description: 'Hardened corporate platforms, litigation portals, and custom WooCommerce stores with bespoke ACF fields and ironclad security.',
      highlight: 'Custom plugins, multilingual, zero bloat',
      technologies: ['WordPress VIP', 'WooCommerce', 'ACF Pro', 'PHP 8.2', 'Cloudflare'],
      exampleClients: 'Olowu Law, Ohana Law, Spoon From The Moon, TVB Detailing',
    },
    {
      name: 'Webflow Flagships',
      icon: Palette,
      badge: 'Visual Kinetic Masterpieces',
      description: 'Visual fluidity combined with clean, semantic markup, kinetic GSAP interactions, and intuitive client-friendly CMS structures.',
      highlight: 'Award-winning design, zero maintenance',
      technologies: ['Webflow CMS', 'GSAP', 'Custom JS', 'Zapier Automation'],
      exampleClients: 'Crescendo Apex, Studio Launches',
    },
    {
      name: 'Squarespace & Wix Studio',
      icon: Layers,
      badge: 'Creative & Luxury Portfolios',
      description: 'Tailored for fine artists, architectural lighting designers, and high-fashion boutiques who require pristine visual fidelity.',
      highlight: 'Bespoke CSS/JS injection, gallery viewports',
      technologies: ['Wix Studio / Velo', 'Squarespace Commerce', 'Acuity Scheduling'],
      exampleClients: 'Lara Zankoul, Greg James Designs, Abundant Brides',
    },
    {
      name: 'Kajabi & Learning Platforms',
      icon: GraduationCap,
      badge: 'Knowledge Monetization',
      description: 'High-ticket executive coaching academies, interactive curriculums, multi-tier enterprise licensing, and automated certification funnels.',
      highlight: 'Paywalled LMS, video streaming, corporate billing',
      technologies: ['Kajabi Engine', 'Stripe Subscriptions', 'Zoom API', 'Zapier'],
      exampleClients: 'Maurice Training',
    },
  ];

  return (
    <section id="platforms" className="py-24 bg-[#07090e] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-blue-400 mb-2">
            <span className="w-2 h-0.5 bg-blue-500" />
            <span>PLATFORM AGNOSTIC MASTERY</span>
            <span className="text-slate-600">/</span>
            <span>8+ YEARS PRODUCTION EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            We Build on Any Platform That Fits Your Goal
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            We don't force you into a one-size-fits-all framework. Whether you need a bleeding-edge custom Next.js web application,
            a high-revenue Shopify Plus store, a corporate WordPress portal, or a sleek Webflow flagship, our engineers deliver flawless execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-[#0b0e16] border border-slate-800/90 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all hover:shadow-xl hover:shadow-blue-500/5 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400 group-hover:text-white group-hover:bg-blue-600 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">
                      {p.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-display mb-2">
                    {p.name}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {p.description}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium mb-4">
                    <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{p.highlight}</span>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {p.technologies.map((t, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-400">
                  <span className="text-slate-400">Deployed For: </span>
                  <span className="text-slate-200 font-medium">{p.exampleClients}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
