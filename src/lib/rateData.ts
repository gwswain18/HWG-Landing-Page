// ---- Type Definitions ----

export type Gender = 'male' | 'female';
export type TobaccoStatus = 'non-smoker' | 'smoker';
export type HealthClass = 'preferred-plus' | 'preferred' | 'standard' | 'substandard';
export type PolicyType = 'term' | 'whole' | 'universal';
export type TermLength = 10 | 15 | 20 | 30;

/** Rate per $1,000 of coverage per month, keyed by integer age (18-75) */
export type AgeRateTable = Record<number, number>;

export interface QuoteInput {
  age: number;
  gender: Gender;
  tobaccoStatus: TobaccoStatus;
  healthClass: HealthClass;
  coverageAmount: number;
  policyType: PolicyType;
  termLength?: TermLength;
}

export interface QuoteEstimate {
  lowMonthly: number;
  midMonthly: number;
  highMonthly: number;
  lowAnnual: number;
  midAnnual: number;
  highAnnual: number;
}

// ---- Spread Factors (generates low/high range from midpoint) ----

export const SPREAD_FACTORS: Record<HealthClass, { low: number; high: number }> = {
  'preferred-plus': { low: 0.90, high: 1.10 },
  'preferred':      { low: 0.88, high: 1.12 },
  'standard':       { low: 0.85, high: 1.15 },
  'substandard':    { low: 0.80, high: 1.25 },
};

// ---- Health Class Multipliers (relative to Standard = 1.0) ----

const HEALTH_CLASS_FACTOR: Record<HealthClass, number> = {
  'preferred-plus': 0.70,
  'preferred':      0.85,
  'standard':       1.00,
  'substandard':    1.75,
};

// ---- Gender Factor (female rates relative to male) ----

const GENDER_FACTOR: Record<Gender, number> = {
  male:   1.00,
  female: 0.82,
};

// ---- Tobacco Factor ----

const TOBACCO_FACTOR: Record<TobaccoStatus, number> = {
  'non-smoker': 1.00,
  'smoker':     2.40,
};

// ---- Term Length Ratio (relative to 20-year) ----

export const TERM_LENGTH_RATIO: Record<TermLength, number> = {
  10: 0.68,
  15: 0.84,
  20: 1.00,
  30: 1.42,
};

// ---- Base Rate Tables (Male, Non-Smoker, Standard, 20-Year Term) ----
// Rates per $1,000/month — composite derived from TransAmerica & Mutual of Omaha published schedules

const TERM_BASE_20YR_MALE_NS: AgeRateTable = {
  18: 0.042, 19: 0.042, 20: 0.043, 21: 0.043, 22: 0.044,
  23: 0.044, 24: 0.045, 25: 0.046, 26: 0.047, 27: 0.048,
  28: 0.049, 29: 0.050, 30: 0.052, 31: 0.053, 32: 0.055,
  33: 0.057, 34: 0.059, 35: 0.062, 36: 0.065, 37: 0.069,
  38: 0.073, 39: 0.078, 40: 0.084, 41: 0.090, 42: 0.097,
  43: 0.105, 44: 0.114, 45: 0.124, 46: 0.135, 47: 0.147,
  48: 0.161, 49: 0.176, 50: 0.193, 51: 0.211, 52: 0.231,
  53: 0.253, 54: 0.277, 55: 0.304, 56: 0.334, 57: 0.367,
  58: 0.404, 59: 0.445, 60: 0.490, 61: 0.540, 62: 0.596,
  63: 0.658, 64: 0.727, 65: 0.804, 66: 0.890, 67: 0.985,
  68: 1.092, 69: 1.210, 70: 1.342, 71: 1.490, 72: 1.655,
  73: 1.840, 74: 2.048, 75: 2.280,
};

// ---- Whole Life Base (Male, Non-Smoker, Standard) ----

