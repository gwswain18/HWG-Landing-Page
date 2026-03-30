'use client';

import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const carriers = [
  { name: 'Transamerica', file: 'transamerica.png', style: 'max-h-8 max-w-[140px]' },
  { name: 'Mutual of Omaha', file: 'mutual-of-omaha.svg', style: 'max-h-9 max-w-[150px]' },
  { name: 'American Amicable', file: 'american-amicable.png', style: 'max-h-9 max-w-[140px]' },
  { name: 'Aetna', file: 'aetna.svg', style: 'max-h-7 max-w-[120px]' },
  { name: 'Aflac', file: 'aflac.png', style: 'max-h-8 max-w-[100px]' },
  { name: 'Corebridge', file: 'corebridge.svg', style: 'max-h-9 max-w-[140px]' },
  { name: 'Americo', file: 'americo.png', style: 'max-h-7 max-w-[120px]' },
  { name: 'SBLI', file: 'sbli.webp', style: 'max-h-7 max-w-[110px]' },
  { name: 'Royal Neighbors', file: 'royal-neighbors.svg', style: 'max-h-9 max-w-[130px]' },
  { name: 'CVS Health', file: 'cvs.svg', style: 'max-h-7 max-w-[130px]' },
  { name: 'CICA', file: 'cica.svg', style: 'max-h-8 max-w-[130px]' },
];

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

        {/* Trusted carrier logos */}
        <div className="text-center">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-8">
            {t.testimonials.trustedBy}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 max-w-5xl mx-auto">
            {carriers.map((carrier) => (
              <div
                key={carrier.name}
                className="group flex items-center justify-center h-10 px-3 opacity-70 hover:opacity-100 transition-all duration-300"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/carriers/${carrier.file}`}
                  alt={carrier.name}
                  className={`${carrier.style} object-contain`}
                  loading="lazy"
                  title={carrier.name}
                />
              </div>
            ))}
          </div>
          <div className="mt-8 w-full max-w-3xl mx-auto border-t border-gray-200" />
        </div>
      </div>
    </section>
  );
}
