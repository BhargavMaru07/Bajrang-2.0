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
      const response = await axios.get("http://localhost:5001/api/address", {
        params: { createdBy: user._id },
      });
      setAddresses(response.data);
    } catch (error) {
      console.error(
        "Error fetching addresses:",
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
    <AddressContext.Provider value={{ addresses, getAddress }}>
      {children}
    </AddressContext.Provider>
  );
};

const useAddressContext = () => {
  return useContext(AddressContext);
};

export { AddressProvider, useAddressContext };
