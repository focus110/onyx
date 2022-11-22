import React from "react";
import logo from "../logo.svg";
import { NavLink } from "react-router-dom";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="container flex justify-between py-8">
      <img className="w-32" src={logo} alt="logo" />

      <button className="md:hidden">
        <HiMenu className="w-7 h-auto" />
      </button>

      <ul className="hidden md:flex space-x-6 items-center">
        <li>
          <NavLink to="#!">Login</NavLink>
        </li>
        <li>
          <NavLink to="#">Sign Up</NavLink>
        </li>
        <button className="font-bold">Download the app</button>
      </ul>
    </div>
  );
};

export default Navbar;
