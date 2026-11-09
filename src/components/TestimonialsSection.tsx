import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote:
        'Zetasol transformed our e-commerce platform into an ultra-fast, seamless ordering machine. Our refrigerated delivery scheduling and mobile conversion rate jumped by over 165% within weeks of launch. They are technically brilliant, reliable, and a true global development partner.',
      name: 'Emily Thornton',
      role: 'Operations Director',
      company: 'Manna Dew Artisan Bakery (London, UK)',
      rating: 5,
      impact: '+165% Monthly Repeat Orders',
    },
    {
      quote:
        'Finding an engineering team that understands both complex bilingual Arabic/English web architectures and high-end luxury aesthetics was critical for SaaS Properties. Zetasol delivered our portal on Next.js with sub-second speeds and flawless CRM routing.',
      name: 'Tariq Al-Mansoor',
      role: 'VP Digital Strategy',
      company: 'SaaS Properties (Dubai, UAE)',
      rating: 5,
      impact: '0.62s Global LCP Speed',
    },
    {
      quote:
        'As an international corporate law practice, security, confidentiality, and institutional polish were non-negotiable. Zetasol engineered our client intake portal with absolute precision. Their 8+ years of expertise shines through in every detail.',
      name: 'Barrister O. Olowu',
      role: 'Managing Partner',
      company: 'Olowu Law Firm (Corporate Litigation)',
      rating: 5,
      impact: '+190% Qualified Inbound Inquiries',
    },
    {
      quote:
        'Our limited-edition streetwear drops create extreme traffic spikes that used to crash our old store. Zetasol rebuilt our storefront on Shopify Plus with custom micro-interactions. We sold out our entire 3,000-piece capsule in under 45 minutes.',
      name: 'Julianna Vance',
      role: 'Creative Director & Founder',
      company: 'KnowEar Fashion',
      rating: 5,
      impact: '92% Drop Sell-Through Rate',
    },
    {
      quote:
        'Managing 10,000+ specialized hobbyist SKUs was a nightmare until Zetasol integrated instant faceted search and parts compatibility matrix. Our search-to-cart conversion spiked by 42%. We have worked with them continuously for 3 years.',
      name: 'David Reynolds',
      role: 'CEO & Founder',
      company: 'Island Hobby Nut (United States)',
      rating: 5,
      impact: '+42% Search-to-Cart Conversion',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 bg-[#080B10] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-blue-400 mb-2">
              <span className="w-2 h-0.5 bg-blue-500" />
              <span>TESTIMONIALS & EVIDENCE</span>
              <span className="text-slate-600">/</span>
              <span>CLIENT VOICES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
              Trusted by Founders Worldwide
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Testimonial Card */}
        <div className="bg-[#0c1018] border border-slate-800 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <Quote className="w-24 h-24 text-slate-800/40 absolute -top-4 -right-4 pointer-events-none" />

          <div className="relative z-10 max-w-4xl">
            <div className="flex items-center gap-1 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-2 text-xs font-mono text-slate-400">Verified Client Review</span>
            </div>

            <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-white font-display leading-relaxed mb-8">
              "{current.quote}"
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-800/80">
              <div>
                <div className="text-base font-bold text-white font-display">
                  {current.name}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {current.role} · <span className="text-blue-400">{current.company}</span>
                </div>
              </div>

              <div className="px-3.5 py-1.5 rounded-xl bg-blue-950/40 border border-blue-500/30 text-xs font-mono text-blue-300 whitespace-nowrap self-start sm:self-center">
                Outcome: {current.impact}
              </div>
            </div>
          </div>
        </div>

        {/* Carousel indicator dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all focus:outline-none ${
                idx === currentIndex ? 'w-8 bg-blue-500' : 'w-2 bg-slate-800 hover:bg-slate-700'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
