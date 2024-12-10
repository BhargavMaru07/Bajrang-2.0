import React from "react";
import Slider from "react-slick";
import Product from "../Shared/Product";
import styled from "styled-components";
import { useProductContext } from "../Context/ProductContext";
import Progress from "../helper/Progress";
import { ICONS } from "../assets/Icons/icon";

const CustomArrow = ({ className, style, onClick, direction }) => {
  return (
    <div
      className={`${className} custom-arrow ${
        direction === "next" ? "next-arrow" : "prev-arrow"
      }`}
      onClick={onClick}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        border: "0.3px solid black",
        height: "40px",
        width: "40px",
        lineHeight: "40px",
        cursor: "pointer",
        position: "absolute",
        top: "-20px",
        transform: "translateY(-50%)",
        ...(direction === "next" ? { right: "10px" } : { left: "10px" }),
      }}
    >
      <span className="text-xl text-text">
        {direction === "next" ? <ICONS.FORWARD /> : <ICONS.BACKWARD />}
      </span>
    </div>
  );
};

const LatestArrival = () => {
  const { products, isLoading } = useProductContext();

  const sliderSettings = {
    // dots: true,
    infinite: true,
    speed: 500,
    autoPlay: true,
    autoPlaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
    responsive: [
      {
        breakpoint: 1024, // Tablet view
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // Mobile view
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Wrapper className="px-4 py-8 md:px-12">
      <div className="mx-auto mb-12 max-w-7xl">
        <h2 className="text-2xl font-semibold text-head">Our</h2>
        <h3 className="mb-4 text-3xl font-semibold text-black">
          Latest Arrival
        </h3>
        <p className="mb-8 text-gray-500">
          Explore the latest arrivals in latkan designs with vibrant, stylish,
          and trendy varieties for every special occasion.
        </p>
      </div>

      <div>
        {isLoading ? (
          <Progress />
        ) : (
          <Slider {...sliderSettings} className="container mx-auto max-w-7xl">
            {products.map((product) => (
              <Product key={product.id} {...product} />
            ))}
          </Slider>
        )}
      </div>
    </Wrapper>
  );
};

export default LatestArrival;

const Wrapper = styled.section`
  .custom-arrow::before {
    display: none;
  }
`;
