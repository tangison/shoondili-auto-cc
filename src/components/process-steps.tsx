'use client';

import Image from 'next/image';
import { IMPORT_STEPS } from '@/lib/constants';

export function ProcessSteps() {
  return (
    <div className="space-y-6">
      {IMPORT_STEPS.map((step, index) => (
        <div key={step.number} className="flex gap-6 items-start">
          {/* Step number */}
          <div
            className="flex items-center justify-center w-10 h-10 rounded-md shrink-0 font-mono text-sm"
            style={{ backgroundColor: '#181818', color: '#F5B400', border: '1px solid rgba(255,255,255,0.12)' }}
          >
            {step.number}
          </div>

          {/* Step content */}
          <div className="flex-1">
            <h3 className="font-serif-editorial tracking-editorial text-lg mb-2" style={{ color: '#F7F7F4' }}>
              {step.title}
            </h3>
            <p className="text-sm" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
