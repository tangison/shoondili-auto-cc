'use client';

import Link from 'next/link';
import { CatalogueEntry, formatPriceNad, getWhatsAppEnquireUrl } from '@/lib/inventory-data';
import { PricingDisclaimer } from '@/components/pricing-disclaimer';

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.46.125-.609.132-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export function CatalogueCard({ entry }: { entry: CatalogueEntry }) {
  const waUrl = getWhatsAppEnquireUrl(entry);

  return (
    <div
      className="rounded-xl p-5 transition-all duration-300 hover:translate-y-[-2px] bg-surface"
      style={{ border: '1px solid var(--border-color)' }}
    >
      {/* Model image placeholder */}
      <div
        className="rounded-lg overflow-hidden mb-4 aspect-[16/10]"
        style={{ backgroundColor: 'var(--surface-raised)' }}
      >
        {entry.images.length > 0 ? (
          <img
            src={entry.images[0]}
            alt={`${entry.make} ${entry.model} ${entry.year} — reference image`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg className="w-12 h-12" style={{ color: 'var(--text-secondary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M8 8h.01M12 12h.01" />
            </svg>
          </div>
        )}
      </div>

      {/* Model name and year */}
      <p className="font-serif-editorial tracking-editorial-tight text-lg" style={{ color: 'var(--text-primary)' }}>
        {entry.make} {entry.model}
      </p>
      <p className="text-xs font-mono mt-1" style={{ color: 'var(--text-secondary)' }}>
        {entry.year} · {entry.shape !== 'unspecified' ? entry.shape : ''}
      </p>

      {/* Price — with order_from_japan tag */}
      <div className="mt-3 flex items-baseline gap-2">
        <p className="text-lg font-medium text-brand-gold">
          {formatPriceNad(entry.priceNad)}
        </p>
        <span
          className="tag-pill"
          style={{ backgroundColor: 'var(--surface-raised)', color: 'var(--petrol-light)', border: '1px solid var(--border-color)' }}
        >
          Order from Japan
        </span>
      </div>

      {/* Compact pricing disclaimer */}
      <PricingDisclaimer compact />

      {/* WhatsApp CTA */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-gold w-full mt-4 px-4 py-3 text-xs font-mono inline-flex items-center justify-center gap-2"
      >
        <WhatsAppIcon />
        {entry.primaryCta}
      </a>
    </div>
  );
}
