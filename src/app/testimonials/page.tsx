'use client';

import Link from 'next/link';
import { ScrollReveal } from '@/components/scroll-reveal';
import { SectionDivider } from '@/components/section-divider';
import { ContactForm } from '@/components/contact-form';

export default function TestimonialsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="font-serif-editorial tracking-editorial-tight text-3xl sm:text-4xl lg:text-5xl mb-6" style={{ color: '#F7F7F4', lineHeight: '1.1' }}>
              Customer testimonials
            </h1>
            <p className="text-sm max-w-xl" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
              Genuine feedback from real customers. We will never fabricate testimonials or use fake reviews.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* Truthful empty state */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="rounded-lg p-12 text-center" style={{ backgroundColor: '#111111', border: '1px solid rgba(255,255,255,0.12)' }}>
              <svg className="w-10 h-10 mx-auto mb-6" style={{ color: '#9B9B96' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 21l1.949-3.746A9.863 9.863 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <h2 className="font-serif-editorial tracking-editorial text-2xl mb-4" style={{ color: '#F7F7F4' }}>
                No testimonials yet
              </h2>
              <p className="text-sm max-w-md mx-auto mb-6" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
                Shoondili Auto CC is a new startup. As we serve more customers, we will share their genuine feedback on this page. We commit to only publishing real reviews from verified customers.
              </p>
              <p className="text-xs font-mono" style={{ color: '#9B9B96' }}>
                This space will grow with real customer experiences. Not fabricated content.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* Share feedback CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <h2 className="font-serif-editorial tracking-editorial-tight text-2xl sm:text-3xl mb-4" style={{ color: '#F7F7F4' }}>
                Had an experience with Shoondili?
              </h2>
              <p className="text-sm mb-4" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
                If you have purchased a vehicle through us or used our import service, we welcome your honest feedback. Good or bad, we want to hear it.
              </p>
              <p className="text-xs font-mono" style={{ color: '#9B9B96' }}>
                All published testimonials are verified. We do not edit or alter feedback content.
              </p>
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
