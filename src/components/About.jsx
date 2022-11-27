import React from "react";
import DownloadBtn from "./DownloadBtn";
import iphone from "../assets/images/iphone-mockup.svg";
import cloud from "../assets/images/cloud.png";
import vector001 from "../assets/images/vector001.svg";
import { socials } from "./Data";

const About = () => {
  return (
    <div className="relative bg-onyx-grey md:bg-about-abstract bg-top bg-no-repeat bg-contain overflow-hidden">
      {/* py-20 md:py-28 */}
      <div className="container space-y-16 md:space-y-0 md:py-28 flex flex-col md:flex-row items-center h-max">
        <div className="absolute -bottom-0 md:bottom-12 left-4 md:left-16 lg:left-[110px]">
          <ul className="flex flex-col space-y-4 py-4 md:pt-6">
            {socials.map((item, i) => {
              return (
                <a
                  key={i}
                  target="_blank"
                  rel="noreferrer"
                  href={`${item.link.toString()}`}
                  className="bg-primary shadow-md p-1 md:p-2 rounded-full text-white"
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
          <h2 className="text-2xl md:text-[45px] font-semibold z-10">
            Who we are!
          </h2>
          <p className="lg:pr-8 xl:pr-72 z-10">
            Ever imagined crypto being fun as well as functional? Well, we too
            have, and we have created Patricia to do just that. Come on board
            and experience crypto the redefined way.
          </p>
          <button className="w-max bg-primary-dark text-white rounded-md py-4 px-8">
            Get started for free
          </button>
        </div>

        <div className="md:hidden px-4 space-y-4 ">
          <h2 className="text-xl font-semibold pb-1">Create Accout</h2>
          <p>
            Download our mobile application on app store or google play store,
            or open an account via our website and create an account today
          </p>
          <button className="w-max bg-primary-dark text-white rounded-md py-2.5 px-6">
            Get started for free
          </button>
        </div>

        <div className="w-full relative flex-1 pb-0 md:pb-0">
          <img
            className="absolute left-12 top-[290px] md:top-96 md:-mb-36 md:w-80 w-60"
            src={vector001}
            alt=""
          />
          <img
            className="mx-auto z-10 -rotate-6 w-52 md:w-72 md:ml-24"
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
