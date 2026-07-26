import { PRICING_DISCLAIMER } from '@/lib/constants';

export function PricingDisclaimer({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <p className="text-xs" style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }}>
        Starting estimate. Final price depends on exact vehicle, condition, exchange rate, shipping, duties and registration. Written quotation provided before commitment.
      </p>
    );
  }

  return (
    <div
      className="rounded-xl p-4"
      style={{ backgroundColor: 'var(--surface)', border: '1px solid rgba(242,183,5,0.15)' }}
    >
      <p className="text-xs" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
        {PRICING_DISCLAIMER}
      </p>
    </div>
  );
}
