'use client';

import { useState } from 'react';

export function FinanceCalculator() {
  const [price, setPrice] = useState(250000);
  const [term, setTerm] = useState(60);
  const [rate, setRate] = useState(12);

  const formatPrice = (n: number) => new Intl.NumberFormat('en-NA', { style: 'currency', currency: 'NAD', maximumFractionDigits: 0 }).format(n);

  // Simple monthly estimate calculation
  const monthlyRate = rate / 100 / 12;
  const monthly = monthlyRate > 0
    ? (price * monthlyRate * Math.pow(1 + monthlyRate, term)) / (Math.pow(1 + monthlyRate, term) - 1)
    : price / term;

  return (
    <div className="rounded-lg p-6" style={{ backgroundColor: '#111111', border: '1px solid rgba(255,255,255,0.12)' }}>
      <h3 className="font-serif-editorial tracking-editorial text-xl mb-6" style={{ color: '#F7F7F4' }}>
        Monthly Estimate Calculator
      </h3>

      <div className="space-y-6">
        {/* Vehicle price */}
        <div>
          <label className="text-xs uppercase tracking-widest block mb-2" style={{ color: '#9B9B96' }}>
            Vehicle Price (NAD)
          </label>
          <input
            type="range"
            min={50000}
            max={800000}
            step={10000}
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full"
            style={{ accentColor: '#F5B400' }}
          />
          <p className="font-mono text-sm mt-1" style={{ color: '#F7F7F4' }}>{formatPrice(price)}</p>
        </div>

        {/* Term */}
        <div>
          <label className="text-xs uppercase tracking-widest block mb-2" style={{ color: '#9B9B96' }}>
            Finance Term (months)
          </label>
          <div className="flex gap-2">
            {[24, 36, 48, 60, 72].map((t) => (
              <button
                key={t}
                className="px-3 py-2 text-sm rounded"
                style={{
                  backgroundColor: t === term ? '#F5B400' : '#181818',
                  color: t === term ? '#090909' : '#9B9B96',
                  border: '1px solid rgba(255,255,255,0.12)',
                }}
                onClick={() => setTerm(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Interest rate */}
        <div>
          <label className="text-xs uppercase tracking-widest block mb-2" style={{ color: '#9B9B96' }}>
            Interest Rate (%)
          </label>
          <input
            type="range"
            min={5}
            max={25}
            step={0.5}
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full"
            style={{ accentColor: '#F5B400' }}
          />
          <p className="font-mono text-sm mt-1" style={{ color: '#F7F7F4' }}>{rate}%</p>
        </div>

        {/* Result */}
        <div className="pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}>
          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: '#9B9B96' }}>
            Estimated Monthly Payment
          </p>
          <p className="text-2xl font-medium" style={{ color: '#F5B400' }}>
            {formatPrice(Math.round(monthly))}
          </p>
          <p className="text-xs font-mono mt-2" style={{ color: '#9B9B96' }}>
            * This is an indicative estimate based on a simple calculation. Your actual monthly payment depends on your approved finance terms, deposit, and lender conditions. Shoondili does not offer finance or guarantee these figures.
          </p>
        </div>
      </div>
    </div>
  );
}
