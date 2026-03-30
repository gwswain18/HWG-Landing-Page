'use client';

import Image from 'next/image';
import { Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0e1a2e] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/thwg-logo.jpeg"
                alt="The Health & Wealth Group"
                width={48}
                height={48}
                className="rounded-lg"
              />
              <div>
                <p className="text-white font-bold text-sm leading-tight">The Health &amp; Wealth</p>
                <p className="text-[#c4962e] text-xs font-medium tracking-wider uppercase">Group</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-6">{t.footer.tagline}</p>
            <div className="space-y-2">
              <a href="tel:+14046808890" className="flex items-center gap-2 text-gray-400 hover:text-[#c4962e] text-sm transition-colors">
                <Phone className="w-4 h-4" />
                (404) 680-8890
              </a>
              <a href="mailto:carolyn@thehealthandwealthgroup.com" className="flex items-center gap-2 text-gray-400 hover:text-[#c4962e] text-sm transition-colors">
                <Mail className="w-4 h-4" />
                carolyn@thehealthandwealthgroup.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2.5">
              {[
                { label: t.nav.about, href: '#about' },
                { label: t.nav.insurance, href: '#insurance' },
                { label: t.nav.calculator, href: '#calculator' },
                { label: t.nav.testimonials, href: '#testimonials' },
                { label: t.nav.faq, href: '#faq' },
                { label: t.nav.contact, href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-400 hover:text-[#c4962e] text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.resources}</h3>
            <ul className="space-y-2.5">
              <li>
                <a href="#calculator" className="text-gray-400 hover:text-[#c4962e] text-sm transition-colors">
                  {t.footer.calculator}
                </a>
              </li>
              <li>
                <span className="text-gray-500 text-sm cursor-default">
                  {t.footer.blog} <span className="text-xs text-gray-600 ml-1">({t.footer.blogSoon})</span>
                </span>
              </li>
              <li>
                <span className="text-gray-500 text-sm cursor-default">
                  {t.footer.portal} <span className="text-xs text-gray-600 ml-1">({t.footer.portalSoon})</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.legal}</h3>
            <ul className="space-y-2.5">
              <li>
                <span className="text-gray-500 text-sm cursor-default">
                  {t.footer.privacy} <span className="text-xs text-gray-600 ml-1">({t.footer.privacySoon})</span>
                </span>
              </li>
              <li>
                <span className="text-gray-500 text-sm cursor-default">
                  {t.footer.terms} <span className="text-xs text-gray-600 ml-1">({t.footer.termsSoon})</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer + copyright */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <p className="text-gray-500 text-xs leading-relaxed mb-4">{t.footer.disclaimer}</p>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <p className="text-gray-500 text-xs">{t.footer.copyright}</p>
            <p className="text-gray-500 text-xs font-mono">{t.footer.npn}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
