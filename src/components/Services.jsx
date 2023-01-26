import React from "react";
import vcards from "../assets/images/vcards.png";
// import instantloan from "../assets/images/instantloan.png";
import icon9079 from "../assets/images/icon9079.png";
import icon9076 from "../assets/images/icon9076.png";
import { useInViewport } from "react-in-viewport";
import { useRef } from "react";

const Services = () => {
  const myRef_1 = useRef();
  const myRef_2 = useRef();
  const myRef_3 = useRef();

  const view_1 = useInViewport(myRef_1);
  const view_2 = useInViewport(myRef_2);
  const view_3 = useInViewport(myRef_3);

  let element_1 = document.getElementById("slide-top-1");
  let element_2 = document.getElementById("slide-top-2");
  let element_3 = document.getElementById("slide-top-3");

  if (view_1.inViewport) {
    element_1.classList.add("slide-top-1");
  }

  if (view_2.inViewport) {
    element_2.classList.add("slide-top-2");
  }

  if (view_3.inViewport) {
    element_3.classList.add("slide-top-3");
  }

  return (
    <div className="relative md:px-8 lg:px-16 py-20 md:py-28 text-[#151615] bg-white md:bg-onyx-grey space-y-8 md:space-y-20 overflow-hidden">
      {/* <div className="absolute top-0 left-0 bg-white rounded-r-[38px] w-96 h-96"></div> */}
      {/* <div className="absolute -top- right-0 bg-white rounded-l-[38px] w-96 h-96"></div>
      <div className="absolute top- left-0 bg-white rounded-r-[38px] w-96 h-96"></div> */}

      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-x-0 z-10 relative">
        <div ref={myRef_1} className="flex-1">
          <div
            id="slide-top-1"
            className="flex translate-y-[200px] flex-col justify-center items-center space-y-4"
          >
            <img className="w-16 h-auto" src={icon9076} alt="icon" />
            <h2 className="text-center text-xl font-semibold">
              Buy and sell with Speed!
            </h2>
            <p className="text-center">
              Looking to buy or sell your favourite digital assets with speed
              and ease? Look no further than Onyxswap. Our platform is designed
              to make the process of buying and selling crypto quick and
              hassle-free. With lightning-fast transaction speeds and a
              user-friendly interface, you can easily buy and sell your
              preferred coins in a matter of minutes.
            </p>
          </div>
        </div>

        <div ref={myRef_2} className="flex-1">
          <div
            id="slide-top-2"
            className="flex translate-y-[200px] flex-col justify-center items-center space-y-4"
          >
            <img className="w-16 h-auto" src={vcards} alt="icon" />
            <h2 className="text-center text-xl font-semibold">
              Virtual Dollar cards
            </h2>
            <p className="text-center">
              Onyxswap now offers USD virtual cards, the perfect solution for
              online shopping and other transactions. Pay your Netflix, Amazon
              prime and international shopping using your USD card
            </p>
          </div>
        </div>

        <div className="flex-1" ref={myRef_3}>
          <div
            id="slide-top-3"
            className="flex translate-y-[200px] flex-col justify-center items-center space-y-4"
          >
            <img className="w-16 h-auto" src={icon9079} alt="icon" />
            <h2 className="text-center text-xl font-semibold">
              Pay Utilities bill at ease
            </h2>
            <p className="text-center">
              Paying bills has never been easier with Onyxswap's new bills
              payment feature. With just a few clicks, you can easily pay all of
              your bills - from DSTV, Airtime & Data Top-up to electricity bills
              and a lot more - directly from your Onyxswap account.
            </p>
          </div>
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
