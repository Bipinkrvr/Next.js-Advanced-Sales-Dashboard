import React from 'react';
import Heading from '@/components/atoms/Heading';
import InteractiveDashboard from '@/components/organisms/InteractiveDashboard';
import { MonthlySales } from '@/data/mock-sales';

// Helper function to fetch data from our new API
async function getSalesData(): Promise<MonthlySales[]> {
  // Use a relative URL. Next.js will handle this fetch server-side.
  const res = await fetch('/api/sales', {
    cache: 'no-store', // Keep it dynamic
  });

  if (!res.ok) {
    // This will be caught by the try...catch block below
    throw new Error('Failed to fetch sales data from /api/sales');
  }
  return res.json();
}

// This page is now an ASYNC Server Component
export default async function DashboardPage() {
  // 1. We fetch the data on the server
  let data: MonthlySales[] = [];
  let error: string | null = null;

  try {
    // Attempt to get the data
    data = await getSalesData();
  } catch (e: any) {
    // If fetching fails, log the error and set an error message
    console.error(e);
    error = e.message || 'Could not load data.';
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-12 md:p-24">
      <Heading>Sales Dashboard</Heading>

      {/* Add an error boundary in case fetching fails */}
      {error ? (
        <div className="rounded-md border border-red-400 bg-red-100 p-6 text-red-700 w-full max-w-6xl">
          <h2 className="text-xl font-bold">Error Loading Dashboard</h2>
          <p>{error}</p>
          <p className="mt-2 text-sm">
            Please try refreshing the page.
          </p>
        </div>
      ) : (
        /* 2. If successful, pass the server-fetched data as a prop 
           to our main Client Component */
        <InteractiveDashboard initialData={data} />
      )}
    </main>
  );
}