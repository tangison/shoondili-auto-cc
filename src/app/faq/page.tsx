'use client';

import { ScrollReveal } from '@/components/scroll-reveal';
import { SectionDivider } from '@/components/section-divider';
import { FAQAccordion } from '@/components/faq-accordion';
import { ContactForm } from '@/components/contact-form';

export default function FAQPage() {
  return (
    <div>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="font-serif-editorial tracking-editorial-tight text-3xl sm:text-4xl lg:text-5xl mb-6" style={{ color: '#F7F7F4', lineHeight: '1.1' }}>
              Frequently asked questions
            </h1>
            <p className="text-sm mb-8 max-w-xl" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
              Common questions about Shoondili, our vehicles, import process, and finance guidance. If your question is not listed, contact us directly.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal delay={100}>
            <FAQAccordion />
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <h2 className="font-serif-editorial tracking-editorial-tight text-2xl sm:text-3xl mb-4" style={{ color: '#F7F7F4' }}>
                Still have questions?
              </h2>
              <p className="text-sm" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
                Contact us directly. We are happy to answer any questions about our vehicles, import process, or finance guidance.
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
