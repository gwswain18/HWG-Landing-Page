'use client';

import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const carriers = [
  { name: 'Transamerica', domain: 'transamerica.com' },
  { name: 'Mutual of Omaha', domain: 'mutualofomaha.com' },
  { name: 'American Amicable', domain: 'american-amicable.com' },
  { name: 'Aetna', domain: 'aetna.com' },
  { name: 'Aflac', domain: 'aflac.com' },
  { name: 'Corebridge', domain: 'corebridgefinancial.com' },
  { name: 'Americo', domain: 'americo.com' },
  { name: 'SBLI', domain: 'sbli.com' },
  { name: 'Royal Neighbors', domain: 'royalneighbors.org' },
  { name: 'CVS Health', domain: 'cvshealth.com' },
  { name: 'CICA', domain: 'citizensinc.com' },
];

// Clearbit logo API for crisp, high-res logos
const logoUrl = (domain: string) =>
  `https://logo.clearbit.com/${domain}`;

export default function Testimonials() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const items = t.testimonials.items;

  const prev = () => setCurrent((c) => (c === 0 ? items.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === items.length - 1 ? 0 : c + 1));

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#c4962e]/10 text-[#c4962e] text-sm font-semibold rounded-full mb-4">
            {t.testimonials.sectionLabel}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1b2d4f] mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">{t.testimonials.subtitle}</p>
        </div>

        {/* Testimonial carousel */}
        {/* TODO: Replace placeholder testimonials with real client testimonials */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="relative bg-white rounded-2xl shadow-xl p-8 sm:p-12">
            <Quote className="absolute top-6 left-6 w-10 h-10 text-[#c4962e]/20" />

            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: items[current].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#c4962e] text-[#c4962e]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8 italic">
                &ldquo;{items[current].text}&rdquo;
              </p>

              {/* Author */}
              <div>
                <p className="font-bold text-[#1b2d4f]">{items[current].name}</p>
                <p className="text-sm text-gray-500">{items[current].location}</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#c4962e] hover:border-[#c4962e] hover:text-white text-gray-600 transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2">
                {items.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      i === current ? 'bg-[#c4962e] w-6' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#c4962e] hover:border-[#c4962e] hover:text-white text-gray-600 transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Trusted carrier logos — Clearbit for crisp rendering */}
        <div className="text-center">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-8">
            {t.testimonials.trustedBy}
          </p>
          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
            {carriers.map((carrier) => (
              <div
                key={carrier.name}
                className="group flex items-center justify-center w-24 h-16 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-[#c4962e]/20 transition-all p-3"
                title={carrier.name}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logoUrl(carrier.domain)}
                  alt={carrier.name}
                  className="max-w-full max-h-full object-contain opacity-50 group-hover:opacity-100 transition-opacity"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to clean text if logo fails to load
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector('span')) {
                      const span = document.createElement('span');
                      span.className = 'text-xs font-semibold text-gray-400 group-hover:text-[#1b2d4f] transition-colors text-center leading-tight';
                      span.textContent = carrier.name;
                      parent.appendChild(span);
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
