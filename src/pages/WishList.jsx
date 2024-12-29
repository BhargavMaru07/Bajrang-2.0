import React from "react";
import { useWishListContext } from "../Context/WishListContext";
import Navigate from "../Shared/Navigate";
import Product from "../Shared/Product";

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
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {wishList.map((product) => {
            return <Product {...product} key={product.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default WishList;
