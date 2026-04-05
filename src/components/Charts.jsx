import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const Charts = ({ transactions }) => {
  const chartData = {
    labels: transactions.map(item => item.category),
    datasets: [
      {
        label: "Transaction Amount (₹)",
        data: transactions.map(item => item.amount),
        backgroundColor: transactions.map(item =>
          item.type.toLowerCase() === "income" ? "#22c55e" : "#ef4444"
        ),
        borderRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#1e293b',
        padding: 12,
      }
    },
    scales: {
      y: { beginAtZero: true, grid: { display: false } },
      x: { grid: { display: false } }
    }
  };

  return (
    <div className="h-80 w-full">
      <h2 className="text-lg font-semibold mb-4 dark:text-white text-center">Spending vs Income Breakdown</h2>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default Charts;