const WHOLE_BASE_MALE_NS: AgeRateTable = {
  18: 0.310, 19: 0.315, 20: 0.320, 21: 0.328, 22: 0.335,
  23: 0.343, 24: 0.351, 25: 0.360, 26: 0.370, 27: 0.380,
  28: 0.391, 29: 0.403, 30: 0.415, 31: 0.428, 32: 0.442,
  33: 0.457, 34: 0.473, 35: 0.490, 36: 0.509, 37: 0.529,
  38: 0.551, 39: 0.574, 40: 0.600, 41: 0.628, 42: 0.658,
  43: 0.691, 44: 0.726, 45: 0.765, 46: 0.807, 47: 0.853,
  48: 0.903, 49: 0.957, 50: 1.017, 51: 1.082, 52: 1.154,
  53: 1.232, 54: 1.318, 55: 1.413, 56: 1.518, 57: 1.634,
  58: 1.763, 59: 1.907, 60: 2.068, 61: 2.248, 62: 2.450,
  63: 2.678, 64: 2.935, 65: 3.226, 66: 3.556, 67: 3.932,
  68: 4.360, 69: 4.850, 70: 5.410, 71: 6.050, 72: 6.790,
  73: 7.640, 74: 8.620, 75: 9.750,
};

// ---- Universal Life Base (Male, Non-Smoker, Standard) ----

const UNIVERSAL_BASE_MALE_NS: AgeRateTable = {
  18: 0.180, 19: 0.184, 20: 0.188, 21: 0.192, 22: 0.197,
  23: 0.202, 24: 0.207, 25: 0.213, 26: 0.219, 27: 0.226,
  28: 0.233, 29: 0.241, 30: 0.250, 31: 0.259, 32: 0.269,
  33: 0.280, 34: 0.292, 35: 0.305, 36: 0.320, 37: 0.336,
  38: 0.354, 39: 0.374, 40: 0.396, 41: 0.420, 42: 0.447,
  43: 0.476, 44: 0.509, 45: 0.545, 46: 0.585, 47: 0.630,
  48: 0.680, 49: 0.735, 50: 0.797, 51: 0.866, 52: 0.943,
  53: 1.030, 54: 1.127, 55: 1.236, 56: 1.360, 57: 1.500,
  58: 1.658, 59: 1.838, 60: 2.042, 61: 2.275, 62: 2.540,
  63: 2.844, 64: 3.193, 65: 3.597, 66: 4.065, 67: 4.610,
  68: 5.243, 69: 5.980, 70: 6.840, 71: 7.850, 72: 9.030,
  73: 10.420, 74: 12.060, 75: 14.000,
};

// ---- Rate Lookup Function ----

/**
 * Returns the per-$1,000/month rate for a given set of inputs.
 * All rate tables are derived from the base tables above by applying
 * gender, tobacco, health class, and term length factors.
 */
export function lookupRate(input: QuoteInput): number {
  const { age, gender, tobaccoStatus, healthClass, policyType, termLength } = input;

  // Clamp age
  const clampedAge = Math.max(18, Math.min(75, Math.round(age)));

  // Pick base table
  let baseTable: AgeRateTable;
  if (policyType === 'term') {
    baseTable = TERM_BASE_20YR_MALE_NS;
  } else if (policyType === 'whole') {
    baseTable = WHOLE_BASE_MALE_NS;
  } else {
    baseTable = UNIVERSAL_BASE_MALE_NS;
  }

  // Get base rate for age
  let rate = baseTable[clampedAge];

  // Interpolate if missing (defensive)
  if (rate === undefined) {
    const ages = Object.keys(baseTable).map(Number).sort((a, b) => a - b);
    const lower = ages.filter((a) => a <= clampedAge).pop() ?? ages[0];
    const upper = ages.find((a) => a >= clampedAge) ?? ages[ages.length - 1];
    if (lower === upper) {
      rate = baseTable[lower];
    } else {
      const t = (clampedAge - lower) / (upper - lower);
      rate = baseTable[lower] * (1 - t) + baseTable[upper] * t;
    }
  }

  // Apply factors
  rate *= GENDER_FACTOR[gender];
  rate *= TOBACCO_FACTOR[tobaccoStatus];
  rate *= HEALTH_CLASS_FACTOR[healthClass];

  // Term length adjustment (only for term policies)
  if (policyType === 'term') {
    const tl = termLength ?? 20;
    rate *= TERM_LENGTH_RATIO[tl];
  }

  return rate;
}
