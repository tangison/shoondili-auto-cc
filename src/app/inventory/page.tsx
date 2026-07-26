'use client';

import { useState } from 'react';
import Link from 'next/link';
import { vehicles, VehicleData } from '@/lib/inventory-data';
import { VehicleCard } from '@/components/vehicle-card';
import { ScrollReveal } from '@/components/scroll-reveal';
import { EmptyState } from '@/components/empty-state';
import { MAKES, BODY_TYPES, FUEL_TYPES, TRANSMISSION_TYPES, VEHICLE_STATUSES } from '@/lib/constants';

export default function InventoryPage() {
  const [makeFilter, setMakeFilter] = useState('');
  const [bodyTypeFilter, setBodyTypeFilter] = useState('');
  const [fuelFilter, setFuelFilter] = useState('');
  const [transmissionFilter, setTransmissionFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [yearMin, setYearMin] = useState('');
  const [priceMax, setPriceMax] = useState('');
  const [mileageMax, setMileageMax] = useState('');

  const filtered = vehicles.filter((v) => {
    if (makeFilter && v.make !== makeFilter) return false;
    if (bodyTypeFilter && v.bodyType !== bodyTypeFilter) return false;
    if (fuelFilter && v.fuel !== fuelFilter) return false;
    if (transmissionFilter && v.transmission !== transmissionFilter) return false;
    if (statusFilter && v.status !== statusFilter) return false;
    if (yearMin && v.year < Number(yearMin)) return false;
    if (priceMax && v.price > Number(priceMax)) return false;
    if (mileageMax && v.mileage > Number(mileageMax)) return false;
    return true;
  });

  const clearFilters = () => {
    setMakeFilter('');
    setBodyTypeFilter('');
    setFuelFilter('');
    setTransmissionFilter('');
    setStatusFilter('');
    setYearMin('');
    setPriceMax('');
    setMileageMax('');
  };

  const hasFilters = makeFilter || bodyTypeFilter || fuelFilter || transmissionFilter || statusFilter || yearMin || priceMax || mileageMax;

  return (
    <div>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="font-serif-editorial tracking-editorial-tight text-3xl sm:text-4xl lg:text-5xl mb-4" style={{ color: '#F7F7F4', lineHeight: '1.1' }}>
              Vehicle inventory
            </h1>
            <p className="text-sm mb-8" style={{ color: '#9B9B96', lineHeight: '1.6' }}>
              Browse our available vehicles in Walvis Bay. Each listing shows the information we have. Contact us for more details or to arrange a viewing.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-8" style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xs uppercase tracking-widest" style={{ color: '#9B9B96' }}>Filters</h2>
              {hasFilters && (
                <button
                  className="text-xs font-mono"
                  style={{ color: '#F5B400' }}
                  onClick={clearFilters}
                >
                  Clear all
                </button>
              )}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
              <select
                value={makeFilter}
                onChange={(e) => setMakeFilter(e.target.value)}
                className="px-3 py-2 rounded text-xs"
                style={{ backgroundColor: '#181818', color: makeFilter ? '#F7F7F4' : '#9B9B96', border: '1px solid rgba(255,255,255,0.12)' }}
                aria-label="Filter by make"
              >
                <option value="">Any make</option>
                {MAKES.map((m) => <option key={m} value={m}>{m}</option>)}
              </select>

              <select
                value={bodyTypeFilter}
                onChange={(e) => setBodyTypeFilter(e.target.value)}
                className="px-3 py-2 rounded text-xs"
                style={{ backgroundColor: '#181818', color: bodyTypeFilter ? '#F7F7F4' : '#9B9B96', border: '1px solid rgba(255,255,255,0.12)' }}
                aria-label="Filter by body type"
              >
                <option value="">Any body</option>
                {BODY_TYPES.map((b) => <option key={b} value={b}>{b}</option>)}
              </select>

              <select
                value={fuelFilter}
                onChange={(e) => setFuelFilter(e.target.value)}
                className="px-3 py-2 rounded text-xs"
                style={{ backgroundColor: '#181818', color: fuelFilter ? '#F7F7F4' : '#9B9B96', border: '1px solid rgba(255,255,255,0.12)' }}
                aria-label="Filter by fuel type"
              >
                <option value="">Any fuel</option>
                {FUEL_TYPES.map((f) => <option key={f} value={f}>{f}</option>)}
              </select>

              <select
                value={transmissionFilter}
                onChange={(e) => setTransmissionFilter(e.target.value)}
                className="px-3 py-2 rounded text-xs"
                style={{ backgroundColor: '#181818', color: transmissionFilter ? '#F7F7F4' : '#9B9B96', border: '1px solid rgba(255,255,255,0.12)' }}
                aria-label="Filter by transmission"
              >
                <option value="">Any transmission</option>
                {TRANSMISSION_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 rounded text-xs"
                style={{ backgroundColor: '#181818', color: statusFilter ? '#F7F7F4' : '#9B9B96', border: '1px solid rgba(255,255,255,0.12)' }}
                aria-label="Filter by availability"
              >
                <option value="">Any status</option>
                {VEHICLE_STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>

              <input
                type="number"
                placeholder="Min year"
                value={yearMin}
                onChange={(e) => setYearMin(e.target.value)}
                className="px-3 py-2 rounded text-xs"
                style={{ backgroundColor: '#181818', color: '#9B9B96', border: '1px solid rgba(255,255,255,0.12)' }}
                aria-label="Minimum year"
              />

              <input
                type="number"
                placeholder="Max price"
                value={priceMax}
                onChange={(e) => setPriceMax(e.target.value)}
                className="px-3 py-2 rounded text-xs"
                style={{ backgroundColor: '#181818', color: '#9B9B96', border: '1px solid rgba(255,255,255,0.12)' }}
                aria-label="Maximum price"
              />

              <input
                type="number"
                placeholder="Max km"
                value={mileageMax}
                onChange={(e) => setMileageMax(e.target.value)}
                className="px-3 py-2 rounded text-xs"
                style={{ backgroundColor: '#181818', color: '#9B9B96', border: '1px solid rgba(255,255,255,0.12)' }}
                aria-label="Maximum mileage"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-mono mb-8" style={{ color: '#9B9B96' }}>
            {filtered.length} vehicles found
          </p>

          {filtered.length === 0 ? (
            <EmptyState
              title="No vehicles match your filters"
              description="Try adjusting your filter criteria or browse all available vehicles."
              actionLabel="View all inventory"
              actionHref="/inventory"
            />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((vehicle, index) => (
                <ScrollReveal key={vehicle.id} delay={index * 80}>
                  <VehicleCard vehicle={vehicle} />
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
