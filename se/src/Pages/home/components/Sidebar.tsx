import { useState, useEffect } from "react";
import { FaHome, FaLightbulb, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  const [isShrunk, setIsShrunk] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect Mobile Size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 780);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Shrink on scroll (only if not mobile)
  useEffect(() => {
    const handleScroll = () => {
      if (!isMobile) {
        if (window.scrollY > 50) {
          setIsShrunk(true);
        } else {
          setIsShrunk(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  // Show text on hover (desktop) or tap (mobile)
  const showText = (isMobile && isHovered) || (!isShrunk && !isMobile) || (isHovered && !isMobile);

  const isCurrentlyShrunk = isShrunk || isMobile;

  return (
    <div
      className={`fixed top-0 left-0 transition-all duration-500 ease-in-out
      ${isMobile ? "w-20  bg-white dark:bg-slate-950 rounded-2xl h-80" : isCurrentlyShrunk ? "w-20 h-96 rounded-2xl bg-white dark:bg-slate-950 hover:w-64" : "w-64 h-screen rounded-none bg-white dark:bg-slate-900"} 
      shadow-lg flex flex-col justify-between p-6 z-50`}
      style={{
        top: isCurrentlyShrunk ? "50%" : "0",
        transform: isCurrentlyShrunk ? "translateY(-50%)" : "none",
      }}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      onTouchStart={() => isMobile && setIsHovered(true)}  // Show text on tap
      onTouchEnd={() => isMobile && setIsHovered(false)}    // Hide text after tap
    >
      {/* Top Logo */}
      <div
        className={`flex items-center gap-3 transition-all duration-300 ${
          showText ? "opacity-100 text-2xl" : "hidden text-2xl"
        }`}
      >
        <FaLightbulb className="text-sky-500 dark:text-cyan-400 text-3xl" />
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">IdeaPulse</h1>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-4 items-center justify-center mt-4 w-full">
        {[
          { to: "/homepage/home", icon: <FaHome />, label: "Home" },
          { to: "/homepage/idea", icon: <FaLightbulb />, label: "Ideas" },
          { to: "/homepage/profile", icon: <FaUser />, label: "Profile" },
          { to: "/homepage/settings", icon: <FaCog />, label: "Settings" },
        ].map(({ to, icon, label }, index) => (
          <NavLink
            key={index}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-4 transition-all text-lg w-full pl-2 
              text-slate-600 dark:text-gray-300 
              hover:text-sky-500 dark:hover:text-cyan-300 
              ${isActive ? "text-sky-500 font-semibold dark:text-cyan-400" : ""}`
            }
          >
            <span className={`${isCurrentlyShrunk ? "text-xl" : "text-3xl"} transition-all duration-300 flex justify-center items-center`}>
              {icon}
            </span>
            <span className={`transition-all duration-300 ${showText ? "opacity-100" : "hidden"} flex justify-center items-center`}>
              {label}
            </span>
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div className="mt-auto flex justify-center w-full">
        <NavLink
          to="/login"
          className="flex items-center gap-4 text-red-500 hover:text-red-600 transition-all text-lg"
        >
          <FaSignOutAlt />
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
