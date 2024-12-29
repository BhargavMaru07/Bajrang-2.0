import React from "react";
import { useWishListContext } from "../Context/WishListContext";
import Navigate from "../Shared/Navigate";
import Product from "../Shared/Product";
import cartEmpty from "../assets/images/cartEmpty.svg";
import { Link } from "react-router-dom";

const WishList = () => {
  const { wishList } = useWishListContext();

  return (
    <>
      <div className="mx-auto max-w-7xl md:p-8">
        <Navigate name={"Profile"} item={"Wishlist"} />
        <div className="p-4 sm:p-0">
          <h1 className="mb-2 text-2xl font-bold">My Wishlist</h1>
          <p className="mb-6 text-text">
            A collection of favorite items saved for future purchase or
            inspiration.
          </p>
        </div>
        {wishList.length === 0 ? (
          <div className="flex flex-col items-center justify-center w-full mb-4">
            <div className="md:max-w-[280px] max-w-[180px]">
              <img src={cartEmpty} alt="cart is empty" />
              <h2 className="mt-4 font-semibold text-center text-black sm:text-2xl">
                Your Wishlist is Empty !
              </h2>
            </div>
            <div className="text-center">
              <p className="mt-2 text-text">
                Explore more and shortlist Latkan items.
              </p>
              <Link to="/">
                <button className="px-10 py-3 mt-2 text-white transition-all duration-300 rounded-full bg-head hover:bg-btn">
                  Explore
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
            {wishList.map((product) => {
              return <Product {...product} key={product.id} />;
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default WishList;
