import React from "react";
import { useNavigate } from "react-router-dom";

const MenuSelector = () => {
  const menuItems = [
    { name: "Top Artist", path: "/dashboard" },
    { name: "Top Tracks", path: "/dashboard/top-tracks" },
  ];

  const navigate = useNavigate();

  return (
    <>
      <div className="flex gap-10 justify-center p-4 cursor-pointer">
        {menuItems.map((items, index) => (
          <div
            className="bg-gray-600 rounded-3xl px-3 py-2 hover:bg-green-600 transition-colors"
            key={index}
            onClick={() => navigate(items.path)}
          >
            {items.name}
          </div>
        ))}
      </div>
    </>
  );
};

export default MenuSelector;
