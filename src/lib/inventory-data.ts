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

export const vehicles: VehicleData[] = [
  {
    id: 'v1',
    slug: 'toyota-land-cruiser-200-2018',
    make: 'Toyota',
    model: 'Land Cruiser 200',
    variant: 'GX',
    year: 2018,
    fuel: 'Diesel',
    transmission: 'Automatic',
    mileage: 87000,
    bodyType: 'SUV',
    colour: 'White',
    price: 450000,
    monthlyEstimate: 8500,
    status: 'Available',
    features: ['4.5L V8 Twin Turbo', 'Full-time 4WD', 'Crawl Control', 'Multi-Terrain Select', 'Kinetic Dynamic Suspension', '9 Speaker Audio', '8 Seat Configuration', 'LED Headlights'],
    importInfo: {
      sourcedFrom: 'Japan',
      auctionHouse: null,
      arrivalDate: null,
    },
    vehicleHistory: {
      previousOwners: null,
      serviceRecords: null,
      accidentHistory: null,
    },
    images: [],
    createdAt: '2025-01-15',
  },
  {
    id: 'v2',
    slug: 'toyota-hilux-2020',
    make: 'Toyota',
    model: 'Hilux',
    variant: '2.8 GD-6 Double Cab',
    year: 2020,
    fuel: 'Diesel',
    transmission: 'Automatic',
    mileage: 45000,
    bodyType: 'Pickup',
    colour: 'Silver',
    price: 320000,
    monthlyEstimate: 6200,
    status: 'Available',
    features: ['2.8L Turbo Diesel', '6 Speed Automatic', 'Rear Diff Lock', 'Cruise Control', 'Bluetooth', 'USB Audio', 'Side Steps', 'Tow Bar'],
    importInfo: null,
    vehicleHistory: null,
    images: [],
    createdAt: '2025-02-10',
  },
  {
    id: 'v3',
    slug: 'nissan-patrol-2019',
    make: 'Nissan',
    model: 'Patrol',
    variant: '5.6 V8',
    year: 2019,
    fuel: 'Petrol',
    transmission: 'Automatic',
    mileage: 62000,
    bodyType: 'SUV',
    colour: 'Black',
    price: 380000,
    monthlyEstimate: 7200,
    status: 'Available',
    features: ['5.6L V8', '7 Speed Automatic', 'All-Mode 4WD', 'Hill Descent Control', 'Hill Start Assist', 'Around View Monitor', 'Bose Audio', 'Leather Seats'],
    importInfo: {
      sourcedFrom: 'Japan',
      auctionHouse: null,
      arrivalDate: null,
    },
    vehicleHistory: null,
    images: [],
    createdAt: '2025-01-20',
  },
  {
    id: 'v4',
    slug: 'honda-crv-2021',
    make: 'Honda',
    model: 'CR-V',
    variant: '1.5 Turbo',
    year: 2021,
    fuel: 'Petrol',
    transmission: 'Automatic',
    mileage: 32000,
    bodyType: 'SUV',
    colour: 'Blue',
    price: 260000,
    monthlyEstimate: 5000,
    status: 'Available',
    features: ['1.5L Turbo', 'CVT Transmission', 'AWD', 'Honda Sensing', 'Adaptive Cruise Control', 'Lane Keep Assist', 'Collision Mitigation', 'Remote Start'],
    importInfo: {
      sourcedFrom: 'Japan',
      auctionHouse: null,
      arrivalDate: null,
    },
    vehicleHistory: null,
    images: [],
    createdAt: '2025-03-01',
  },
  {
    id: 'v5',
    slug: 'vw-golf-7-gti-2018',
    make: 'Volkswagen',
    model: 'Golf 7 GTI',
    variant: 'Performance Pack',
    year: 2018,
    fuel: 'Petrol',
    transmission: 'Automatic',
    mileage: 78000,
    bodyType: 'Hatchback',
    colour: 'White',
    price: 210000,
    monthlyEstimate: 4200,
    status: 'Reserved',
    features: ['2.0L Turbo', '7 Speed DSG', 'Performance Pack', 'Limited Slip Diff', 'Discover Pro Navigation', 'LED Tail Lights', 'Vienna Leather', 'Keyless Access'],
    importInfo: null,
    vehicleHistory: null,
    images: [],
    createdAt: '2025-02-15',
  },
  {
    id: 'v6',
    slug: 'mazda-cx-5-2020',
    make: 'Mazda',
    model: 'CX-5',
    variant: '2.0 Individual',
    year: 2020,
    fuel: 'Petrol',
    transmission: 'Automatic',
    mileage: 55000,
    bodyType: 'SUV',
    colour: 'Red',
    price: 240000,
    monthlyEstimate: 4700,
    status: 'Available',
    features: ['2.0L SkyActiv', '6 Speed Automatic', 'AWD', 'i-Activsense Safety', 'BOSE Audio', 'Leather Seats', 'Heated Seats', 'Head-Up Display'],
    importInfo: {
      sourcedFrom: 'Japan',
      auctionHouse: null,
      arrivalDate: null,
    },
    vehicleHistory: null,
    images: [],
    createdAt: '2025-03-10',
  },
  {
    id: 'v7',
    slug: 'subaru-outback-2022',
    make: 'Subaru',
    model: 'Outback',
    variant: '2.5i Premium',
    year: 2022,
    fuel: 'Petrol',
    transmission: 'Automatic',
    mileage: 18000,
    bodyType: 'Wagon',
    colour: 'Grey',
    price: 290000,
    monthlyEstimate: 5600,
    status: 'Available',
    features: ['2.5L Boxer', 'Lineartronic CVT', 'Symmetrical AWD', 'X-Mode', 'EyeSight Driver Assist', 'Starlink 8" Display', 'Harman Kardon Audio', 'Power Tailgate'],
    importInfo: {
      sourcedFrom: 'Japan',
      auctionHouse: null,
      arrivalDate: null,
    },
    vehicleHistory: null,
    images: [],
    createdAt: '2025-04-01',
  },
  {
    id: 'v8',
    slug: 'isuzu-d-max-2021',
    make: 'Isuzu',
    model: 'D-Max',
    variant: '3.0 LS Double Cab',
    year: 2021,
    fuel: 'Diesel',
    transmission: 'Manual',
    mileage: 48000,
    bodyType: 'Pickup',
    colour: 'White',
    price: 280000,
    monthlyEstimate: 5400,
    status: 'Available',
    features: ['3.0L Turbo Diesel', '6 Speed Manual', 'Rear Diff Lock', 'Hill Descent Control', 'Tow Bar', 'Side Steps', 'Roll Bar', 'Multi-Info Display'],
    importInfo: null,
    vehicleHistory: null,
    images: [],
    createdAt: '2025-02-20',
  },
  {
    id: 'v9',
    slug: 'mercedes-benz-c-class-2019',
    make: 'Mercedes-Benz',
    model: 'C-Class',
    variant: 'C200',
    year: 2019,
    fuel: 'Petrol',
    transmission: 'Automatic',
    mileage: 68000,
    bodyType: 'Sedan',
    colour: 'Black',
    price: 340000,
    monthlyEstimate: 6500,
    status: 'Sold',
    features: ['1.5L Turbo + EQ Boost', '9G-Tronic', 'MBUX Infotainment', 'Digital Cockpit', 'Active Brake Assist', 'Attention Assist', 'LED Headlights', 'Ambient Lighting'],
    importInfo: null,
    vehicleHistory: null,
    images: [],
    createdAt: '2025-01-05',
  },
  {
    id: 'v10',
    slug: 'toyota-corolla-2023',
    make: 'Toyota',
    model: 'Corolla',
    variant: '1.2 Turbo Cross',
    year: 2023,
    fuel: 'Petrol',
    transmission: 'Automatic',
    mileage: 12000,
    bodyType: 'SUV',
    colour: 'Grey',
    price: 220000,
    monthlyEstimate: 4300,
    status: 'Available',
    features: ['1.2L Turbo', 'CVT Transmission', 'Toyota Safety Sense', 'Adaptive Cruise Control', 'Lane Trace Assist', 'Pre-Collision System', '8" Display Audio', 'Smart Key'],
    importInfo: {
      sourcedFrom: 'Japan',
      auctionHouse: null,
      arrivalDate: null,
    },
    vehicleHistory: null,
    images: [],
    createdAt: '2025-04-15',
  },
  {
    id: 'v11',
    slug: 'suzuki-swift-2022',
    make: 'Suzuki',
    model: 'Swift',
    variant: '1.2 GLX',
    year: 2022,
    fuel: 'Petrol',
    transmission: 'Manual',
    mileage: 25000,
    bodyType: 'Hatchback',
    colour: 'Yellow',
    price: 160000,
    monthlyEstimate: 3200,
    status: 'Available',
    features: ['1.2L Engine', '5 Speed Manual', 'Apple CarPlay', 'Android Auto', 'LED Headlights', 'Rear Camera', 'Keyless Start', 'Cruise Control'],
    importInfo: null,
    vehicleHistory: null,
    images: [],
    createdAt: '2025-03-20',
  },
  {
    id: 'v12',
    slug: 'mitsubishi-pajero-2017',
    make: 'Mitsubishi',
    model: 'Pajero',
    variant: '3.2 DI-D',
    year: 2017,
    fuel: 'Diesel',
    transmission: 'Automatic',
    mileage: 95000,
    bodyType: 'SUV',
    colour: 'White',
    price: 200000,
    monthlyEstimate: 3900,
    status: 'Unavailable',
    features: ['3.2L Turbo Diesel', '5 Speed Automatic', 'Super Select 4WD', 'Rear Diff Lock', 'Stability Control', 'Hill Descent Control', 'Rockford Fosgate Audio', '7 Seats'],
    importInfo: null,
    vehicleHistory: null,
    images: [],
    createdAt: '2024-12-10',
  },
];

export function getVehicleBySlug(slug: string): VehicleData | undefined {
  return vehicles.find(v => v.slug === slug);
}

export function getAvailableVehicles(): VehicleData[] {
  return vehicles.filter(v => v.status === 'Available');
}

export function getFeaturedVehicles(): VehicleData[] {
  return vehicles.filter(v => v.status === 'Available').slice(0, 4);
}

export function getRelatedVehicles(vehicle: VehicleData): VehicleData[] {
  return vehicles
    .filter(v => v.id !== vehicle.id && v.status === 'Available' && (v.make === vehicle.make || v.bodyType === vehicle.bodyType))
    .slice(0, 3);
}
