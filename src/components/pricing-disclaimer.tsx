import { PRICING_DISCLAIMER } from '@/lib/constants';

export function PricingDisclaimer({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <p className="text-xs" style={{ color: '#9B9B96', lineHeight: '1.5' }}>
        Starting estimate. Final price depends on exact vehicle, condition, exchange rate, shipping, duties and registration. Written quotation provided before commitment.
      </p>
    );
  }

  return (
    <div
      className="rounded-2xl p-4"
      style={{ backgroundColor: '#111111', border: '1px solid rgba(245,180,0,0.15)' }}
    >
      <p className="text-xs" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
        {PRICING_DISCLAIMER}
      </p>
    </div>
  );
}
