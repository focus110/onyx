import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Subscribe from "../components/Subscribe";

const Main = () => {
  return (
    <div className="relative bg-[#fafafa] overflow-hidden">
      <Hero />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Main;
