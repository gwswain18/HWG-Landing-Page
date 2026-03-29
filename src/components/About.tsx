'use client';

import Image from 'next/image';
import { Phone, Mail, Heart, Users } from 'lucide-react';
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

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Avatar placeholder + contact */}
          <div className="space-y-8">
            <div className="relative">
              <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-[#c4962e]/20">
                <Image
                  src="/carolyn-sime.jpg"
                  alt="Carolyn Sime — Founder & CEO, The Health & Wealth Group"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              {/* Name overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1b2d4f] via-[#1b2d4f]/80 to-transparent p-6 rounded-b-2xl">
                <p className="text-white font-bold text-xl">Carolyn Sime</p>
                <p className="text-[#c4962e] text-sm">{t.about.role}</p>
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
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-[#c4962e]/5 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#1b2d4f] flex items-center justify-center group-hover:bg-[#c4962e] transition-colors">
                  <Phone className="w-5 h-5 text-[#c4962e] group-hover:text-[#1b2d4f]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Phone</p>
                  <p className="text-sm font-semibold text-[#1b2d4f]">{t.about.phone}</p>
                </div>
              </a>
              <a
                href="mailto:carolyn@thehealthandwealthgroup.com"
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-[#c4962e]/5 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#1b2d4f] flex items-center justify-center group-hover:bg-[#c4962e] transition-colors">
                  <Mail className="w-5 h-5 text-[#c4962e] group-hover:text-[#1b2d4f]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="text-sm font-semibold text-[#1b2d4f] truncate">{t.about.email}</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right — Bio */}
          <div className="space-y-8">
            {/* Mission headline */}
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1b2d4f] leading-tight">
              A Nurse&apos;s Heart. A Mission to Protect Families.
            </h3>

            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                As a registered nurse, I have cared for patients and families during some of life&apos;s
                most difficult moments. I have seen firsthand how quickly life can change&mdash;and how
                overwhelming it can be when a family is forced to carry both emotional loss and financial
                uncertainty at the same time.
              </p>
              <p>
                That experience is what inspired me to found <span className="font-semibold text-[#1b2d4f]">The Health &amp; Wealth Group</span>.
              </p>
              <p>
                I believe protecting a family&apos;s future is another form of care. In addition to my
                work as a nurse, I help families put the right coverage in place so that if the unexpected
                happens, their loved ones are protected and supported.
              </p>
            </div>

            {/* Quote */}
            <blockquote className="border-l-4 border-[#c4962e] pl-6 py-4 bg-[#c4962e]/5 rounded-r-xl">
              <p className="text-[#1b2d4f] font-medium italic text-lg leading-relaxed mb-3">
                &ldquo;Family is everything. My mission is to help families protect their legacy and
                secure their children&apos;s futures, no matter what life brings.&rdquo;
              </p>
              <cite className="text-sm text-gray-500 not-italic font-semibold">
                &mdash; Carolyn Sime, MSN | Registered Nurse &amp; Licensed Insurance Advisor
              </cite>
            </blockquote>

            <p className="text-gray-600 text-lg leading-relaxed">
              When you work with me, you are working with someone who understands both the emotional
              and practical realities families face in difficult times. My approach is simple:
              <span className="font-semibold text-[#1b2d4f]"> honest guidance, thoughtful planning,
              and protection built around what matters most to you.</span>
            </p>

            <p className="text-sm text-gray-400 font-mono">{t.about.npn}</p>

            {/* Feature cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 bg-gradient-to-br from-[#1b2d4f] to-[#243a5c] rounded-xl text-white">
                <Heart className="w-8 h-8 text-[#c4962e] mb-3" />
                <h3 className="font-bold mb-1">{t.about.card1Title}</h3>
                <p className="text-sm text-gray-300">{t.about.card1Desc}</p>
              </div>
              <div className="p-5 bg-gradient-to-br from-[#1b2d4f] to-[#243a5c] rounded-xl text-white">
                <Users className="w-8 h-8 text-[#c4962e] mb-3" />
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
