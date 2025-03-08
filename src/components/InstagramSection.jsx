import React from "react";
import { Link } from "react-router-dom";
import Pictures from "../Shared/Pictures";

const InstaLink = () => {
  return (
    <>
      <h1 className="px-6 py-2 mx-auto my-5 text-2xl font-semibold max-w-7xl sm:px-10 sm:text-3xl">
        Follow Us On Instagram{" "}
        <Link
          to={"https://www.instagram.com/mk_mayur_24"}
          className="text-head relative transition-transform duration-300 hover:text-[#1E88E5] hover:scale-105 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-[#2196F3] after:transition-all after:duration-300 hover:after:w-full"
          target="_blank"
        >
          @Bajrang_Latkan
        </Link>
      </h1>
      <Pictures />
    </>
  );
};

export default InstaLink;
