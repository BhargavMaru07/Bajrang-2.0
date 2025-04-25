import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ICONS } from "../assets/Icons/icon";

const AdminSidebar = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

  // Function to handle screen size changes
  const handleResize = () => {
    setIsMobileView(window.innerWidth < 768);
  };
  
  useEffect(() => {
    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const route = [
    {
      title: "General",
      icon: <ICONS.HOME size={20} />,
      path: "general",
    },
    {
      title: "Users",
      icon: <ICONS.USERS size={20} />,
      path: "users",
    },
    {
      title: "Products",
      icon: <ICONS.SHOPPINGBAG size={20} />,
      path: "products",
    },
  ];

  return (
    <div className="flex justify-between gap-8 p-2 rounded-lg sm:h-[83vh] md:flex-col">
      <div className="flex gap-4 md:flex-col">
        {/* Sidebar Links */}
        {route.map((link, index) => {
          const isActive = location.pathname === link.path; // Check if the link is active
          return (
            <Link key={index} to={link.path}>
              <div
                className={`md:p-4 font-medium rounded-lg text-[18px] border flex items-center gap-2 p-1 justify-center sm:justify-start ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "bg-gray-700 text-gray-300"
                }`}
              >
                {link.icon}
                {!isMobileView && <span>{link.title}</span>}
              </div>
            </Link>
          );
        })}
      </div>
      <div>
        <Link to="/logout">
          <div
            className={`md:p-4 font-medium rounded-lg text-[18px] border flex items-center justify-center gap-2 p-1 sm:justify-start bg-text text-white`}
          >
            <ICONS.LOGOUT size={20} />
            {!isMobileView && <span>Logout</span>}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AdminSidebar;
