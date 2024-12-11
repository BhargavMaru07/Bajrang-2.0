import React from "react";
import latkan from "../assets/images/latkan.jpg";

const Banner = () => {
  return (
    <div className="container px-4 mx-auto max-w-7xl sm:p-8 md:p-11 lg:p-0">
      <img
        src={latkan}
        alt="latkan"
        className="rounded-lg hover:opacity-[0.8] cursor-pointer transition-all"
      />
    </div>
  );
};

export default Banner;
