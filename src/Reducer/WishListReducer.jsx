const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      const singleProduct = action.payload;
      const { id, colors, name, MRP, image, price, category } = singleProduct;
      let existingProduct = state.wishList.find((curEle) => {
        return curEle.id === id;
      });

      if (existingProduct) {
        let updatedProduct = state.wishList.map((curElem) => {
          if (curElem.id === id) {
            return {
              ...curElem,
            };
          }
        });
        return {
          ...state,
          wishList: updatedProduct,
        };
      } else {
        let wishListProduct = {
          id: id,
          name: name,
          colors: colors[0],
          MRP,
          image: image[0].url,
          price,
          category,
        };

        return {
          ...state,
          wishList: [...state.wishList, wishListProduct],
        };
      }

    case "REMOVE_TO_WISHLIST":
      let updatedItem = state.wishList.filter(
        (curItem) => curItem.id !== action.payload
      );

      return {
        ...state,
        wishList: updatedItem,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
