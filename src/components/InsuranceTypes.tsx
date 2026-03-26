'use client';

import { Clock, Shield, TrendingUp, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function InsuranceTypes() {
  const { t } = useLanguage();

  const types = [
    {
      icon: Clock,
      data: t.insurance.term,
      gradient: 'from-[#1a2332] to-[#2a3a4d]',
      iconBg: 'bg-blue-500/20',
      iconColor: 'text-blue-400',
    },
    {
      icon: Shield,
      data: t.insurance.whole,
      gradient: 'from-[#c9a870] to-[#b8944d]',
      iconBg: 'bg-white/20',
      iconColor: 'text-white',
      featured: true,
    },
    {
      icon: TrendingUp,
      data: t.insurance.universal,
      gradient: 'from-[#1a2332] to-[#2a3a4d]',
      iconBg: 'bg-emerald-500/20',
      iconColor: 'text-emerald-400',
    },
  ];

  return (
    <section id="insurance" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#c9a870]/10 text-[#c9a870] text-sm font-semibold rounded-full mb-4">
            {t.insurance.sectionLabel}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a2332] mb-4">
            {t.insurance.title}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">{t.insurance.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {types.map(({ icon: Icon, data, gradient, iconBg, iconColor, featured }) => (
            <div
              key={data.name}
              className={`relative rounded-2xl bg-gradient-to-br ${gradient} p-8 ${
                featured
                  ? 'text-[#1a2332] ring-4 ring-[#c9a870]/30 scale-105 shadow-2xl'
                  : 'text-white shadow-xl'
              } transition-transform hover:scale-[1.02]`}
            >
              {featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1a2332] text-[#c9a870] text-xs font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}

              <div className={`w-14 h-14 rounded-xl ${iconBg} flex items-center justify-center mb-6`}>
                <Icon className={`w-7 h-7 ${iconColor}`} />
              </div>

              <h3 className="text-xl font-bold mb-3">{data.name}</h3>
              <p className={`text-sm mb-6 ${featured ? 'text-[#1a2332]/70' : 'text-gray-300'}`}>
                {data.desc}
              </p>

              <div className="space-y-2.5 mb-6">
                {data.bestFor.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        featured ? 'text-[#1a2332]' : 'text-[#c9a870]'
                      }`}
                    />
                    <span className={`text-sm ${featured ? 'text-[#1a2332]/80' : 'text-gray-300'}`}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div
                className={`pt-4 border-t ${
                  featured ? 'border-[#1a2332]/10' : 'border-white/10'
                }`}
              >
                <p className={`text-sm font-semibold ${featured ? 'text-[#1a2332]' : 'text-[#c9a870]'}`}>
                  {data.cost}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
