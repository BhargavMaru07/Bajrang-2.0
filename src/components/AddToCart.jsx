import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";
import AmountCartToggle from "../Shared/AmountCartToggle";
import { ICONS } from "../assets/Icons/icon";

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();

  const { id, colors, quantity } = product;
  const [amount, setAmount] = useState(1);

  const setDecrese = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrese = () => {
    amount < quantity ? setAmount(amount + 1) : setAmount(quantity);
  };

  return (
    <>
      <section>
        {/* Amount cart toggle */}

        <AmountCartToggle
          amount={amount}
          setDecrese={setDecrese}
          setIncrese={setIncrese}
        />

        <NavLink
          to="/cart"
          onClick={() => addToCart(id, colors, amount, product)}
        >
          <button className="flex items-center justify-center w-full gap-2 p-3 mt-4 text-white transition-all duration-300 rounded-lg dura hover:bg-head bg-btn">
            Add To Bag <ICONS.BAG />
          </button>
        </NavLink>
      </section>
    </>
  );
};

export default AddToCart;
