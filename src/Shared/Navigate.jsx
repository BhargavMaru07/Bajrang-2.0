import React from "react";
import { Link } from "react-router-dom";
import { ICONS } from "../assets/Icons/icon";

const Navigate = ({ name,item }) => {
  return (
    <>
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="mb-4">
        <ol
          role="list"
          className="flex items-center max-w-2xl px-4 mx-auto space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"
        >
          <li>
            <Link to="/" className="text-sm font-medium text-gray-900">
              <ICONS.HOME />
            </Link>
          </li>
          <li>
            <span className="mx-2 text-gray-400">/</span>
            <Link to="/shop" className="text-sm font-medium text-gray-900">
              {name}
            </Link>
          </li>
          <span className="mx-2 text-gray-400">/</span>
          <li className="text-sm font-medium text-gray-500">{item}</li>
        </ol>
      </nav>
    </>
  );
};

export default Navigate;
