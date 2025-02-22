import React from "react";
import { useCartContext } from "../Context/CartContext";
import { ICONS } from "../assets/Icons/icon";
import CurrencyFormate from "../helper/CurrencyFormate";
import AmountCartToggle from "../Shared/AmountCartToggle";

const CartItem = ({
  id,
  color,
  price,
  amount,
  image,
  name,
  max,
  MRP,
  discount,
}) => {
  const { removeItem, setDecrement, setIncrement } = useCartContext();
  // console.log(max);

  return (
    <div className="relative flex justify-between p-2 mb-4 rounded-lg shadow-md sm:p-4 bg-bg">
      <div className="flex gap-4">
        <img
          src={image}
          alt={name}
          className="object-contain w-32 h-auto rounded-md"
        />
        <div className="flex flex-col items-start justify-between sm:static">
          <h2 className="font-semibold">{name}</h2>
          <p className="flex items-center gap-2 text-gray-500 sm:justify-start">
            <span className="text-xl text-black">
              <CurrencyFormate price={price} />
            </span>
            <span className="text-gray-400 line-through">
              <CurrencyFormate price={MRP} />
            </span>
            <span className="absolute px-1 text-white bg-green-500 rounded left-2 top-2 sm:static">
              - {discount}.00%
            </span>
          </p>
          <p className="flex items-center justify-start text-gray-600">
            Color :
            <span
              style={{ backgroundColor: color }}
              className="inline-block w-4 h-4 ml-2 border rounded-full"
            />
          </p>
          <p className="mb-1 text-gray-600">Size : {["x"]}</p>
          {/* <p className="text-gray-600">Qty : {amount}</p> */}
          <AmountCartToggle
            amount={amount}
            setDecrese={() => setDecrement(id)}
            setIncrese={() => setIncrement(id)}
          />
        </div>
      </div>
      <div className="absolute flex items-center justify-center w-5 h-5 sm:p-5 border rounded-lg sm:right-2 bg-[#EF4444] bottom-16 sm:top-2 right-2 p-4">
        <button onClick={() => removeItem(id)} className="text-2xl text-white">
          <ICONS.DELETE />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
