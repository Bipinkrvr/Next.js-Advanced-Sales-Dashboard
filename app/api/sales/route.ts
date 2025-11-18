import { salesData } from '@/data/mock-sales';
import { NextResponse } from 'next/server';

// This function handles GET requests to /api/sales
export async function GET(request: Request) {

  return NextResponse.json(salesData);
}