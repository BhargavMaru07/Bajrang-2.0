const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { id, colors, amount, product } = action.payload;
      let existingProduct = state.cart.find(
        (curEle) => curEle.id === id + colors[0]
      );

      if (existingProduct) {
        let updatedProduct = state.cart.map((curElem) => {
          if (curElem.id === id + colors[0]) {
            let newAmount = curElem.amount + amount;

            if (newAmount >= curElem.max) {
              newAmount = curElem.max;
            }

            return {
              ...curElem,
              amount: newAmount,
            };
          } else {
            return {
              ...curElem,
            };
          }
        });
        return {
          ...state,
          cart: updatedProduct,
        };
      } else {
        let CartProduct = {
          id: id + colors[0],
          name: product.name,
          color: colors[0],
          amount,
          MRP: product.MRP,
          discount: product.discount,
          image: product.image[0].url,
          price: product.price,
          max: product.quantity,
        };

        return {
          ...state,
          cart: [...state.cart, CartProduct],
        };
      }

    case "SET_INCREMENT":
      let updatedProduct = state.cart.map((curEle) => {
        if (curEle.id === action.payload) {
          let newIncrement = curEle.amount + 1;
          if (newIncrement >= curEle.max) {
            newIncrement = curEle.max;
          }

          return {
            ...curEle,
            amount: newIncrement,
          };
        } else {
          return curEle;
        }
      });

      return {
        ...state,
        cart: updatedProduct,
      };

    case "SET_DECREMENT":
      let updatedProduct2 = state.cart.map((curEle) => {
        if (curEle.id === action.payload) {
          let newDecrement = curEle.amount - 1;
          if (newDecrement <= 1) {
            newDecrement = 1;
          }

          return {
            ...curEle,
            amount: newDecrement,
          };
        } else {
          return curEle;
        }
      });

      return {
        ...state,
        cart: updatedProduct2,
      };

    case "REMOVE_ITEM":
      let updatedItem = state.cart.filter(
        (curItem) => curItem.id !== action.payload
      );

      return {
        ...state,
        cart: updatedItem,
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    // case "CART_TOTAL_ITEM":
    //   let cartItem = state.cart.reduce((initialVal, curEle) => {
    //     let { amount } = curEle;
    //     initialVal = initialVal + amount;
    //     return initialVal;
    //   }, 0);

    //   return {
    //     ...state,
    //     total_item: cartItem,
    //   };

    // case "CART_TOTAL_PRICE":
    //   let totalPrice = state.cart.reduce((initialVal, curEle) => {
    //     let { amount, price } = curEle;
    //     initialVal = initialVal + amount * price;
    //     return initialVal;
    //   }, 0);

    //   return {
    //     ...state,
    //     total_amount: totalPrice,
    //   };

    // This code is simplify by above code.

    case "CART_TOAL_PRICE_ITEM":
      let { paying_amount, total_item, total_price, total_discount } =
        state.cart.reduce(
          (accumulator, curEle) => {
            let { amount, discount, MRP, price } = curEle;

            accumulator.total_item += amount;
            accumulator.paying_amount += price * amount;
            accumulator.total_price += amount * MRP;
            accumulator.total_discount += discount * amount;

            return accumulator;
          },
          {
            total_item: 0,
            total_price: 0,
            paying_amount: 0,
            total_discount: 0,
          }
        );
      return {
        ...state,
        total_item: total_item,
        total_price: total_price,
        paying_amount: paying_amount,
        total_discount: total_discount,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
