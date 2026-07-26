'use client';

import Link from 'next/link';
import Image from 'next/image';
import { HeroSection } from '@/components/hero-section';
import { CatalogueCard } from '@/components/catalogue-card';
import { ScrollReveal } from '@/components/scroll-reveal';
import { SectionDivider } from '@/components/section-divider';
import { FAQAccordion } from '@/components/faq-accordion';
import { ContactForm } from '@/components/contact-form';
import { PricingDisclaimer } from '@/components/pricing-disclaimer';
import { catalogue } from '@/lib/inventory-data';
import { SERVICE_ICONS, PHONE, EMAIL, IMPORT_STEPS, WHATSAPP_URL } from '@/lib/constants';

export default function Home() {
  const featured = catalogue.slice(0, 4);
  const moreModels = catalogue.slice(4, 7);

  return (
    <div>
      {/* 1. Hero — image-led */}
      <HeroSection />

      {/* 2. Warm dark editorial introduction */}
      <section className="py-24 bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-baseline justify-between mb-4">
              <h2 className="font-serif-editorial tracking-editorial-tight text-2xl sm:text-3xl" style={{ color: 'var(--text-primary)' }}>
                Models & Prices
              </h2>
              <Link href="/inventory" className="text-sm font-mono transition-colors hover:text-brand-gold text-brand-gold">
                View all models
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-sm mb-8" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Browse our model and price guide. These are starting estimates for sourcing a vehicle from Japan, not locally stocked vehicles. Request any model and we will search for a suitable unit.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((entry, index) => (
              <ScrollReveal key={entry.id} delay={index * 80}>
                <CatalogueCard entry={entry} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 3. What Shoondili Does — raised surface */}
      <section className="py-24 bg-surface-raised">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-serif-editorial tracking-editorial-tight text-2xl sm:text-3xl mb-12" style={{ color: 'var(--text-primary)' }}>
              What Shoondili does
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {SERVICE_ICONS.map((service, index) => (
              <ScrollReveal key={service.key} delay={index * 80}>
                <div className="p-5 rounded-xl transition-all duration-300 hover:translate-y-[-2px] bg-surface" style={{ border: '1px solid var(--border-color)' }}>
                  <img src={service.iconPath} alt={service.label} className="w-8 h-8 mb-3" style={{ filter: 'brightness(0) saturate(100%) invert(67%) sepia(98%) saturate(500%) hue-rotate(7deg)' }} />
                  <h3 className="text-sm mb-1" style={{ color: 'var(--text-primary)' }}>{service.label}</h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 4. Japanese Vehicle Sourcing — petrol-toned section */}
      <section className="py-24 relative overflow-hidden">
        {/* Subtle petrol ambient light */}
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: 'radial-gradient(circle at 80% 40%, var(--petrol) 0%, transparent 50%)',
        }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <h2 className="font-serif-editorial tracking-editorial-tight text-2xl sm:text-3xl mb-6" style={{ color: 'var(--text-primary)' }}>
                Japanese vehicle sourcing
              </h2>
              <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                Shoondili is a Japanese vehicle sourcing and import service based in Walvis Bay, Namibia. We search Japanese auctions and dealer networks for vehicles that match your requirement, handle shipping to Walvis Bay, and support clearance and registration.
              </p>
              <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                We do not stock vehicles locally. We share all available information from the source: auction sheets, photos, and condition reports where available. You review this information and decide whether to proceed.
              </p>
              <p className="text-sm mb-8" style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                Every cost is explained upfront in a written quotation. No hidden fees. You decide at each step.
              </p>
              <Link
                href="/imports"
                className="btn-gold px-6 py-3 text-sm font-mono inline-flex items-center gap-2"
              >
                Learn about the import process
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="rounded-xl overflow-hidden" style={{ border: '1px solid var(--border-color)' }}>
                <Image
                  src="/assets/backgrounds/walvis-bay-port.webp"
                  alt="Walvis Bay port, Namibia — where sourced vehicles arrive from Japan"
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

      {/* 5. How Ordering Works */}
      <section className="py-24 bg-canvas-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-serif-editorial tracking-editorial-tight text-2xl sm:text-3xl mb-4" style={{ color: 'var(--text-primary)' }}>
              How ordering works
            </h2>
            <p className="text-sm mb-12" style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              A straightforward process from choosing a model to receiving your vehicle. Each step is transparent and you decide before committing.
            </p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6 max-h-96 overflow-y-auto custom-scrollbar pr-4">
              {IMPORT_STEPS.slice(0, 5).map((step, index) => (
                <ScrollReveal key={step.number} delay={index * 80}>
                  <div className="flex gap-4 items-start">
                    <div
                      className="flex items-center justify-center w-8 h-8 rounded-full shrink-0 font-mono text-xs bg-surface-raised text-brand-gold"
                      style={{ border: '1px solid var(--border-color)' }}
                    >
                      {step.number}
                    </div>
                    <div>
                      <h3 className="font-serif-editorial tracking-editorial text-base" style={{ color: 'var(--text-primary)' }}>{step.title}</h3>
                      <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{step.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={400}>
              <div className="rounded-xl overflow-hidden" style={{ border: '1px solid var(--border-color)' }}>
                <Image
                  src="/assets/process/document-handover.webp"
                  alt="Document review during vehicle sourcing process"
                  width={640}
                  height={480}
                  className="w-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200}>
            <div className="mt-8 text-center">
              <Link href="/imports" className="btn-flat px-6 py-3 text-sm font-medium inline-flex items-center gap-2">
                See the full process
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* 6. Payment Options */}
      <section className="py-24 bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <h2 className="font-serif-editorial tracking-editorial-tight text-2xl sm:text-3xl mb-6" style={{ color: 'var(--text-primary)' }}>
                Ask about payment options
              </h2>
              <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                Shoondili does not lend money or approve finance. We can help you understand how vehicle finance works in Namibia and assist with your application to a bank or finance house, if applicable.
              </p>
              <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                Final approval is always the lender's decision. We do not promise approval, interest rates, or monthly payments.
              </p>
              <a
                href={`${WHATSAPP_URL}?text=${encodeURIComponent('Hi Shoondili, I\'d like to ask about payment options for sourcing a vehicle.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold px-6 py-3 text-sm font-mono inline-flex items-center gap-2"
              >
                Ask about payment on WhatsApp
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="rounded-xl overflow-hidden" style={{ border: '1px solid var(--border-color)' }}>
                <Image
                  src="/assets/backgrounds/import-documents-desk.webp"
                  alt="Payment documentation"
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

      {/* 7. More Models */}
      <section className="py-24 bg-surface-raised">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-baseline justify-between mb-4">
              <h2 className="font-serif-editorial tracking-editorial-tight text-2xl sm:text-3xl" style={{ color: 'var(--text-primary)' }}>
                More models to explore
              </h2>
              <Link href="/inventory" className="text-sm font-mono transition-colors hover:text-brand-gold text-brand-gold">
                View all
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {moreModels.map((entry, index) => (
              <ScrollReveal key={entry.id} delay={index * 80}>
                <CatalogueCard entry={entry} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={200}>
            <PricingDisclaimer />
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* 8. About Shoondili */}
      <section className="py-24 bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="rounded-xl overflow-hidden" style={{ border: '1px solid var(--border-color)' }}>
                <Image
                  src="/assets/process/key-handover.webp"
                  alt="Vehicle delivery in Walvis Bay"
                  width={640}
                  height={480}
                  className="w-full object-cover"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h2 className="font-serif-editorial tracking-editorial-tight text-2xl sm:text-3xl mb-6" style={{ color: 'var(--text-primary)' }}>
                About Shoondili
              </h2>
              <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                Shoondili is a small vehicle-sourcing startup based in Walvis Bay, Namibia. Our service is straightforward: you tell us the vehicle you want, we search for it in Japan, provide a written quotation, and coordinate purchase, shipping, clearance, and registration assistance.
              </p>
              <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                We operate with honesty. Every cost is explained before you commit. No hidden charges. No pressure to buy. We are a lean startup — not a large dealership with a showroom.
              </p>
              <p className="text-sm mb-8" style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                After delivery, we remain available for questions about registration, documentation, and general support.
              </p>
              <Link
                href="/about"
                className="btn-flat px-6 py-3 text-sm font-medium inline-flex items-center gap-2"
              >
                Learn more about us
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 9. FAQ */}
      <section className="py-24 bg-canvas-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-serif-editorial tracking-editorial-tight text-2xl sm:text-3xl mb-12" style={{ color: 'var(--text-primary)' }}>
              Frequently asked questions
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <FAQAccordion />
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="mt-8 text-center">
              <Link href="/faq" className="text-sm font-mono transition-colors hover:text-brand-gold text-brand-gold">
                View all FAQ
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* 10. Direct Enquiry CTA */}
      <section className="py-24 relative overflow-hidden bg-canvas">
        <div className="absolute inset-0">
          <Image
            src="/assets/backgrounds/coastal-road-hero.webp"
            alt="Coastal road near Walvis Bay"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(11,14,14,0.7)' }} />
        </div>

        {/* Subtle petrol ambient light */}
        <div className="absolute inset-0 opacity-[0.1]" style={{
          backgroundImage: 'radial-gradient(circle at 30% 50%, var(--petrol) 0%, transparent 50%)',
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <h2 className="font-serif-editorial tracking-editorial-tight text-2xl sm:text-3xl mb-4" style={{ color: 'var(--text-primary)' }}>
                Start your sourcing enquiry
              </h2>
              <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                Ready to find your next vehicle? Tell us what you want, your budget, and your preferences. We will search Japanese suppliers and send you a written quotation before you commit.
              </p>
              <div className="space-y-2 text-sm font-mono" style={{ color: 'var(--text-secondary)' }}>
                <p>{PHONE}</p>
                <p>{EMAIL}</p>
                <p>Walvis Bay, Namibia</p>
                <p className="mt-2 text-brand-gold">Viewings by arrangement · No showroom</p>
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
