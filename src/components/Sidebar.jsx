import React from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar({ role, isOpen, setIsOpen }) {
  const location = useLocation();
  
  const links = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Transactions", path: "/transactions" },
    ...(role === "Admin" ? [{ name: "Insights", path: "/insights" }] : []),
  ];

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden" 
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside className={`
        fixed md:sticky top-0 left-0 z-50
        h-screen w-64 bg-gray-800 text-white 
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 shadow-xl
      `}>
        <div className="p-6 border-b border-gray-700 flex justify-between items-center">
          <span className="text-sm font-bold tracking-widest text-gray-400">MENU</span>
          <button onClick={() => setIsOpen(false)} className="md:hidden text-white text-xl">×</button>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg transition-all ${
                location.pathname === link.path 
                ? "bg-blue-600 text-white font-semibold shadow-md" 
                : "text-gray-400 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;