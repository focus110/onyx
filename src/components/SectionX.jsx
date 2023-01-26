import React from "react";
import DownloadBtn from "./DownloadBtn";
import rocket from "../assets/images/rocket.png";

const SectionX = () => {
  return (
    <div className="md:px-8 lg:px-16 relative hidden md:flex justify-between items-center h-max bg-holding-phone bg-cover bg-center bg-no-repeat">
      <div className="flex-1 flex flex-col py-16 md:py-16 justify-center bg-white">
        <div className="mt-20">
          <h2 className="text-4xl font-semibold">Your Gateway To Crypto</h2>
          <p className="font-normal text-base mt-4 mr-14">
            If you're new to the world of crypto, don't worry - Onyxswap is
            designed with beginners in mind. Our intuitive interface and
            easy-to-use features make it simple for anyone to get started with
            crypto trading. But don't let our beginner-friendly design fool you
            - Onyxswap is packed with advanced features for experienced traders
            as well. Our lightning-fast transaction speeds and customizable
            portfolio management tools give you the power to make informed
            trades and stay on top of the market.
          </p>

          <img className="md:-ml-8 lg:-ml-24 w-36" src={rocket} alt="rocket" />
          <DownloadBtn />
        </div>
      </div>
      <div className="flex-1"></div>
    </div>
  );
};

export default SectionX;
