import React, { useState } from 'react';
import {
  Globe,
  Cpu,
  Smartphone,
  Sparkles,
  Bot,
  Layers,
  TrendingUp,
  Search,
  Target,
  Film,
  CheckCircle2,
  Wrench,
  ChevronDown,
  ArrowRight,
  Code2
} from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '../data/servicesData';
import { PORTFOLIO_ITEMS } from '../data/portfolioData';

const ICON_MAP: Record<string, React.ElementType> = {
  Globe,
  Cpu,
  Smartphone,
  Sparkles,
  Bot,
  Layers,
  TrendingUp,
  Search,
  Target,
  Film,
  CheckCircle2,
  Wrench,
};

interface ServicesSectionProps {
  onSelectServiceForEstimate: (serviceId: string) => void;
}

export default function ServicesSection({ onSelectServiceForEstimate }: ServicesSectionProps) {
  const [expandedId, setExpandedId] = useState<string>('web-dev');

  return (
    <section id="services" className="py-24 bg-[#080B10] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-blue-400 mb-2">
            <span className="w-2 h-0.5 bg-blue-500" />
            <span>FULL-SPECTRUM CAPABILITIES</span>
            <span className="text-slate-600">/</span>
            <span>12 CORE DISCIPLINES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            Creative Solutions & Engineering
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            From bespoke high-conversion websites to autonomous AI multi-agent workflows and cinematic CGI.
            Every capability is delivered by senior engineers with 8+ years of production experience.
          </p>
        </div>

        {/* 12 Services Editorial Accordion / Card Deck */}
        <div className="space-y-4">
          {SERVICES_DATA.map((service) => {
            const isExpanded = expandedId === service.id;
            const Icon = ICON_MAP[service.iconName] || Code2;
            const relatedProject = service.featuredProjectSlug
              ? PORTFOLIO_ITEMS.find((p) => p.id === service.featuredProjectSlug)
              : null;

            return (
              <div
                key={service.id}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'bg-[#0E131E] border-blue-500/50 shadow-xl shadow-blue-500/5'
                    : 'bg-[#0B0E16]/80 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                {/* Accordion Row Header */}
                <button
                  onClick={() => setExpandedId(isExpanded ? '' : service.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-2xl"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                    <span className="font-mono text-xs sm:text-sm font-semibold text-blue-400/80 shrink-0">
                      ({service.number})
                    </span>

                    <div className="w-9 h-9 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-blue-400" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base sm:text-xl font-bold text-white font-display truncate">
                        {service.title}
                      </h3>
                      <p className="text-xs text-slate-400 truncate hidden sm:block">
                        {service.headline}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-xs text-slate-400 hidden md:inline font-mono">
                      {isExpanded ? 'Collapse' : 'Explore Architecture'}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 transition-transform duration-300 ${
                        isExpanded ? 'rotate-180 bg-blue-600 text-white' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </button>

                {/* Expanded Details Pane */}
                {isExpanded && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-8 pt-2 border-t border-slate-800/70 animate-in fade-in duration-300">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Description & Deliverables */}
                      <div className="lg:col-span-2 space-y-5">
                        <p className="text-sm text-slate-300 leading-relaxed">
                          {service.description}
                        </p>

                        <div>
                          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                            Production Deliverables & Guarantees
                          </h4>
                          <ul className="space-y-2">
                            {service.deliverables.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tech Stack Chips */}
                        <div>
                          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                            Deployment & Technology Stack
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {service.techStack.map((tech, idx) => (
                              <span
                                key={idx}
                                className="text-xs font-mono text-slate-300 bg-slate-800/70 border border-slate-700/60 px-2.5 py-1 rounded-md"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Column: Case Proof & Action */}
                      <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 flex flex-col justify-between space-y-4">
                        {relatedProject && (
                          <div className="space-y-2">
                            <span className="text-[11px] font-mono uppercase text-blue-400 tracking-wider font-semibold">
                              Live Production Proof
                            </span>
                            <div className="text-sm font-bold text-white font-display">
                              {relatedProject.title}
                            </div>
                            <p className="text-xs text-slate-400 line-clamp-2">
                              {relatedProject.description}
                            </p>
                            <a
                              href={relatedProject.url}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 pt-1"
                            >
                              <span>Inspect live project</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        )}

                        <div className="pt-4 border-t border-slate-800 space-y-2">
                          <button
                            onClick={() => onSelectServiceForEstimate(service.id)}
                            className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg flex items-center justify-center gap-2 shadow-md shadow-blue-600/30 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                          >
                            <span>Estimate Cost for {service.title}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                          <p className="text-[10px] text-center text-slate-300 font-medium">
                            Guaranteed sprint turnaround & transparent weekly demos
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
