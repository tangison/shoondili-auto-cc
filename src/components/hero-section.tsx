'use client';

import Link from 'next/link';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden" style={{ backgroundColor: '#090909' }}>
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/backgrounds/audi-rs7-motion-hero.webp"
          alt="Vehicle in motion, atmospheric artwork"
          fill
          className="object-cover opacity-40"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #090909 40%, transparent 70%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #090909 10%, transparent 50%)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-xl py-24 lg:py-32">
          {/* Logo */}
          <div className="mb-8">
            <object data="/brand/logo-dark.svg" type="image/svg+xml" className="h-16 w-auto" aria-label="Shoondili Auto CC">
              <span className="font-serif-editorial tracking-editorial-tight text-4xl" style={{ color: '#F7F7F4' }}>
                Shoondili Auto CC
              </span>
            </object>
          </div>

          <h1
            className="font-serif-editorial tracking-editorial-tight text-3xl sm:text-4xl lg:text-5xl mb-6"
            style={{ color: '#F7F7F4', lineHeight: '1.1' }}
          >
            Vehicles sourced with care. Sold with honesty.
          </h1>

          <p className="text-lg mb-10" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
            Walvis Bay based. Japanese imports and local inventory. We find the vehicle you need, explain every cost, and deliver to your door.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/inventory"
              className="btn-flat px-6 py-3 text-sm font-medium inline-flex items-center justify-center"
              style={{ backgroundColor: '#F5B400', color: '#090909', borderColor: '#F5B400' }}
            >
              Browse Inventory
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/imports"
              className="btn-flat px-6 py-3 text-sm font-medium inline-flex items-center justify-center"
            >
              Import Enquiry
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
