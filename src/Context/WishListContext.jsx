import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/WishListReducer";
import { getWishData, setWishData } from "../helper/localStorage";

const wishListContext = createContext();

const initialState = {
  // wishList :[],
  wishList: getWishData(),
};

const WishListContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToWishList = (singleProduct) => {
    dispatch({ type: "ADD_TO_WISHLIST", payload: singleProduct });
  };

  const removeToWishList = (id) => {
    dispatch({ type: "REMOVE_TO_WISHLIST", payload: id });
    console.log(id);
  };

  useEffect(() => {
    //set localStorage data
    setWishData(state.wishList);
  }, [state.wishList]);

  return (
    <wishListContext.Provider
      value={{
        ...state,
        addToWishList,
        removeToWishList,
      }}
    >
      {children}
    </wishListContext.Provider>
  );
};

//use custom hook
const useWishListContext = () => {
  return useContext(wishListContext);
};

export { WishListContextProvider, useWishListContext };
