'use client';

import Link from 'next/link';
import { VehicleData } from '@/lib/inventory-data';
import { WHATSAPP_URL } from '@/lib/constants';

interface VehicleCardProps {
  vehicle: VehicleData;
}

function WhatsAppSmallIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.46.125-.609.132-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export function VehicleCard({ vehicle }: VehicleCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NA', { style: 'currency', currency: 'NAD', maximumFractionDigits: 0 }).format(price);
  };

  const statusColors: Record<string, { bg: string; text: string }> = {
    Available: { bg: 'rgba(245,180,0,0.15)', text: '#F5B400' },
    Reserved: { bg: 'rgba(255,165,0,0.15)', text: '#FFA500' },
    Sold: { bg: 'rgba(156,163,175,0.15)', text: '#9CA3AF' },
    Unavailable: { bg: 'rgba(220,38,38,0.15)', text: '#DC2626' },
  };

  const statusStyle = statusColors[vehicle.status] || statusColors.Available;

  const whatsappMessage = encodeURIComponent(
    `Hi Shoondili, I'm interested in the ${vehicle.make} ${vehicle.model} ${vehicle.year} (${formatPrice(vehicle.price)}). Can you tell me more?`
  );

  return (
    <Link href={`/inventory/${vehicle.slug}`} className="group block">
      <article
        className="rounded-lg overflow-hidden transition-transform duration-200 group-hover:scale-[0.98]"
        style={{ backgroundColor: '#111111', border: '1px solid rgba(255,255,255,0.12)' }}
      >
        {/* Vehicle image placeholder */}
        <div className="relative h-48 overflow-hidden" style={{ backgroundColor: '#181818' }}>
          {vehicle.images.length > 0 ? (
            <img
              src={vehicle.images[0]}
              alt={`${vehicle.make} ${vehicle.model} ${vehicle.year}`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <svg className="w-12 h-12" style={{ color: '#9B9B96' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 17h8M8 17v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4m10 0v4a1 1 0 001 1h3a1 1 0 001-1v-4m-10 0H4a1 1 0 01-1-1V6a1 1 0 011-1h3a1 1 0 011 1v2m10-2a1 1 0 011-1h3a1 1 0 011 1v10a1 1 0 01-1 1h-3" />
              </svg>
            </div>
          )}

          {/* Status badge */}
          <div className="absolute top-3 right-3">
            <span
              className="tag-pill"
              style={{ backgroundColor: statusStyle.bg, color: statusStyle.text }}
            >
              {vehicle.status}
            </span>
          </div>
        </div>

        {/* Card content */}
        <div className="p-4">
          <h3 className="font-serif-editorial tracking-editorial text-lg mb-1" style={{ color: '#F7F7F4' }}>
            {vehicle.make} {vehicle.model}
          </h3>

          {vehicle.variant && (
            <p className="text-xs mb-2" style={{ color: '#9B9B96' }}>{vehicle.variant}</p>
          )}

          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-lg font-medium" style={{ color: '#F5B400' }}>
              {formatPrice(vehicle.price)}
            </span>
            {vehicle.monthlyEstimate && (
              <span className="text-xs font-mono" style={{ color: '#9B9B96' }}>
                est. {formatPrice(vehicle.monthlyEstimate)}/mo*
              </span>
            )}
          </div>

          {/* Key specs */}
          <div className="flex gap-3 text-xs font-mono mb-3" style={{ color: '#9B9B96' }}>
            <span>{vehicle.year}</span>
            <span className="h-3 w-px" style={{ backgroundColor: 'rgba(255,255,255,0.12)' }} />
            <span>{vehicle.transmission}</span>
            <span className="h-3 w-px" style={{ backgroundColor: 'rgba(255,255,255,0.12)' }} />
            <span>{new Intl.NumberFormat('en-NA').format(vehicle.mileage)} km</span>
          </div>

          {/* WhatsApp quick enquiry */}
          <a
            href={`${WHATSAPP_URL}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono transition-colors duration-200 hover:text-brand-gold"
            style={{ color: '#9B9B96' }}
            onClick={(e) => e.stopPropagation()}
          >
            <WhatsAppSmallIcon />
            Enquire on WhatsApp
          </a>
        </div>
      </article>
    </Link>
  );
}
