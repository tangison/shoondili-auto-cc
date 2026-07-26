import { notFound } from 'next/navigation';
import Link from 'next/link';
import { catalogue, getCatalogueBySlug, formatPriceNad, getWhatsAppEnquireUrl } from '@/lib/inventory-data';
import { PricingDisclaimer } from '@/components/pricing-disclaimer';
import { ContactForm } from '@/components/contact-form';
import { CatalogueCard } from '@/components/catalogue-card';
import { ScrollReveal } from '@/components/scroll-reveal';
import { SectionDivider } from '@/components/section-divider';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getCatalogueBySlug(slug);
  if (!entry) return { title: 'Model Not Found | Shoondili Auto CC' };
  return {
    title: `${entry.make} ${entry.model} ${entry.year} | Shoondili Auto CC`,
    description: `${entry.make} ${entry.model} ${entry.year} — starting from ${formatPriceNad(entry.priceNad)}. Sourcing estimate for importing from Japan. Request this model and Shoondili will provide a written quotation.`,
    openGraph: {
      title: `${entry.make} ${entry.model} ${entry.year} | Shoondili Auto CC`,
      description: `Request this model. Shoondili sources vehicles from Japan to Namibia.`,
      type: 'website',
    },
  };
}

export function generateStaticParams() {
  return catalogue.map(entry => ({ slug: entry.slug }));
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.46.125-.609.132-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export default async function ModelDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getCatalogueBySlug(slug);

  if (!entry) {
    notFound();
  }

  // Related models: same make, different entries
  const related = catalogue.filter(e => e.id !== entry.id && e.make === entry.make).slice(0, 3);
  const waUrl = getWhatsAppEnquireUrl(entry);

  return (
    <div>
      {/* Model header */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <Link href="/inventory" className="text-xs font-mono mb-6 inline-flex items-center transition-opacity hover:opacity-80" style={{ color: '#9B9B96' }}>
              <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Models & Prices
            </Link>

            <div className="flex items-baseline gap-4 mb-2">
              <h1 className="font-serif-editorial tracking-editorial-tight text-3xl sm:text-4xl" style={{ color: '#F7F7F4', lineHeight: '1.1' }}>
                {entry.make} {entry.model}
              </h1>
              <span
                className="tag-pill"
                style={{ backgroundColor: '#181818', color: '#F5B400', border: '1px solid rgba(245,180,0,0.3)' }}
              >
                Order from Japan
              </span>
            </div>
            <p className="text-sm" style={{ color: '#9B9B96' }}>
              {entry.year} · {entry.shape !== 'unspecified' ? entry.shape : ''}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery placeholder + details */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Gallery */}
            <ScrollReveal>
              <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: '#181818', border: '1px solid rgba(255,255,255,0.12)' }}>
                {entry.images.length > 0 ? (
                  <img src={entry.images[0]} alt={`${entry.make} ${entry.model} ${entry.year} — reference image`} className="w-full h-auto object-cover" />
                ) : (
                  <div className="h-64 flex items-center justify-center flex-col gap-3">
                    <svg className="w-16 h-16" style={{ color: '#9B9B96' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M8 8h.01M12 12h.01" />
                    </svg>
                    <p className="text-xs font-mono" style={{ color: '#9B9B96' }}>Reference images to be added</p>
                  </div>
                )}
                <p className="text-xs font-mono p-3" style={{ color: '#9B9B96' }}>
                  Images show the model or generation for reference. The exact vehicle, colour, equipment and condition will be confirmed during sourcing.
                </p>
              </div>
            </ScrollReveal>

            {/* Details */}
            <ScrollReveal delay={200}>
              <div className="space-y-6">
                {/* Price + WhatsApp CTA */}
                <div className="rounded-2xl p-6" style={{ backgroundColor: '#111111', border: '1px solid rgba(255,255,255,0.12)' }}>
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-2xl font-medium" style={{ color: '#F5B400' }}>
                      {formatPriceNad(entry.priceNad)}
                    </span>
                    <span className="text-sm font-mono" style={{ color: '#9B9B96' }}>starting estimate</span>
                  </div>
                  <PricingDisclaimer compact />
                  {/* WhatsApp enquiry CTA */}
                  <div className="mt-4">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold w-full px-6 py-4 text-sm font-mono inline-flex items-center justify-center gap-3"
                    >
                      <WhatsAppIcon />
                      {entry.primaryCta}
                    </a>
                    <p className="text-xs mt-2 text-center" style={{ color: '#9B9B96' }}>
                      We respond fastest on WhatsApp. This is a sourcing request, not a purchase agreement.
                    </p>
                  </div>
                </div>

                {/* Model identification */}
                <div className="rounded-2xl p-6" style={{ backgroundColor: '#111111', border: '1px solid rgba(255,255,255,0.12)' }}>
                  <h3 className="text-xs uppercase tracking-[0.15em] mb-4" style={{ color: '#F5B400' }}>
                    Model Identification
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs" style={{ color: '#9B9B96' }}>Make</p>
                      <p className="text-sm font-mono" style={{ color: '#F7F7F4' }}>{entry.make}</p>
                    </div>
                    <div>
                      <p className="text-xs" style={{ color: '#9B9B96' }}>Model</p>
                      <p className="text-sm font-mono" style={{ color: '#F7F7F4' }}>{entry.model}</p>
                    </div>
                    <div>
                      <p className="text-xs" style={{ color: '#9B9B96' }}>Year</p>
                      <p className="text-sm font-mono" style={{ color: '#F7F7F4' }}>{entry.year}</p>
                    </div>
                    {entry.shape !== 'unspecified' && (
                      <div>
                        <p className="text-xs" style={{ color: '#9B9B96' }}>Shape / Generation</p>
                        <p className="text-sm font-mono" style={{ color: '#F7F7F4' }}>{entry.shape}</p>
                      </div>
                    )}
                  </div>
                  <p className="text-xs mt-4" style={{ color: '#9B9B96', lineHeight: '1.5' }}>
                    Do not assume specific mileage, colour, transmission, fuel type, or equipment for this model unless confirmed during sourcing. Catalogue entries are model and price guides, not individual vehicle listings.
                  </p>
                </div>

                {/* How sourcing works */}
                <div className="rounded-2xl p-6" style={{ backgroundColor: '#111111', border: '1px solid rgba(255,255,255,0.12)' }}>
                  <h3 className="text-xs uppercase tracking-[0.15em] mb-4" style={{ color: '#F5B400' }}>
                    How Sourcing Works
                  </h3>
                  <div className="space-y-3">
                    <div className="flex gap-3 items-start">
                      <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono shrink-0" style={{ backgroundColor: '#181818', color: '#F5B400', border: '1px solid rgba(255,255,255,0.12)' }}>1</span>
                      <p className="text-xs" style={{ color: '#9B9B96', lineHeight: '1.5' }}>You request this model and share your budget and preferences.</p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono shrink-0" style={{ backgroundColor: '#181818', color: '#F5B400', border: '1px solid rgba(255,255,255,0.12)' }}>2</span>
                      <p className="text-xs" style={{ color: '#9B9B96', lineHeight: '1.5' }}>Shoondili searches Japanese suppliers for a suitable unit.</p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono shrink-0" style={{ backgroundColor: '#181818', color: '#F5B400', border: '1px solid rgba(255,255,255,0.12)' }}>3</span>
                      <p className="text-xs" style={{ color: '#9B9B96', lineHeight: '1.5' }}>We send you vehicle details and a written quotation.</p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono shrink-0" style={{ backgroundColor: '#181818', color: '#F5B400', border: '1px solid rgba(255,255,255,0.12)' }}>4</span>
                      <p className="text-xs" style={{ color: '#9B9B96', lineHeight: '1.5' }}>You review and approve before committing. No pressure.</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pricing disclaimer */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingDisclaimer />
        </div>
      </section>

      {/* Enquiry CTA */}
      <SectionDivider />
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <ContactForm type="inventory" vehicleInfo={`${entry.make} ${entry.model} ${entry.year} (${formatPriceNad(entry.priceNad)} starting estimate)`} />
          </ScrollReveal>
        </div>
      </section>

      {/* Related models */}
      {related.length > 0 && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="font-serif-editorial tracking-editorial-tight text-2xl mb-8" style={{ color: '#F7F7F4' }}>
                Related model guides
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((e, index) => (
                <ScrollReveal key={e.id} delay={index * 80}>
                  <CatalogueCard entry={e} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
