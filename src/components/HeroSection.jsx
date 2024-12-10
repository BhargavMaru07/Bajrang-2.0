"use client";

import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { ICONS } from "../assets/Icons/icon";
import slider_1 from "../assets/Banner/slide4.png";
import slider_2 from "../assets/Banner/slide2.png";
import slider_3 from "../assets/Banner/slide3.png";
import Button from "../Styles/Button";

const CustomArrow = ({ className, style, onClick, direction }) => {
  return (
    <div
      className={`${className} custom-arrow ${
        direction === "next" ? "next-arrow" : "prev-arrow"
      }`}
      onClick={onClick}
      style={{
        ...style,
        background: "transperent",
        width: "40px",
        display: "flex",
        zIndex: "99",
        alignItems: "center",
        justifyContent: "center",
        height: "40px",
        border: "1px solid black",
        cursor: "pointer",
        borderRadius: "50%",
        right: "0px",
        ...(direction === "next" ? { right: "10px" } : { left: "10px" }),
      }}
    >
      <span className="text-xl text-text">
        {direction === "next" ? <ICONS.FORWARD /> : <ICONS.BACKWARD />}
      </span>
    </div>
  );
};

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
  };

  const banner = [
    {
      title: "Elegant Latkans",
      description: "Add charm to your lehenga with unique latkans.",
      shop: "Browse Now",
      image: slider_1,
    },
    {
      title: "Custom Latkans",
      description: "Personalize your latkans for a perfect touch.",
      shop: "Customize Now",
      image: slider_2,
    },
    {
      title: "Traditional Latkans",
      description: "Explore intricate designs inspired by tradition.",
      shop: "Explore Collection",
      image: slider_3,
    },
  ];

  return (
    <Wrapper className="bg-[#F6F8FA] slider-container lg:h-[85vh] sm:p-3  md:h-[80vh] sm:h-[60vh] h-[98vh] px-2">
      <Slider {...settings} className="md:h-[75vh] sm:h-[50vh] h-[90vh]">
        {banner.map((item, index) => {
          return (
            <div key={index} className="container !flex m-auto">
              <div className="grid md:grid-cols-3 gap-2 md:h-[80vh] sm:h-[55vh] sm:px-[50px]">
                <div className="w-full m-auto md:pl-[0px] lg:px-16 order-last md:order-none sm:col-span-2">
                  <div className="details lg:ml-[40px] md:ml-[0px] text-center sm:text-start">
                    <h2 className="text-head sm:text-3xl font-bold my-5 text-[30px] lg:text-3xl">
                      {item.title}
                    </h2>
                    <h1 className="my-3 text-2xl sm:text-3xl lg:text-5xl !leading-[1.4]">
                      {item.description}
                    </h1>
                    <Button className="rounded-[23px]">{item.shop}</Button>
                  </div>
                </div>

                <div className="flex items-center sm:justify-start h-[50vh] sm:h-auto sm:col-span-1 justify-center">
                  <img
                    src={item.image}
                    alt="banner"
                    className="h-full sm:h-auto"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </Wrapper>
  );
};

export default HeroSection;

const Wrapper = styled.section`
  .custom-arrow::before {
    display: none;
  }
`;
