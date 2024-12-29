import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/ProductReducer";

const ProductContext = createContext();
const API = `https://latkanproductapi.vercel.app/api/products`;

const initialState = {
  isError: false,
  isLoading: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: [],
};

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      // Fetch data from API
      const res = await axios.get(url);

      // Ensure the response data is valid
      const products = res.data;
      if (!products || !products.Products) {
        throw new Error("Invalid product data structure.");
      }

      // Log products for debugging
      // console.log("Fetched Products:", products.Products);

      dispatch({ type: "SET_API_DATA", payload: products.Products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };
  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      // Fetch data from API
      const res = await axios.get(url);

      // Ensure the response data is valid
      const singleProduct = res.data;

      dispatch({ type: "SET_SINGLE_API_DATA", payload: singleProduct[0] });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <ProductContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

//custom hook

const useProductContext = () => {
  return useContext(ProductContext);
};

export { ProductProvider, useProductContext };
