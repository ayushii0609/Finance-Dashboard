import React from "react";
import { transactions } from "../data/transactions";
import TransactionCard from "../components/TransactionCard";

const Dashboard = ({ role }) => {
  const safeTransactions = Array.isArray(transactions) ? transactions : [];

  const totals = safeTransactions.reduce((acc, t) => {
    const amt = Math.abs(t.amount || 0);
    if (t.type?.toLowerCase() === "income") acc.income += amt;
    else acc.expense += amt;
    return acc;
  }, { income: 0, expense: 0 });

  const balance = totals.income - totals.expense;

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold dark:text-white">Dashboard</h1>
          <p className="text-gray-500 dark:text-gray-400">Your financial status at a glance.</p>
        </div>
        
        {role === "Admin" && (
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl shadow-md transition-all">
            + Add Transaction
          </button>
        )}
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border dark:border-gray-700">
          <p className="text-gray-400 text-sm font-medium">Total Balance</p>
          <h2 className={`text-3xl font-bold mt-1 ${balance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            ₹{balance.toLocaleString()}
          </h2>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border dark:border-gray-700">
          <p className="text-gray-400 text-sm font-medium">Monthly Income</p>
          <h2 className="text-3xl font-bold text-green-500 mt-1">₹{totals.income.toLocaleString()}</h2>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border dark:border-gray-700">
          <p className="text-gray-400 text-sm font-medium">Total Expenses</p>
          <h2 className="text-3xl font-bold text-red-500 mt-1">₹{totals.expense.toLocaleString()}</h2>
        </div>
      </div>

      <section>
        <h3 className="text-xl font-bold mb-4 dark:text-white">Recent Activity</h3>
        <div className="space-y-3">
          {safeTransactions.slice(0, 5).map(item => (
            <TransactionCard key={item.id} {...item} role={role} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;