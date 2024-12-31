import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useAuthContext } from "./AuthContextModified";

const AddressContext = createContext();

const AddressProvider = ({ children }) => {
  const [addresses, setAddresses] = useState([]);
  const { user } = useAuthContext();

  const getAddress = async () => {
    try {
      if (!user || !user._id) return;
      const response = await axios.get(
        "https://bajrang-2-0-server.vercel.app/api/address",
        {
          params: { createdBy: user._id },
        }
      );
      setAddresses(response.data);
    } catch (error) {
      console.error(
        "Error fetching addresses:",
        error.response?.data || error.message
      );
    }
  };

  const deleteUserAddress = async (address) => {
    try {
      await axios.delete(
        `https://bajrang-2-0-server.vercel.app/api/address/${address._id}`
      );
      setAddresses((prevAddresses) =>
        prevAddresses.filter((item) => item._id !== address._id)
      );
    } catch (error) {
      console.error(
        "Error in Deleting addresses:",
        error.response?.data || error.message
      );
    }
  };

  useEffect(() => {
    if (user) {
      getAddress();
    }
  }, [user]);

  return (
    <AddressContext.Provider
      value={{ addresses, getAddress, deleteUserAddress }}
    >
      {children}
    </AddressContext.Provider>
  );
};

const useAddressContext = () => {
  return useContext(AddressContext);
};

export { AddressProvider, useAddressContext };
