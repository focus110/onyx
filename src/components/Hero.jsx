import React from "react";
import appleBtn from "../assets/images/apple.svg";
import androidBtn from "../assets/images/android.svg";

const Hero = () => {
  return (
    <div className="container text-center py-28 space-y-0 md:space-y-2">
      <h2 className="font-black text-xl sm:text-4xl sm:w-3/4 md:w-2/4 m-auto leading-[28px] md:leading-[40px]">
        Onyxswap is the easiest and fastest place to buy, sell and hold
        cryptocurrency.
      </h2>
      <p className="text-base md:text-[22px] p-4">
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
    </div>
  );
};

export default Hero;
