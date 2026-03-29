'use client';

import { Shield, ArrowRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1b2d4f] via-[#1e3050] to-[#0e1a2e]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNjOWE4NzAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE4YzMuMzEzIDAgNi0yLjY4NyA2LTZWMGM2IDMuMzEzIDAgNi0yLjY4NyA2LTZzLTIuNjg3LTYtNi02LTYgMi42ODctNiA2IDIuNjg3IDYgNiA2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />

      {/* Glow effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#c4962e]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#c4962e]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c4962e]/10 border border-[#c4962e]/20 rounded-full mb-8">
            <Shield className="w-4 h-4 text-[#c4962e]" />
            <span className="text-sm font-medium text-[#c4962e]">{t.hero.badge}</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
            {t.hero.headline}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c4962e] to-[#dbb44a]">
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-[#1b2d4f] bg-gradient-to-r from-[#c4962e] to-[#a87d25] rounded-full hover:shadow-xl hover:shadow-[#c4962e]/25 transition-all hover:scale-105 group"
            >
              {t.hero.cta}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#booking"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white border-2 border-white/20 rounded-full hover:border-[#c4962e]/50 hover:bg-white/5 transition-all"
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
                <p className="text-2xl sm:text-3xl font-bold text-[#c4962e]">{stat.value}</p>
                <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Trust badges — inline row below stats */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 max-w-2xl">
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-3">
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Licensed &amp; Insured</p>
              <p className="text-gray-400 text-xs">Georgia Dept. of Insurance</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-3">
            <div className="w-10 h-10 rounded-full bg-[#c4962e]/20 flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5 text-[#c4962e]" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">A+ Rated Carriers</p>
              <p className="text-gray-400 text-xs">Top-tier partners</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-3">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-base">🇺🇸🇲🇽</span>
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Bilingual Service</p>
              <p className="text-gray-400 text-xs">English &amp; Spanish</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
