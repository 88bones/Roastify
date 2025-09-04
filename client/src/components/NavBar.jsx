import React from "react";
import { useNavigate } from "react-router-dom";
import burger from "../assets/images/burger.png";

const NavBar = ({ setIsOver, isOver }) => {
  const MenuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Privacy Policy", path: "" },
    { name: "Contact", path: "" },
  ];

  const navigate = useNavigate();

  return (
    <nav className="py-6 px-4">
      <header className="flex items-center justify-between max-w-6xl mx-auto">
        <h1 className="text-green-600 font-extrabold text-3xl">Roastify</h1>
        <button
          className="md:hidden cursor-pointer"
          onClick={() => setIsOver(!isOver)}
        >
          <img src={burger} alt="" width="40px" />
        </button>
        <ul className="hidden md:flex space-x-8 text-white font-medium cursor-pointer">
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
      </header>
    </nav>
  );
};

export default NavBar;
