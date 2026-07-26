import Link from 'next/link';
import { VehicleData } from '@/lib/inventory-data';

interface VehicleCardProps {
  vehicle: VehicleData;
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

          {/* Key specs - restrained */}
          <div className="flex gap-3 text-xs font-mono" style={{ color: '#9B9B96' }}>
            <span>{vehicle.year}</span>
            <span className="h-3 w-px" style={{ backgroundColor: 'rgba(255,255,255,0.12)' }} />
            <span>{vehicle.transmission}</span>
            <span className="h-3 w-px" style={{ backgroundColor: 'rgba(255,255,255,0.12)' }} />
            <span>{new Intl.NumberFormat('en-NA').format(vehicle.mileage)} km</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
