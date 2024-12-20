import React, { useState } from "react";
import { useCartContext } from "../Context/CartContext";
import { ICONS } from "../assets/Icons/icon";
import CartItem from "../components/CartItem";
import Navigate from "../Shared/Navigate";
import cartEmpty from "../assets/images/cartEmpty.svg";
import Button from "../Styles/Button";
import { Link } from "react-router-dom";

const Cart = () => {
  // Sample cart data
  const {
    cart,
    clearCart,
    shipping_fee,
    total_price,
    total_discount,
    paying_amount,
  } = useCartContext();

  return (
    <div className="mx-auto max-w-7xl md:p-8">
      <Navigate name={"Shop"} item={"Cart"} />
      <div className="p-4 sm:p-0">
        <h1 className="mb-2 text-2xl font-bold">Shopping Bag</h1>
        <p className="mb-6 text-gray-500">
          Explore a stunning collection of latkan designs that combine
          traditional charm with contemporary elegance, perfect for enhancing
          the beauty of any ethnic outfit.
        </p>
      </div>
      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center w-full mb-4">
          <div className="md:max-w-[280px] max-w-[180px]">
            <img src={cartEmpty} alt="cart is empty" />
            <h2 className="mt-4 font-semibold text-center text-black sm:text-2xl">
              Your Bag is Empty !
            </h2>
          </div>
          <div className="text-center">
            <p className="mt-2 text-text">
              Explore more and shortlist Latkan items.
            </p>
            <Link to="/">
              <button className="px-10 py-3 mt-2 text-white transition-all duration-300 rounded-full bg-head hover:bg-btn">
                Explore
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-8 p-4 lg:flex-row">
          {/* Cart Items */}
          <div className="flex-1">
            {cart.map((item) => {
              return <CartItem key={item.id} {...item} />;
            })}
          </div>

          {/* Order Summary */}
          <div className="w-full p-6 bg-white rounded-lg shadow-md lg:w-1/3">
            <h2 className="mb-4 text-xl font-bold">Order Summary</h2>
            <div className="flex justify-between mb-2 text-gray-600">
              <span>Total</span>
              <span>₹{total_price.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2 text-green-500">
              <span>Discount</span>
              <span>{total_discount}.00%</span>
            </div>
            <div className="flex justify-between pb-4 mb-4 text-gray-600 border-b">
              <span>Subtotal</span>
              <span>₹{paying_amount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xl font-bold">
              <span>You Pay</span>
              <span>₹{paying_amount.toFixed(2)}</span>
            </div>
            <button className="w-full px-4 py-2 mt-6 text-white bg-pink-500 rounded-lg hover:bg-pink-600">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
