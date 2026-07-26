export interface CatalogueEntry {
  id: string;
  slug: string;
  make: string;
  model: string;
  year: number;
  shape: string;
  priceNad: number;
  fulfilment: 'order_from_japan';
  primaryCta: string;
  images: string[];
  createdAt: string;
}

export const catalogue: CatalogueEntry[] = [
  { id: 'nissan-note-2014', slug: 'nissan-note-2014', make: 'Nissan', model: 'Note', year: 2014, shape: 'unspecified', priceNad: 68000, fulfilment: 'order_from_japan', primaryCta: 'Request this model', images: ['/vehicles/nissan-note-white.png', '/vehicles/nissan-note-silver.png'], createdAt: '2025-01-01' },
  { id: 'nissan-note-2016', slug: 'nissan-note-2016', make: 'Nissan', model: 'Note', year: 2016, shape: 'unspecified', priceNad: 68000, fulfilment: 'order_from_japan', primaryCta: 'Request this model', images: ['/vehicles/nissan-note-silver.png', '/vehicles/nissan-note-blue.png'], createdAt: '2025-01-01' },
  { id: 'nissan-note-2018', slug: 'nissan-note-2018', make: 'Nissan', model: 'Note', year: 2018, shape: 'unspecified', priceNad: 68000, fulfilment: 'order_from_japan', primaryCta: 'Request this model', images: ['/vehicles/nissan-note-white.png', '/vehicles/nissan-note-blue.png'], createdAt: '2025-01-01' },
  { id: 'honda-fit-2014-new-shape', slug: 'honda-fit-2014-new-shape', make: 'Honda', model: 'Fit', year: 2014, shape: 'new shape', priceNad: 85000, fulfilment: 'order_from_japan', primaryCta: 'Request this model', images: ['/vehicles/honda-fit-white.png', '/vehicles/honda-fit-silver.png'], createdAt: '2025-01-01' },
  { id: 'honda-fit-2016-new-shape', slug: 'honda-fit-2016-new-shape', make: 'Honda', model: 'Fit', year: 2016, shape: 'new shape', priceNad: 85000, fulfilment: 'order_from_japan', primaryCta: 'Request this model', images: ['/vehicles/honda-fit-white.png', '/vehicles/honda-fit-silver.png'], createdAt: '2025-01-01' },
  { id: 'honda-fit-2018-new-shape', slug: 'honda-fit-2018-new-shape', make: 'Honda', model: 'Fit', year: 2018, shape: 'new shape', priceNad: 85000, fulfilment: 'order_from_japan', primaryCta: 'Request this model', images: ['/vehicles/honda-fit-red.png', '/vehicles/honda-fit-silver.png'], createdAt: '2025-01-01' },
  { id: 'mazda-cx5-2014', slug: 'mazda-cx5-2014', make: 'Mazda', model: 'CX-5', year: 2014, shape: 'unspecified', priceNad: 145000, fulfilment: 'order_from_japan', primaryCta: 'Request this model', images: ['/vehicles/mazda-cx5-2014-black.png', '/vehicles/mazda-cx5-2015-white.png'], createdAt: '2025-01-01' },
  { id: 'mazda-cx3-2014', slug: 'mazda-cx3-2014', make: 'Mazda', model: 'CX-3', year: 2014, shape: 'unspecified', priceNad: 145000, fulfilment: 'order_from_japan', primaryCta: 'Request this model', images: ['/vehicles/mazda-cx3-white.png', '/vehicles/mazda-cx3-red.png'], createdAt: '2025-01-01' },
  { id: 'mazda-cx3-2016', slug: 'mazda-cx3-2016', make: 'Mazda', model: 'CX-3', year: 2016, shape: 'unspecified', priceNad: 145000, fulfilment: 'order_from_japan', primaryCta: 'Request this model', images: ['/vehicles/mazda-cx3-red.png', '/vehicles/mazda-cx3-white.png'], createdAt: '2025-01-01' },
  { id: 'mazda-cx5-2015', slug: 'mazda-cx5-2015', make: 'Mazda', model: 'CX-5', year: 2015, shape: 'unspecified', priceNad: 145000, fulfilment: 'order_from_japan', primaryCta: 'Request this model', images: ['/vehicles/mazda-cx5-2015-white.png', '/vehicles/mazda-cx5-2014-black.png'], createdAt: '2025-01-01' },
  { id: 'mazda-demio-2014-old-shape', slug: 'mazda-demio-2014-old-shape', make: 'Mazda', model: 'Demio', year: 2014, shape: 'old shape', priceNad: 70000, fulfilment: 'order_from_japan', primaryCta: 'Request this model', images: ['/vehicles/mazda-demio-silver.png', '/vehicles/mazda-demio-white.png'], createdAt: '2025-01-01' },
  { id: 'mazda-demio-2014-new-shape', slug: 'mazda-demio-2014-new-shape', make: 'Mazda', model: 'Demio', year: 2014, shape: 'new shape', priceNad: 70000, fulfilment: 'order_from_japan', primaryCta: 'Request this model', images: ['/vehicles/mazda-demio-white.png', '/vehicles/mazda-demio-silver.png'], createdAt: '2025-01-01' },
  { id: 'mazda-demio-2016-old-shape', slug: 'mazda-demio-2016-old-shape', make: 'Mazda', model: 'Demio', year: 2016, shape: 'old shape', priceNad: 70000, fulfilment: 'order_from_japan', primaryCta: 'Request this model', images: ['/vehicles/mazda-demio-silver.png', '/vehicles/mazda-demio-white.png'], createdAt: '2025-01-01' },
  { id: 'mazda-demio-2016-new-shape', slug: 'mazda-demio-2016-new-shape', make: 'Mazda', model: 'Demio', year: 2016, shape: 'new shape', priceNad: 70000, fulfilment: 'order_from_japan', primaryCta: 'Request this model', images: ['/vehicles/mazda-demio-white.png', '/vehicles/mazda-demio-silver.png'], createdAt: '2025-01-01' },
  { id: 'volkswagen-polo-6-tsi-2014-old-shape', slug: 'volkswagen-polo-6-tsi-2014-old-shape', make: 'Volkswagen', model: 'Polo 6 TSI', year: 2014, shape: 'old shape', priceNad: 120000, fulfilment: 'order_from_japan', primaryCta: 'Request this model', images: ['/vehicles/vw-polo-white.png', '/vehicles/vw-polo-blue.png'], createdAt: '2025-01-01' },
  { id: 'volkswagen-polo-6-tsi-2016-new-shape', slug: 'volkswagen-polo-6-tsi-2016-new-shape', make: 'Volkswagen', model: 'Polo 6 TSI', year: 2016, shape: 'new shape', priceNad: 120000, fulfilment: 'order_from_japan', primaryCta: 'Request this model', images: ['/vehicles/vw-polo-white.png', '/vehicles/vw-polo-blue.png'], createdAt: '2025-01-01' },
  { id: 'volkswagen-polo-6-tsi-2018-new-shape', slug: 'volkswagen-polo-6-tsi-2018-new-shape', make: 'Volkswagen', model: 'Polo 6 TSI', year: 2018, shape: 'new shape', priceNad: 120000, fulfilment: 'order_from_japan', primaryCta: 'Request this model', images: ['/vehicles/vw-polo-blue.png', '/vehicles/vw-polo-white.png'], createdAt: '2025-01-01' },
  { id: 'volkswagen-polo-6-tsi-2020-new-shape', slug: 'volkswagen-polo-6-tsi-2020-new-shape', make: 'Volkswagen', model: 'Polo 6 TSI', year: 2020, shape: 'new shape', priceNad: 120000, fulfilment: 'order_from_japan', primaryCta: 'Request this model', images: ['/vehicles/vw-polo-white.png', '/vehicles/vw-polo-blue.png'], createdAt: '2025-01-01' },
  { id: 'volkswagen-golf-7-2014', slug: 'volkswagen-golf-7-2014', make: 'Volkswagen', model: 'Golf 7', year: 2014, shape: 'unspecified', priceNad: 125000, fulfilment: 'order_from_japan', primaryCta: 'Request this model', images: ['/vehicles/vw-golf7-white.png', '/vehicles/vw-golf7-silver.png'], createdAt: '2025-01-01' },
  { id: 'volkswagen-golf-7-2016', slug: 'volkswagen-golf-7-2016', make: 'Volkswagen', model: 'Golf 7', year: 2016, shape: 'unspecified', priceNad: 125000, fulfilment: 'order_from_japan', primaryCta: 'Request this model', images: ['/vehicles/vw-golf7-silver.png', '/vehicles/vw-golf7-white.png'], createdAt: '2025-01-01' },
  { id: 'volkswagen-tiguan-2014', slug: 'volkswagen-tiguan-2014', make: 'Volkswagen', model: 'Tiguan', year: 2014, shape: 'unspecified', priceNad: 150000, fulfilment: 'order_from_japan', primaryCta: 'Request this model', images: ['/vehicles/vw-tiguan-silver.png', '/vehicles/vw-tiguan-black.png'], createdAt: '2025-01-01' },
  { id: 'volkswagen-tiguan-2016', slug: 'volkswagen-tiguan-2016', make: 'Volkswagen', model: 'Tiguan', year: 2016, shape: 'unspecified', priceNad: 150000, fulfilment: 'order_from_japan', primaryCta: 'Request this model', images: ['/vehicles/vw-tiguan-black.png', '/vehicles/vw-tiguan-silver.png'], createdAt: '2025-01-01' },
  // NEW: Audi A6 at NAD 155,000
  { id: 'audi-a6-2015', slug: 'audi-a6-2015', make: 'Audi', model: 'A6', year: 2015, shape: 'unspecified', priceNad: 155000, fulfilment: 'order_from_japan', primaryCta: 'Request this model', images: ['/vehicles/audi-a6-2015-black.png', '/vehicles/audi-a6-2015-silver.png'], createdAt: '2025-01-01' },
];

