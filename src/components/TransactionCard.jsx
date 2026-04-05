import React from "react";

const TransactionCard = ({ date, amount, category, type, description, role }) => {
  const isIncome = type?.toLowerCase() === "income";

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 
                    flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 
                    hover:shadow-md transition-all w-full">
      
      <div className="flex items-center gap-4 w-full sm:w-auto">
        <div className={`shrink-0 p-3 rounded-full ${isIncome ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
          {isIncome ? '↑' : '↓'}
        </div>
        <div className="min-w-0">
          <h3 className="text-lg font-bold dark:text-white truncate">{category}</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm truncate">{description}</p>
          <p className="text-gray-400 text-xs mt-1">{date}</p>
        </div>
      </div>

      <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0 border-gray-100 dark:border-gray-700">
        <h2 className={`text-xl font-black ${isIncome ? "text-green-600" : "text-red-600"}`}>
          {isIncome ? "+" : "-"} ₹{amount.toLocaleString()}
        </h2>
        
        {role === "Admin" && (
          <div className="flex gap-1">
            <button className="text-xs font-bold text-blue-500 hover:bg-blue-50 dark:hover:bg-gray-700 px-2 py-1 rounded border border-blue-200 dark:border-gray-600 transition">
              Edit
            </button>
            <button className="text-xs font-bold text-red-500 hover:bg-red-50 dark:hover:bg-gray-700 px-2 py-1 rounded border border-red-200 dark:border-gray-600 transition">
              Del
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionCard;