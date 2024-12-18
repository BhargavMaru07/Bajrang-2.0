import React, { useState, useEffect } from "react";
import Product from "../Shared/Product";
import SearchBar from "../helper/Search";
import { useFilterContext } from "../Context/FilterContext";
// import axios from "axios";

const SearchProduct = () => {
  const { filter_product } = useFilterContext();
  console.log(filter_product);

  //   const [products, setProducts] = useState([]); // All products
  //   const [searchQuery, setSearchQuery] = useState(""); // User search input
  //   const [filteredProducts, setFilteredProducts] = useState([]); // Filtered products

  // Update filtered products based on search query
  //   useEffect(() => {
  //     const results = products.filter((product) =>
  //       product.name.toLowerCase().includes(searchQuery.toLowerCase())
  //     );
  //     setFilteredProducts(results);
  //   }, [searchQuery, products]);

  return (
    <div className="p-6 mx-auto max-w-7xl">
      <h1 className="mb-4 text-2xl font-bold">Product Search</h1>

      {/* Search Input */}
      <SearchBar />

      {/* Product List */}
      {filter_product.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {filter_product.map((product) => {
            return <Product {...product} key={product.id} />;
          })}
        </div>
      ) : (
        <div className="mt-10 text-center text-gray-500">
          <p>No products found. Please refine your search.</p>
        </div>
      )}
    </div>
  );
};

export default SearchProduct;
