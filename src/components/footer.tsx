import Link from 'next/link';
import { FOOTER_LINKS, SITE_NAME, PHONE, EMAIL, LOCATION } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="mt-auto" style={{ backgroundColor: '#090909' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand column */}
          <div>
            <div className="mb-4">
              <object data="/brand/logo-dark.svg" type="image/svg+xml" className="h-10 w-auto" aria-label={SITE_NAME}>
                <span className="font-serif-editorial tracking-editorial text-lg" style={{ color: '#F7F7F4' }}>{SITE_NAME}</span>
              </object>
            </div>
            <p className="text-sm text-brand-muted mb-4" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
              Vehicle sourcing and sales from Walvis Bay, Namibia.
            </p>
            <div className="space-y-1 text-sm" style={{ color: '#9B9B96' }}>
              <p className="font-mono">{PHONE}</p>
              <p className="font-mono">{EMAIL}</p>
              <p>{LOCATION}</p>
            </div>
          </div>

          {/* Vehicles column */}
          <div>
            <h3 className="text-xs uppercase tracking-widest mb-4" style={{ color: '#F5B400' }}>Vehicles</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.vehicles.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm transition-colors hover:text-brand-gold" style={{ color: '#9B9B96' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="text-xs uppercase tracking-widest mb-4" style={{ color: '#F5B400' }}>Company</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm transition-colors hover:text-brand-gold" style={{ color: '#9B9B96' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal column */}
          <div>
            <h3 className="text-xs uppercase tracking-widest mb-4" style={{ color: '#F5B400' }}>Legal</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm transition-colors hover:text-brand-gold" style={{ color: '#9B9B96' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full" style={{ backgroundColor: 'rgba(255,255,255,0.12)' }} />

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: '#9B9B96' }}>
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: '#9B9B96' }}>
            Made by{' '}
            <a
              href="https://studio.tangison.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-brand-gold"
              style={{ color: '#9B9B96' }}
            >
              Tangison Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
