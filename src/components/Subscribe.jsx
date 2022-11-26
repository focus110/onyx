import React from "react";

const Subscribe = () => {
  return (
    <div className="bg-white">
      <div className="md:hidden py-16 sm:py-20 space-y-8 sm:space-y-12 px-2 md:px-56 rounded-lg text-center">
        <h2 className="text-[20px] sm:text-3xl font-semibold">
          Subscribe to our newsletter
        </h2>

        <form className="flex flex-col w-[80%] sm:w-[70%] mx-auto md:space-x-4 space-y-4 md:space-y-0">
          <input
            className="outline-none border-2 h-[57px] border-[#D4D4D8] py-4 px-8 rounded-md text-[#000000] placeholder-black"
            type="text"
            placeholder="First name"
            required
          />
          <input
            className="outline-none border-2 h-[57px] border-[#D4D4D8] py-4 px-8 rounded-md text-[#000000] placeholder-black"
            type="text"
            placeholder="Email address"
            required
          />
          <button className="py-4 px-8 rounded-md text-white bg-primary-dark">
            Subscribe for free
          </button>
        </form>
      </div>

      <div className="hidden md:block container bg-white py-28 text-primary-dark">
        <div className=" inner-shadow py-16 sm:py-20 space-y-8 sm:space-y-12 px-2 sm:px-16 lg:px-56 rounded-lg text-center">
          <h2 className="sm:text-3xl font-semibold">
            Subscribe To Our Newsletter
          </h2>
          <p className="sm:text-[22px]">
            Apart from a man tripping down the different crypto dips, there's a
            lot to explore in the Crypto space and we'd love to share that with
            you. Be it our product update, a new crypto fact, or a random recipe
            we pasted by accident.
          </p>
          <form className="sm:space-x-4 space-y-4 sm:space-y-0">
            <input
              className="outline-none py-4 px-8 rounded-md text-[#2B3B30]"
              type="text"
              placeholder="Address"
              required
            />
            <button className="py-4 px-8 rounded-md text-white bg-primary-dark">
              Subscribe for free
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
