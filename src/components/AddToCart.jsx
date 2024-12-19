import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
// import AmoutCartToggle from './AmoutCartToggle';
import { NavLink } from "react-router-dom";
import Button from "../Styles/Button";
import { useCartContext } from "../Context/CartContext";
import AmountCartToggle from "../Shared/AmountCartToggle";
import { ICONS } from "../assets/Icons/icon";

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();

  const { id, colors, quantity } = product;
  // console.log(quantity);
  //   const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const setDecrese = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrese = () => {
    amount < quantity ? setAmount(amount + 1) : setAmount(quantity);
  };

  return (
    <>
      <Wrapper>
        {/* <div className="colors">
          <p>
            Colors :
            {colors.map((CurColor) => {
              return (
                <button
                  key={id}
                  style={{ backgroundColor: CurColor }}
                  className={
                    color === CurColor ? 'btnStyle active' : 'btnStyle'
                  }
                  onClick={() => setColor(CurColor)}>
                  {color === CurColor ? (
                    <FaCheck className="checkStyle" />
                  ) : null}
                </button>
              );
            })}
          </p>
        </div> */}

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
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section``;

export default AddToCart;
