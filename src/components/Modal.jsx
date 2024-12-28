// import React, { useState, Fragment } from "react";
// import { Dialog, Transition } from "@headlessui/react";
// import { ICONS } from "../assets/Icons/icon";

// const Modal = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [data, setData] = useState({
//     fullName: "",
//     phoneNumber: "",
//     houseNumber: "",
//     area: "",
//     city: "",
//     state: "",
//     pincode: "",
//     selectedType: "HOME",
//     isDefaultAddress: false,
//   });

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   const openModal = () => {
//     setIsOpen(true);
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     console.log(data);
//     setData({
//       fullName: "",
//       phoneNumber: "",
//       houseNumber: "",
//       area: "",
//       city: "",
//       state: "",
//       pincode: "",
//       selectedType: "HOME",
//       isDefaultAddress: false,
//     });
//     closeModal();
//   };

//   return (
//     <>
//       <div className="text-center rounded-lg text-white font-bold">
//         <button
//           type="button"
//           onClick={openModal}
//           className="bg-[#6254F3] text-white px-4 py-3 rounded-full flex items-center"
//         >
//           <ICONS.LOCATION size={20} color="#fff" className="mr-2" />
//           Add Address
//         </button>
//       </div>

//       <Transition appear show={isOpen} as={Fragment}>
//         <Dialog as="div" className="relative z-20" onClose={closeModal}>
//           <Transition.Child
//             as={Fragment}
//             enter="ease-out duration-300"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="ease-in duration-200"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <div className="fixed inset-0 bg-black bg-opacity-50" />
//           </Transition.Child>

//           <div className="fixed inset-0 overflow-y-auto z-30">
//             <div className="flex min-h-full items-center justify-center p-4 text-center m-8 z-50">
//               <Transition.Child
//                 as={Fragment}
//                 enter="ease-out duration-300"
//                 enterFrom="opacity-0"
//                 enterTo="opacity-100"
//                 leave="ease-in duration-200"
//                 leaveFrom="opacity-100"
//                 leaveTo="opacity-0"
//               >
//                 <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
//                   <div className="flex justify-between items-center mb-4">
//                     <h2 className="text-2xl font-semibold text-gray-800">
//                       Add Address
//                     </h2>
//                     <button
//                       onClick={closeModal}
//                       className="text-gray-500 hover:text-gray-700 rounded-full p-2 bg-slate-300"
//                     >
//                       <ICONS.CROSS size={20} color="#1B3030" />
//                     </button>
//                   </div>
//                   <form onSubmit={handleFormSubmit}>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700">
//                           Full Name
//                         </label>
//                         <input
//                           type="text"
//                           value={data.fullName}
//                           onChange={(e) =>
//                             setData({ ...data, fullName: e.target.value })
//                           }
//                           placeholder="Enter Full Name"
//                           className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
//                           required
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700">
//                           Phone Number
//                         </label>
//                         <input
//                           type="text"
//                           value={data.phoneNumber}
//                           onChange={(e) =>
//                             setData({ ...data, phoneNumber: e.target.value })
//                           }
//                           placeholder="+91 Enter Phone Number"
//                           className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
//                           required
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700">
//                           Block / House / Building
//                         </label>
//                         <input
//                           type="text"
//                           value={data.houseNumber}
//                           onChange={(e) =>
//                             setData({ ...data, houseNumber: e.target.value })
//                           }
//                           placeholder="Block / House / Building"
//                           className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
//                           required
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700">
//                           Road / Area Colony
//                         </label>
//                         <input
//                           value={data.area}
//                           onChange={(e) =>
//                             setData({ ...data, area: e.target.value })
//                           }
//                           type="text"
//                           placeholder="Road / Area Colony"
//                           className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
//                           required
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700">
//                           City
//                         </label>
//                         <input
//                           value={data.city}
//                           onChange={(e) =>
//                             setData({ ...data, city: e.target.value })
//                           }
//                           type="text"
//                           placeholder="Enter City"
//                           className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
//                           required
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700">
//                           State
//                         </label>
//                         <input
//                           value={data.state}
//                           onChange={(e) =>
//                             setData({ ...data, state: e.target.value })
//                           }
//                           type="text"
//                           placeholder="Enter State"
//                           className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
//                           required
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700">
//                           Pincode
//                         </label>
//                         <input
//                           value={data.pincode}
//                           onChange={(e) =>
//                             setData({ ...data, pincode: e.target.value })
//                           }
//                           type="text"
//                           placeholder="Enter Pincode"
//                           className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
//                           required
//                         />
//                       </div>
//                     </div>
//                     <div className="mb-4">
//                       <label className="inline-flex items-center">
//                         <input
//                           type="checkbox"
//                           className="form-checkbox h-5 w-5 text-blue-600"
//                           checked={data.isDefaultAddress}
//                            onChange={(e) =>
//                             setData({ ...data, isDefaultAddress: e.target.checked })
//                           }
//                         />
//                         <span className="ml-2 text-gray-700">
//                           Use a default address
//                         </span>
//                       </label>
//                     </div>
//                     <div className="mb-4">
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Address Type
//                       </label>
//                       <div className="flex space-x-2 space-y-1 flex-wrap">
//                         {["HOME", "OFFICE", "OTHERS"].map((type) => (
//                           <button
//                             type="button"
//                             key={type}
//                             onClick={() => setData({...data,selectedType:type})}
//                             className={`px-6 py-2 border rounded-md text-sm font-medium ${
//                               data.selectedType === type
//                                 ? "bg-blue-500 text-white border-blue-500"
//                                 : "bg-white text-gray-700 border-gray-300"
//                             }`}
//                           >
//                             {type}
//                           </button>
//                         ))}
//                       </div>
//                     </div>
//                     <div className="flex justify-end">
//                       <button
//                         type="submit"
//                         className="px-6 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600"
//                       >
//                         Save
//                       </button>
//                     </div>
//                   </form>
//                 </Dialog.Panel>
//               </Transition.Child>
//             </div>
//           </div>
//         </Dialog>
//       </Transition>
//     </>
//   );
// };

// export default Modal;

//***************FORM USING REACT-HOOK-FORM********************************* */

import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ICONS } from "../assets/Icons/icon";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import { useAuthContext } from "../Context/AuthContextModified";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { user } = useAuthContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      houseNumber: "",
      area: "",
      city: "",
      state: "",
      pincode: "",
      selectedType: "HOME",
      isDefaultAddress: false,
    },
  });

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const onSubmit = (data) => {

     if (!user || !user._id) {
       toast.error("User not authenticated!");
       return;
     }

    fetch("http://localhost:5001/api/address", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data, createdBy: user._id }),
    })
      .then(() => {
        reset();
        closeModal();
        toast.success("Address Added!");
        // window.location.reload(); // Optional
      })
      .catch((error) => {
        console.error("Error on Address creation:", error);
      });
  };

  return (
    <>
      <div className="text-center rounded-lg text-white font-bold">
        <button
          type="button"
          onClick={openModal}
          className=" bg-pink-500 hover:bg-[#6254F3]  transition-all duration-300 ease-in-out text-white px-4 py-3 rounded-full flex items-center"
        >
          <ICONS.LOCATION size={20} color="#fff" className="mr-2" />
          Add Address
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-20" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto z-30">
            <div className="flex min-h-full items-center justify-center p-4 text-center m-8 z-50">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-semibold text-gray-800">
                      Add Address
                    </h2>
                    <button
                      onClick={closeModal}
                      className="text-gray-500 hover:text-gray-700 rounded-full p-2 bg-slate-300"
                    >
                      <ICONS.CROSS size={20} color="#1B3030" />
                    </button>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Full Name
                        </label>
                        <input
                          type="text"
                          {...register("fullName", {
                            required: "Full Name is required",
                            pattern: {
                              value: /^[A-Za-z\s]+$/,
                              message: "Full Name must contain only letters",
                            },
                          })}
                          placeholder="Enter Full Name"
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                        />
                        {errors.fullName && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.fullName.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Phone Number
                        </label>
                        <input
                          type="text"
                          {...register("phoneNumber", {
                            required: "Phone Number is required",
                            pattern: {
                              value: /^\d{10}$/,
                              message: "Phone Number must be exactly 10 digits",
                            },
                          })}
                          placeholder="Enter Phone Number"
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                        />
                        {errors.phoneNumber && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.phoneNumber.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Block / House / Building
                        </label>
                        <input
                          type="text"
                          {...register("houseNumber", {
                            required: "House Number is required",
                          })}
                          placeholder="Block / House / Building"
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                        />
                        {errors.houseNumber && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.houseNumber.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Road / Area Colony
                        </label>
                        <input
                          type="text"
                          {...register("area", {
                            required: "Area is required",
                          })}
                          placeholder="Road / Area Colony"
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                        />
                        {errors.area && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.area.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          City
                        </label>
                        <input
                          type="text"
                          {...register("city", {
                            required: "City is required",
                            pattern: {
                              value: /^[A-Za-z\s]+$/,
                              message: "City must contain only letters",
                            },
                          })}
                          placeholder="Enter City"
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                        />
                        {errors.city && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.city.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          State
                        </label>
                        <input
                          type="text"
                          {...register("state", {
                            required: "State is required",
                            pattern: {
                              value: /^[A-Za-z\s]+$/,
                              message: "State must contain only letters",
                            },
                          })}
                          placeholder="Enter State"
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                        />
                        {errors.state && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.state.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Pincode
                        </label>
                        <input
                          type="text"
                          {...register("pincode", {
                            required: "Pincode is required",
                            pattern: {
                              value: /^\d+$/,
                              message: "Pincode must contain only digits",
                            },
                          })}
                          placeholder="Enter Pincode"
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                        />
                        {errors.pincode && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.pincode.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          className="form-checkbox h-5 w-5 text-blue-600"
                          {...register("isDefaultAddress")}
                        />
                        <span className="ml-2 text-gray-700">
                          Use as default address
                        </span>
                      </label>
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Address Type
                      </label>
                      <Controller
                        name="selectedType"
                        control={control}
                        render={({ field }) => (
                          <div className="flex space-x-2 space-y-1 flex-wrap">
                            {["HOME", "OFFICE", "OTHERS"].map((type) => (
                              <button
                                type="button"
                                key={type}
                                onClick={() => field.onChange(type)}
                                className={`px-6 py-2 border rounded-md text-sm font-medium ${
                                  field.value === type
                                    ? "bg-blue-500 text-white border-blue-500"
                                    : "bg-white text-gray-700 border-gray-300"
                                }`}
                              >
                                {type}
                              </button>
                            ))}
                          </div>
                        )}
                      />
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="px-6 py-2 bg-pink-500 text-white rounded-md transition-all duration-300 ease-in-out hover:bg-[#6254F3]"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
