import React from "react";
import appleBtn from "../assets/images/apple.svg";
import androidBtn from "../assets/images/android.svg";
import mobile from "../assets/images/mobile.svg";
import vector190 from "../assets/images/vector190.svg";
import vector191 from "../assets/images/vector191.svg";
import vector192 from "../assets/images/vector192.svg";
import vector193 from "../assets/images/vector193.svg";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-hero-pattern bg-no-repeat bg-cover">
      <div className="container text-primary text-center space-y-0 md:space-y-2 items-center">
        <Navbar />
        <img
          className="fade-in absolute w-[75px] sm:w-[10px] lg:w-[241px] top-[440px] md:top-[530px] left-4 sm:left-52"
          src={vector190}
          alt="vector shape"
        />
        <img
          className="fade-in absolute w-[82px] sm:w-[10px] lg:w-[191px] top-[300px] sm:top-80 left-4 sm:left-80"
          src={vector191}
          alt="vector shape"
        />
        <img
          className="fade-in absolute w-[67px] sm:w-[10px] lg:w-[120px] top-80 sm:top-44 right-2 sm:right-80"
          src={vector192}
          alt="vector shape"
        />
        <img
          className="fade-in absolute w-[82px] sm:w-[10px] lg:w-[159px] top-[420px] sm:top-96 right-1 sm:right-36"
          src={vector193}
          alt="vector shape"
        />
        {/* old text */}
        {/* <h2 className="hidden md:block font-black text-xl sm:text-4xl mx-auto leading-[28px] md:leading-[40px] pt-24 md:pt-28">
          Onyxswap is the easiest and fastest <br />
          place to buy, sell and hold <br />
          cryptocurrency.
        </h2> */}

        <h2 className="hidden md:block font-black text-xl sm:text-4xl mx-auto leading-[28px] md:leading-[40px] pt-24 md:pt-28">
          Welcome to Onyxswap, the simple cryptocurrency <br />
          ptrading app for selling your Bitcoin, Ethereum and <br />
          Stablecoins for Naira.
        </h2>

        <h2 className="md:hidden font-black text-xl sm:text-4xl mx-auto leading-[28px] md:leading-[40px] pt-24 md:pt-28">
          Welcome to Onyxswap, the simple <br />
          cryptocurrency ptrading app for <br />
          selling your Bitcoin, Ethereum and Stablecoins for Naira.
        </h2>

        <p className="text-base md:text-[22px] p-4 px-12 sm:px-4 font-normal">
          Join the thousands of users already enjoying the benefits of Onyxswap{" "}
          <br />
          fastest place to buy, sell and Sign up today and start your
          <br /> crypto journey!.
        </p>
        <div className="space-x-5 flex items-center justify-center pt-4">
          <Link to="#">
            <img className="w-40 md:w-44" src={appleBtn} alt="appleBtn" />
          </Link>
          <Link to="#">
            <img className="w-40 md:w-44" src={androidBtn} alt="androidBtn" />
          </Link>
        </div>
        <div className="slide-top fade-in relative pt-16 md:pt-16 z-10">
          <img
            className="z-20 w-96 md:w-[1000px] mx-auto"
            src={mobile}
            alt="androidBtn"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
