'use client';

import Link from 'next/link';
import Image from 'next/image';
import { WHATSAPP_URL } from '@/lib/constants';

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.46.125-.609.132-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347 m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

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
            <Link href="/" aria-label="Shoondili Auto CC home">
              <img
                src="/brand/logo-dark.svg"
                alt="Shoondili Auto CC"
                className="h-16 w-auto"
                style={{ maxHeight: '64px' }}
              />
            </Link>
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
            <a
              href={`${WHATSAPP_URL}?text=${encodeURIComponent('Hi Shoondili, I\'d like to find a vehicle. Can you help?')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-flat px-6 py-3 text-sm font-medium inline-flex items-center justify-center gap-2"
              style={{ backgroundColor: '#111111', color: '#F7F7F4', borderColor: 'rgba(255,255,255,0.12)' }}
            >
              <WhatsAppIcon />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
