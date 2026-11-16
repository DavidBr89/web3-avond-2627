import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <div className="p-4 bg-teal-800 h-20 text-white">
      <div className="flex gap-8 items-center">
        <NavLink
          className={({ isActive }) =>
            isActive ? "underline underline-offset-4 " : "text-gray-500"
          }
          to="/">
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "underline underline-offset-4 " : "text-gray-500"
          }
          to="/events">
          Events
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "underline underline-offset-4 " : "text-gray-500"
          }
          to="/favorites">
          Favorieten
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "underline underline-offset-4 " : "text-gray-500"
          }
          to="/contact">
          Contacteer ons
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
