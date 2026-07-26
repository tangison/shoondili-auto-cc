import { NextResponse } from 'next/server';
import { vehicles } from '@/lib/inventory-data';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const make = searchParams.get('make');
    const bodyType = searchParams.get('bodyType');
    const fuel = searchParams.get('fuel');
    const transmission = searchParams.get('transmission');
    const status = searchParams.get('status');
    const yearMin = searchParams.get('yearMin');
    const priceMax = searchParams.get('priceMax');
    const mileageMax = searchParams.get('mileageMax');

    const filtered = vehicles.filter((v) => {
      if (make && v.make !== make) return false;
      if (bodyType && v.bodyType !== bodyType) return false;
      if (fuel && v.fuel !== fuel) return false;
      if (transmission && v.transmission !== transmission) return false;
      if (status && v.status !== status) return false;
      if (yearMin && v.year < Number(yearMin)) return false;
      if (priceMax && v.price > Number(priceMax)) return false;
      if (mileageMax && v.mileage > Number(mileageMax)) return false;
      return true;
    });

    return NextResponse.json({ vehicles: filtered, total: filtered.length });
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch inventory.' },
      { status: 500 }
    );
  }
}
