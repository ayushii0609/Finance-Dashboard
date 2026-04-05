import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Insights from "./pages/Insights";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [role, setRole] = useState("Viewer");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <BrowserRouter>
      <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
        
        <Sidebar 
          role={role} 
          isOpen={isSidebarOpen} 
          setIsOpen={setIsSidebarOpen} 
        />
        
        <div className="flex-1 flex flex-col min-w-0 w-full">
          <Navbar 
            darkMode={darkMode} 
            setDarkMode={setDarkMode} 
            role={role} 
            setRole={setRole}
            toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          />

          <main className="p-4 md:p-8 lg:p-12 w-full overflow-x-hidden">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard role={role} />} />
              <Route path="/transactions" element={<Transactions role={role} />} />
              
              <Route 
                path="/insights" 
                element={role === "Admin" ? <Insights /> : <Navigate to="/dashboard" />} 
              />
              <Route path="*" element={<Navigate to="/dashboard" />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;