import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import searchproduct from "../assets/images/searchproduct.svg";
import searchnotfound from "../assets/images/searchnotfound.svg";
import { useProductContext } from "../Context/ProductContext";
import { Link } from "react-router-dom";
import Navigate from "../Shared/Navigate";

const SearchProduct = () => {
  const { products } = useProductContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredProducts([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);

    // Simulate API delay
    const timer = setTimeout(() => {
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(results);
      setIsLoading(false);
    }, 500); // Delay for loading effect

    return () => clearTimeout(timer);
  }, [searchTerm, products]);

  return (
    <>
      <Navigate name={"Search"} item={searchTerm} />
      <div className="container p-4 mx-auto max-w-7xl">
        <motion.div
          className="flex flex-col items-center justify-center gap-4 mb-6 md:flex-row"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <input
            type="search"
            placeholder="Search Product Here..."
            className="w-full px-4 py-2 border rounded-full md:w-[60%] focus:outline-none border-btn"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </motion.div>

        {searchTerm === "" ? (
          // Initial state - waiting for search
          <motion.div
            className="flex flex-col items-center justify-center gap-4 mt-10 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={searchproduct}
              alt="Search Products"
              className="max-w-[180px] md:max-w-[280px]"
            />
            <h2 className="mt-4 text-xl font-semibold">Waiting for search</h2>
            <p className="text-text">Explore more and shortlist some items.</p>
          </motion.div>
        ) : isLoading ? (
          // Show loading animation
          <motion.div
            className="flex flex-col items-center justify-center gap-4 mt-10 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-12 h-12 border-4 border-gray-300 rounded-full border-t-blue-500 animate-spin"></div>
            <h2 className="text-xl font-semibold">Searching...</h2>
          </motion.div>
        ) : filteredProducts.length > 0 ? (
          // Display matching products with animation
          <motion.div
            className="flex flex-col items-center justify-center max-w-4xl gap-3 mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProducts.map((item, index) => (
              <motion.div
                key={item.id}
                className="w-full p-2 border rounded-full border-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link to={`/singleproduct/${item.id}`}>
                  <h1 className="text-lg text-text">{item.name}</h1>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          // No products found - show "not found" image with fade-in animation
          <motion.div
            className="flex flex-col items-center justify-center gap-4 mt-10 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={searchnotfound}
              alt="No Products Found"
              className="max-w-[180px] md:max-w-[280px]"
            />
            <h2 className="mt-4 text-xl font-semibold">No products found</h2>
            <p className="text-text">Try searching for something else.</p>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default SearchProduct;
