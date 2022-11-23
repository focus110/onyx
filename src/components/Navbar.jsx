import React from "react";
import logo from "../logo.svg";
import { Link, NavLink } from "react-router-dom";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="bg-white flex justify-between items-center p-8 py-8">
      <Link to="/">
        <img className="w-32" src={logo} alt="logo" />
      </Link>

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
