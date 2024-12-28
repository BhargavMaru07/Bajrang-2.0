import React from "react";
import EmptyAddress from "../components/EmptyAddress";
import Modal from "../components/Modal";

const Address = () => {
  return (
    <div className="container px-6 py-2 mx-auto mt-10 mb-8 max-w-7xl sm:px-9 ">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">My Address</h1>
          <p className="mt-4 text-gray-500">
            Manage your delivery addresses with ease on our Address Page.
          </p>
        </div>
        <Modal />
      </div>
      <EmptyAddress />
    </div>
  );
};

export default Address;
