import React from "react";
import styled from "styled-components";
import CurrencyFormate from "../helper/CurrencyFormate";
import { NavLink } from "react-router-dom";
import Button from "../Styles/Button";
import TruncatedTitle from "../helper/TruncatedTitle";

const ListView = ({ products, endPageIndex, startPageIndex }) => {
  return (
    <Wrapper className="">
      <div className="container grid gap-12 p-0 sm:px-8">
        {products.slice(startPageIndex, endPageIndex).map((curElem) => {
          const { id, name, image, price, description, colors, MRP } = curElem;
          // console.log("Color", colors[0]);

          return (
            <div className="grid grid-cols-3 gap-4 sm:gap-8" key={id}>
              <figure className="col-span-1 lg:w-[70%] rounded-lg relative md:w-[80%] h-full">
                {/* First Image */}
                <img
                  src={image}
                  alt={name}
                  className="object-fill w-full h-full duration-300 rounded-lg"
                />

                {/* Second Image (Hidden by Default) */}
                <img
                  src={image}
                  alt={name}
                  className="absolute top-0 left-0 object-fill w-full h-full duration-300 ease-in-out rounded-lg opacity-0 hover:cursor-pointer hover:opacity-100 -scale-x-100"
                />
              </figure>
              <div className="flex flex-col justify-between col-span-2">
                <h3 className="my-0 text-xl font-semibold sm:text-2xl sm:my-2 text-text md:my-4">
                  {name}
                </h3>
                <div className="flex items-center justify-start mt-2">
                  <span className="font-bold sm:text-lg text-head">
                    {<CurrencyFormate price={price} />}
                  </span>
                  <span className="ml-4 text-sm line-through text-text">
                    {<CurrencyFormate price={MRP} />}
                  </span>
                </div>
                <div className="w-5 h-5 rounded-full md:w-6 md:h-6 border-[#C7C7C7] border p-0.5 flex items-center justify-center">
                  <div
                    className="w-full h-full rounded-full"
                    style={{
                      background: colors[0],
                    }}
                  ></div>
                </div>
                <p>
                  <TruncatedTitle
                    name={description}
                    desktopLimit={140}
                    mobileLimit={55}
                  />
                </p>
                <NavLink
                  to={`/singleproduct/${id}`}
                  className="sm:w-[30%] w-[50%]"
                >
                  <Button
                    // style={{
                    //   background: colors[0],
                    // }}
                    className="!p-[5px] !text-sm rounded-lg w-full sm:!px-4 sm:!py-3"
                  >
                    Shop Now
                  </Button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default ListView;
