"use client"; // This remains a Client Component

import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from 'recharts';
import { MonthlySales } from '@/data/mock-sales';
import { ChartType } from '@/components/molecules/ChartTypeToggle';

interface SalesChartProps {
  data: MonthlySales[];
  chartType: ChartType;
}

// Colors for Pie Chart
const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

const SalesChart: React.FC<SalesChartProps> = ({ data, chartType }) => {
  // --- Render Pie Chart ---
  if (chartType === 'pie') {
    // Calculate totals for each year
    const total2022 = data.reduce((acc, cur) => acc + cur[2022], 0);
    const total2023 = data.reduce((acc, cur) => acc + cur[2023], 0);
    const total2024 = data.reduce((acc, cur) => acc + cur[2024], 0);

    const pieData = [
      { name: '2022 Sales', value: total2022 },
      { name: '2023 Sales', value: total2023 },
      { name: '2024 Sales', value: total2024 },
    ];

    return (
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) =>
              // --- THIS IS THE FIX ---
              // We provide a default value (0) for 'percent'
              // in case it's undefined.
              `${name} (${((percent || 0) * 100).toFixed(0)}%)`
            }
          >
            {pieData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(23, 23, 23, 0.8)',
              borderColor: '#555',
              borderRadius: '8px',
            }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    );
  }

  // --- Render Line Chart ---
  if (chartType === 'line') {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(23, 23, 23, 0.8)',
              borderColor: '#555',
              borderRadius: '8px',
            }}
            labelStyle={{ color: '#fff' }}
          />
          <Legend />
          <Line type="monotone" dataKey="2022" stroke="#8884d8" strokeWidth={2} />
          <Line type="monotone" dataKey="2023" stroke="#82ca9d" strokeWidth={2} />
          <Line type="monotone" dataKey="2024" stroke="#ffc658" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    );
  }

  // --- Render Bar Chart (Default) ---
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip
          contentStyle={{
            backgroundColor: 'rgba(23, 23, 23, 0.8)',
            borderColor: '#555',
            borderRadius: '8px',
          }}
          labelStyle={{ color: '#fff' }}
        />
        <Legend />
        <Bar dataKey="2022" fill="#8884d8" radius={[4, 4, 0, 0]} />
        <Bar dataKey="2023" fill="#82ca9d" radius={[4, 4, 0, 0]} />
        <Bar dataKey="2024" fill="#ffc658" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SalesChart;