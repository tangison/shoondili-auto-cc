'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ScrollReveal } from '@/components/scroll-reveal';
import { SectionDivider } from '@/components/section-divider';
import { ContactForm } from '@/components/contact-form';
import { PHONE, EMAIL, LOCATION } from '@/lib/constants';

export default function ContactPage() {
  return (
    <div>
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
          <ScrollReveal>
            <h1 className="font-serif-editorial tracking-editorial-tight text-3xl sm:text-4xl lg:text-5xl mb-6" style={{ color: '#F7F7F4', lineHeight: '1.1' }}>
              Contact Shoondili
            </h1>
            <p className="text-sm mb-8 max-w-xl" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
              Reach us by phone, email, or through the enquiry form below. We respond to all enquiries.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact details */}
            <ScrollReveal>
              <div className="space-y-6">
                <div>
                  <h2 className="font-serif-editorial tracking-editorial-tight text-2xl mb-6" style={{ color: '#F7F7F4' }}>
                    Direct contact
                  </h2>

                  <div className="space-y-4">
                    <div className="rounded-lg p-4" style={{ backgroundColor: '#111111', border: '1px solid rgba(255,255,255,0.12)' }}>
                      <div className="flex items-center gap-3">
                        <img src="/assets/icons/support.svg" alt="Phone" className="w-5 h-5" style={{ filter: 'brightness(0) saturate(100%) invert(67%) sepia(98%) saturate(500%) hue-rotate(7deg)' }} />
                        <div>
                          <p className="text-xs" style={{ color: '#9B9B96' }}>Phone</p>
                          <p className="text-sm font-mono" style={{ color: '#F7F7F4' }}>{PHONE}</p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg p-4" style={{ backgroundColor: '#111111', border: '1px solid rgba(255,255,255,0.12)' }}>
                      <div className="flex items-center gap-3">
                        <img src="/assets/icons/document.svg" alt="Email" className="w-5 h-5" style={{ filter: 'brightness(0) saturate(100%) invert(67%) sepia(98%) saturate(500%) hue-rotate(7deg)' }} />
                        <div>
                          <p className="text-xs" style={{ color: '#9B9B96' }}>Email</p>
                          <p className="text-sm font-mono" style={{ color: '#F7F7F4' }}>{EMAIL}</p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg p-4" style={{ backgroundColor: '#111111', border: '1px solid rgba(255,255,255,0.12)' }}>
                      <div className="flex items-center gap-3">
                        <img src="/assets/icons/location.svg" alt="Location" className="w-5 h-5" style={{ filter: 'brightness(0) saturate(100%) invert(67%) sepia(98%) saturate(500%) hue-rotate(7deg)' }} />
                        <div>
                          <p className="text-xs" style={{ color: '#9B9B96' }}>Location</p>
                          <p className="text-sm font-mono" style={{ color: '#F7F7F4' }}>{LOCATION}</p>
                          <p className="text-xs mt-1" style={{ color: '#9B9B96' }}>Viewings by arrangement. No showroom.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs uppercase tracking-widest mb-3" style={{ color: '#F5B400' }}>Quick Links</h3>
                  <div className="space-y-2">
                    <Link href="/inventory" className="text-sm block" style={{ color: '#9B9B96' }}>Browse inventory</Link>
                    <Link href="/imports" className="text-sm block" style={{ color: '#9B9B96' }}>Import enquiry</Link>
                    <Link href="/finance" className="text-sm block" style={{ color: '#9B9B96' }}>Finance guidance</Link>
                    <Link href="/sell-your-vehicle" className="text-sm block" style={{ color: '#9B9B96' }}>Sell your vehicle</Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal delay={200}>
              <ContactForm type="general" />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
