import React from "react";
import DownloadBtn from "./DownloadBtn";
import rocket from "../assets/images/rocket.png";

const SectionX = () => {
  return (
    <div className="md:px-8 lg:container relative hidden md:flex justify-between items-center h-max bg-holding-phone bg-cover bg-center bg-no-repeat">
      <div className="flex-1 flex flex-col py-16 md:py-16 justify-center bg-white">
        <div className="mt-20">
          <h2 className="text-4xl font-semibold">Your Gateway To Crypto</h2>
          <p className="font-normal text-base mt-4">
            More than creating a seamless platform for you to <br /> perform
            crypto transactions, we are with you every step <br />
            of the way, providing you with tips and tricks to
            <br /> becoming a crypto guru
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
