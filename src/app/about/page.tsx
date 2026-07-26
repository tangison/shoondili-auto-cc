'use client';

import { ScrollReveal } from '@/components/scroll-reveal';
import { SectionDivider } from '@/components/section-divider';
import { ContactForm } from '@/components/contact-form';
import { PHONE, EMAIL, LOCATION } from '@/lib/constants';

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="font-serif-editorial tracking-editorial-tight text-3xl sm:text-4xl lg:text-5xl mb-6" style={{ color: '#F7F7F4', lineHeight: '1.1' }}>
              About Shoondili Auto CC
            </h1>
            <p className="text-sm mb-8 max-w-xl" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
              A lean vehicle sourcing and sales startup based in Walvis Bay, Namibia. We find the vehicles people need, explain every cost, and deliver with honesty.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <ScrollReveal>
              <h2 className="font-serif-editorial tracking-editorial-tight text-2xl sm:text-3xl mb-6" style={{ color: '#F7F7F4' }}>
                Who we are
              </h2>
              <p className="text-sm mb-4" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
                Shoondili Auto CC is a registered close corporation in Namibia, based in Walvis Bay. We operate as a lean startup. We do not have a large showroom, a fleet of vehicles, or a big team.
              </p>
              <p className="text-sm mb-4" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
                What we do have is a straightforward approach: find the vehicle you need, explain every cost before you commit, and deliver it to your door. Whether that vehicle comes from our local inventory or a Japanese auction, the process is transparent.
              </p>
              <p className="text-sm mb-4" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
                We are honest about what we can and cannot do. We share all available information about each vehicle. We do not invent auction grades, inspection results, or vehicle histories. If we do not have the information, we tell you that.
              </p>
              <p className="text-sm" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
                We do not offer finance. We do not guarantee approval. We provide guidance on how vehicle finance works in Namibia and assist with your application to a lender. The final decision is always the lender's.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-serif-editorial tracking-editorial-tight text-2xl sm:text-3xl mb-12" style={{ color: '#F7F7F4' }}>
              What we stand for
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ScrollReveal delay={100}>
              <div className="rounded-lg p-6" style={{ backgroundColor: '#111111', border: '1px solid rgba(255,255,255,0.12)' }}>
                <h3 className="text-xs uppercase tracking-widest mb-2" style={{ color: '#F5B400' }}>Honesty</h3>
                <p className="text-sm" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
                  We share all available information. If we do not know something, we say that. We do not fabricate details to make a sale.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="rounded-lg p-6" style={{ backgroundColor: '#111111', border: '1px solid rgba(255,255,255,0.12)' }}>
                <h3 className="text-xs uppercase tracking-widest mb-2" style={{ color: '#F5B400' }}>Transparency</h3>
                <p className="text-sm" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
                  Every cost is explained before you commit. No hidden charges. No surprise fees. You decide at each step of the process.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="rounded-lg p-6" style={{ backgroundColor: '#111111', border: '1px solid rgba(255,255,255,0.12)' }}>
                <h3 className="text-xs uppercase tracking-widest mb-2" style={{ color: '#F5B400' }}>No pressure</h3>
                <p className="text-sm" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
                  You review options, costs, and vehicle details. You decide whether to proceed. There is no pressure to buy or commit.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Location */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-serif-editorial tracking-editorial-tight text-2xl sm:text-3xl mb-12" style={{ color: '#F7F7F4' }}>
              Location and contact
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-3 gap-6">
            <ScrollReveal delay={100}>
              <div className="rounded-lg p-6" style={{ backgroundColor: '#111111', border: '1px solid rgba(255,255,255,0.12)' }}>
                <img src="/assets/icons/location.svg" alt="Location" className="w-6 h-6 mb-4" style={{ filter: 'brightness(0) saturate(100%) invert(67%) sepia(98%) saturate(500%) hue-rotate(7deg)' }} />
                <h3 className="text-xs uppercase tracking-widest mb-2" style={{ color: '#F5B400' }}>Location</h3>
                <p className="text-sm" style={{ color: '#9B9B96' }}>{LOCATION}</p>
                <p className="text-xs mt-2" style={{ color: '#9B9B96' }}>We do not have a showroom. Viewings are by arrangement.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="rounded-lg p-6" style={{ backgroundColor: '#111111', border: '1px solid rgba(255,255,255,0.12)' }}>
                <img src="/assets/icons/support.svg" alt="Phone" className="w-6 h-6 mb-4" style={{ filter: 'brightness(0) saturate(100%) invert(67%) sepia(98%) saturate(500%) hue-rotate(7deg)' }} />
                <h3 className="text-xs uppercase tracking-widest mb-2" style={{ color: '#F5B400' }}>Phone</h3>
                <p className="text-sm font-mono" style={{ color: '#9B9B96' }}>{PHONE}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="rounded-lg p-6" style={{ backgroundColor: '#111111', border: '1px solid rgba(255,255,255,0.12)' }}>
                <img src="/assets/icons/document.svg" alt="Email" className="w-6 h-6 mb-4" style={{ filter: 'brightness(0) saturate(100%) invert(67%) sepia(98%) saturate(500%) hue-rotate(7deg)' }} />
                <h3 className="text-xs uppercase tracking-widest mb-2" style={{ color: '#F5B400' }}>Email</h3>
                <p className="text-sm font-mono" style={{ color: '#9B9B96' }}>{EMAIL}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Contact CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <ContactForm type="general" />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
