"use client";
import React, { useEffect, useState } from "react";
import { Radio, RadioGroup } from "@headlessui/react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../Context/ProductContext";
import Images from "../Shared/Images";
import CurrencyFormate from "../helper/CurrencyFormate";
import AddToCart from "../components/AddToCart";
import { ICONS } from "../assets/Icons/icon";
import Navigate from "../Shared/Navigate";
import { useWishListContext } from "../Context/WishListContext";
import useTitle from "../Hooks/title";
import Progress from "../helper/Progress";

const product = {
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
};

const API = "https://latkanproductapi.vercel.app/api/singleproduct";

const ProductOverview = () => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const { getSingleProduct, singleProduct, isSingleLoading } =
    useProductContext();
  const { addToWishList, wishList, removeToWishList } = useWishListContext();

  const {
    name,
    price,
    description,
    image,
    colors,
    highlight,
    quantity,
    MRP,
    discount,
  } = singleProduct;

  const { id } = useParams();
  useTitle(`Shop - ${id}`);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Fetch the product details using the ID from the URL
    getSingleProduct(`${API}?id=${id}`);
  }, [id]);

  // Check if the product is already in the wishlist
  const isProductInWishlist = wishList.some((item) => item.id === id);

  const handleWishlistToggle = () => {
    addToWishList(singleProduct);
  };

  return (
    <div className="mx-auto bg-white max-w-7xl">
      <div className="pt-6">
        {/* Breadcrumb Navigation */}
        <Navigate name={"Products"} item={id} />

        {/* Layout */}
        {isSingleLoading ? (
          <Progress />
        ) : (
          <div className="grid grid-cols-1 gap-10 px-0 sm:gap-6 md:grid-cols-3 lg:px-8">
            {/* Column 1: Images */}
            <div className="w-full col-span-1">
              <Images image={image} />
            </div>

            {/* Column 2: Product Info */}
            <div className="flex flex-col px-4 sm:col-span-2">
              <h1 className="mt-4 text-2xl font-semibold sm:text-3xl">
                {name}
              </h1>
              <p className="mt-4 sm:text-2xl text-text">{description}</p>
              <div className="flex items-center justify-between gap-4 mt-2">
                <div className="flex items-center justify-start gap-4">
                  <span className="mt-4 text-3xl font-medium text-gray-900">
                    <CurrencyFormate price={price} />
                  </span>
                  <span className="mt-4 text-xl text-gray-400 line-through">
                    {<CurrencyFormate price={MRP} />}
                  </span>
                </div>
                <div className="flex items-center justify-center p-4 rounded-full cursor-pointer bg-bg">
                  <button>
                    {isProductInWishlist ? (
                      <span
                        onClick={() => removeToWishList(id)}
                        className="text-2xl cursor-pointer text-btn"
                      >
                        <ICONS.FULLHEART />
                      </span>
                    ) : (
                      <span
                        onClick={() => handleWishlistToggle(singleProduct)}
                        className="text-2xl cursor-pointer text-btn"
                      >
                        <ICONS.HEART />
                      </span>
                    )}
                  </button>
                </div>
              </div>

              {/* Colors */}
              <fieldset aria-label="Choose a color" className="mt-4">
                <h2 className="mb-4 text-base font-medium text-[#1B3030] title-font">
                  Select Color :
                </h2>
                <RadioGroup
                  value={selectedColor}
                  onChange={setSelectedColor}
                  className="flex items-center gap-x-3"
                >
                  {colors?.map((color) => (
                    <Radio
                      key={color}
                      value={color}
                      aria-label={color}
                      className={`"relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none data-[checked]:ring-2 data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1"`}
                    >
                      <span
                        aria-hidden="true"
                        className="border rounded-full size-8 border-black/10"
                        style={{
                          background: color,
                        }}
                      />
                    </Radio>
                  ))}
                </RadioGroup>
              </fieldset>

              <AddToCart product={singleProduct} />

              {/* Highlights */}
              <div
                className="my-10"
                dangerouslySetInnerHTML={{ __html: highlight }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductOverview;
