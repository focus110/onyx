import React from "react";
import vcards from "../assets/images/vcards.png";
// import instantloan from "../assets/images/instantloan.png";
import icon9079 from "../assets/images/icon9079.png";
import icon9076 from "../assets/images/icon9076.png";

const Services = () => {
  return (
    <div className="relative md:px-8 lg:px-16 py-20 md:py-28 text-[#151615] bg-white md:bg-onyx-grey space-y-8 md:space-y-20 overflow-hidden">
      {/* <div className="absolute top-0 left-0 bg-white rounded-r-[38px] w-96 h-96"></div> */}
      {/* <div className="absolute -top- right-0 bg-white rounded-l-[38px] w-96 h-96"></div>
      <div className="absolute top- left-0 bg-white rounded-r-[38px] w-96 h-96"></div> */}

      <div className="side-bottom flex flex-col md:flex-row items-center space-y-8 md:space-x-0 z-10 relative">
        <div className="flex-1 flex flex-col justify-center items-center space-y-4">
          <img className="w-16 h-auto" src={icon9076} alt="icon" />
          <h2 className="text-center text-xl font-semibold">
            Buy and sell with Speed!
          </h2>
          <p className="text-center">
            Buy and sell cryto from company to <br /> user and vice-versa
          </p>
        </div>

        <div className="flex-1 flex flex-col justify-center items-center space-y-4">
          <img className="w-16 h-auto" src={vcards} alt="icon" />
          <h2 className="text-center text-xl font-semibold">
            Virtual Dollar cards
          </h2>
          <p className="text-center">From Naira wallet to Real account</p>
        </div>

        <div className="slide-top flex-1 flex flex-col justify-center items-center space-y-4">
          <img className="w-16 h-auto" src={icon9079} alt="icon" />
          <h2 className="text-center text-xl font-semibold">
            Pay Utilities bill at ease
          </h2>
          <p className="text-center">
            Pay all your utilities bills at the <br /> comfort of your mobile
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-x-0 z-10 relative">
        {/* <div className="slide-top flex-1 flex flex-col justify-center items-center space-y-4">
          <img className="w-16 h-auto" src={instantloan} alt="icon" />
          <h2 className="text-center text-xl font-semibold">Instant Loan</h2>
          <p className="text-center">
            Best trading platform and <br /> more reliable financial
            transactions.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Services;
