'use client';

import { Phone, Mail, Heart, Users, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#c9a870]/10 text-[#c9a870] text-sm font-semibold rounded-full mb-4">
            {t.about.sectionLabel}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a2332]">
            {t.about.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Avatar placeholder + contact */}
          <div className="space-y-8">
            <div className="relative">
              <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#1a2332] to-[#2a3a4d] flex items-center justify-center overflow-hidden">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto rounded-full bg-[#c9a870]/20 flex items-center justify-center">
                    <Award className="w-12 h-12 text-[#c9a870]" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-xl">Carolyn Sime</p>
                    <p className="text-[#c9a870] text-sm">{t.about.role}</p>
                  </div>
                </div>
              </div>
              {/* Spanish badge */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-600 to-green-500 text-white px-5 py-2.5 rounded-full font-semibold text-sm shadow-lg">
                {t.about.spanish}
              </div>
            </div>

            {/* Contact cards */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="tel:+14046808890"
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-[#c9a870]/5 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#1a2332] flex items-center justify-center group-hover:bg-[#c9a870] transition-colors">
                  <Phone className="w-5 h-5 text-[#c9a870] group-hover:text-[#1a2332]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Phone</p>
                  <p className="text-sm font-semibold text-[#1a2332]">{t.about.phone}</p>
                </div>
              </a>
              <a
                href="mailto:carolyn@thehealthandwealthgroup.com"
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-[#c9a870]/5 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#1a2332] flex items-center justify-center group-hover:bg-[#c9a870] transition-colors">
                  <Mail className="w-5 h-5 text-[#c9a870] group-hover:text-[#1a2332]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="text-sm font-semibold text-[#1a2332] truncate">{t.about.email}</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right — Bio */}
          <div className="space-y-8">
            <div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">{t.about.bio}</p>
              <blockquote className="border-l-4 border-[#c9a870] pl-6 py-2">
                <p className="text-[#1a2332] font-medium italic text-lg">{t.about.quote}</p>
              </blockquote>
            </div>

            <p className="text-sm text-gray-400 font-mono">{t.about.npn}</p>

            {/* Feature cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 bg-gradient-to-br from-[#1a2332] to-[#2a3a4d] rounded-xl text-white">
                <Heart className="w-8 h-8 text-[#c9a870] mb-3" />
                <h3 className="font-bold mb-1">{t.about.card1Title}</h3>
                <p className="text-sm text-gray-300">{t.about.card1Desc}</p>
              </div>
              <div className="p-5 bg-gradient-to-br from-[#1a2332] to-[#2a3a4d] rounded-xl text-white">
                <Users className="w-8 h-8 text-[#c9a870] mb-3" />
                <h3 className="font-bold mb-1">{t.about.card2Title}</h3>
                <p className="text-sm text-gray-300">{t.about.card2Desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
