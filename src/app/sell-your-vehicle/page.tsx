'use client';

import Link from 'next/link';
import { ScrollReveal } from '@/components/scroll-reveal';
import { SectionDivider } from '@/components/section-divider';
import { ContactForm } from '@/components/contact-form';
import { PHONE, EMAIL } from '@/lib/constants';

export default function SellYourVehiclePage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="font-serif-editorial tracking-editorial-tight text-3xl sm:text-4xl lg:text-5xl mb-6" style={{ color: '#F7F7F4', lineHeight: '1.1' }}>
              Sell your vehicle
            </h1>
            <p className="text-sm mb-8 max-w-xl" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
              Looking to sell your current vehicle? Shoondili can discuss trade-in options or assist with selling your vehicle through our network.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* How it works */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-serif-editorial tracking-editorial-tight text-2xl sm:text-3xl mb-12" style={{ color: '#F7F7F4' }}>
              How it works
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-3 gap-6">
            <ScrollReveal delay={100}>
              <div className="rounded-lg p-6" style={{ backgroundColor: '#111111', border: '1px solid rgba(255,255,255,0.12)' }}>
                <img src="/assets/icons/trade-in.svg" alt="Trade-in" className="w-6 h-6 mb-4" style={{ filter: 'brightness(0) saturate(100%) invert(67%) sepia(98%) saturate(500%) hue-rotate(7deg)' }} />
                <h3 className="text-sm mb-2" style={{ color: '#F7F7F4' }}>1. Contact us with details</h3>
                <p className="text-xs" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
                  Tell us about your vehicle: make, model, year, condition, and your asking price. We review the information and discuss options.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="rounded-lg p-6" style={{ backgroundColor: '#111111', border: '1px solid rgba(255,255,255,0.12)' }}>
                <img src="/assets/icons/inspection.svg" alt="Inspection" className="w-6 h-6 mb-4" style={{ filter: 'brightness(0) saturate(100%) invert(67%) sepia(98%) saturate(500%) hue-rotate(7deg)' }} />
                <h3 className="text-sm mb-2" style={{ color: '#F7F7F4' }}>2. Review and assessment</h3>
                <p className="text-xs" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
                  We assess your vehicle based on the details you provide and arrange a viewing in Walvis Bay if needed. We discuss realistic market value.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="rounded-lg p-6" style={{ backgroundColor: '#111111', border: '1px solid rgba(255,255,255,0.12)' }}>
                <img src="/assets/icons/delivery.svg" alt="Delivery" className="w-6 h-6 mb-4" style={{ filter: 'brightness(0) saturate(100%) invert(67%) sepia(98%) saturate(500%) hue-rotate(7deg)' }} />
                <h3 className="text-sm mb-2" style={{ color: '#F7F7F4' }}>3. Agreement and sale</h3>
                <p className="text-xs" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
                  If we agree on terms, we handle the sale process and paperwork. We can also discuss trade-in options toward a vehicle from our inventory.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* What we need */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-serif-editorial tracking-editorial-tight text-2xl sm:text-3xl mb-8" style={{ color: '#F7F7F4' }}>
              What to include in your enquiry
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-6">
            <ScrollReveal delay={100}>
              <div className="rounded-lg p-6" style={{ backgroundColor: '#111111', border: '1px solid rgba(255,255,255,0.12)' }}>
                <h3 className="text-xs uppercase tracking-widest mb-4" style={{ color: '#F5B400' }}>Vehicle Details</h3>
                <ul className="space-y-2 text-sm" style={{ color: '#9B9B96' }}>
                  <li>Make and model</li>
                  <li>Year of manufacture</li>
                  <li>Current mileage</li>
                  <li>Condition description</li>
                  <li>Any known issues</li>
                  <li>Registration status</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="rounded-lg p-6" style={{ backgroundColor: '#111111', border: '1px solid rgba(255,255,255,0.12)' }}>
                <h3 className="text-xs uppercase tracking-widest mb-4" style={{ color: '#F5B400' }}>Your Expectations</h3>
                <ul className="space-y-2 text-sm" style={{ color: '#9B9B96' }}>
                  <li>Asking price or price range</li>
                  <li>Whether you want to trade-in</li>
                  <li>Preferred vehicle if trading in</li>
                  <li>Timeline for sale</li>
                  <li>Vehicle location</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Enquiry */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <h2 className="font-serif-editorial tracking-editorial-tight text-2xl sm:text-3xl mb-4" style={{ color: '#F7F7F4' }}>
                Sell your vehicle enquiry
              </h2>
              <p className="text-sm mb-4" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
                Tell us about your vehicle and what you want. We will respond to discuss options.
              </p>
              <div className="space-y-2 text-sm font-mono" style={{ color: '#9B9B96' }}>
                <p>{PHONE}</p>
                <p>{EMAIL}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <ContactForm type="sell" />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
