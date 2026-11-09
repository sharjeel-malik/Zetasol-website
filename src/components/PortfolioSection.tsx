import React, { useState, useMemo } from 'react';
import { ExternalLink, Layers, ArrowUpRight, Search, Sparkles, CheckCircle2, X } from 'lucide-react';
import { PORTFOLIO_ITEMS, PORTFOLIO_CATEGORIES, PortfolioItem } from '../data/portfolioData';

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalItem, setActiveModalItem] = useState<PortfolioItem | null>(null);

  const filteredItems = useMemo(() => {
    return PORTFOLIO_ITEMS.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.client.toLowerCase().includes(q) ||
        item.displayUrl.toLowerCase().includes(q) ||
        item.platform.toLowerCase().includes(q) ||
        item.categoryLabel.toLowerCase().includes(q);

      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="work" className="py-24 bg-[#07090e] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-blue-400 mb-2">
              <span className="w-2 h-0.5 bg-blue-500" />
              <span>PROVEN TRACK RECORD</span>
              <span className="text-slate-600">/</span>
              <span>17 RECENT CLIENT PLATFORMS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
              Selected Work
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl">
              Engineered across global markets. Spanning custom SaaS, Shopify Plus storefronts,
              enterprise WordPress portals, Webflow flagships, and specialized Kajabi platforms.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by client, stack..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-slate-900 border border-slate-800 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Interactive Filter Tabs (Buttons conforming to design guidelines) */}
        <div className="flex items-center gap-1.5 p-1.5 bg-slate-900/90 border border-slate-800 rounded-xl mb-10 overflow-x-auto scrollbar-none">
          {PORTFOLIO_CATEGORIES.map((cat) => {
            const count =
              cat.id === 'all'
                ? PORTFOLIO_ITEMS.length
                : PORTFOLIO_ITEMS.filter((item) => item.category === cat.id).length;

            const isActive = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/30 font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                    isActive ? 'bg-blue-700 text-blue-100' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="group relative bg-[#0b0e16] border border-slate-800/90 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/5"
            >
              {/* Browser Window Mockup Frame */}
              <div className="bg-[#10141f] border-b border-slate-800/80 px-4 py-3 flex items-center justify-between gap-3 select-none">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex-1 max-w-[210px] mx-auto bg-slate-900/90 border border-slate-800 rounded px-2.5 py-0.5 text-[11px] text-slate-400 font-mono truncate text-center">
                  {item.displayUrl}
                </div>
                <div className="text-[10px] font-mono text-slate-300 font-semibold uppercase tracking-wider">
                  {item.region}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Clean unboxed metadata with separators (Anti-Pill Rule §1.A) */}
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-3 font-medium">
                    <span className="text-blue-400 font-semibold">{item.categoryLabel}</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span>{item.platform}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white font-display group-hover:text-blue-400 transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Key Metrics Strip */}
                  <div className="grid grid-cols-3 gap-2 py-3 px-3 bg-slate-900/60 border border-slate-800/60 rounded-xl mb-5">
                    {item.metrics.map((metric, i) => (
                      <div key={i} className="text-center">
                        <div className="text-sm font-extrabold text-white font-display tabular-nums">
                          {metric.value}
                        </div>
                        <div className="text-[10px] text-slate-400 truncate mt-0.5">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {item.techStack.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono text-slate-400 bg-slate-800/50 px-2 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {item.techStack.length > 3 && (
                      <span className="text-[11px] font-mono text-slate-400 px-1 py-0.5">
                        +{item.techStack.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 pt-4 border-t border-slate-800/80">
                  <button
                    onClick={() => setActiveModalItem(item)}
                    className="flex-1 py-2 text-xs font-semibold text-slate-200 bg-slate-800/60 hover:bg-slate-700/80 rounded-lg transition-colors flex items-center justify-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    <span>View Case Study</span>
                  </button>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 text-slate-300 hover:text-white bg-blue-600/20 hover:bg-blue-600 border border-blue-500/30 rounded-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    title={`Open live website: ${item.url}`}
                    aria-label={`Open ${item.title} live website in new tab`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty state when query produces no matches */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm">No portfolio items matched your search "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-3 text-xs text-blue-400 hover:underline font-semibold"
            >
              Reset all filters
            </button>
          </div>
        )}
      </div>

      {/* Case Study Detail Modal */}
      {activeModalItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div className="relative w-full max-w-2xl bg-[#0c1018] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-800 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-blue-400 font-mono uppercase tracking-wider mb-1">
                  <span>{activeModalItem.categoryLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeModalItem.platform}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeModalItem.region}</span>
                </div>
                <h3 id="modal-title" className="text-2xl font-bold text-white font-display">
                  {activeModalItem.title}
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  Client: {activeModalItem.client}
                </p>
              </div>

              <button
                onClick={() => setActiveModalItem(null)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors focus:outline-none"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              {/* Quantified Outcomes */}
              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400 mb-3 tracking-wider">
                  Verified Engineering Outcomes
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  {activeModalItem.metrics.map((m, i) => (
                    <div key={i} className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl text-center">
                      <div className="text-xl font-extrabold text-blue-400 font-display tabular-nums">
                        {m.value}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenge vs Solution */}
              <div className="space-y-4">
                <div className="bg-slate-900/50 border border-slate-800/80 p-4 rounded-xl">
                  <div className="text-xs font-mono uppercase text-rose-400 font-semibold mb-1">
                    The Business & Architectural Challenge
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {activeModalItem.challenge}
                  </p>
                </div>

                <div className="bg-slate-900/50 border border-slate-800/80 p-4 rounded-xl">
                  <div className="text-xs font-mono uppercase text-emerald-400 font-semibold mb-1">
                    Zetasol Engineering Solution
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {activeModalItem.solution}
                  </p>
                </div>
              </div>

              {/* Full Tech Stack */}
              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400 mb-2 tracking-wider">
                  Architectural & Integration Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalItem.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono text-slate-300 bg-slate-800/70 border border-slate-700/60 px-3 py-1 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 bg-slate-900/70 border-t border-slate-800 flex items-center justify-between gap-4">
              <span className="text-xs text-slate-400 font-mono truncate hidden sm:inline">
                {activeModalItem.url}
              </span>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                <button
                  onClick={() => setActiveModalItem(null)}
                  className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white"
                >
                  Close
                </button>
                <a
                  href={activeModalItem.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg flex items-center gap-1.5 shadow-md shadow-blue-600/30 transition-all"
                >
                  <span>Visit Live Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
