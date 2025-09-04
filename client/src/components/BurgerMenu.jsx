import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const BurgerMenu = () => {
  const MenuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Privacy Policy", path: "" },
    { name: "Contact", path: "" },
  ];

  const navigate = useNavigate();

  return (
    <div>
      <ul className="space-x-8 text-white font-medium p-2 rounded cursor-pointer shadow-lg shadow-green-950">
        {MenuItems.map((item, index) => (
          <li
            key={index}
            onClick={() => navigate(item.path)}
            className="text-white "
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BurgerMenu;
