import { notFound } from 'next/navigation';
import Link from 'next/link';
import { vehicles, getVehicleBySlug, getRelatedVehicles } from '@/lib/inventory-data';
import { StatusBadge } from '@/components/status-badge';
import { ContactForm } from '@/components/contact-form';
import { VehicleCard } from '@/components/vehicle-card';
import { ScrollReveal } from '@/components/scroll-reveal';
import { SectionDivider } from '@/components/section-divider';
import { WHATSAPP_URL } from '@/lib/constants';

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

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.46.125-.609.132-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export default async function VehicleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);

  if (!vehicle) {
    notFound();
  }

  const related = getRelatedVehicles(vehicle);
  const formatPrice = (n: number) => new Intl.NumberFormat('en-NA', { style: 'currency', currency: 'NAD', maximumFractionDigits: 0 }).format(n);

  const whatsappMessage = encodeURIComponent(
    `Hi Shoondili, I'm interested in the ${vehicle.make} ${vehicle.model} ${vehicle.year} (${formatPrice(vehicle.price)}). Could you provide more details?`
  );

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
                {/* Price + WhatsApp CTA */}
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
                  {/* WhatsApp enquiry CTA */}
                  <div className="mt-4">
                    <a
                      href={`${WHATSAPP_URL}?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full px-6 py-3 text-sm font-mono inline-flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[0.98]"
                      style={{
                        backgroundColor: '#F5B400',
                        color: '#090909',
                        borderRadius: '4px',
                      }}
                    >
                      <WhatsAppIcon />
                      Enquire about this vehicle on WhatsApp
                    </a>
                    <p className="text-xs mt-2 text-center" style={{ color: '#9B9B96' }}>
                      We respond fastest on WhatsApp.
                    </p>
                  </div>
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

                {/* Vehicle history */}
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

      {/* Enquiry CTA — WhatsApp first */}
      <SectionDivider />
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <ContactForm type="inventory" vehicleId={vehicle.id} vehicleInfo={`${vehicle.make} ${vehicle.model} ${vehicle.year}`} />
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
