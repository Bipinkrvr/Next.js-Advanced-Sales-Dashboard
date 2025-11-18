"use client"; // This component handles clicks

import React from 'react';

// Define the available chart types
export type ChartType = 'bar' | 'line' | 'pie';
const chartTypes: ChartType[] = ['bar', 'line', 'pie'];

interface ChartTypeToggleProps {
  activeType: ChartType;
  onTypeChange: (type: ChartType) => void;
}

const ChartTypeToggle: React.FC<ChartTypeToggleProps> = ({
  activeType,
  onTypeChange,
}) => {
  return (
    <div>
      <span className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        Chart Type
      </span>
      <div className="flex space-x-2 rounded-md" role="group">
        {chartTypes.map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => onTypeChange(type)}
            className={`px-4 py-2 text-sm font-medium rounded-lg capitalize
              ${
                activeType === type
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600'
              }
            `}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChartTypeToggle;