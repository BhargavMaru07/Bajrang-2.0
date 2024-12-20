import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/CartReducer";
import { getCartData, setCartData } from "../helper/localStorage";

const cartContext = createContext();

const initialState = {
  // cart: [],
  cart: getCartData(),
  total_item: 0,
  total_price: 0,
  total_discount: 0,
  paying_amount: 0,
  shipping_fee: 500,
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, colors, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, colors, amount, product } });
  };

  const setIncrement = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

  const setDecrement = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  useEffect(() => {
    dispatch({ type: "CART_TOAL_PRICE_ITEM" });
    //set localStorage data
    setCartData(state.cart);
  }, [state.cart]);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <cartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        setIncrement,
        setDecrement,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

//custom hook

const useCartContext = () => {
  return useContext(cartContext);
};

export { CartContextProvider, useCartContext };
