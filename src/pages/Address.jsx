import React from "react";
import EmptyAddress from "../components/EmptyAddress";
import Modal from "../components/Modal";
import { useAddressContext } from "../Context/AddressContext";
import { ICONS } from "../assets/Icons/icon";


const Address = () => {
  let { addresses } = useAddressContext();

  console.log(addresses);

  return (
    <div class="container px-6 py-2 mx-auto mt-10 mb-8 max-w-7xl sm:px-9 ">
      <div class="flex justify-between items-center flex-wrap gap-4">
        <div>
          <h1 class="text-3xl font-bold text-gray-800">My Address</h1>
          <p class="text-gray-500 mt-4">
            Manage your delivery addresses with ease on our Address Page.
          </p>
        </div>
        <Modal />
      </div>


      {!addresses.length > 0 ? (
        <EmptyAddress />
      ) : (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 mt-4">Your Addresses</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {addresses.map((address) => (
              <div
                key={address._id}
                className="bg-white border border-gray-200 rounded-lg  p-6 shadow-md hover:shadow-lg transition-all hover:scale-105 duration-300 ease-in-out flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {address.fullName}
                  </h2>
                  <p className="text-sm text-gray-500">{address.phoneNumber}</p>
                  <p className="text-sm text-gray-700 mt-2">
                    {address.houseNumber}, {address.area}
                  </p>
                  <p className="text-sm text-gray-700 mt-1">
                    {address.city}, {address.state} - {address.pincode}
                  </p>
                </div>
                <div className="flex justify-end mt-4">
                  <button
                    className="bg-yellow-50 hover:bg-yellow-100 p-2 rounded-full transition-colors duration-200 flex items-center justify-center"
                    title="Edit Address"
                  >
                    <ICONS.EDIT
                      size={20}
                      className="text-yellow-600 hover:text-yellow-700 transition-colors duration-200"
                    />
                  </button>
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
