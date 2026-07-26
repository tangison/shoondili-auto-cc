'use client';

import { useState } from 'react';
import Link from 'next/link';
import { catalogue, formatPriceNad, getWhatsAppEnquireUrl } from '@/lib/inventory-data';
import { CatalogueCard } from '@/components/catalogue-card';
import { ScrollReveal } from '@/components/scroll-reveal';
import { PricingDisclaimer } from '@/components/pricing-disclaimer';
import { CATALOGUE_MAKES, WHATSAPP_URL } from '@/lib/constants';

export default function InventoryPage() {
  const [makeFilter, setMakeFilter] = useState('');
  const [priceMax, setPriceMax] = useState('');
  const [yearMin, setYearMin] = useState('');

  const filtered = catalogue.filter((entry) => {
    if (makeFilter && entry.make !== makeFilter) return false;
    if (yearMin && entry.year < Number(yearMin)) return false;
    if (priceMax && entry.priceNad > Number(priceMax)) return false;
    return true;
  });

  const clearFilters = () => {
    setMakeFilter('');
    setPriceMax('');
    setYearMin('');
  };

  const hasFilters = makeFilter || priceMax || yearMin;

  return (
    <div>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="font-serif-editorial tracking-editorial-tight text-3xl sm:text-4xl lg:text-5xl mb-4" style={{ color: '#F7F7F4', lineHeight: '1.1' }}>
              Models & Prices
            </h1>
            <p className="text-sm mb-8" style={{ color: '#9B9B96', lineHeight: '1.7' }}>
              Browse our model and price guide. These are starting estimates for sourcing a vehicle from Japan, not locally stocked vehicles. Request any model and Shoondili will search for a suitable unit, provide a written quotation, and coordinate the order.
            </p>
          </ScrollReveal>

          {/* Pricing disclaimer */}
          <ScrollReveal delay={100}>
            <PricingDisclaimer />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-8" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xs uppercase tracking-[0.15em]" style={{ color: '#9B9B96' }}>Filters</h2>
              {hasFilters && (
                <button
                  className="text-xs font-mono btn-flat px-4 py-1"
                  onClick={clearFilters}
                >
                  Clear all
                </button>
              )}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3">
              <select
                value={makeFilter}
                onChange={(e) => setMakeFilter(e.target.value)}
                className="px-4 py-3 rounded-full text-xs font-mono"
                style={{ backgroundColor: '#181818', color: makeFilter ? '#F7F7F4' : '#9B9B96', border: '1px solid rgba(255,255,255,0.12)' }}
                aria-label="Filter by make"
              >
                <option value="">Any make</option>
                {CATALOGUE_MAKES.map((m) => <option key={m} value={m}>{m}</option>)}
              </select>

              <input
                type="number"
                placeholder="Min year (e.g. 2016)"
                value={yearMin}
                onChange={(e) => setYearMin(e.target.value)}
                className="px-4 py-3 rounded-full text-xs font-mono"
                style={{ backgroundColor: '#181818', color: '#9B9B96', border: '1px solid rgba(255,255,255,0.12)' }}
                aria-label="Minimum year"
              />

              <input
                type="number"
                placeholder="Max price NAD (e.g. 150000)"
                value={priceMax}
                onChange={(e) => setPriceMax(e.target.value)}
                className="px-4 py-3 rounded-full text-xs font-mono"
                style={{ backgroundColor: '#181818', color: '#9B9B96', border: '1px solid rgba(255,255,255,0.12)' }}
                aria-label="Maximum price"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-mono mb-8" style={{ color: '#9B9B96' }}>
            {filtered.length} models in guide
          </p>

          {filtered.length === 0 ? (
            <div className="py-12 text-center">
              <p className="font-serif-editorial tracking-editorial text-lg" style={{ color: '#F7F7F4' }}>
                No models match your filters
              </p>
              <p className="text-sm mt-2" style={{ color: '#9B9B96' }}>
                Try adjusting your criteria, or ask us to source the vehicle you need.
              </p>
              <a
                href={`${WHATSAPP_URL}?text=${encodeURIComponent('Hi Shoondili, I can\'t find the model I want in your guide. Can you help source it?')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center gap-2 mt-4 px-6 py-3 text-sm font-mono"
              >
                Ask on WhatsApp
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((entry, index) => (
                <ScrollReveal key={entry.id} delay={index * 80}>
                  <CatalogueCard entry={entry} />
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
