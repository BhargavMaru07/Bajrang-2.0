"use client";

import React, { useMemo } from "react";
import { Carousel } from "flowbite-react";

import slider_1 from "../assets/Banner/carousel_1.webp";
import slider_2 from "../assets/Banner/carousel_2.webp";
import slider_3 from "../assets/Banner/carousel_3.webp";
import Animated from "../Shared/Animated";

const HeroSection = () => {
  const revolution = useMemo(
    () => [
      {
        id: 1,
        label: "Discover Women Latest Fashion",
        description: "Summer sale is on",
        animation: "animate__animated animate__fadeInUp",
        image: slider_1,
      },
      {
        id: 2,
        label: "Discover Summer Latest Fashion",
        description: "Summer sale is on",
        animation: "animate__animated animate__fadeInUp",
        image: slider_2,
      },
      {
        id: 3,
        label: "Discover Men's Latest Fashion",
        description: "Summer sale is on",
        animation: "animate__animated animate__fadeInUp",
        image: slider_3,
      },
    ],
    []
  );
  return (
    <div className="h-[37rem] sm:h-[38rem] xl:h-80 2xl:h-[90vh] bg-white">
      <Carousel>
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
          alt="..."
        />
        {/* {revolution.map((val) => (
          <Animated {...val} key={val.id} className="h-[calc(100vh-120px)]" />
        ))} */}
      </Carousel>
    </div>
  );
};

export default HeroSection;
