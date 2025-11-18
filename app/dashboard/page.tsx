import React from 'react';
import Heading from '@/components/atoms/Heading';
import InteractiveDashboard from '@/components/organisms/InteractiveDashboard';
import { MonthlySales } from '@/data/mock-sales';

// Helper function to fetch data from our new API
// We use { cache: 'no-store' } to make it dynamic, just like a real API
async function getSalesData(): Promise<MonthlySales[]> {
  // This URL is relative to the server, but for server components, 
  // it's best to use the absolute URL.
  // In a real app, this URL would be in an environment variable.
  const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000'}/api/sales`, {
    cache: 'no-store', 
  });

  if (!res.ok) {
    throw new Error('Failed to fetch sales data');
  }
  return res.json();
}

// This page is now an ASYNC Server Component
export default async function DashboardPage() {
  // 1. We fetch the data on the server
  const data = await getSalesData();

  return (
    <main className="flex min-h-screen flex-col items-center p-12 md:p-24">
      <Heading>Sales Dashboard</Heading>
      
      {/* 2. We pass the server-fetched data as a prop 
         to our main Client Component */}
      <InteractiveDashboard initialData={data} />
    </main>
  );
}