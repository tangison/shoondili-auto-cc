'use client';

import { ScrollReveal } from '@/components/scroll-reveal';
import { SectionDivider } from '@/components/section-divider';
import { SITE_NAME } from '@/lib/constants';

export default function BrandPage() {
  return (
    <div>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="font-serif-editorial tracking-editorial-tight text-3xl sm:text-4xl lg:text-5xl mb-6" style={{ color: '#F7F7F4', lineHeight: '1.1' }}>
              Brand identity
            </h1>
            <p className="text-sm max-w-xl" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
              The visual identity of {SITE_NAME}. Our brand reflects honesty, warmth, and a focused approach to vehicle sourcing.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* Logo */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-serif-editorial tracking-editorial-tight text-2xl sm:text-3xl mb-8" style={{ color: '#F7F7F4' }}>
              Logo
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-6">
            <ScrollReveal delay={100}>
              <div className="rounded-lg p-6" style={{ backgroundColor: '#090909', border: '1px solid rgba(255,255,255,0.12)' }}>
                <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#9B9B96' }}>On dark surfaces</p>
                <object data="/brand/logo-dark.svg" type="image/svg+xml" className="h-20 w-auto" aria-label={`${SITE_NAME} logo dark variant`}>
                  <span style={{ color: '#F7F7F4' }}>{SITE_NAME}</span>
                </object>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="rounded-lg p-6" style={{ backgroundColor: '#F7F7F4', border: '1px solid rgba(255,255,255,0.12)' }}>
                <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#2F3437' }}>On light surfaces</p>
                <object data="/brand/logo-light.svg" type="image/svg+xml" className="h-20 w-auto" aria-label={`${SITE_NAME} logo light variant`}>
                  <span style={{ color: '#2F3437' }}>{SITE_NAME}</span>
                </object>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Colors */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-serif-editorial tracking-editorial-tight text-2xl sm:text-3xl mb-8" style={{ color: '#F7F7F4' }}>
              Colour palette
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { name: 'Near Black', hex: '#090909', text: '#F7F7F4' },
              { name: 'Primary Surface', hex: '#111111', text: '#F7F7F4' },
              { name: 'Raised Surface', hex: '#181818', text: '#F7F7F4' },
              { name: 'Warm White', hex: '#F7F7F4', text: '#090909' },
              { name: 'Muted Text', hex: '#9B9B96', text: '#090909' },
              { name: 'Shoondili Gold', hex: '#F5B400', text: '#090909' },
              { name: 'Deep Gold', hex: '#C98900', text: '#090909' },
              { name: 'Quiet Border', hex: 'rgba(255,255,255,0.12)', text: '#F7F7F4' },
            ].map((color, index) => (
              <ScrollReveal key={color.name} delay={index * 80}>
                <div className="rounded-lg overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.12)' }}>
                  <div className="h-24" style={{ backgroundColor: color.hex }} />
                  <div className="p-3" style={{ backgroundColor: '#111111' }}>
                    <p className="text-xs font-mono" style={{ color: color.text }}>{color.name}</p>
                    <p className="text-xs font-mono" style={{ color: '#9B9B96' }}>{color.hex}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Typography */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-serif-editorial tracking-editorial-tight text-2xl sm:text-3xl mb-8" style={{ color: '#F7F7F4' }}>
              Typography
            </h2>

            <div className="space-y-6">
              <div className="rounded-lg p-6" style={{ backgroundColor: '#111111', border: '1px solid rgba(255,255,255,0.12)' }}>
                <p className="text-xs uppercase tracking-widest mb-2" style={{ color: '#9B9B96' }}>Headings</p>
                <p className="font-serif-editorial tracking-editorial-tight text-3xl" style={{ color: '#F7F7F4' }}>
                  Instrument Serif / Newsreader
                </p>
                <p className="text-xs font-mono mt-2" style={{ color: '#9B9B96' }}>Tracking: -0.02em to -0.04em. Line-height: 1.1</p>
              </div>

              <div className="rounded-lg p-6" style={{ backgroundColor: '#111111', border: '1px solid rgba(255,255,255,0.12)' }}>
                <p className="text-xs uppercase tracking-widest mb-2" style={{ color: '#9B9B96' }}>Body & UI</p>
                <p className="text-base" style={{ color: '#F7F7F4', lineHeight: '1.6' }}>
                  Geist Sans for all body copy and interface elements. Line-height 1.6. Colour #F7F7F4 on dark backgrounds.
                </p>
                <p className="text-xs font-mono mt-2" style={{ color: '#9B9B96' }}>Secondary text: #9B9B96</p>
              </div>

              <div className="rounded-lg p-6" style={{ backgroundColor: '#111111', border: '1px solid rgba(255,255,255,0.12)' }}>
                <p className="text-xs uppercase tracking-widest mb-2" style={{ color: '#9B9B96' }}>Metadata</p>
                <p className="font-mono text-sm" style={{ color: '#9B9B96' }}>
                  Geist Mono for vehicle specs, prices, and technical details
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* Design principles */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-serif-editorial tracking-editorial-tight text-2xl sm:text-3xl mb-12" style={{ color: '#F7F7F4' }}>
              Design principles
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: 'Dark theme', desc: 'Near-black backgrounds with warm white text. Gold as a scarce accent for selected states, focus states, and important metadata.' },
              { title: 'Minimalist composition', desc: 'Strong macro-whitespace between sections. Editorial typography hierarchy. Restrained component shapes. Maximum border-radius 8-12px.' },
              { title: 'Flat buttons', desc: 'Background #111111, text #F7F7F4, slight border-radius 4-6px. No box-shadow. Hover: scale(0.98). Gold accent on primary CTAs.' },
              { title: 'Honest communication', desc: 'No AI clichés. No fabricated testimonials. No invented data. Plain, confident, professional language throughout.' },
            ].map((principle, index) => (
              <ScrollReveal key={principle.title} delay={index * 80}>
                <div className="rounded-lg p-6" style={{ backgroundColor: '#111111', border: '1px solid rgba(255,255,255,0.12)' }}>
                  <h3 className="text-xs uppercase tracking-widest mb-3" style={{ color: '#F5B400' }}>{principle.title}</h3>
                  <p className="text-sm" style={{ color: '#9B9B96', lineHeight: '1.6' }}>{principle.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
