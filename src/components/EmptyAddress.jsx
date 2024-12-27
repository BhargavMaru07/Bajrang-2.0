import React from 'react'

const EmptyAddress = () => {
  return (
    <div className="flex items-center justify-center bg-white">
      <div className="text-center">
        <img
          alt="EmptyAddress Image"
          className="mx-auto mb-4"
          height="200"
          src="/src/assets/images/EmptyAddressImage.svg"
          width="300"
        />
        <h1 className="text-2xl font-semibold text-gray-800">
          Your Address is empty !!
        </h1>
        <p className="text-gray-500">
          Please add a new delivery address for your order
        </p>
      </div>
    </div>
  );
}

export default EmptyAddress