'use client';

import { X, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Myths() {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-28 bg-[#1a2332]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#c9a870]/10 text-[#c9a870] text-sm font-semibold rounded-full mb-4">
            {t.myths.sectionLabel}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t.myths.title}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t.myths.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {t.myths.items.map((item, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-[#c9a870]/30 transition-colors"
            >
              {/* Myth */}
              <div className="flex items-start gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <X className="w-4 h-4 text-red-400" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-red-400 font-semibold mb-1">Myth</p>
                  <p className="text-white font-medium">&ldquo;{item.myth}&rdquo;</p>
                </div>
              </div>

              {/* Fact */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#c9a870]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-[#c9a870]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#c9a870] font-semibold mb-1">Fact</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.fact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
