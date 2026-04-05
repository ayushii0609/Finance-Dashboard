import React from "react";
import { transactions } from "../data/transactions";
import Charts from "../components/Charts";

const Insights = () => {
  const safeTransactions = Array.isArray(transactions) ? transactions : [];

  const categoryTotals = safeTransactions.reduce((acc, t) => {
    if (t.type.toLowerCase() === "expense") {
      acc[t.category] = (acc[t.category] || 0) + Math.abs(t.amount);
    }
    return acc;
  }, {});

  const highestExpenseCategory = Object.keys(categoryTotals).reduce(
    (a, b) => (categoryTotals[a] > categoryTotals[b] ? a : b), 
    "N/A"
  );

  const totalIncome = safeTransactions
    .filter(t => t.type === "Income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = safeTransactions
    .filter(t => t.type === "Expense")
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold dark:text-white mb-4">Financial Insights</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-blue-50 dark:bg-gray-800 p-5 rounded-xl border-l-4 border-blue-500">
          <h3 className="font-bold text-blue-800 dark:text-blue-300">Highest Spending</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Most of your money goes to <span className="font-bold text-gray-800 dark:text-white">{highestExpenseCategory}</span>.
          </p>
        </div>
        <div className="bg-green-50 dark:bg-gray-800 p-5 rounded-xl border-l-4 border-green-500">
          <h3 className="font-bold text-green-800 dark:text-green-300">Savings Rate</h3>
          <p className="text-gray-600 dark:text-gray-400">
            You saved <span className="font-bold text-gray-800 dark:text-white">
              ₹{(totalIncome - totalExpense).toLocaleString()}
            </span> this period.
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border dark:border-gray-700">
        <Charts transactions={safeTransactions} />
      </div>
    </div>
  );
};

export default Insights;