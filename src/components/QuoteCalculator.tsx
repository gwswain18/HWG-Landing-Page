'use client';

import { useState, useMemo } from 'react';
import { Calculator, ArrowRight, Info } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { calculateQuote } from '@/lib/quoteEngine';
import type { Gender, TobaccoStatus, HealthClass, PolicyType, TermLength } from '@/lib/rateData';

const coverageAmounts = [50000, 100000, 250000, 500000, 750000, 1000000];
const termLengths: TermLength[] = [10, 15, 20, 30];

export default function QuoteCalculator() {
  const { t } = useLanguage();
  const [age, setAge] = useState(35);
  const [gender, setGender] = useState<Gender>('male');
  const [smoker, setSmoker] = useState<TobaccoStatus>('non-smoker');
  const [healthClass, setHealthClass] = useState<HealthClass>('standard');
  const [coverage, setCoverage] = useState(250000);
  const [policyType, setPolicyType] = useState<PolicyType>('term');
  const [termLength, setTermLength] = useState<TermLength>(20);

  const estimate = useMemo(
    () =>
      calculateQuote({
        age,
        gender,
        tobaccoStatus: smoker,
        healthClass,
        coverageAmount: coverage,
        policyType,
        termLength: policyType === 'term' ? termLength : undefined,
      }),
    [age, gender, smoker, healthClass, coverage, policyType, termLength]
  );

  // Health class display name
  const healthClassLabel: Record<HealthClass, string> = {
    'preferred-plus': t.calculator.preferredPlus,
    'preferred': t.calculator.preferred,
    'standard': t.calculator.standard,
    'substandard': t.calculator.substandard,
  };

  const tobaccoLabel = smoker === 'non-smoker' ? t.calculator.tobaccoNo : t.calculator.tobaccoYes;

  return (
    <section id="calculator" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#c4962e]/10 text-[#c4962e] text-sm font-semibold rounded-full mb-4">
            {t.calculator.sectionLabel}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1b2d4f] mb-4">
            {t.calculator.title}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">{t.calculator.subtitle}</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Form inputs */}
            <div className="lg:col-span-3 bg-gray-50 rounded-2xl p-6 sm:p-8 space-y-6">
              {/* Age slider */}
              <div>
                <label className="flex justify-between text-sm font-semibold text-[#1b2d4f] mb-2">
                  <span>{t.calculator.age}</span>
                  <span className="text-[#c4962e]">{age}</span>
                </label>
                <input
                  type="range"
                  min={18}
                  max={75}
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-[#c4962e]"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>18</span>
                  <span>75</span>
                </div>
              </div>

              {/* Gender */}
              <div>
                <label className="block text-sm font-semibold text-[#1b2d4f] mb-2">{t.calculator.gender}</label>
                <div className="grid grid-cols-2 gap-3">
                  {(['male', 'female'] as const).map((g) => (
                    <button
                      key={g}
                      onClick={() => setGender(g)}
                      className={`py-3 rounded-xl text-sm font-medium transition-all ${
                        gender === g
                          ? 'bg-[#1b2d4f] text-white shadow-lg'
                          : 'bg-white text-gray-600 border border-gray-200 hover:border-[#c4962e]'
                      }`}
                    >
                      {g === 'male' ? t.calculator.male : t.calculator.female}
                    </button>
                  ))}
                </div>
              </div>

              {/* Smoker */}
              <div>
                <label className="block text-sm font-semibold text-[#1b2d4f] mb-2">{t.calculator.smoker}</label>
                <div className="grid grid-cols-2 gap-3">
                  {(['non-smoker', 'smoker'] as const).map((s) => (
                    <button
                      key={s}
                      onClick={() => setSmoker(s)}
                      className={`py-3 rounded-xl text-sm font-medium transition-all ${
                        smoker === s
                          ? 'bg-[#1b2d4f] text-white shadow-lg'
                          : 'bg-white text-gray-600 border border-gray-200 hover:border-[#c4962e]'
                      }`}
                    >
                      {s === 'non-smoker' ? t.calculator.no : t.calculator.yes}
                    </button>
                  ))}
                </div>
              </div>

              {/* Health Class */}
              <div>
                <label className="block text-sm font-semibold text-[#1b2d4f] mb-2">{t.calculator.healthClass}</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(['preferred-plus', 'preferred', 'standard', 'substandard'] as const).map((hc) => (
                    <button
                      key={hc}
                      onClick={() => setHealthClass(hc)}
                      className={`py-2.5 rounded-xl text-xs font-medium transition-all ${
                        healthClass === hc
                          ? 'bg-[#1b2d4f] text-white shadow-lg'
                          : 'bg-white text-gray-600 border border-gray-200 hover:border-[#c4962e]'
                      }`}
                    >
                      {healthClassLabel[hc]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Policy type */}
              <div>
                <label className="block text-sm font-semibold text-[#1b2d4f] mb-2">{t.calculator.policyType}</label>
                <div className="grid grid-cols-3 gap-2">
                  {(['term', 'whole', 'universal'] as const).map((pt) => (
                    <button
                      key={pt}
                      onClick={() => setPolicyType(pt)}
                      className={`py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                        policyType === pt
                          ? 'bg-[#1b2d4f] text-white shadow-lg'
                          : 'bg-white text-gray-600 border border-gray-200 hover:border-[#c4962e]'
                      }`}
                    >
                      {t.calculator[pt]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Term Length — only visible for term life */}
              {policyType === 'term' && (
                <div>
                  <label className="block text-sm font-semibold text-[#1b2d4f] mb-2">{t.calculator.termLength}</label>
                  <div className="grid grid-cols-4 gap-2">
                    {termLengths.map((tl) => {
                      const key = `term${tl}` as 'term10' | 'term15' | 'term20' | 'term30';
                      return (
                        <button
                          key={tl}
                          onClick={() => setTermLength(tl)}
                          className={`py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                            termLength === tl
                              ? 'bg-[#1b2d4f] text-white shadow-lg'
                              : 'bg-white text-gray-600 border border-gray-200 hover:border-[#c4962e]'
                          }`}
                        >
                          {t.calculator[key]}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Coverage amount */}
              <div>
                <label className="block text-sm font-semibold text-[#1b2d4f] mb-2">{t.calculator.coverageAmount}</label>
                <div className="grid grid-cols-3 gap-2">
                  {coverageAmounts.map((amt) => (
                    <button
                      key={amt}
                      onClick={() => setCoverage(amt)}
                      className={`py-2.5 rounded-xl text-sm font-medium transition-all ${
                        coverage === amt
                          ? 'bg-[#1b2d4f] text-white shadow-lg'
                          : 'bg-white text-gray-600 border border-gray-200 hover:border-[#c4962e]'
                      }`}
                    >
                      ${(amt / 1000).toFixed(0)}K
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Result panel */}
            <div className="lg:col-span-2 sticky top-24">
              <div className="bg-gradient-to-br from-[#1b2d4f] to-[#243a5c] rounded-2xl p-8 text-center">
                <Calculator className="w-10 h-10 text-[#c4962e] mx-auto mb-4" />
                <p className="text-gray-400 text-sm mb-4">{t.calculator.estimate}</p>

                {/* Range display */}
                <div className="mb-2">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-3xl sm:text-4xl font-bold text-white">
                      ${Math.round(estimate.lowMonthly)}
                    </span>
                    <span className="text-xl text-gray-400">{t.calculator.rangeSeparator}</span>
                    <span className="text-3xl sm:text-4xl font-bold text-white">
                      ${Math.round(estimate.highMonthly)}
                    </span>
                    <span className="text-[#c4962e] text-lg">{t.calculator.perMonth}</span>
                  </div>
                </div>

                {/* Annual estimate */}
                <p className="text-gray-400 text-sm mb-5">
                  ~${estimate.lowAnnual.toLocaleString()} {t.calculator.rangeSeparator} ${estimate.highAnnual.toLocaleString()} {t.calculator.perYear}
                </p>

                {/* Based-on label */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full mb-5">
                  <span className="text-xs text-gray-300">
                    {t.calculator.basedOn} {healthClassLabel[healthClass]} {t.calculator.healthClassLabel}, {tobaccoLabel} {t.calculator.rates}
                  </span>
                </div>

                {/* Substandard note */}
                {healthClass === 'substandard' && (
                  <div className="flex items-start gap-2 text-left bg-amber-500/10 border border-amber-500/20 rounded-xl p-3 mb-5">
                    <Info className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-amber-200">{t.calculator.substandardNote}</p>
                  </div>
                )}

                <p className="text-gray-400 text-xs mb-6 leading-relaxed">{t.calculator.disclaimer}</p>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 text-base font-semibold text-[#1b2d4f] bg-gradient-to-r from-[#c4962e] to-[#a87d25] rounded-full hover:shadow-xl hover:shadow-[#c4962e]/25 transition-all hover:scale-105 group"
                >
                  {t.calculator.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
