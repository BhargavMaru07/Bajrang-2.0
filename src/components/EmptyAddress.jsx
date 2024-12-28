import React from "react";
import emptyAddress from "../assets/images/EmptyAddressImage.svg";

const EmptyAddress = () => {
  return (
    <div className="flex items-center justify-center bg-white">
      <div className="text-center">
        <img
          alt="EmptyAddress Image"
          className="mx-auto mt-8 mb-8 md:"
          height="200"
          src={emptyAddress}
          width="300"
        />
        <h1 className="text-2xl font-semibold text-gray-800">
          Your Address is empty !!
        </h1>
        <p className="mt-6 text-gray-500">
          Please add a new delivery address for your order
        </p>
      </div>
    </div>
  );
};

export default EmptyAddress;
