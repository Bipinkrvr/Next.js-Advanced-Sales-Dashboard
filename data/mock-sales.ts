// This interface defines the shape of our sales data
export interface MonthlySales {
  month: string;
  2022: number;
  2023: number;
  2024: number;
}

// A helper function to generate random sales numbers
const createRandomSales = () => Math.floor(Math.random() * 5000) + 1000;

// The exported mock data that our app will use
export const salesData: MonthlySales[] = [
  { month: 'Jan', 2022: createRandomSales(), 2023: createRandomSales(), 2024: createRandomSales() },
  { month: 'Feb', 2022: createRandomSales(), 2023: createRandomSales(), 2024: createRandomSales() },
  { month: 'Mar', 2022: createRandomSales(), 2023: createRandomSales(), 2024: createRandomSales() },
  { month: 'Apr', 2022: createRandomSales(), 2023: createRandomSales(), 2024: createRandomSales() },
  { month: 'May', 2022: createRandomSales(), 2023: createRandomSales(), 2024: createRandomSales() },
  { month: 'Jun', 2022: createRandomSales(), 2023: createRandomSales(), 2024: createRandomSales() },
  { month: 'Jul', 2022: createRandomSales(), 2023: createRandomSales(), 2024: createRandomSales() },
  { month: 'Aug', 2022: createRandomSales(), 2023: createRandomSales(), 2024: createRandomSales() },
  { month: 'Sep', 2022: createRandomSales(), 2023: createRandomSales(), 2024: createRandomSales() },
  { month: 'Oct', 2022: createRandomSales(), 2023: createRandomSales(), 2024: createRandomSales() },
  { month: 'Nov', 2022: createRandomSales(), 2023: createRandomSales(), 2024: createRandomSales() },
  { month: 'Dec', 2022: createRandomSales(), 2023: createRandomSales(), 2024: createRandomSales() },
];