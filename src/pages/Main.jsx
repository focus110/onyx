import React from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import SectionX from "../components/SectionX";
import SectionXx from "../components/SectionXx";
import Services from "../components/Services";
import Subscribe from "../components/Subscribe";

const Main = () => {
  return (
    <div className="relative bg-[#fafafa] overflow-hidden">
      <Hero />
      <Services />
      <SectionX />
      <About />
      <SectionXx />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Main;
