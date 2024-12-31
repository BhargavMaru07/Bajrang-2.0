"use client";

import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { Radio, RadioGroup } from "@headlessui/react";
import { Link, NavLink, useParams } from "react-router-dom";
import { useProductContext } from "../Context/ProductContext";
import Images from "../Shared/Images";
import CurrencyFormate from "../helper/CurrencyFormate";
import AddToCart from "../components/AddToCart";
import { ICONS } from "../assets/Icons/icon";
import Navigate from "../Shared/Navigate";
import { useWishListContext } from "../Context/WishListContext";

const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  path: "#",
  breadcrumbs: [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Product", path: "/shop" },
  ],
  images: [
    {
      src: "https://tailwindui.com/plus/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/plus/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/plus/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/plus/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
};
// const reviews = { href: "#", average: 4, totalCount: 117 };

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

const API = "https://latkanproductapi.vercel.app/api/singleproduct";

const ProductOverview = () => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const { getSingleProduct, singleProduct } = useProductContext();
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

  useEffect(() => {
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
        <div className="grid grid-cols-1 gap-10 px-0 sm:gap-6 md:grid-cols-3 lg:px-8">
          {/* Column 1: Images */}
          <div className="w-full col-span-1">
            <Images image={image} />
          </div>

          {/* Column 2: Product Info */}
          <div className="flex flex-col px-4 sm:col-span-2">
            <h1 className="mt-4 text-2xl font-semibold sm:text-3xl">{name}</h1>
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

            {/* Sizes */}
            {/* <fieldset aria-label="Choose a size" className="mt-4">
              <RadioGroup
                value={selectedSize}
                onChange={setSelectedSize}
                className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
              >
                {product.sizes.map((size) => (
                  <Radio
                    key={size.name}
                    value={size}
                    disabled={!size.inStock}
                    className={classNames(
                      size.inStock
                        ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                        : "cursor-not-allowed bg-gray-50 text-gray-200",
                      "group relative flex items-center justify-center rounded-md border px-0 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none data-[focus]:ring-2 data-[focus]:ring-indigo-500 sm:flex-1 sm:py-3"
                    )}
                  >
                    <span>{size.name}</span>
                    {size.inStock ? (
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-500"
                      />
                    ) : (
                      <span
                        aria-hidden="true"
                        className="absolute border-2 border-gray-200 rounded-md pointer-events-none -inset-px"
                      >
                        <svg
                          stroke="currentColor"
                          viewBox="0 0 100 100"
                          preserveAspectRatio="none"
                          className="absolute inset-0 text-gray-200 stroke-2 size-full"
                        >
                          <line
                            x1={0}
                            x2={100}
                            y1={100}
                            y2={0}
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                      </span>
                    )}
                  </Radio>
                ))}
              </RadioGroup>
            </fieldset> */}

            <AddToCart product={singleProduct} />

            {/* Highlights */}
            <div
              className="my-10"
              dangerouslySetInnerHTML={{ __html: highlight }}
            >
              {/* <h3 className="text-sm font-medium text-gray-900">Highlights</h3> */}
              {/* <ul className="pl-4 mt-4 space-y-2 text-sm text-gray-600 list-disc">
                {highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul> */}
            </div>

            {/* Details */}
            {/* <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Details</h3>
              <p className="mt-4 text-sm text-gray-600">{description}</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
