const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      let priceArr = action.payload.map((curElem) => curElem.price);
      let maxPrice = Math.max(...priceArr);

      return {
        ...state,
        filter_product: [...action.payload],
        all_product: [...action.payload],
        filters: {
          ...state.filters,
          maxPrice,
          Price: maxPrice,
        },
      };

    case "GRID_VIEW":
      return {
        ...state,
        Grid_View: true,
      };

    case "LIST_VIEW":
      return {
        ...state,
        Grid_View: false,
      };

    case "SET_SORT_VALUE":
      return {
        ...state,
        sortValue: action.payload,
      };

    case "SORTING_DATA":
      let newSortData;
      const { filter_product, sortValue } = state;
      let tempSortProduct = filter_product;

      const sortingProducts = (a, b) => {
        //sorting by lowest price
        if (sortValue === "lowest") {
          return a.price - b.price;
        }

        //sorting by highest price
        if (sortValue === "highest") {
          return b.price - a.price;
        }

        //Sorting a-z :
        if (sortValue === "a-z") {
          return a.name.localeCompare(b.name);
        }

        //Sorting z-a :
        if (sortValue === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };

      newSortData = tempSortProduct.sort(sortingProducts);

      return {
        ...state,
        filter_product: newSortData,
      };

    //set filter value

    case "UPDATE_FILTER_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    //set filter Product

    case "FILTER_PRODUCTS":
      let { all_product } = state;
      let tempFilterProduct = [...all_product];

      const { text, category, color, Price, title } = state.filters;

      if (text) {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.name.toLowerCase().includes(text);
          // return curElem.name.toLowerCase().startsWith(text);
        });
      }

      if (title !== "all") {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return title === curElem.name.toLowerCase();
        });
      }

      if (category !== "all") {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.category === category;
        });
      }

      if (color !== "all") {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.colors.includes(color);
        });
      }

      if (Price) {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.price <= Price;
        });
      }

      return {
        ...state,
        filter_product: tempFilterProduct,
      };

    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "all",
          title: "all",
          color: "all",
          maxPrice: state.filters.maxPrice,
          Price: state.filters.maxPrice,
          minPrice: state.filters.minPrice,
        },
      };

    default:
      return state;
  }
};
export default FilterReducer;
