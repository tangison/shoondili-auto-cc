import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, phone, message, type, vehicleId } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const enquiry = await db.enquiry.create({
      data: {
        name,
        email,
        phone: phone || null,
        message,
        type: type || 'general',
        vehicleId: vehicleId || null,
      },
    });

    return NextResponse.json({ success: true, enquiry }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: 'Failed to submit enquiry. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const enquiries = await db.enquiry.findMany({
      orderBy: { createdAt: 'desc' },
      take: 20,
    });
    return NextResponse.json({ enquiries });
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch enquiries.' },
      { status: 500 }
    );
  }
}
