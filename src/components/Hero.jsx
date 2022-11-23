import React from "react";
import appleBtn from "../assets/images/apple.svg";
import androidBtn from "../assets/images/android.svg";
import mobile from "../assets/images/mobile.svg";
import vector190 from "../assets/images/vector190.svg";
import vector191 from "../assets/images/vector191.svg";
import vector192 from "../assets/images/vector192.svg";
import vector193 from "../assets/images/vector193.svg";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="bg-hero-pattern bg-no-repeat bg-cover">
      <div className="container text-primary text-center space-y-0 md:space-y-2 items-center">
        <Navbar />
        <img
          className="absolute w-[241px] top-[530px]"
          src={vector190}
          alt="vector shape"
        />
        <img
          className="absolute w-[191px] top-80 left-80"
          src={vector191}
          alt="vector shape"
        />
        <img
          className="absolute w-[120px] top-44 right-80"
          src={vector192}
          alt="vector shape"
        />
        <img
          className="absolute w-[159px] top-96 right-36"
          src={vector193}
          alt="vector shape"
        />
        <h2 className="font-black text-xl sm:text-4xl mx-auto leading-[28px] md:leading-[40px] pt-24 md:pt-28">
          Onyxswap is the easiest and fastest <br />
          place to buy, sell and hold <br />
          cryptocurrency.
        </h2>
        <p className="text-base md:text-[22px] p-4 font-normal">
          Sign up and trade for free at the best rates everyday
        </p>
        <div className="space-x-5">
          <button>
            <img className="w-32 md:w-44" src={appleBtn} alt="appleBtn" />
          </button>
          <button>
            <img className="w-32 md:w-44" src={androidBtn} alt="androidBtn" />
          </button>
          <button></button>
        </div>
        <div className="pt-8 md:pt-16">
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
