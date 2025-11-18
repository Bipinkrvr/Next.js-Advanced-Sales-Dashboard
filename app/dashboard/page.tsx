import React from 'react';
import Heading from '@/components/atoms/Heading';
import InteractiveDashboard from '@/components/organisms/InteractiveDashboard';

// 1. IMPORT THE DATA DIRECTLY
// We get the data from the local file, not from the API
import { salesData, MonthlySales } from '@/data/mock-sales';

// 2. This page is NO LONGER ASYNC
export default function DashboardPage() {
  
  // 3. DEFINE DATA AND ERROR
  let data: MonthlySales[] = [];
  let error: string | null = null;

  try {
    // 4. GET THE DATA INSTANTLY
    // No 'await', no 'fetch'. This is instant and error-free.
    data = salesData;

    if (!data) {
      throw new Error('Mock data file is empty or missing.');
    }
  } catch (e: any) {
    // If something goes wrong
    console.error(e);
    error = e.message || 'Could not load data.';
  }

  // 5. RENDER THE PAGE
  return (
    <main className="flex min-h-screen flex-col items-center p-12 md:p-24">
      <Heading>Sales Dashboard</Heading>

      {error ? (
        <div className="rounded-md border border-red-400 bg-red-100 p-6 text-red-700 w-full max-w-6xl">
          <h2 className="text-xl font-bold">Error Loading Dashboard</h2>
          <p>{error}</p>
          <p className="mt-2 text-sm">
            Please try refreshing the page.
          </p>
        </div>
      ) : (
        /* We pass the directly-imported data as a prop */
        <InteractiveDashboard initialData={data} />
      )}
    </main>
  );
}