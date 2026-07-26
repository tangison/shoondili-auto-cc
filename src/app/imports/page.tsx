'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ScrollReveal } from '@/components/scroll-reveal';
import { SectionDivider } from '@/components/section-divider';
import { ProcessSteps } from '@/components/process-steps';
import { ContactForm } from '@/components/contact-form';
import { IMPORT_STEPS, PHONE, EMAIL } from '@/lib/constants';

export default function ImportsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="font-serif-editorial tracking-editorial-tight text-3xl sm:text-4xl lg:text-5xl mb-6" style={{ color: '#F7F7F4', lineHeight: '1.1' }}>
              Japanese vehicle imports
            </h1>
            <p className="text-sm mb-8 max-w-xl" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
              Shoondili sources vehicles from Japanese auctions and dealer networks. We ship to Walvis Bay, handle port clearance, and support registration. Every cost is explained before you commit.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* 9-step process */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <ScrollReveal>
                <h2 className="font-serif-editorial tracking-editorial-tight text-2xl sm:text-3xl mb-4" style={{ color: '#F7F7F4' }}>
                  The 9-step import process
                </h2>
                <p className="text-sm mb-12" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
                  From your requirement to vehicle delivery. Every step is transparent. Timelines and costs are estimates.
                </p>
              </ScrollReveal>

              <ProcessSteps />
            </div>

            <ScrollReveal delay={200}>
              <div className="rounded-lg overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.12)' }}>
                <Image
                  src="/assets/backgrounds/walvis-bay-port.webp"
                  alt="Walvis Bay port, the destination for imported vehicles"
                  width={640}
                  height={480}
                  className="w-full object-cover"
                />
                <div className="p-4" style={{ backgroundColor: '#111111' }}>
                  <p className="text-xs font-mono" style={{ color: '#9B9B96' }}>
                    Walvis Bay port. Vehicles arrive here from Japan for clearance and registration.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Timeline & Cost estimates */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-serif-editorial tracking-editorial-tight text-2xl sm:text-3xl mb-8" style={{ color: '#F7F7F4' }}>
              Timeline and cost estimates
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-6">
            <ScrollReveal delay={100}>
              <div className="rounded-lg p-6" style={{ backgroundColor: '#111111', border: '1px solid rgba(255,255,255,0.12)' }}>
                <h3 className="text-xs uppercase tracking-widest mb-4" style={{ color: '#F5B400' }}>Estimated Timeline</h3>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm" style={{ color: '#F7F7F4' }}>
                    <span style={{ color: '#9B9B96' }}>Search and source review</span>
                    <span className="font-mono">1-2 weeks</span>
                  </div>
                  <div className="flex justify-between text-sm" style={{ color: '#F7F7F4' }}>
                    <span style={{ color: '#9B9B96' }}>Customer decision</span>
                    <span className="font-mono">1-3 days</span>
                  </div>
                  <div className="flex justify-between text-sm" style={{ color: '#F7F7F4' }}>
                    <span style={{ color: '#9B9B96' }}>Shipping from Japan</span>
                    <span className="font-mono">4-6 weeks</span>
                  </div>
                  <div className="flex justify-between text-sm" style={{ color: '#F7F7F4' }}>
                    <span style={{ color: '#9B9B96' }}>Port clearance</span>
                    <span className="font-mono">3-5 days</span>
                  </div>
                  <div className="flex justify-between text-sm" style={{ color: '#F7F7F4' }}>
                    <span style={{ color: '#9B9B96' }}>Registration support</span>
                    <span className="font-mono">1-2 weeks</span>
                  </div>
                  <div className="flex justify-between text-sm pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.12)', color: '#F5B400' }}>
                    <span>Total estimated</span>
                    <span className="font-mono">6-10 weeks</span>
                  </div>
                </div>
                <p className="text-xs font-mono mt-4" style={{ color: '#9B9B96' }}>
                  These are estimates. Actual timelines vary based on shipping schedules, port processing, and registration workload.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="rounded-lg p-6" style={{ backgroundColor: '#111111', border: '1px solid rgba(255,255,255,0.12)' }}>
                <h3 className="text-xs uppercase tracking-widest mb-4" style={{ color: '#F5B400' }}>Cost Components</h3>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm" style={{ color: '#F7F7F4' }}>
                    <span style={{ color: '#9B9B96' }}>Vehicle purchase price</span>
                    <span className="font-mono">Varies</span>
                  </div>
                  <div className="flex justify-between text-sm" style={{ color: '#F7F7F4' }}>
                    <span style={{ color: '#9B9B96' }}>Shipping to Walvis Bay</span>
                    <span className="font-mono">Varies</span>
                  </div>
                  <div className="flex justify-between text-sm" style={{ color: '#F7F7F4' }}>
                    <span style={{ color: '#9B9B96' }}>Namibian customs duties</span>
                    <span className="font-mono">Gov. regulated</span>
                  </div>
                  <div className="flex justify-between text-sm" style={{ color: '#F7F7F4' }}>
                    <span style={{ color: '#9B9B96' }}>Port processing fees</span>
                    <span className="font-mono">Varies</span>
                  </div>
                  <div className="flex justify-between text-sm" style={{ color: '#F7F7F4' }}>
                    <span style={{ color: '#9B9B96' }}>Registration costs</span>
                    <span className="font-mono">Gov. regulated</span>
                  </div>
                  <div className="flex justify-between text-sm pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.12)', color: '#9B9B96' }}>
                    <span>Shoondili service fee</span>
                    <span className="font-mono">Included</span>
                  </div>
                </div>
                <p className="text-xs font-mono mt-4" style={{ color: '#9B9B96' }}>
                  We provide a full cost breakdown for every vehicle before you commit. Import duties are set by Namibian government regulation and vary by vehicle type and age.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* What we share */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-serif-editorial tracking-editorial-tight text-2xl sm:text-3xl mb-8" style={{ color: '#F7F7F4' }}>
              What we share about each vehicle
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-3 gap-6">
            <ScrollReveal delay={100}>
              <div className="rounded-lg p-6" style={{ backgroundColor: '#111111', border: '1px solid rgba(255,255,255,0.12)' }}>
                <img src="/assets/icons/inspection.svg" alt="Condition review" className="w-6 h-6 mb-4" style={{ filter: 'brightness(0) saturate(100%) invert(67%) sepia(98%) saturate(500%) hue-rotate(7deg)' }} />
                <h3 className="text-sm mb-2" style={{ color: '#F7F7F4' }}>Auction sheet details</h3>
                <p className="text-xs" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
                  Where available from the Japanese source, we share auction sheet grades, condition notes, and photos. We do not independently verify this information.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="rounded-lg p-6" style={{ backgroundColor: '#111111', border: '1px solid rgba(255,255,255,0.12)' }}>
                <img src="/assets/icons/document.svg" alt="Documentation" className="w-6 h-6 mb-4" style={{ filter: 'brightness(0) saturate(100%) invert(67%) sepia(98%) saturate(500%) hue-rotate(7deg)' }} />
                <h3 className="text-sm mb-2" style={{ color: '#F7F7F4' }}>Full cost breakdown</h3>
                <p className="text-xs" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
                  Every cost component is listed: purchase price, shipping, duties, port fees, registration. No hidden charges. You see the total before you decide.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="rounded-lg p-6" style={{ backgroundColor: '#111111', border: '1px solid rgba(255,255,255,0.12)' }}>
                <img src="/assets/icons/shipping.svg" alt="Shipping" className="w-6 h-6 mb-4" style={{ filter: 'brightness(0) saturate(100%) invert(67%) sepia(98%) saturate(500%) hue-rotate(7deg)' }} />
                <h3 className="text-sm mb-2" style={{ color: '#F7F7F4' }}>Shipping and clearance</h3>
                <p className="text-xs" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
                  We arrange shipping to Walvis Bay and handle customs clearance. You pay duties and taxes directly. We support the registration process.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Enquiry CTA */}
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
                Start your import enquiry
              </h2>
              <p className="text-sm mb-4" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
                Tell us the vehicle you want. Make, model, year, budget. We search, present options, and explain every cost. You decide at each step.
              </p>
              <div className="space-y-2 text-sm font-mono" style={{ color: '#9B9B96' }}>
                <p>{PHONE}</p>
                <p>{EMAIL}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <ContactForm type="import" />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
