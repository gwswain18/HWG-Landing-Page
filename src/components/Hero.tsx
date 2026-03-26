'use client';

import { Shield, ArrowRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a2332] via-[#1e2a3a] to-[#0f1922]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNjOWE4NzAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE4YzMuMzEzIDAgNi0yLjY4NyA2LTZWMGM2IDMuMzEzIDAgNi0yLjY4NyA2LTZzLTIuNjg3LTYtNi02LTYgMi42ODctNiA2IDIuNjg3IDYgNiA2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />

      {/* Glow effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#c9a870]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#c9a870]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a870]/10 border border-[#c9a870]/20 rounded-full mb-8">
            <Shield className="w-4 h-4 text-[#c9a870]" />
            <span className="text-sm font-medium text-[#c9a870]">{t.hero.badge}</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
            {t.hero.headline}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a870] to-[#e8d5b0]">
              {t.hero.headlineAccent}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
            {t.hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-[#1a2332] bg-gradient-to-r from-[#c9a870] to-[#b8944d] rounded-full hover:shadow-xl hover:shadow-[#c9a870]/25 transition-all hover:scale-105 group"
            >
              {t.hero.cta}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#booking"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white border-2 border-white/20 rounded-full hover:border-[#c9a870]/50 hover:bg-white/5 transition-all"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-lg">
            {[
              { value: t.hero.stat1, label: t.hero.stat1Label },
              { value: t.hero.stat2, label: t.hero.stat2Label },
              { value: t.hero.stat3, label: t.hero.stat3Label },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl sm:text-3xl font-bold text-[#c9a870]">{stat.value}</p>
                <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Floating trust badge */}
        <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 max-w-xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Licensed & Insured</p>
                <p className="text-gray-400 text-xs">Georgia Department of Insurance</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#c9a870]/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-[#c9a870]" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">A+ Rated Carriers</p>
                <p className="text-gray-400 text-xs">Top-tier insurance partners</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <span className="text-lg">🇺🇸🇲🇽</span>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Bilingual Service</p>
                <p className="text-gray-400 text-xs">English & Spanish</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
