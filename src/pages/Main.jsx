import React from "react";
import Hero from "../components/Hero";

const Main = () => {
  return (
    <div className="relative bg-[#fafafa] overflow-hidden">
      {/* <div className="absolute bottom-20 -left-96 -rotate-[30.35deg] bg-orange-400 w-full h-[700px] bg-opacity-30"></div> */}
      <Hero />
    </div>
  );
};

export default Main;
