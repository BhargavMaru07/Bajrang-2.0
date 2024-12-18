import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import styled from "styled-components";

const Images = ({ image }) => {
  if (!image || image?.length === 0) {
    console.error("Image array is empty or undefined.");
    return <div>No images to display</div>;
  }

  const settings = {
    customPaging: function (i) {
      return (
        <Link>
          <img
            src={image[i]?.url}
            alt={image[i]?.filename || "thumbnail"}
            className="object-contain w-20 h-16 rounded-md"
          />
        </Link>
      );
    },
    dots: true,
    fade: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Wrapper className="max-w-2xl mx-auto slider-container">
      <Slider {...settings}>
        {image.map((img) => (
          <div key={img.id || img.url} className="p-4">
            <img
              src={img.url}
              alt={img.filename || "Image"}
              className="object-contain w-full rounded-lg h-96"
            />
          </div>
        ))}
      </Slider>
    </Wrapper>
  );
};

export default Images;

const Wrapper = styled.section`
  .slick-dots {
    position: relative;
    bottom: 0;
  }

  .slick-next {
    right: 0;
  }

  .slick-arrow {
    display: none !important;
  }

  .slick-prev {
    left: 0px;
  }

  .slick-dots li {
    width: auto;
    height: auto;
  }
`;
