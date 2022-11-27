import React from "react";
import { Link } from "react-router-dom";
import appleBtn from "../assets/images/apple.svg";
import androidBtn from "../assets/images/android.svg";
import { ImTwitter, ImFacebook, ImInstagram } from "react-icons/im";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="pt-8 sm:pt-16 footer-grd px-4">
      <div className="container flex flex-col">
        <Link to="/" className="order-1">
          <Logo />
        </Link>

        <div className="flex space-x-4 py-4 pt-6 sm:hidden order-2">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/onyxswap"
            className="bg-primary shadow-md p-3 rounded-full text-white"
          >
            <ImTwitter className="w-5 h-5" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="/"
            className="bg-primary shadow-md p-3 rounded-full text-white"
          >
            <ImFacebook className="w-5 h-5" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://instagram.com/onyxswap"
            className="bg-primary shadow-md p-3 rounded-full text-white"
          >
            <ImInstagram className="w-5 h-5" />
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between order-4 sm:order-2 space-y-8 md:space-y-0 py-8 sm:py-16 text-white">
          <div className="">
            <h4 className="text-[22px] lg:text-3xl font-semibold pb-2">
              Company
            </h4>
            <ul className="text-[14px] sm:text-[16px] lg:text-[20px] font-semibold sm:font-normal space-y-2">
              <li>
                <Link to="#">About Us</Link>
              </li>
              <li>
                <Link to="#">Careers</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h4 className="text-[22px] lg:text-3xl pb-2">Legal</h4>{" "}
            <ul className="text-[14px] sm:text-[16px] lg:text-[20px] font-semibold sm:font-normal space-y-2">
              <li>
                <Link to="#">Privacy policy</Link>
              </li>
              <li>
                <Link to="#">FAQs</Link>
              </li>
              <li>
                <Link to="#">Terms of Use</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h4 className="text-[22px] lg:text-3xl pb-2">Contact</h4>
            <ul className="text-[14px] sm:text-[16px] lg:text-[20px] font-semibold sm:font-normal space-y-2">
              <li>Address - 253 Muri Okunola Street, </li>
              <li>Victoria Island, Lagos</li>
              <li>
                <span>Phone number</span> -
                <a href="tel:+2348172247276">+2348172247276</a>
              </li>
              <li>Victoria Island, Lagos</li>
              <li>
                <span>Email address</span> -
                <a href="mailto:onyx@gmail.com">hello@onyxswap.africa</a>
              </li>
            </ul>
          </div>
          <div className="hidden sm:block">
            <h4 className="text-[22px] lg:text-3xl pb-2 sm:font-normal space-y-2">
              Follow us on Social
            </h4>
            <ul className="hidden sm:flex space-x-4 py-4 pt-6 order-2">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/onyxswap"
                className="bg-primary shadow-md p-3 rounded-full text-white"
              >
                <ImTwitter className="w-5 h-5" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="/"
                className="bg-primary shadow-md p-3 rounded-full text-white"
              >
                <ImFacebook className="w-5 h-5" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://instagram.com/onyxswap"
                className="bg-primary shadow-md p-3 rounded-full text-white"
              >
                <ImInstagram className="w-5 h-5" />
              </a>
            </ul>
          </div>
        </div>

        <div className="order-3 sm:order-3 flex items-center sm:justify-end space-x-4 md:space-x-5 pt-4">
          <Link to="#">
            <img className="w-40 md:w-44" src={appleBtn} alt="appleBtn" />
          </Link>
          <Link to="#">
            <img className="w-40 md:w-44" src={androidBtn} alt="androidBtn" />
          </Link>
        </div>

        <p className="order-5 text-white text-center text-[14px] sm:text-xl pt-4 sm:pt-16 pb-8">
          ©2022 Onyx. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
