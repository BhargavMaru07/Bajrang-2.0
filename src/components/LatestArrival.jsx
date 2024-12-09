import React from "react";
import Slider from "react-slick";
import Product from "../Shared/Product";
import styled from "styled-components";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useProductContext } from "../Context/ProductContext";

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
        // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        // background: "#F6F8FA",
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
        {direction === "next" ? <IoIosArrowForward /> : <IoIosArrowBack />}
      </span>
    </div>
  );
};

const LatestArrival = () => {
  const { products } = useProductContext();
  // console.log(products);

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

  // const products = [
  //   {
  //     id: 1,
  //     image: "https://placehold.co/400x600/png",
  //     image2: "https://placehold.co/400x600?text=Hello+World",
  //     title: "Elegant Mirror Work Latkan",
  //     price: "₹421.00",
  //     originalPrice: "₹562.00",
  //     discount: "-25%",
  //   },
  //   {
  //     id: 2,
  //     image: "https://placehold.co/400x600/png",
  //     image2: "https://placehold.co/400x600?text=Hello+World",
  //     title: "Traditional Silk Thread Latkan",
  //     price: "₹565.00",
  //     originalPrice: "₹869.00",
  //     discount: "-35%",
  //   },
  //   {
  //     id: 3,
  //     image: "https://placehold.co/400x600/png",
  //     image2: "https://placehold.co/400x600?text=Hello+World",
  //     title: "Designer Pearl Beaded Latkan",
  //     price: "₹769.00",
  //     originalPrice: "₹1099.00",
  //     discount: "-30%",
  //   },
  //   {
  //     id: 4,
  //     image: "https://placehold.co/400x600/png",
  //     image2: "https://placehold.co/400x600?text=Hello+World",
  //     title: "Handcrafted Tassel Latkan",
  //     price: "₹559.00",
  //     originalPrice: "₹799.00",
  //     discount: "-30%",
  //   },
  // ];

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

      <Slider {...sliderSettings} className="container mx-auto max-w-7xl">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </Slider>
    </Wrapper>
  );
};

export default LatestArrival;

const Wrapper = styled.section`
  .custom-arrow::before {
    display: none;
  }
`;
