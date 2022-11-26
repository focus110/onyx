import React from "react";
import { Link } from "react-router-dom";
import appleBtn from "../assets/images/apple.svg";
import androidBtn from "../assets/images/android.svg";

const DownloadBtn = () => {
  return (
    <div className="mx-auto">
      <div className="flex items-center space-x-4 md:space-x-5 pt-4">
        <Link to="#">
          <img className="w-40 md:w-44" src={appleBtn} alt="appleBtn" />
        </Link>
        <Link to="#">
          <img className="w-40 md:w-44" src={androidBtn} alt="androidBtn" />
        </Link>
      </div>
    </div>
  );
};

export default DownloadBtn;
