"use client"; // This component has state

import React from 'react';

interface FilterInputProps {
  threshold: number;
  onThresholdChange: (value: number) => void;
}

const FilterInput: React.FC<FilterInputProps> = ({
  threshold,
  onThresholdChange,
}) => {
  return (
    <div>
      <label
        htmlFor="threshold"
        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        Sales Threshold
      </label>
      <input
        type="number"
        id="threshold"
        value={threshold}
        onChange={(e) => onThresholdChange(Number(e.target.value) || 0)}
        className="mt-1 block w-full rounded-md border-gray-300 bg-white dark:bg-gray-700 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
        placeholder="e.g., 1000"
      />
      <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
        Show sales values above this amount.
      </p>
    </div>
  );
};

export default FilterInput;