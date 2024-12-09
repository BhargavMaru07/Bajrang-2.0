import React from "react";
import TruncatedTitle from "../helper/TruncatedTitle";
import CurrencyFormate from "../helper/CurrencyFormate";
// import image_1 from "https://i.ibb.co/0fsPZ5c/Product1.jpg";

const Product = (Product) => {
  // console.log(Product);

  const { image, name, price } = Product;

  return (
    <div className="p-2">
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

        <div className="p-1 sm:p-4">
          <h4 className="font-semibold text-text text-md">
            {/* <TruncatedTitle name={name} /> */}
            {name}
          </h4>
          <div className="flex items-center justify-between mt-2">
            <span className="text-lg font-bold text-pink-500">
              {<CurrencyFormate price={price} />}
            </span>
            <span className="ml-2 text-sm text-gray-400 line-through">
              {<CurrencyFormate price={price} />}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
