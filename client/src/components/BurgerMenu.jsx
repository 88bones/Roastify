import React from "react";

const BurgerMenu = () => {
  const MenuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "" },
    { name: "Privacy Policy", path: "" },
    { name: "Contact", path: "" },
  ];
  return (
    <div>
      <ul className="space-x-8 text-white font-medium cursor-pointer">
        {MenuItems.map((item, index) => (
          <li
            key={index}
            onClick={() => navigate(item.path)}
            className="hover:bg-green-600 px-2 py-1 rounded text-white transition-colors"
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BurgerMenu;
