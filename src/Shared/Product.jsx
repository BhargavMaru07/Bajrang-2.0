import React from "react";
import TruncatedTitle from "../helper/TruncatedTitle";
import CurrencyFormate from "../helper/CurrencyFormate";
import { NavLink } from "react-router-dom";
// import image_1 from "https://i.ibb.co/0fsPZ5c/Product1.jpg";

const Product = (Product) => {
  // console.log(Product);

  const { image, name, price, colors, category, id, MRP } = Product;
  // console.log(name);

  return (
    <div className="p-2">
      <NavLink to={`/singleproduct/${id}`}>
        <div className="bg-white rounded-lg">
          <div className="relative w-full">
            {/* First Image */}
            <img
              src={image}
              alt={name}
              className="object-fill w-full sm:h-[18rem] rounded-lg duration-300"
            />

            {/* Second Image (Hidden by Default) */}
            <img
              src={image}
              alt={name}
              className="absolute top-0 hover:cursor-pointer left-0 w-full h-full object-fill sm:h-[18rem] rounded-lg opacity-0 hover:opacity-100 duration-300 ease-in-out -scale-x-100"
            />
          </div>

          <div className="p-1 sm:p-1">
            <h4 className="font-semibold text-text text-md">
              {/* <TruncatedTitle name={name} /> */}
              {name}
            </h4>
            <div className="flex items-center justify-between mt-2">
              <span className="text-lg font-bold text-pink-500">
                {<CurrencyFormate price={price} />}
              </span>
              <span className="ml-2 text-sm text-gray-400 line-through">
                {<CurrencyFormate price={MRP} />}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="w-5 h-5 rounded-full md:w-6 md:h-6 border-[#C7C7C7] border p-0.5 flex items-center justify-center">
                <span
                  className="w-full h-full rounded-full"
                  style={{
                    background: colors,
                  }}
                ></span>
              </div>
              <span className="text-text sm:text-sm">
                Category : {category}
              </span>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Product;
