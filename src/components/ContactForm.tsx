'use client';

import { useState, type FormEvent } from 'react';
import { Send, Lock, CheckCircle, AlertCircle, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactForm() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    coverageInterest: '',
    message: '',
  });

  const update = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }));

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('submitting');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      setForm({ name: '', email: '', phone: '', coverageInterest: '', message: '' });
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#c4962e]/10 text-[#c4962e] text-sm font-semibold rounded-full mb-4">
            {t.contact.sectionLabel}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1b2d4f] mb-4">
            {t.contact.title}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">{t.contact.subtitle}</p>
        </div>

        <div className="max-w-xl mx-auto">
          {status === 'success' ? (
            <div className="text-center py-12 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-[#1b2d4f] mb-2">{t.contact.success}</h3>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 space-y-5">
              {status === 'error' && (
                <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  {t.contact.error}
                </div>
              )}

              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-[#1b2d4f] mb-2">{t.contact.name}</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c4962e] focus:border-transparent transition-all text-[#1b2d4f]"
                />
              </div>

              {/* Phone & Email */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#1b2d4f] mb-2">{t.contact.phone}</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c4962e] focus:border-transparent transition-all text-[#1b2d4f]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1b2d4f] mb-2">{t.contact.email}</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c4962e] focus:border-transparent transition-all text-[#1b2d4f]"
                  />
                </div>
              </div>

              {/* Coverage Interest */}
              <div>
                <label className="block text-sm font-semibold text-[#1b2d4f] mb-2">{t.contact.coverageInterest}</label>
                <select
                  required
                  value={form.coverageInterest}
                  onChange={(e) => update('coverageInterest', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c4962e] focus:border-transparent transition-all text-[#1b2d4f] bg-white"
                >
                  <option value="" disabled></option>
                  {t.contact.coverageOptions.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>

              {/* Message — compact */}
              <div>
                <label className="block text-sm font-semibold text-[#1b2d4f] mb-2">{t.contact.message}</label>
                <textarea
                  rows={2}
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                  placeholder={t.contact.messagePlaceholder}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c4962e] focus:border-transparent transition-all resize-none text-[#1b2d4f]"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-[#1b2d4f] bg-gradient-to-r from-[#c4962e] to-[#a87d25] rounded-full hover:shadow-xl hover:shadow-[#c4962e]/25 transition-all hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {status === 'submitting' ? (
                  t.contact.submitting
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {t.contact.submit}
                  </>
                )}
              </button>

              {/* Privacy + bilingual note */}
              <div className="space-y-1.5">
                <p className="text-center text-xs text-gray-400 flex items-center justify-center gap-1.5">
                  <Lock className="w-3.5 h-3.5" />
                  {t.contact.privacy}
                </p>
                <p className="text-center text-xs text-gray-400 flex items-center justify-center gap-1.5">
                  <Globe className="w-3.5 h-3.5" />
                  {t.contact.bilingual}
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
