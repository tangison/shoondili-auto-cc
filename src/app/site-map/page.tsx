'use client';

import Link from 'next/link';
import { ScrollReveal } from '@/components/scroll-reveal';
import { SectionDivider } from '@/components/section-divider';

export default function SiteMapPage() {
  const pages = [
    { label: 'Home', href: '/', description: 'Homepage with featured vehicles, import overview, and contact options.' },
    { label: 'Inventory', href: '/inventory', description: 'Browse all available vehicles with filter options.' },
    { label: 'Imports', href: '/imports', description: 'Japanese vehicle import process, timelines, and cost estimates.' },
    { label: 'Finance', href: '/finance', description: 'Finance guidance, required documents, and monthly estimate calculator.' },
    { label: 'Sell Your Vehicle', href: '/sell-your-vehicle', description: 'Trade-in and vehicle selling options.' },
    { label: 'About', href: '/about', description: 'About Shoondili Auto CC, our values, and location.' },
    { label: 'Testimonials', href: '/testimonials', description: 'Customer feedback (currently empty as we are a new startup).' },
    { label: 'FAQ', href: '/faq', description: 'Frequently asked questions about vehicles, imports, and finance.' },
    { label: 'Contact', href: '/contact', description: 'Contact form, phone, email, and location details.' },
    { label: 'Brand', href: '/brand', description: 'Visual identity, logo, colour palette, and design principles.' },
    { label: 'Privacy Policy', href: '/privacy', description: 'How we handle your personal information.' },
    { label: 'Terms of Service', href: '/terms', description: 'Terms governing the use of our website and services.' },
  ];

  return (
    <div>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="font-serif-editorial tracking-editorial-tight text-3xl sm:text-4xl lg:text-5xl mb-6" style={{ color: '#F7F7F4', lineHeight: '1.1' }}>
              Sitemap
            </h1>
            <p className="text-sm max-w-xl" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
              All pages on the Shoondili Auto CC website.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {pages.map((page, index) => (
              <ScrollReveal key={page.href} delay={index * 80}>
                <Link
                  href={page.href}
                  className="block rounded-lg p-4 transition-colors hover:bg-brand-raised"
                  style={{ backgroundColor: '#111111', border: '1px solid rgba(255,255,255,0.12)' }}
                >
                  <h2 className="font-serif-editorial tracking-editorial text-lg mb-1" style={{ color: '#F7F7F4' }}>
                    {page.label}
                  </h2>
                  <p className="text-sm" style={{ color: '#9B9B96' }}>{page.description}</p>
                  <p className="text-xs font-mono mt-2" style={{ color: '#9B9B96' }}>shoondili.com{page.href}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
