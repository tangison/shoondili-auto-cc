'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { MAKES, BODY_TYPES, FUEL_TYPES } from '@/lib/constants';
import { getAvailableVehicles } from '@/lib/inventory-data';
import { WHATSAPP_URL } from '@/lib/constants';

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
  const [selectedBody, setSelectedBody] = useState('');
  const [selectedFuel, setSelectedFuel] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 400);
    } else {
      setQuery('');
      setSelectedMake('');
      setSelectedBody('');
      setSelectedFuel('');
    }
  }, [open]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) onClose();
      if (e.key === '/' && !open) {
        e.preventDefault();
        // Can't open from here — parent handles
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  const allVehicles = getAvailableVehicles();

  const filtered = allVehicles.filter((v) => {
    const matchesQuery = query === '' || 
      `${v.make} ${v.model} ${v.variant || ''} ${v.year}`
        .toLowerCase()
        .includes(query.toLowerCase());
    const matchesMake = selectedMake === '' || v.make === selectedMake;
    const matchesBody = selectedBody === '' || v.bodyType === selectedBody;
    const matchesFuel = selectedFuel === '' || v.fuel === selectedFuel;
    return matchesQuery && matchesMake && matchesBody && matchesFuel;
  });

  const formatPrice = (n: number) =>
    new Intl.NumberFormat('en-NA', { style: 'currency', currency: 'NAD', maximumFractionDigits: 0 }).format(n);

  const whatsappMessage = (v: any) =>
    encodeURIComponent(`Hi Shoondili, I'm interested in the ${v.make} ${v.model} ${v.year} (${formatPrice(v.price)}). Could you provide more details?`);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70]" style={{ pointerEvents: 'auto' }}>
      {/* Backdrop */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: 'rgba(9,9,9,0.95)',
          backdropFilter: 'blur(20px)',
          transition: 'opacity 300ms',
        }}
        onClick={onClose}
      />

      {/* Search panel */}
      <div
        className="relative z-10 max-w-3xl mx-auto h-full flex flex-col px-4 sm:px-6 pt-6"
        style={{
          animation: 'searchSlideIn 400ms cubic-bezier(0.16,1,0.3,1) forwards',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 transition-colors"
          style={{ color: '#9B9B96' }}
          aria-label="Close search"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Search title */}
        <h2 className="font-serif-editorial tracking-editorial-tight text-2xl mb-6" style={{ color: '#F7F7F4' }}>
          Find your vehicle
        </h2>

        {/* Search input */}
        <div className="relative mb-6">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="#9B9B96" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by make, model, year..."
            className="w-full pl-10 pr-4 py-3 rounded text-sm"
            style={{
              backgroundColor: '#181818',
              color: '#F7F7F4',
              border: '1px solid rgba(255,255,255,0.12)',
            }}
          />
        </div>

        {/* Filter pills */}
        <div className="space-y-3 mb-6">
          {/* Makes */}
          <div>
            <p className="text-xs uppercase tracking-widest mb-2" style={{ color: '#9B9B96' }}>Make</p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedMake('')}
                className="px-3 py-1 text-xs font-mono rounded transition-colors"
                style={{
                  backgroundColor: selectedMake === '' ? '#F5B400' : '#181818',
                  color: selectedMake === '' ? '#090909' : '#9B9B96',
                  border: '1px solid rgba(255,255,255,0.12)',
                }}
              >
                All
              </button>
              {MAKES.filter(m => allVehicles.some(v => v.make === m)).map((make) => (
                <button
                  key={make}
                  onClick={() => setSelectedMake(selectedMake === make ? '' : make)}
                  className="px-3 py-1 text-xs font-mono rounded transition-colors"
                  style={{
                    backgroundColor: selectedMake === make ? '#F5B400' : '#181818',
                    color: selectedMake === make ? '#090909' : '#9B9B96',
                    border: '1px solid rgba(255,255,255,0.12)',
                  }}
                >
                  {make}
                </button>
              ))}
            </div>
          </div>

          {/* Body types */}
          <div>
            <p className="text-xs uppercase tracking-widest mb-2" style={{ color: '#9B9B96' }}>Body Type</p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedBody('')}
                className="px-3 py-1 text-xs font-mono rounded transition-colors"
                style={{
                  backgroundColor: selectedBody === '' ? '#F5B400' : '#181818',
                  color: selectedBody === '' ? '#090909' : '#9B9B96',
                  border: '1px solid rgba(255,255,255,0.12)',
                }}
              >
                All
              </button>
              {BODY_TYPES.filter(bt => allVehicles.some(v => v.bodyType === bt)).map((body) => (
                <button
                  key={body}
                  onClick={() => setSelectedBody(selectedBody === body ? '' : body)}
                  className="px-3 py-1 text-xs font-mono rounded transition-colors"
                  style={{
                    backgroundColor: selectedBody === body ? '#F5B400' : '#181818',
                    color: selectedBody === body ? '#090909' : '#9B9B96',
                    border: '1px solid rgba(255,255,255,0.12)',
                  }}
                >
                  {body}
                </button>
              ))}
            </div>
          </div>

          {/* Fuel types */}
          <div>
            <p className="text-xs uppercase tracking-widest mb-2" style={{ color: '#9B9B96' }}>Fuel</p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedFuel('')}
                className="px-3 py-1 text-xs font-mono rounded transition-colors"
                style={{
                  backgroundColor: selectedFuel === '' ? '#F5B400' : '#181818',
                  color: selectedFuel === '' ? '#090909' : '#9B9B96',
                  border: '1px solid rgba(255,255,255,0.12)',
                }}
              >
                All
              </button>
              {FUEL_TYPES.filter(ft => allVehicles.some(v => v.fuel === ft)).map((fuel) => (
                <button
                  key={fuel}
                  onClick={() => setSelectedFuel(selectedFuel === fuel ? '' : fuel)}
                  className="px-3 py-1 text-xs font-mono rounded transition-colors"
                  style={{
                    backgroundColor: selectedFuel === fuel ? '#F5B400' : '#181818',
                    color: selectedFuel === fuel ? '#090909' : '#9B9B96',
                    border: '1px solid rgba(255,255,255,0.12)',
                  }}
                >
                  {fuel}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {filtered.length === 0 ? (
            <div className="py-12 text-center">
              <p className="font-serif-editorial tracking-editorial text-lg" style={{ color: '#F7F7F4' }}>
                No vehicles found
              </p>
              <p className="text-sm mt-2" style={{ color: '#9B9B96' }}>
                Try different search terms or filters, or chat with us directly.
              </p>
              <a
                href={`${WHATSAPP_URL}?text=${encodeURIComponent('Hi Shoondili, I\'m looking for a vehicle but can\'t find what I need on your site. Can you help?')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-4 py-2 text-sm font-mono rounded transition-colors"
                style={{ backgroundColor: '#F5B400', color: '#090909' }}
              >
                <WhatsAppSmallIcon />
                Ask on WhatsApp
              </a>
            </div>
          ) : (
            <ul className="space-y-3 pb-8">
              {filtered.map((vehicle) => (
                <li key={vehicle.id}>
                  <Link
                    href={`/inventory/${vehicle.slug}`}
                    onClick={onClose}
                    className="flex items-center gap-4 p-3 rounded-lg transition-colors duration-200 hover:bg-brand-raised"
                    style={{ backgroundColor: '#111111', border: '1px solid rgba(255,255,255,0.12)' }}
                  >
                    {/* Vehicle thumbnail */}
                    <div className="w-16 h-16 rounded overflow-hidden shrink-0" style={{ backgroundColor: '#181818' }}>
                      {vehicle.images.length > 0 ? (
                        <img src={vehicle.images[0]} alt={`${vehicle.make} ${vehicle.model}`} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <svg className="w-6 h-6" style={{ color: '#9B9B96' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M8 8h.01M12 12h.01" />
                          </svg>
                        </div>
                      )}
                    </div>

                    {/* Vehicle info */}
                    <div className="flex-1 min-w-0">
                      <p className="font-serif-editorial tracking-editorial text-base" style={{ color: '#F7F7F4' }}>
                        {vehicle.make} {vehicle.model}
                      </p>
                      <p className="text-xs font-mono" style={{ color: '#9B9B96' }}>
                        {vehicle.year} · {vehicle.transmission} · {new Intl.NumberFormat('en-NA').format(vehicle.mileage)} km
                      </p>
                    </div>

                    {/* Price + WhatsApp */}
                    <div className="shrink-0 text-right">
                      <p className="text-sm font-medium" style={{ color: '#F5B400' }}>
                        {formatPrice(vehicle.price)}
                      </p>
                      <a
                        href={`${WHATSAPP_URL}?text=${whatsappMessage(vehicle)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-1 text-xs font-mono transition-colors"
                        style={{ color: '#9B9B96' }}
                      >
                        <WhatsAppSmallIcon />
                        Enquire
                      </a>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Keyboard hint */}
        <div className="py-2 text-xs font-mono" style={{ color: '#9B9B96' }}>
          Press <kbd style={{ backgroundColor: '#181818', border: '1px solid rgba(255,255,255,0.12)', padding: '2px 6px', borderRadius: '3px' }}>ESC</kbd> to close
        </div>
      </div>
    </div>
  );
}
