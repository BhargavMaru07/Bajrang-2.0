import React from "react";
import { Link } from "react-router-dom";

const InstaLink = () => {
  return (
    <h1 className="mx-auto max-w-7xl px-6 sm:px-10 py-2 mb-10 mt-16 text-2xl sm:text-4xl font-bold">
      Follow Us On Instagram{" "}
      <Link
        to={"https://www.instagram.com/mk_mayur_24"}
        className="text-[#2196F3] relative transition-transform duration-300 hover:text-[#1E88E5] hover:scale-105 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-[#2196F3] after:transition-all after:duration-300 hover:after:w-full"
        target="_blank"
      >
        @Bajrang_Latkan
      </Link>
    </h1>
  );
};

export default InstaLink;

