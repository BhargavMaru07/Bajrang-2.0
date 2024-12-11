import React from "react";
import Progress from "../helper/Progress";
import { useProductContext } from "../Context/ProductContext";
import Product from "../Shared/Product";

const Popular = () => {
  const { products, isLoading } = useProductContext();

  return (
    <section className="px-4 py-8 md:px-12">
      <div className="mx-auto mb-12 max-w-7xl">
        <h2 className="text-2xl font-semibold text-head">Our</h2>
        <h3 className="mb-4 text-3xl font-semibold text-black">
          Popular Latkans
        </h3>
        <p className="mb-8 text-gray-500">
          Explore our range of Popular Latkan Products to discover the latest
          and most exquisite designs that everyone is raving about!
        </p>
      </div>

      <div>
        {isLoading ? (
          <Progress />
        ) : (
          <div className="container grid grid-cols-2 mx-auto sm:grid-cols-3 lg:grid-cols-5 max-w-7xl">
            {products.slice(5, 16).map((product) => (
              <Product key={product.id} {...product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Popular;
