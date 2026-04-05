import React, { useState } from "react";
import { transactions } from "../data/transactions";
import TransactionCard from "../components/TransactionCard";

const Transactions = ({ role }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");

  const filteredData = transactions.filter((t) => {
    const matchesSearch = t.category.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          t.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === "All" || t.type === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold dark:text-white">All Transactions</h1>
        
        <div className="flex gap-2 w-full md:w-auto">
          <input 
            type="text" 
            placeholder="Search..." 
            className="p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white flex-1"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select 
            className="p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {filteredData.length > 0 ? (
          filteredData.map(item => (
            <TransactionCard key={item.id} {...item} role={role} />
          ))
        ) : (
          <div className="text-center p-10 bg-white dark:bg-gray-800 rounded-lg text-gray-500">
            No transactions found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
};

export default Transactions;