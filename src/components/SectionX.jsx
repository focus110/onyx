import React from "react";
import DownloadBtn from "./DownloadBtn";
import Title from "./Title";

const SectionX = () => {
  return (
    <div className="relative hidden md:flex justify-between items-center h-screen bg-holding-phone bg-cover bg-center bg-no-repeat">
      <div className="flex-1 flex flex-col justify-center bg-red-200">
        <div className="mx-auto">
          <Title title="Your Gateway To Crypto" />
          <DownloadBtn />
        </div>
      </div>
      <div className="flex-1"></div>
      {/* <img className="absolute" src="" alt="rocket" /> */}
    </div>
  );
};

export default SectionX;
