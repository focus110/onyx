import React from "react";
import { service } from "./Data";

const SectionXx = () => {
  return (
    <div className="md:hidden space-y-8 bg-white container pt-16">
      {service.map((item, i) => {
        return (
          <div
            key={i}
            className={`slide-bottom-${
              i + 1
            } flex flex-col space-y-4 px-4 sm:px-28 py-8 border-b`}
          >
            {item.icon}
            <h2 className={`font-semibold text-xl`}>{item.title}</h2>
            <p>{item.desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SectionXx;
