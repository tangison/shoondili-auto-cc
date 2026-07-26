'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { CATALOGUE_MAKES } from '@/lib/constants';
import { catalogue, formatPriceNad, getWhatsAppEnquireUrl } from '@/lib/inventory-data';
import { WHATSAPP_URL, PRICING_DISCLAIMER } from '@/lib/constants';

interface SearchOverlayProps {
  open: boolean;
  onClose: () => void;
}

function WhatsAppSmallIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.46.125-.609.132-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('');
  const [selectedMake, setSelectedMake] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClose = () => {
    setQuery('');
    setSelectedMake('');
    onClose();
  };

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 400);
  }, [open]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  const filtered = catalogue.filter((entry) => {
    const matchesQuery = query === '' ||
      `${entry.make} ${entry.model} ${entry.year} ${entry.shape}`
        .toLowerCase()
        .includes(query.toLowerCase());
    const matchesMake = selectedMake === '' || entry.make === selectedMake;
    return matchesQuery && matchesMake;
  });

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70]" style={{ pointerEvents: 'auto' }}>
      {/* Backdrop */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: 'var(--surface-glass)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
        }}
        onClick={onClose}
      />

      {/* Search panel */}
      <div
        className="relative z-10 max-w-3xl mx-auto h-full flex flex-col px-4 sm:px-6 pt-6"
        style={{ animation: 'searchSlideIn 500ms cubic-bezier(0.16,1,0.3,1) forwards' }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full transition-all duration-300 hover:scale-105 btn-ghost"
          aria-label="Close search"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Search title */}
        <h2 className="font-serif-editorial tracking-editorial-tight text-3xl mb-2" style={{ color: 'var(--text-primary)' }}>
          Find a model
        </h2>
        <p className="text-xs mb-6" style={{ color: 'var(--text-secondary)' }}>
          Search our model and price guide. These are sourcing estimates, not stock vehicles.
        </p>

        {/* Search input */}
        <div className="relative mb-6">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="var(--text-secondary)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by make, model, year..."
            className="w-full pl-12 pr-4 py-4 text-sm rounded-full"
            style={{
              backgroundColor: 'var(--surface-raised)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-color)',
            }}
          />
        </div>

        {/* Make filter pills */}
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.15em] mb-3" style={{ color: 'var(--text-secondary)' }}>Make</p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedMake('')}
              className="px-4 py-2 text-xs font-mono rounded-full transition-all duration-300"
              style={{
                backgroundColor: selectedMake === '' ? 'var(--brand-gold)' : 'var(--surface-raised)',
                color: selectedMake === '' ? 'var(--canvas)' : 'var(--text-secondary)',
                border: '1px solid var(--border-color)',
              }}
            >
              All
            </button>
            {CATALOGUE_MAKES.map((make) => (
              <button
                key={make}
                onClick={() => setSelectedMake(selectedMake === make ? '' : make)}
                className="px-4 py-2 text-xs font-mono rounded-full transition-all duration-300"
                style={{
                  backgroundColor: selectedMake === make ? 'var(--brand-gold)' : 'var(--surface-raised)',
                  color: selectedMake === make ? 'var(--canvas)' : 'var(--text-secondary)',
                  border: '1px solid var(--border-color)',
                }}
              >
                {make}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {filtered.length === 0 ? (
            <div className="py-12 text-center">
              <p className="font-serif-editorial tracking-editorial text-lg" style={{ color: 'var(--text-primary)' }}>
                No models found
              </p>
              <p className="text-sm mt-2" style={{ color: 'var(--text-secondary)' }}>
                Try different search terms, or chat with us about what you need.
              </p>
              <a
                href={`${WHATSAPP_URL}?text=${encodeURIComponent('Hi Shoondili, I\'m looking for a vehicle but can\'t find the model I need. Can you help source it?')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center gap-2 mt-4 px-4 py-2 text-sm font-mono"
              >
                <WhatsAppSmallIcon />
                Ask on WhatsApp
              </a>
            </div>
          ) : (
            <ul className="space-y-3 pb-8">
              {filtered.map((entry) => (
                <li key={entry.id}>
                  <Link
                    href={`/inventory/${entry.slug}`}
                    onClick={onClose}
                    className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:translate-x-1"
                    style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border-color)' }}
                  >
                    {/* Model thumbnail */}
                    <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 flex items-center justify-center" style={{ backgroundColor: 'var(--surface-raised)' }}>
                      {entry.images.length > 0 ? (
                        <img src={entry.images[0]} alt={`${entry.make} ${entry.model}`} className="w-full h-full object-cover" />
                      ) : (
                        <svg className="w-6 h-6" style={{ color: 'var(--text-secondary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M8 8h.01M12 12h.01" />
                        </svg>
                      )}
                    </div>

                    {/* Model info */}
                    <div className="flex-1 min-w-0">
                      <p className="font-serif-editorial tracking-editorial text-base" style={{ color: 'var(--text-primary)' }}>
                        {entry.make} {entry.model}
                      </p>
                      <p className="text-xs font-mono" style={{ color: 'var(--text-secondary)' }}>
                        {entry.year} · {entry.shape !== 'unspecified' ? entry.shape : 'Order from Japan'}
                      </p>
                    </div>

                    {/* Price + WhatsApp */}
                    <div className="shrink-0 text-right">
                      <p className="text-sm font-medium text-brand-gold">
                        {formatPriceNad(entry.priceNad)}
                      </p>
                      <p className="text-xs font-mono mt-0.5" style={{ color: 'var(--text-secondary)' }}>starting estimate</p>
                      <a
                        href={getWhatsAppEnquireUrl(entry)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-1 text-xs font-mono transition-colors hover-text-gold"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        <WhatsAppSmallIcon />
                        {entry.primaryCta}
                      </a>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Keyboard hint */}
        <div className="py-2 text-xs font-mono" style={{ color: 'var(--text-secondary)' }}>
          Press <kbd style={{ backgroundColor: 'var(--surface-raised)', border: '1px solid var(--border-color)', padding: '2px 8px', borderRadius: '9999px' }}>ESC</kbd> to close
        </div>
      </div>
    </div>
  );
}
