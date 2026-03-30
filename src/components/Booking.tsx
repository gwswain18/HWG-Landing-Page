'use client';

import { Calendar, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// TODO: Verify this Calendly URL is active. If 404, update with correct URL.
const CALENDLY_URL = 'https://calendly.com/carolyn-thehealthandwealthgroup';

export default function Booking() {
  const { t } = useLanguage();

  return (
    <section id="booking" className="py-20 lg:py-28 bg-[#1b2d4f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-[#c4962e]/10 text-[#c4962e] text-sm font-semibold rounded-full mb-4">
            {t.booking.sectionLabel}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t.booking.title}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t.booking.subtitle}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
            <div className="p-12 text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-[#c4962e]/10 flex items-center justify-center mb-6">
                <Calendar className="w-10 h-10 text-[#c4962e]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1b2d4f] mb-3">{t.booking.title}</h3>
              <p className="text-gray-500 mb-8 max-w-md mx-auto">
                {t.booking.subtitle}
              </p>

              {/* Primary: Calendly link */}
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-[#1b2d4f] bg-gradient-to-r from-[#c4962e] to-[#a87d25] rounded-full hover:shadow-xl hover:shadow-[#c4962e]/25 transition-all hover:scale-105 mb-4"
              >
                <Calendar className="w-5 h-5" />
                {t.booking.cta}
              </a>

              {/* Prominent phone fallback */}
              <div className="pt-6 border-t border-gray-100 mt-6">
                <p className="text-gray-400 text-sm mb-3">{t.booking.fallback}</p>
                <a
                  href="tel:+14046808890"
                  className="inline-flex items-center gap-2 text-xl font-bold text-[#1b2d4f] hover:text-[#c4962e] transition-colors"
                >
                  <Phone className="w-6 h-6" />
                  (404) 680-8890
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
