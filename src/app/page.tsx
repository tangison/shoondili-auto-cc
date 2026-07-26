'use client';

import Link from 'next/link';
import Image from 'next/image';
import { HeroSection } from '@/components/hero-section';
import { VehicleCard } from '@/components/vehicle-card';
import { ScrollReveal } from '@/components/scroll-reveal';
import { SectionDivider } from '@/components/section-divider';
import { FAQAccordion } from '@/components/faq-accordion';
import { ContactForm } from '@/components/contact-form';
import { getFeaturedVehicles, getAvailableVehicles } from '@/lib/inventory-data';
import { SERVICE_ICONS, PHONE, EMAIL, IMPORT_STEPS } from '@/lib/constants';

export default function Home() {
  const featured = getFeaturedVehicles();
  const latestArrivals = getAvailableVehicles().slice(-3);

  return (
    <div>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Featured Vehicles */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-baseline justify-between mb-8">
              <h2 className="font-serif-editorial tracking-editorial-tight text-2xl sm:text-3xl" style={{ color: '#F7F7F4' }}>
                Featured Vehicles
              </h2>
              <Link href="/inventory" className="text-sm font-mono" style={{ color: '#F5B400' }}>
                View all inventory
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((vehicle, index) => (
              <ScrollReveal key={vehicle.id} delay={index * 80}>
                <VehicleCard vehicle={vehicle} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 3. Why Choose Shoondili */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-serif-editorial tracking-editorial-tight text-2xl sm:text-3xl mb-12" style={{ color: '#F7F7F4' }}>
              Why choose Shoondili
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {SERVICE_ICONS.slice(0, 8).map((service, index) => (
              <ScrollReveal key={service.key} delay={index * 80}>
                <div className="p-4 rounded-lg" style={{ backgroundColor: '#111111', border: '1px solid rgba(255,255,255,0.12)' }}>
                  <img src={service.iconPath} alt={service.label} className="w-8 h-8 mb-3" style={{ filter: 'brightness(0) saturate(100%) invert(67%) sepia(98%) saturate(500%) hue-rotate(7deg)' }} />
                  <h3 className="text-sm mb-1" style={{ color: '#F7F7F4' }}>{service.label}</h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 4. Japanese Vehicle Sourcing */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <h2 className="font-serif-editorial tracking-editorial-tight text-2xl sm:text-3xl mb-6" style={{ color: '#F7F7F4' }}>
                Japanese vehicle sourcing
              </h2>
              <p className="text-sm mb-4" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
                Namibia imports a significant number of vehicles from Japan each year. Shoondili sources vehicles from Japanese auctions and dealer networks, handles shipping to Walvis Bay port, and supports registration in Namibia.
              </p>
              <p className="text-sm mb-4" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
                We do not inspect vehicles in Japan ourselves. We share all available information from the source: auction sheets, photos, and condition reports where available. You review this information and decide whether to proceed.
              </p>
              <p className="text-sm mb-8" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
                Every cost is explained upfront. No hidden fees. You decide at each step.
              </p>
              <Link
                href="/imports"
                className="btn-flat px-6 py-3 text-sm font-medium inline-flex items-center"
                style={{ backgroundColor: '#F5B400', color: '#090909', borderColor: '#F5B400' }}
              >
                Learn about the import process
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="rounded-lg overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.12)' }}>
                <Image
                  src="/assets/backgrounds/walvis-bay-port.webp"
                  alt="Walvis Bay port, Namibia"
                  width={640}
                  height={480}
                  className="w-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 5. Import Process Overview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-serif-editorial tracking-editorial-tight text-2xl sm:text-3xl mb-4" style={{ color: '#F7F7F4' }}>
              How importing works
            </h2>
            <p className="text-sm mb-12" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
              Nine steps from your requirement to vehicle delivery. Each step is transparent.
            </p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6 max-h-96 overflow-y-auto custom-scrollbar pr-4">
              {IMPORT_STEPS.slice(0, 5).map((step, index) => (
                <ScrollReveal key={step.number} delay={index * 80}>
                  <div className="flex gap-4 items-start">
                    <div
                      className="flex items-center justify-center w-8 h-8 rounded shrink-0 font-mono text-xs"
                      style={{ backgroundColor: '#181818', color: '#F5B400', border: '1px solid rgba(255,255,255,0.12)' }}
                    >
                      {step.number}
                    </div>
                    <div>
                      <h3 className="font-serif-editorial tracking-editorial text-base" style={{ color: '#F7F7F4' }}>{step.title}</h3>
                      <p className="text-xs mt-1" style={{ color: '#9B9B96', lineHeight: '1.6' }}>{step.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={400}>
              <div className="rounded-lg overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.12)' }}>
                <Image
                  src="/assets/process/document-handover.webp"
                  alt="Document handover process"
                  width={640}
                  height={480}
                  className="w-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 6. Finance Guidance */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <h2 className="font-serif-editorial tracking-editorial-tight text-2xl sm:text-3xl mb-6" style={{ color: '#F7F7F4' }}>
                Finance guidance
              </h2>
              <p className="text-sm mb-4" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
                Shoondili does not lend money or approve finance. We help you understand how vehicle finance works in Namibia and assist with your application to a bank or finance house.
              </p>
              <p className="text-sm mb-4" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
                Final approval is always the lender's decision. We do not promise approval, interest rates, or monthly payments.
              </p>
              <Link
                href="/finance"
                className="btn-flat px-6 py-3 text-sm font-medium inline-flex items-center"
              >
                Finance guidance details
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="rounded-lg overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.12)' }}>
                <Image
                  src="/assets/backgrounds/import-documents-desk.webp"
                  alt="Finance documentation"
                  width={640}
                  height={480}
                  className="w-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 7. Latest Arrivals */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-baseline justify-between mb-8">
              <h2 className="font-serif-editorial tracking-editorial-tight text-2xl sm:text-3xl" style={{ color: '#F7F7F4' }}>
                Latest arrivals
              </h2>
              <Link href="/inventory" className="text-sm font-mono" style={{ color: '#F5B400' }}>
                View all
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestArrivals.map((vehicle, index) => (
              <ScrollReveal key={vehicle.id} delay={index * 80}>
                <VehicleCard vehicle={vehicle} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 8. Trust & Support */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="rounded-lg overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.12)' }}>
                <Image
                  src="/assets/process/key-handover.webp"
                  alt="Key handover after vehicle delivery"
                  width={640}
                  height={480}
                  className="w-full object-cover"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h2 className="font-serif-editorial tracking-editorial-tight text-2xl sm:text-3xl mb-6" style={{ color: '#F7F7F4' }}>
                Trust and support
              </h2>
              <p className="text-sm mb-4" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
                We operate with honesty. Every cost is explained before you commit. No hidden charges. No pressure to buy.
              </p>
              <p className="text-sm mb-4" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
                After delivery, we remain available for questions. We support registration paperwork for imported vehicles and handle ownership transfer documentation for local purchases.
              </p>
              <p className="text-sm mb-8" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
                We are a lean startup. We do not have a large team or a showroom. What we offer is straightforward service and honest communication.
              </p>
              <Link
                href="/contact"
                className="btn-flat px-6 py-3 text-sm font-medium inline-flex items-center"
              >
                Contact us
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 9. Testimonials - truthful empty state */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-serif-editorial tracking-editorial-tight text-2xl sm:text-3xl mb-12" style={{ color: '#F7F7F4' }}>
              Customer feedback
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="rounded-lg p-8 text-center" style={{ backgroundColor: '#111111', border: '1px solid rgba(255,255,255,0.12)' }}>
              <svg className="w-8 h-8 mx-auto mb-4" style={{ color: '#9B9B96' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 21l1.949-3.746A9.863 9.863 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <p className="font-serif-editorial tracking-editorial text-lg mb-2" style={{ color: '#F7F7F4' }}>
                No testimonials yet
              </p>
              <p className="text-sm" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
                We are a new startup. As we serve more customers, we will share their genuine feedback here. We will never fabricate testimonials.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* 10. FAQ */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-serif-editorial tracking-editorial-tight text-2xl sm:text-3xl mb-12" style={{ color: '#F7F7F4' }}>
              Frequently asked questions
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <FAQAccordion />
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="mt-8 text-center">
              <Link href="/faq" className="text-sm font-mono" style={{ color: '#F5B400' }}>
                View all FAQ
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* 11. Direct Enquiry CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/backgrounds/coastal-road-hero.webp"
            alt="Coastal road near Walvis Bay"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(9,9,9,0.7)' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <h2 className="font-serif-editorial tracking-editorial-tight text-2xl sm:text-3xl mb-4" style={{ color: '#F7F7F4' }}>
                Get in touch
              </h2>
              <p className="text-sm mb-4" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
                Ready to find your next vehicle? Whether you want to browse our inventory, start an import enquiry, or discuss finance options, we are here to help.
              </p>
              <div className="space-y-2 text-sm font-mono" style={{ color: '#9B9B96' }}>
                <p>{PHONE}</p>
                <p>{EMAIL}</p>
                <p>Walvis Bay, Namibia</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <ContactForm type="general" />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
