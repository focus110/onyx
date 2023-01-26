import React, { useRef } from "react";
import DownloadBtn from "./DownloadBtn";
import iphone from "../assets/images/iphone-mockup.svg";
import cloud from "../assets/images/cloud.png";
import vector001 from "../assets/images/vector001.svg";
import { socials } from "./Data";
import { useInViewport } from "react-in-viewport";

const About = () => {
  const myRef_1 = useRef();
  const myRef_2 = useRef();
  const myRef_3 = useRef();
  const myRef_social = useRef();

  const view_1 = useInViewport(myRef_1);
  const view_2 = useInViewport(myRef_2);
  const view_3 = useInViewport(myRef_3);
  const view_social = useInViewport(myRef_social);

  let element_1 = document.getElementById("slide-right-1");
  let element_2 = document.getElementById("slide-right");
  let element_3 = document.getElementById("slide-left-3");
  let element_social = document.getElementById("slide-left");

  if (view_1.inViewport) {
    element_1.classList.add("slide-right-1");
  }

  if (view_2.inViewport) {
    element_2.classList.add("slide-right");
  }

  if (view_3.inViewport) {
    element_3.classList.add("slide-left-3");
  }

  if (view_social.inViewport) {
    element_social.classList.add("slide-left");
  }
  return (
    <div className="relative bg-onyx-grey md:bg-about-abstract bg-top bg-no-repeat bg-contain overflow-hidden">
      {/* py-20 md:py-28 */}
      <div className="container space-y-16 md:space-y-0 md:py-28 flex flex-col md:flex-row items-center h-max">
        <div className="absolute -bottom-0 md:bottom-12 left-4 md:left-16 lg:left-[110px]">
          <ul className="flex flex-col space-y-4 py-4 md:pt-6">
            {socials.map((item, i) => {
              return (
                <a
                  ref={myRef_social}
                  id="slide-left"
                  key={i}
                  target="_blank"
                  rel="noreferrer"
                  href={`${item.link.toString()}`}
                  className={`slide-left-${
                    i + 1
                  } bg-primary shadow-md p-1 md:p-2 rounded-full text-white`}
                >
                  {item.icon}
                </a>
              );
            })}
          </ul>
        </div>

        <div className="hidden relative flex-1 space-y-6 md:flex flex-col md:-mt-80 lg:px-4">
          <img
            className="absolute top-8 md:top-12 w-12 md:w-20 -ml-4 opacity-90"
            src={cloud}
            alt="cloud"
          />
          <h2 className="slide-left-1 text-2xl md:text-[45px] font-semibold z-10">
            Who we are!
          </h2>
          <p className="slide-left-2 lg:pr-8 xl:pr-72 z-10">
            We are a team of passionate tech enthusiasts and financial experts
            who are dedicated to making crypto trading accessible and easy for
            everyone. Our platform is designed with both beginners and
            experienced traders in mind, offering a range of features and tools
            to suit every need. At Onyxswap, we are committed to providing the
            best user experience possible. That's why we offer lightning-fast
            transaction speeds, advanced security protocols, and a user-friendly
            interface.
          </p>
          <button className="slide-left-3 w-max bg-primary-dark text-white rounded-md py-4 px-8">
            Get started for free
          </button>
        </div>

        <div ref={myRef_3}>
          <div
            id="slide-left-3"
            className="-translate-x-[500px] md:hidden px-4 space-y-4"
          >
            <h2 className="text-xl font-semibold pb-1">Create Account</h2>
            <p className="">
              Download our mobile application on app store or google play store,
              or open an account via our website and create an account today
            </p>
            <button className="w-max bg-primary-dark text-white rounded-md py-2.5 px-6">
              Get started for free
            </button>
          </div>
        </div>

        <div className="w-full relative flex-1 pb-0 md:pb-0">
          <img
            ref={myRef_1}
            id="slide-right-1"
            className="absolute left-12 top-[290px] md:top-96 md:-mb-36 md:w-80 w-60"
            src={vector001}
            alt=""
          />
          <img
            ref={myRef_2}
            id="slide-right"
            className="mx-auto z-10 -rotate-6 translate-x-[50px] w-52 md:w-72 md:ml-24"
            src={iphone}
            alt=""
          />
          <div className="w-60 md:w-full md:absolute md:-left-96 md:bottom-0 mt-36 ml-16">
            <DownloadBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
