import { notFound } from 'next/navigation';
import Link from 'next/link';
import { vehicles, getVehicleBySlug, getRelatedVehicles } from '@/lib/inventory-data';
import { StatusBadge } from '@/components/status-badge';
import { ContactForm } from '@/components/contact-form';
import { VehicleCard } from '@/components/vehicle-card';
import { ScrollReveal } from '@/components/scroll-reveal';
import { SectionDivider } from '@/components/section-divider';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);
  if (!vehicle) return { title: 'Vehicle Not Found | Shoondili Auto CC' };
  return {
    title: `${vehicle.make} ${vehicle.model} ${vehicle.year} | Shoondili Auto CC`,
    description: `${vehicle.make} ${vehicle.model} ${vehicle.variant || ''} ${vehicle.year} available in Walvis Bay, Namibia. ${vehicle.fuel}, ${vehicle.transmission}, ${new Intl.NumberFormat('en-NA').format(vehicle.mileage)} km.`,
    openGraph: {
      title: `${vehicle.make} ${vehicle.model} ${vehicle.year} | Shoondili Auto CC`,
      description: `${vehicle.make} ${vehicle.model} available in Walvis Bay. Contact Shoondili for details.`,
      type: 'website',
    },
  };
}

export function generateStaticParams() {
  return vehicles.map(v => ({ slug: v.slug }));
}

