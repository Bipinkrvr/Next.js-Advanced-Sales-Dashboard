"use client"; // This is the main Client Component

import React, { useState, useMemo } from 'react';
import { MonthlySales } from '@/data/mock-sales';
import SalesChart from '@/components/organisms/SalesChart';
import Card from '@/components/atoms/Card';
import FilterInput from '@/components/molecules/FilterInput';
import ChartTypeToggle, {
  ChartType,
} from '@/components/molecules/ChartTypeToggle';

interface InteractiveDashboardProps {
  // We'll receive the initial data from the Server Component
  initialData: MonthlySales[];
}

const InteractiveDashboard: React.FC<InteractiveDashboardProps> = ({
  initialData,
}) => {
  // State for the chart type
  const [chartType, setChartType] = useState<ChartType>('bar');
  // State for the sales threshold
  const [threshold, setThreshold] = useState(0);

  // Memoize the filtered data. This recalculates ONLY when
  // initialData or threshold changes.
  const filteredData = useMemo(() => {
    // If threshold is 0, just return the data as-is
    if (threshold === 0) return initialData;

    // Otherwise, filter the data
    return initialData.map((month) => ({
      ...month,
      2022: month[2022] >= threshold ? month[2022] : 0,
      2023: month[2023] >= threshold ? month[2023] : 0,
      2024: month[2024] >= threshold ? month[2024] : 0,
    }));
  }, [initialData, threshold]);

  return (
    <div className="w-full max-w-6xl">
      {/* 1. The Controls */}
      <Card className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FilterInput
            threshold={threshold}
            onThresholdChange={setThreshold}
          />
          <ChartTypeToggle
            activeType={chartType}
            onTypeChange={setChartType}
          />
        </div>
      </Card>

      {/* 2. The Chart */}
      <Card>
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
          Yearly Sales Overview (2022-2024)
        </h2>
        <SalesChart data={filteredData} chartType={chartType} />
      </Card>
    </div>
  );
};

export default InteractiveDashboard;