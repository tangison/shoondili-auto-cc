'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ScrollReveal } from '@/components/scroll-reveal';
import { SectionDivider } from '@/components/section-divider';
import { FinanceCalculator } from '@/components/finance-calculator';
import { ContactForm } from '@/components/contact-form';
import { FAQAccordion } from '@/components/faq-accordion';
import { PHONE, EMAIL } from '@/lib/constants';

export default function FinancePage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="font-serif-editorial tracking-editorial-tight text-3xl sm:text-4xl lg:text-5xl mb-6" style={{ color: '#F7F7F4', lineHeight: '1.1' }}>
              Finance guidance
            </h1>
            <p className="text-sm mb-8 max-w-xl" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
              Shoondili does not lend money or approve finance. We help you understand how vehicle finance works in Namibia and assist with your application to a bank or finance house. Final approval is always the lender's decision.
            </p>
            <span className="tag-pill" style={{ backgroundColor: 'rgba(245,180,0,0.15)', color: '#F5B400' }}>
              Shoondili is not a lender
            </span>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* How guidance works */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <h2 className="font-serif-editorial tracking-editorial-tight text-2xl sm:text-3xl mb-6" style={{ color: '#F7F7F4' }}>
                How finance guidance works
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded shrink-0 flex items-center justify-center font-mono text-xs" style={{ backgroundColor: '#181818', color: '#F5B400', border: '1px solid rgba(255,255,255,0.12)' }}>1</div>
                  <div>
                    <h3 className="text-sm mb-1" style={{ color: '#F7F7F4' }}>You choose a vehicle</h3>
                    <p className="text-xs" style={{ color: '#9B9B96', lineHeight: '1.6' }}>From our inventory or import list. We confirm the price and vehicle details.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded shrink-0 flex items-center justify-center font-mono text-xs" style={{ backgroundColor: '#181818', color: '#F5B400', border: '1px solid rgba(255,255,255,0.12)' }}>2</div>
                  <div>
                    <h3 className="text-sm mb-1" style={{ color: '#F7F7F4' }}>We explain finance options</h3>
                    <p className="text-xs" style={{ color: '#9B9B96', lineHeight: '1.6' }}>We walk you through how banks and finance houses approve vehicle loans in Namibia. We help you understand the requirements and process.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded shrink-0 flex items-center justify-center font-mono text-xs" style={{ backgroundColor: '#181818', color: '#F5B400', border: '1px solid rgba(255,255,255,0.12)' }}>3</div>
                  <div>
                    <h3 className="text-sm mb-1" style={{ color: '#F7F7F4' }}>You apply to a lender</h3>
                    <p className="text-xs" style={{ color: '#9B9B96', lineHeight: '1.6' }}>You apply directly to a bank or finance house. We assist with paperwork and documentation. Approval is the lender's decision alone.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded shrink-0 flex items-center justify-center font-mono text-xs" style={{ backgroundColor: '#181818', color: '#F5B400', border: '1px solid rgba(255,255,255,0.12)' }}>4</div>
                  <div>
                    <h3 className="text-sm mb-1" style={{ color: '#F7F7F4' }}>Vehicle delivery</h3>
                    <p className="text-xs" style={{ color: '#9B9B96', lineHeight: '1.6' }}>Once finance is approved and payment is confirmed, we deliver the vehicle.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="rounded-lg overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.12)' }}>
                <Image
                  src="/assets/backgrounds/import-documents-desk.webp"
                  alt="Finance documentation on desk"
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

      {/* Required documents */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-serif-editorial tracking-editorial-tight text-2xl sm:text-3xl mb-8" style={{ color: '#F7F7F4' }}>
              Required documents
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-6">
            <ScrollReveal delay={100}>
              <div className="rounded-lg p-6" style={{ backgroundColor: '#111111', border: '1px solid rgba(255,255,255,0.12)' }}>
                <h3 className="text-xs uppercase tracking-widest mb-4" style={{ color: '#F5B400' }}>Typically Required</h3>
                <ul className="space-y-3">
                  {[
                    'Proof of income (salary slip or business records)',
                    'Bank statements for 3 to 6 months',
                    'Valid Namibian ID or passport',
                    'Proof of residential address',
                    'Vehicle details and purchase price',
                  ].map((doc, i) => (
                    <li key={i} className="text-sm flex items-center gap-2" style={{ color: '#F7F7F4' }}>
                      <img src="/assets/icons/document.svg" alt="" className="w-4 h-4" style={{ filter: 'brightness(0) saturate(100%) invert(67%) sepia(98%) saturate(500%) hue-rotate(7deg)' }} />
                      {doc}
                    </li>
                  ))}
                </ul>
                <p className="text-xs font-mono mt-4" style={{ color: '#9B9B96' }}>
                  Your bank may have additional requirements. Check with your chosen lender before applying.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="rounded-lg p-6" style={{ backgroundColor: '#111111', border: '1px solid rgba(255,255,255,0.12)' }}>
                <h3 className="text-xs uppercase tracking-widest mb-4" style={{ color: '#F5B400' }}>Affordability Considerations</h3>
                <ul className="space-y-3">
                  {[
                    'Monthly payment should fit within your budget',
                    'Consider insurance costs on top of finance payments',
                    'Factor in fuel, maintenance, and registration',
                    'Lenders typically require a deposit (10-20% of price)',
                    'Longer terms reduce monthly payments but increase total cost',
                  ].map((item, i) => (
                    <li key={i} className="text-sm flex items-center gap-2" style={{ color: '#F7F7F4' }}>
                      <img src="/assets/icons/finance.svg" alt="" className="w-4 h-4" style={{ filter: 'brightness(0) saturate(100%) invert(67%) sepia(98%) saturate(500%) hue-rotate(7deg)' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Calculator */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-serif-editorial tracking-editorial-tight text-2xl sm:text-3xl mb-8" style={{ color: '#F7F7F4' }}>
              Monthly estimate calculator
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <FinanceCalculator />
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* Finance FAQ */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-serif-editorial tracking-editorial-tight text-2xl sm:text-3xl mb-8" style={{ color: '#F7F7F4' }}>
              Finance FAQ
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <FAQAccordion categoryFilter="Finance" />
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* Enquiry CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <h2 className="font-serif-editorial tracking-editorial-tight text-2xl sm:text-3xl mb-4" style={{ color: '#F7F7F4' }}>
                Finance enquiry
              </h2>
              <p className="text-sm mb-4" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
                Want to understand your finance options for a vehicle? We can help you navigate the process. Contact us to discuss.
              </p>
              <p className="text-xs" style={{ color: '#9B9B96' }}>
                Shoondili does not offer finance, approve loans, or guarantee interest rates or monthly payments. We provide guidance only.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <ContactForm type="finance" />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
