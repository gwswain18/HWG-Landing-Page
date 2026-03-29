import { lookupRate, SPREAD_FACTORS, type QuoteInput, type QuoteEstimate } from './rateData';

/**
 * Swappable quote function interface.
 * Current: local rate table lookup (synchronous).
 * Future: can be made async for Compulife / GoHighLevel / HubSpot API calls.
 */
export type QuoteFn = (input: QuoteInput) => QuoteEstimate;

/**
 * Calculate a quote estimate using local rate tables.
 * Returns a low/mid/high range to account for carrier variation.
 */
export const calculateQuote: QuoteFn = (input) => {
  const ratePerThousand = lookupRate(input);
  const midMonthly = Math.round(ratePerThousand * (input.coverageAmount / 1000) * 100) / 100;

  const spread = SPREAD_FACTORS[input.healthClass];
  const lowMonthly = Math.round(midMonthly * spread.low * 100) / 100;
  const highMonthly = Math.round(midMonthly * spread.high * 100) / 100;

  return {
    lowMonthly,
    midMonthly,
    highMonthly,
    lowAnnual: Math.round(lowMonthly * 12),
    midAnnual: Math.round(midMonthly * 12),
    highAnnual: Math.round(highMonthly * 12),
  };
};
