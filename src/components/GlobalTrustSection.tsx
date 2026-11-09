import React, { useState, useEffect } from 'react';
import { Globe, Clock, ShieldCheck, MapPin, Zap, Check, Lock, Award } from 'lucide-react';

export default function GlobalTrustSection() {
  const [times, setTimes] = useState({
    newYork: '',
    london: '',
    dubai: '',
    sydney: '',
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      setTimes({
        newYork: now.toLocaleTimeString('en-US', {
          timeZone: 'America/New_York',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        }),
        london: now.toLocaleTimeString('en-GB', {
          timeZone: 'Europe/London',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        }),
        dubai: now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Dubai',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        }),
        sydney: now.toLocaleTimeString('en-AU', {
          timeZone: 'Australia/Sydney',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        }),
      });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const regions = [
    {
      region: 'North America',
      hub: 'New York / Silicon Valley',
      time: times.newYork,
      timeZoneLabel: 'EST / EDT',
      flag: '🇺🇸',
      clientsServed: '45+ Enterprise & E-Com Brands',
      keyFocus: 'SaaS Platforms, AI Agent Systems, Shopify Plus',
    },
    {
      region: 'United Kingdom & Europe',
      hub: 'London / Nationwide',
      time: times.london,
      timeZoneLabel: 'GMT / BST',
      flag: '🇬🇧',
      clientsServed: '40+ Retail, Legal & Artisan Brands',
      keyFocus: 'Food & Beverage E-Commerce, Legal Portfolios, Custom Apps',
    },
    {
      region: 'GCC & Middle East',
      hub: 'Dubai / Abu Dhabi / Riyadh',
      time: times.dubai,
      timeZoneLabel: 'GST (+4)',
      flag: '🇦🇪',
      clientsServed: '35+ Real Estate & Commercial Fleets',
      keyFocus: 'Luxury PropTech, Multilingual Portals, Fleet Dispatch',
    },
    {
      region: 'Asia Pacific & Australia',
      hub: 'Sydney / Melbourne',
      time: times.sydney,
      timeZoneLabel: 'AEDT (+11)',
      flag: '🇦🇺',
      clientsServed: '25+ Global Consultancies & Tourism',
      keyFocus: 'High-Speed Web Architecture, Booking Engines',
    },
  ];

  return (
    <section id="global" className="py-24 bg-[#07090e] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-blue-400 mb-2">
            <span className="w-2 h-0.5 bg-blue-500" />
            <span>GLOBAL DELIVERY NETWORK</span>
            <span className="text-slate-600">/</span>
            <span>WORLDWIDE CLIENTELE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            Built for Global Enterprises & Founders
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Distance is never a barrier. With synchronized sprint handoffs, continuous timezone coverage,
            and 8+ years of international delivery, we partner seamlessly with clients in North America, the UK, the GCC, and Australia.
          </p>
        </div>

        {/* Global Timezone Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {regions.map((reg, idx) => (
            <div
              key={idx}
              className="bg-[#0b0e16] border border-slate-800/90 rounded-2xl p-5 flex flex-col justify-between hover:border-slate-700 transition-all shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-2xl" role="img" aria-label={reg.region}>
                    {reg.flag}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-950/50 border border-emerald-500/30 px-2 py-0.5 rounded">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Live Sync</span>
                  </div>
                </div>

                <div className="text-xs font-bold text-white font-display">
                  {reg.region}
                </div>
                <div className="text-[11px] text-slate-400 font-mono mt-0.5 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                  <span>{reg.hub}</span>
                </div>

                <div className="my-4 py-2 px-3 bg-slate-900/80 rounded-xl border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                    <span>{reg.timeZoneLabel}</span>
                  </div>
                  <div className="text-sm font-extrabold text-white font-mono tabular-nums">
                    {reg.time || '12:00 PM'}
                  </div>
                </div>

                <div className="text-[11px] text-slate-300 font-medium mb-1">
                  {reg.clientsServed}
                </div>
                <div className="text-[10px] text-slate-400">
                  {reg.keyFocus}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* The Zetasol Standard / Contract Guarantees */}
        <div className="bg-[#0c1018] border border-slate-800 rounded-2xl p-6 sm:p-8">
          <div className="max-w-2xl mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
              The Zetasol Global Engineering Standard
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Every international engagement is backed by formal contracts, transparent milestones, and dedicated sprint communication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-center shrink-0 text-blue-400">
                <Lock className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white font-display mb-1">
                  100% IP Transfer & NDA Protection
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  We sign bilateral NDAs before discussing proprietary concepts. All source code, design assets, and database schemas belong entirely to you.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-sky-950/60 border border-sky-500/30 flex items-center justify-center shrink-0 text-sky-400">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white font-display mb-1">
                  Real-Time WhatsApp & Slack Sync
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  No ticket queues. You have a direct hotline to your lead software engineer via WhatsApp (`+923433524913`) or dedicated Slack channel.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-400">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white font-display mb-1">
                  8+ Years Production Reliability
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Over 150+ successfully delivered web applications, e-commerce storefronts, and AI integrations with 99.4% on-time milestone delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