export default async function VehicleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);

  if (!vehicle) {
    notFound();
  }

  const related = getRelatedVehicles(vehicle);
  const formatPrice = (n: number) => new Intl.NumberFormat('en-NA', { style: 'currency', currency: 'NAD', maximumFractionDigits: 0 }).format(n);

  return (
    <div>
      {/* Vehicle header */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <Link href="/inventory" className="text-xs font-mono mb-6 inline-flex items-center hover:opacity-80 transition-opacity" style={{ color: '#9B9B96' }}>
              <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back to inventory
            </Link>

            <div className="flex items-baseline gap-4 mb-2">
              <h1 className="font-serif-editorial tracking-editorial-tight text-3xl sm:text-4xl" style={{ color: '#F7F7F4', lineHeight: '1.1' }}>
                {vehicle.make} {vehicle.model}
              </h1>
              <StatusBadge status={vehicle.status} />
            </div>
            {vehicle.variant && (
              <p className="text-sm mb-4" style={{ color: '#9B9B96' }}>{vehicle.variant}</p>
            )}
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery placeholder + details */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Gallery */}
            <ScrollReveal>
              <div className="rounded-lg overflow-hidden" style={{ backgroundColor: '#181818', border: '1px solid rgba(255,255,255,0.12)' }}>
                {vehicle.images.length > 0 ? (
                  <img src={vehicle.images[0]} alt={`${vehicle.make} ${vehicle.model}`} className="w-full h-auto object-cover" />
                ) : (
                  <div className="h-64 flex items-center justify-center">
                    <svg className="w-16 h-16" style={{ color: '#9B9B96' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M8 8h.01M12 12h.01M16 16h.01" />
                    </svg>
                  </div>
                )}
                <p className="text-xs font-mono p-3" style={{ color: '#9B9B96' }}>
                  {vehicle.images.length > 0 ? `${vehicle.images.length} images available` : 'Images will be added upon availability'}
                </p>
              </div>
            </ScrollReveal>

            {/* Details */}
            <ScrollReveal delay={200}>
              <div className="space-y-6">
                {/* Price */}
                <div className="rounded-lg p-6" style={{ backgroundColor: '#111111', border: '1px solid rgba(255,255,255,0.12)' }}>
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-2xl font-medium" style={{ color: '#F5B400' }}>
                      {formatPrice(vehicle.price)}
                    </span>
                    {vehicle.monthlyEstimate && (
                      <span className="text-sm font-mono" style={{ color: '#9B9B96' }}>
                        est. {formatPrice(vehicle.monthlyEstimate)}/mo*
                      </span>
                    )}
                  </div>
                  {vehicle.monthlyEstimate && (
                    <p className="text-xs font-mono" style={{ color: '#9B9B96' }}>
                      * Indicative estimate only. Actual monthly payment depends on approved finance terms. Shoondili does not offer finance or guarantee this figure.
                    </p>
                  )}
                </div>

                {/* Key specs */}
                <div className="rounded-lg p-6" style={{ backgroundColor: '#111111', border: '1px solid rgba(255,255,255,0.12)' }}>
                  <h3 className="text-xs uppercase tracking-widest mb-4" style={{ color: '#F5B400' }}>
                    Specifications
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs" style={{ color: '#9B9B96' }}>Year</p>
                      <p className="text-sm font-mono" style={{ color: '#F7F7F4' }}>{vehicle.year}</p>
                    </div>
                    <div>
                      <p className="text-xs" style={{ color: '#9B9B96' }}>Mileage</p>
                      <p className="text-sm font-mono" style={{ color: '#F7F7F4' }}>{new Intl.NumberFormat('en-NA').format(vehicle.mileage)} km</p>
                    </div>
                    <div>
                      <p className="text-xs" style={{ color: '#9B9B96' }}>Transmission</p>
                      <p className="text-sm font-mono" style={{ color: '#F7F7F4' }}>{vehicle.transmission}</p>
                    </div>
                    <div>
                      <p className="text-xs" style={{ color: '#9B9B96' }}>Fuel</p>
                      <p className="text-sm font-mono" style={{ color: '#F7F7F4' }}>{vehicle.fuel}</p>
                    </div>
                    <div>
                      <p className="text-xs" style={{ color: '#9B9B96' }}>Body Type</p>
                      <p className="text-sm font-mono" style={{ color: '#F7F7F4' }}>{vehicle.bodyType}</p>
                    </div>
                    {vehicle.colour && (
                      <div>
                        <p className="text-xs" style={{ color: '#9B9B96' }}>Colour</p>
                        <p className="text-sm font-mono" style={{ color: '#F7F7F4' }}>{vehicle.colour}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Features */}
                {vehicle.features.length > 0 && (
                  <div className="rounded-lg p-6" style={{ backgroundColor: '#111111', border: '1px solid rgba(255,255,255,0.12)' }}>
                    <h3 className="text-xs uppercase tracking-widest mb-4" style={{ color: '#F5B400' }}>
                      Features
                    </h3>
                    <ul className="space-y-2">
                      {vehicle.features.map((feature, i) => (
                        <li key={i} className="text-sm flex items-center gap-2" style={{ color: '#F7F7F4' }}>
                          <span className="w-1 h-1 rounded-full" style={{ backgroundColor: '#F5B400' }} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Import info */}
                {vehicle.importInfo && (
                  <div className="rounded-lg p-6" style={{ backgroundColor: '#111111', border: '1px solid rgba(255,255,255,0.12)' }}>
                    <h3 className="text-xs uppercase tracking-widest mb-4" style={{ color: '#F5B400' }}>
                      Import Information
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs" style={{ color: '#9B9B96' }}>Sourced From</p>
                        <p className="text-sm font-mono" style={{ color: '#F7F7F4' }}>{vehicle.importInfo.sourcedFrom}</p>
                      </div>
                      {vehicle.importInfo.auctionHouse && (
                        <div>
                          <p className="text-xs" style={{ color: '#9B9B96' }}>Auction House</p>
                          <p className="text-sm font-mono" style={{ color: '#F7F7F4' }}>{vehicle.importInfo.auctionHouse}</p>
                        </div>
                      )}
                      {vehicle.importInfo.arrivalDate && (
                        <div>
                          <p className="text-xs" style={{ color: '#9B9B96' }}>Expected Arrival</p>
                          <p className="text-sm font-mono" style={{ color: '#F7F7F4' }}>{vehicle.importInfo.arrivalDate}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Vehicle history - only show what we have */}
                {vehicle.vehicleHistory && (
                  <div className="rounded-lg p-6" style={{ backgroundColor: '#111111', border: '1px solid rgba(255,255,255,0.12)' }}>
                    <h3 className="text-xs uppercase tracking-widest mb-4" style={{ color: '#F5B400' }}>
                      Vehicle History
                    </h3>
                    <div className="space-y-3">
                      {vehicle.vehicleHistory.previousOwners !== null && (
                        <div>
                          <p className="text-xs" style={{ color: '#9B9B96' }}>Previous Owners</p>
                          <p className="text-sm font-mono" style={{ color: '#F7F7F4' }}>{vehicle.vehicleHistory.previousOwners}</p>
                        </div>
                      )}
                      {vehicle.vehicleHistory.serviceRecords !== null && (
                        <div>
                          <p className="text-xs" style={{ color: '#9B9B96' }}>Service Records</p>
                          <p className="text-sm font-mono" style={{ color: '#F7F7F4' }}>{vehicle.vehicleHistory.serviceRecords ? 'Available' : 'Not available'}</p>
                        </div>
                      )}
                      {vehicle.vehicleHistory.accidentHistory !== null && (
                        <div>
                          <p className="text-xs" style={{ color: '#9B9B96' }}>Accident History</p>
                          <p className="text-sm font-mono" style={{ color: '#F7F7F4' }}>{vehicle.vehicleHistory.accidentHistory}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Enquiry CTA */}
      <SectionDivider />
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <ContactForm type="inventory" vehicleId={vehicle.id} />
          </ScrollReveal>
        </div>
      </section>

      {/* Related vehicles */}
      {related.length > 0 && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="font-serif-editorial tracking-editorial-tight text-2xl mb-8" style={{ color: '#F7F7F4' }}>
                Related vehicles
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((v, index) => (
                <ScrollReveal key={v.id} delay={index * 80}>
                  <VehicleCard vehicle={v} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
