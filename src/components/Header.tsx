'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const navLinks = [
  { key: 'about', href: '#about' },
  { key: 'insurance', href: '#insurance' },
  { key: 'calculator', href: '#calculator' },
  { key: 'testimonials', href: '#testimonials' },
  { key: 'faq', href: '#faq' },
  { key: 'contact', href: '#contact' },
] as const;

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, t, toggleLanguage } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1b2d4f]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <Image
              src="/thwg-logo.jpeg"
              alt="The Health & Wealth Group"
              width={48}
              height={48}
              className="rounded-lg shadow-lg shadow-[#c4962e]/20 group-hover:shadow-[#c4962e]/40 transition-shadow"
            />
            <div className="hidden sm:block">
              <p className="text-white font-bold text-sm leading-tight">The Health &amp; Wealth</p>
              <p className="text-[#c4962e] text-xs font-medium tracking-wider uppercase">Group</p>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="px-3 py-2 text-sm text-gray-300 hover:text-[#c4962e] transition-colors rounded-lg hover:bg-white/5"
              >
                {t.nav[link.key as keyof typeof t.nav]}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-300 hover:text-[#c4962e] border border-white/10 rounded-full hover:border-[#c4962e]/30 transition-all"
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5" />
              {language === 'en' ? 'ES' : 'EN'}
            </button>

            {/* Phone */}
            <a
              href="tel:+14046808890"
              className="hidden md:flex items-center gap-1.5 text-sm text-gray-300 hover:text-[#c4962e] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>(404) 680-8890</span>
            </a>

            {/* CTA */}
            <a
              href="#booking"
              className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-semibold text-[#1b2d4f] bg-gradient-to-r from-[#c4962e] to-[#a87d25] rounded-full hover:shadow-lg hover:shadow-[#c4962e]/25 transition-all hover:scale-105"
            >
              {t.nav.bookCall}
            </a>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#1b2d4f] border-t border-white/10">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-gray-300 hover:text-[#c4962e] hover:bg-white/5 rounded-lg transition-colors"
              >
                {t.nav[link.key as keyof typeof t.nav]}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 space-y-3">
              <a
                href="tel:+14046808890"
                className="flex items-center gap-2 px-4 py-2 text-[#c4962e]"
              >
                <Phone className="w-4 h-4" />
                (404) 680-8890
              </a>
              <a
                href="#booking"
                onClick={() => setMobileOpen(false)}
                className="block text-center px-4 py-3 font-semibold text-[#1b2d4f] bg-gradient-to-r from-[#c4962e] to-[#a87d25] rounded-full"
              >
                {t.nav.bookCall}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