export function getCatalogueBySlug(slug: string): CatalogueEntry | undefined {
  return catalogue.find(v => v.slug === slug);
}

export function getCatalogueByMake(make: string): CatalogueEntry[] {
  return catalogue.filter(v => v.make === make);
}

export function getUniqueMakes(): string[] {
  return [...new Set(catalogue.map(v => v.make))];
}

export function getUniqueModels(): string[] {
  return [...new Set(catalogue.map(v => `${v.make} ${v.model}`))];
}

export function formatPriceNad(n: number): string {
  return `N$${new Intl.NumberFormat('en-NA').format(n)}`;
}

export function getWhatsAppEnquireUrl(entry: CatalogueEntry): string {
  const msg = encodeURIComponent(
    `Hi Shoondili, I'd like to request the ${entry.make} ${entry.model} ${entry.year} (starting from ${formatPriceNad(entry.priceNad)}). Can you provide more details?`
  );
  return `https://wa.me/264812486557?text=${msg}`;
}

/* ─── Legacy compatibility — VehicleData interface kept for gradual migration ─── */
export interface VehicleData {
  id: string;
  slug: string;
  make: string;
  model: string;
  variant: string | null;
  year: number;
  fuel: string;
  transmission: string;
  mileage: number;
  bodyType: string;
  colour: string | null;
  price: number;
  monthlyEstimate: number | null;
  status: 'Available' | 'Reserved' | 'Sold' | 'Unavailable';
  features: string[];
  importInfo: {
    sourcedFrom: string;
    auctionHouse: string | null;
    arrivalDate: string | null;
  } | null;
  vehicleHistory: {
    previousOwners: number | null;
    serviceRecords: boolean | null;
    accidentHistory: string | null;
  } | null;
  images: string[];
  createdAt: string;
}

export const vehicles: VehicleData[] = [];

export function getVehicleBySlug(slug: string): VehicleData | undefined {
  return undefined;
}

export function getAvailableVehicles(): VehicleData[] {
  return [];
}

export function getFeaturedVehicles(): VehicleData[] {
  return [];
}

export function getRelatedVehicles(vehicle: VehicleData): VehicleData[] {
  return [];
}
