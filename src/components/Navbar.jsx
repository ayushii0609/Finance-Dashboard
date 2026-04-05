import React from "react";

const Navbar = ({ darkMode, setDarkMode, role, setRole, toggleSidebar }) => {
  return (
    <nav className="flex justify-between items-center px-4 py-3 bg-white dark:bg-gray-800 border-b dark:border-gray-700 shadow-sm transition-colors">
      
      <button onClick={toggleSidebar} className="p-2 md:hidden text-gray-600 dark:text-gray-300 text-2xl">
        ☰
      </button>

      <h1 className="hidden sm:block text-lg font-bold text-gray-800 dark:text-white">Finance Dashboard</h1>

      <div className="flex items-center gap-2 md:gap-4">
        <button 
          onClick={() => setDarkMode(!darkMode)} 
          className="p-2 text-sm rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white border dark:border-gray-600"
        >
          {darkMode ? "☀️" : "🌙 "}
        </button>

        <button 
          onClick={() => setRole(role === "Viewer" ? "Admin" : "Viewer")}
          className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all shadow-sm ${
            role === "Admin" ? "bg-purple-600 text-white" : "bg-blue-600 text-white"
          }`}
        >
          {role}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;