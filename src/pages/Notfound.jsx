import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Notfound = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="bg-hero-pattern bg-cover bg-no-repeat container space-y-4 flex flex-col justify-center items-center py-16 md:py-20">
        <h2 className="font-black text-xl sm:text-4xl mx-auto leading-[28px] md:leading-[40px] pt-16 md:pt-28">
          Page Not Found
        </h2>
        <p className="md:w-[40%] mx-auto text-center text-base md:text-[22px] p-4 px-12 sm:px-4 font-normal">
          The page you are looking for is not availble
        </p>
        <div>
          <Link
            to="/"
            className="w-max bg-primary-dark text-white rounded-md py-2.5 px-6"
          >
            Go back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
