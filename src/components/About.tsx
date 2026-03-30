'use client';

import Image from 'next/image';
import { Phone, Mail, Heart, Users, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#c4962e]/10 text-[#c4962e] text-sm font-semibold rounded-full mb-4">
            {t.about.sectionLabel}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1b2d4f]">
            {t.about.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left — Photo (smaller on mobile, 2/5 on desktop) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="relative max-h-[400px] lg:max-h-none">
              <div className="w-full aspect-[3/4] max-h-[400px] lg:max-h-none rounded-2xl overflow-hidden shadow-2xl ring-4 ring-[#c4962e]/20">
                <Image
                  src="/carolyn-sime.jpg"
                  alt="Carolyn Sime — Founder & CEO, The Health & Wealth Group"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
              {/* Name overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1b2d4f] via-[#1b2d4f]/80 to-transparent p-6 rounded-b-2xl">
                <p className="text-white font-bold text-lg">Carolyn Sime, MSN</p>
                <p className="text-[#c4962e] text-sm">{t.about.role}</p>
              </div>
              {/* Spanish badge */}
              <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-green-600 to-green-500 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
                {t.about.spanish}
              </div>
            </div>

            {/* Contact cards */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="tel:+14046808890"
                className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl hover:bg-[#c4962e]/5 transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#1b2d4f] flex items-center justify-center group-hover:bg-[#c4962e] transition-colors flex-shrink-0">
                  <Phone className="w-4 h-4 text-[#c4962e] group-hover:text-[#1b2d4f]" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-500">Phone</p>
                  <p className="text-sm font-semibold text-[#1b2d4f]">{t.about.phone}</p>
                </div>
              </a>
              <a
                href="mailto:carolyn@thehealthandwealthgroup.com"
                className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl hover:bg-[#c4962e]/5 transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#1b2d4f] flex items-center justify-center group-hover:bg-[#c4962e] transition-colors flex-shrink-0">
                  <Mail className="w-4 h-4 text-[#c4962e] group-hover:text-[#1b2d4f]" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="text-sm font-semibold text-[#1b2d4f] truncate">{t.about.email}</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right — Bio (3/5 on desktop) */}
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>{t.about.bio1}</p>
              <p>{t.about.bio2}</p>
            </div>

            {/* Quote */}
            <blockquote className="border-l-4 border-[#c4962e] pl-6 py-4 bg-[#c4962e]/5 rounded-r-xl">
              <p className="text-[#1b2d4f] font-medium italic text-lg leading-relaxed mb-2">
                {t.about.quote}
              </p>
              <cite className="text-sm text-gray-500 not-italic font-semibold">
                {t.about.quoteAuthor}
              </cite>
            </blockquote>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-[#1b2d4f] bg-gradient-to-r from-[#c4962e] to-[#a87d25] rounded-full hover:shadow-xl hover:shadow-[#c4962e]/25 transition-all hover:scale-105 group"
            >
              {t.about.cta}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <p className="text-sm text-gray-400 font-mono">{t.about.npn}</p>

            {/* Compact credential badges */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-br from-[#1b2d4f] to-[#243a5c] rounded-xl text-white">
                <Heart className="w-5 h-5 text-[#c4962e] flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">{t.about.card1Title}</p>
                  <p className="text-xs text-gray-300 hidden sm:block">{t.about.card1Desc}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-br from-[#1b2d4f] to-[#243a5c] rounded-xl text-white">
                <Users className="w-5 h-5 text-[#c4962e] flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">{t.about.card2Title}</p>
                  <p className="text-xs text-gray-300 hidden sm:block">{t.about.card2Desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
