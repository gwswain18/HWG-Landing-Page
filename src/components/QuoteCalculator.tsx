'use client';

import { useState, useMemo } from 'react';
import { Calculator, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const coverageAmounts = [50000, 100000, 250000, 500000, 750000, 1000000];

function estimatePremium(age: number, gender: string, smoker: boolean, coverage: number, policyType: string): number {
  // Base rates per $1000 of coverage (monthly)
  let baseRate: number;
  if (policyType === 'term') {
    baseRate = 0.05;
  } else if (policyType === 'whole') {
    baseRate = 0.35;
  } else {
    baseRate = 0.2;
  }

  // Age factor
  let ageFactor = 1;
  if (age < 30) ageFactor = 0.7;
  else if (age < 40) ageFactor = 1.0;
  else if (age < 50) ageFactor = 1.6;
  else if (age < 60) ageFactor = 2.8;
  else ageFactor = 4.5;

  // Gender factor
  const genderFactor = gender === 'female' ? 0.85 : 1.0;

  // Smoker factor
  const smokerFactor = smoker ? 2.5 : 1.0;

  return Math.round((coverage / 1000) * baseRate * ageFactor * genderFactor * smokerFactor * 100) / 100;
}

export default function QuoteCalculator() {
  const { t } = useLanguage();
  const [age, setAge] = useState(35);
  const [gender, setGender] = useState('male');
  const [smoker, setSmoker] = useState(false);
  const [coverage, setCoverage] = useState(250000);
  const [policyType, setPolicyType] = useState('term');

  const premium = useMemo(
    () => estimatePremium(age, gender, smoker, coverage, policyType),
    [age, gender, smoker, coverage, policyType]
  );

  return (
    <section id="calculator" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#c9a870]/10 text-[#c9a870] text-sm font-semibold rounded-full mb-4">
            {t.calculator.sectionLabel}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a2332] mb-4">
            {t.calculator.title}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">{t.calculator.subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Form inputs */}
            <div className="lg:col-span-3 bg-gray-50 rounded-2xl p-6 sm:p-8 space-y-6">
              {/* Age slider */}
              <div>
                <label className="flex justify-between text-sm font-semibold text-[#1a2332] mb-2">
                  <span>{t.calculator.age}</span>
                  <span className="text-[#c9a870]">{age}</span>
                </label>
                <input
                  type="range"
                  min={18}
                  max={75}
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-[#c9a870]"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>18</span>
                  <span>75</span>
                </div>
              </div>

              {/* Gender */}
              <div>
                <label className="block text-sm font-semibold text-[#1a2332] mb-2">{t.calculator.gender}</label>
                <div className="grid grid-cols-2 gap-3">
                  {['male', 'female'].map((g) => (
                    <button
                      key={g}
                      onClick={() => setGender(g)}
                      className={`py-3 rounded-xl text-sm font-medium transition-all ${
                        gender === g
                          ? 'bg-[#1a2332] text-white shadow-lg'
                          : 'bg-white text-gray-600 border border-gray-200 hover:border-[#c9a870]'
                      }`}
                    >
                      {g === 'male' ? t.calculator.male : t.calculator.female}
                    </button>
                  ))}
                </div>
              </div>

              {/* Smoker */}
              <div>
                <label className="block text-sm font-semibold text-[#1a2332] mb-2">{t.calculator.smoker}</label>
                <div className="grid grid-cols-2 gap-3">
                  {[false, true].map((s) => (
                    <button
                      key={String(s)}
                      onClick={() => setSmoker(s)}
                      className={`py-3 rounded-xl text-sm font-medium transition-all ${
                        smoker === s
                          ? 'bg-[#1a2332] text-white shadow-lg'
                          : 'bg-white text-gray-600 border border-gray-200 hover:border-[#c9a870]'
                      }`}
                    >
                      {s ? t.calculator.yes : t.calculator.no}
                    </button>
                  ))}
                </div>
              </div>

              {/* Coverage amount */}
              <div>
                <label className="block text-sm font-semibold text-[#1a2332] mb-2">{t.calculator.coverageAmount}</label>
                <div className="grid grid-cols-3 gap-2">
                  {coverageAmounts.map((amt) => (
                    <button
                      key={amt}
                      onClick={() => setCoverage(amt)}
                      className={`py-2.5 rounded-xl text-sm font-medium transition-all ${
                        coverage === amt
                          ? 'bg-[#1a2332] text-white shadow-lg'
                          : 'bg-white text-gray-600 border border-gray-200 hover:border-[#c9a870]'
                      }`}
                    >
                      ${(amt / 1000).toFixed(0)}K
                    </button>
                  ))}
                </div>
              </div>

              {/* Policy type */}
              <div>
                <label className="block text-sm font-semibold text-[#1a2332] mb-2">{t.calculator.policyType}</label>
                <div className="grid grid-cols-3 gap-2">
                  {(['term', 'whole', 'universal'] as const).map((pt) => (
                    <button
                      key={pt}
                      onClick={() => setPolicyType(pt)}
                      className={`py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                        policyType === pt
                          ? 'bg-[#1a2332] text-white shadow-lg'
                          : 'bg-white text-gray-600 border border-gray-200 hover:border-[#c9a870]'
                      }`}
                    >
                      {t.calculator[pt]}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Result panel */}
            <div className="lg:col-span-2 sticky top-24">
              <div className="bg-gradient-to-br from-[#1a2332] to-[#2a3a4d] rounded-2xl p-8 text-center">
                <Calculator className="w-10 h-10 text-[#c9a870] mx-auto mb-4" />
                <p className="text-gray-400 text-sm mb-2">{t.calculator.estimate}</p>
                <div className="flex items-baseline justify-center gap-1 mb-6">
                  <span className="text-5xl font-bold text-white">${premium.toFixed(0)}</span>
                  <span className="text-[#c9a870] text-lg">{t.calculator.perMonth}</span>
                </div>
                <p className="text-gray-400 text-xs mb-8 leading-relaxed">{t.calculator.disclaimer}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 text-base font-semibold text-[#1a2332] bg-gradient-to-r from-[#c9a870] to-[#b8944d] rounded-full hover:shadow-xl hover:shadow-[#c9a870]/25 transition-all hover:scale-105 group"
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
