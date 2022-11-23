import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import appleBtn from "../assets/images/apple.svg";
import androidBtn from "../assets/images/android.svg";
import twitter from "../assets/images/twitter.svg";
import facebook from "../assets/images/facebook.svg";
import instagram from "../assets/images/instagram.svg";
import { ImTwitter, ImFacebook, ImInstagram } from "react-icons/im";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="pt-16 footer-grd">
      <div className="container flex flex-col">
        <Link to="/" className="order-1">
          <Logo />
        </Link>
        <div className="block sm:hidden order-2">
          <Link to="#" className="">
            <ImTwitter />
          </Link>
          <Link to="#" className="">
            <ImFacebook />
          </Link>
          <Link to="#" className="">
            <ImInstagram />
          </Link>
        </div>
        <div className="order-4 sm:order-2 flex flex-col sm:flex-row justify-between items-start py-16 text-white">
          <div className="">
            <h4 className="text-2xl">Company</h4>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="">
            <h4 className="text-2xl">Legal</h4>{" "}
            <ul>
              <li>Privacy policy</li>
              <li>FAQs</li>
              <li>Terms of Use</li>
            </ul>
          </div>
          <div className="">
            <h4 className="text-2xl">Contact</h4>
            <ul>
              <li>Address - 253 Muri Okunola Street, </li>
              <li>Victoria Island, Lagos</li>
              <li>Phone number - 08172247276</li>
              <li>Victoria Island, Lagos</li>
              <li>Email address - hello@onyxswap.africa</li>
            </ul>
          </div>
          <div className="">
            <h4 className="text-2xl">Follow us on Social</h4>
          </div>
        </div>
        <div className="order-3 sm:order-3 flex items-center justify-end space-x-5 pt-4">
          <Link to="#">
            <img className="w-40 md:w-44" src={appleBtn} alt="appleBtn" />
          </Link>
          <Link to="#">
            <img className="w-40 md:w-44" src={androidBtn} alt="androidBtn" />
          </Link>
        </div>
        <p className="order-5 text-white text-center text-xl pt-16 pb-8">
          ©2022 Onyx. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
