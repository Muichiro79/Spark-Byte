import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import { FaBars } from 'react-icons/fa'; // Hamburger icon

type HomePageProps = {
  children?: React.ReactNode;
};

export const HomePage = ({ children }: HomePageProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex w-full bg-white dark:bg-slate-900 relative">
      
      {/* Hamburger Button */}
      {isMobile && (
        <button 
          onClick={toggleSidebar} 
          className="fixed top-4 left-4 z-50 bg-slate-200 dark:bg-slate-700 p-2 rounded-md shadow-md"
        >
          <FaBars className="text-2xl text-slate-700 dark:text-white" />
        </button>
      )}

      {/* Sidebar */}
      {(isSidebarOpen || !isMobile) && (
        <div 
          className={`${isMobile ? "fixed top-90 left-0 w-20 h-96 rounded-2xl transform -translate-y-1/2 z-50" : "w-64 fixed top-0 left-0 h-screen"} transition-all duration-300 shadow-lg`}
        >
          <Sidebar />
        </div>
      )}

      {/* Main Content */}
      <div className={`transition-all duration-300 ${isMobile ? "w-full" : "ml-64 sm:ml-48 md:ml-64 w-full"} p-8 min-h-screen overflow-x-hidden`}>
        {children}
      </div>
    </div>
  );
};

export default HomePage;
