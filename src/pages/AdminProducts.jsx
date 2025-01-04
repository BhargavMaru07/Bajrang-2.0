import React, { useState } from "react";
import { ICONS } from "../assets/Icons/icon";
import { useProductContext } from "../Context/ProductContext";
import CurrencyFormate from "../helper/CurrencyFormate";
import Progress from "../helper/Progress";

const AdminProducts = () => {
  const { products, isLoading } = useProductContext();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredProducts = products.filter((product) => {
    const name = product.name?.toLowerCase() || "";
    const id = product.id?.toLowerCase() || "";
    const price = product.price?.toString().toLowerCase() || "";
    return (
      name.includes(searchTerm) ||
      id.includes(searchTerm) ||
      price.includes(searchTerm)
    );
  });

  if (isLoading) {
    return <Progress />;
  }

  return (
    <div className="bg-gray-100">
      <div className="container p-4 mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div className="relative w-full sm:w-1/3">
            <input
              className="w-full p-2 pr-10 border border-gray-300 rounded"
              placeholder="Search"
              type="text"
              value={searchTerm}
              onChange={handleSearch}
            />
            <ICONS.SEARCH
              size={16}
              className="absolute w-5 text-gray-400 transition-colors duration-200 transform -translate-y-1/2 right-3 top-1/2 hover:text-gray-600"
            />
          </div>

          <div className="items-center hidden space-x-2 sm:flex">
            <button className="flex items-center px-4 py-2 text-white transition-colors duration-200 bg-blue-600 rounded hover:text-gray-300">
              <ICONS.USERS
                size={20}
                className="mr-2 tracking-wider text-white-400"
              />
              Invite
            </button>
            <i className="text-gray-400 fas fa-ellipsis-v"></i>
          </div>
        </div>

        <div className="bg-white rounded shadow">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                    <input className="form-checkbox" type="checkbox" />
                  </th>
                  {["Product", "Id", "mrp", "Price", "category", "Colors"].map(
                    (item, index) => (
                      <th
                        key={index}
                        className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                      >
                        {item}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <tr key={product.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input className="form-checkbox" type="checkbox" />
                      </td>
                      <td className="flex items-center px-6 py-4 whitespace-nowrap">
                        <div className="w-10 h-full">
                          <img
                            alt="User profile picture"
                            className="w-full h-full rounded-lg"
                            src={product.image}
                          />
                        </div>
                        <span className="ml-4">{product.name}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {product.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <CurrencyFormate price={product.MRP} />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <CurrencyFormate price={product.price} />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {product.category}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div
                          style={{ background: product.colors[0] }}
                          className="text-white rounded-sm"
                        >
                          {product.colors[0]}
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="7"
                      className="px-6 py-4 text-center text-gray-500"
                    >
                      No Product Found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
