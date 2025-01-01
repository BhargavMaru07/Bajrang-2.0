import React, { useEffect, useState } from "react";
import EmptyAddress from "../components/EmptyAddress";
import Modal from "../components/Modal";
import { useAddressContext } from "../Context/AddressContext";
import { ICONS } from "../assets/Icons/icon";

const Address = () => {

  const { addresses, deleteUserAddress } = useAddressContext();
  const [editAddress, setEditAddress] = useState(null);

  const handleEdit = (address) => {
    setEditAddress(address);
  };

  const handleDelete = async (address) => {
    const confirmed = window.confirm(
      "Are you sure, you want to delete this address?"
    );
    if (confirmed) {
      await deleteUserAddress(address);
    }
  };

 
  return (
    <div className="container px-6 py-2 mx-auto mt-10 mb-8 max-w-7xl sm:px-9 ">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">My Address</h1>
          <p className="mt-4 text-gray-500">
            Manage your delivery addresses with ease on our Address Page.
          </p>
        </div>
        <Modal editAddress={editAddress} setEditAddress={setEditAddress} />
      </div>
      {addresses.length === 0 ? (
        <EmptyAddress />
      ) : (
        <div className="mt-12">
          <h2 className="mt-4 mb-6 text-2xl font-bold">Your Addresses</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {addresses.map((address) => (
              <div
                key={address._id}
                className="flex flex-col justify-between p-6 transition-all duration-300 ease-in-out bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg hover:scale-105"
              >
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {address.fullName}
                  </h2>
                  <p className="text-sm text-gray-500">{address.phoneNumber}</p>
                  <p className="mt-2 text-sm text-gray-700">
                    {address.houseNumber}, {address.area}
                  </p>
                  <p className="mt-1 text-sm text-gray-700">
                    {address.city}, {address.state} - {address.pincode}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <p className="relative bottom-0 text-text">
                    {address.selectedType}
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(address)}
                      className="flex items-center justify-center p-2 transition-colors duration-200 rounded-full bg-yellow-50 hover:bg-yellow-100"
                      title="Edit Address"
                    >
                      <ICONS.EDIT
                        size={20}
                        className="text-yellow-600 transition-colors duration-200 hover:text-yellow-700"
                      />
                    </button>
                    <button
                      onClick={() => handleDelete(address)}
                      className="flex items-center justify-center p-2 transition-colors duration-200 rounded-full bg-red-50 hover:bg-red-100"
                      title="Edit Address"
                    >
                      <ICONS.DELETEICON
                        size={18}
                        className="text-red-600 transition-colors duration-200 hover:text-red-700"
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Address;
