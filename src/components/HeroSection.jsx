"use client";

import React from "react";
import Slider from "react-slick";
import slider_1 from "../assets/Banner/slide1.png";
import slider_2 from "../assets/Banner/slide2.png";
import slider_3 from "../assets/Banner/slide3.png";
import Button from "../Styles/Button";

const HeroSection = () => {
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          background: "transperent",
          width: "40px",
          height: "40px",
          border: "1px solid black",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          background: "transperent",
          width: "40px",
          height: "40px",
          border: "1px solid black",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const banner = [
    {
      title: "Summer Sale",
      description:
        "Up to 50% off on selected items!\nDon't miss out on these deals.",
      shop: "Shop Now",
      image: slider_1,
    },
    {
      title: "New Arrivals",
      description:
        "Check out our latest collection.\nFresh styles for every season.",
      shop: "Explore",
      image: slider_2,
    },
    {
      title: "Exclusive Offers",
      description: "Members get special discounts.\nJoin now and save big.",
      shop: "Sign Up",
      image: slider_3,
    },
  ];

  return (
    <div className="bg-[#F6F8FA] slider-container lg:h-[85vh] p-10  sm:h-[70vh]">
      <Slider {...settings} className="h-[75vh]">
        {banner.map((item, index) => {
          return (
            <div key={index} className="container">
              <div className="grid md:grid-cols-2 gap-2 h-[78vh]">
                <div className="w-full p-5 px-12 m-auto">
                  <div className="details">
                    <h2 className="text-[#E2218F] text-5xl font-bold my-5">
                      {item.title}
                    </h2>
                    <h1 className="my-3 text-5xl">{item.description}</h1>
                    <Button className="rounded-[23px]">{item.shop}</Button>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <img src={item.image} alt="banner" className="" />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default HeroSection;
