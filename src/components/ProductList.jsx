import React from "react";
import { useFilterContext } from "../Context/FilterContext";
import GridView from "./GridView";
import ListView from "./ListView";
// import Pagination from "../Shared/Pagination";
import Pagination2 from "../Shared/Pagination2";
import { usePagination } from "../Hooks/pagination";

const ProductList = () => {
  const { filter_product, Grid_View } = useFilterContext();
  // console.log(filter_product);
  const [
    totalPages,
    startPageIndex,
    endPageIndex,
    currentPageIndex, //eslint-disable-line
    displayPage,
  ] = usePagination(9, filter_product.length);
  // console.log(filter_product.length);

  if (Grid_View === true) {
    return (
      <>
        <GridView
          products={filter_product}
          startPageIndex={startPageIndex}
          endPageIndex={endPageIndex}
        />
        <Pagination2
          count={totalPages}
          displayPage={displayPage}
          startPageIndex={startPageIndex}
          endPageIndex={endPageIndex}
        />
      </>
    );
  }
  if (Grid_View === false) {
    return (
      <>
        <ListView
          products={filter_product}
          startPageIndex={startPageIndex}
          endPageIndex={endPageIndex}
        />
        <Pagination2
          count={totalPages}
          displayPage={displayPage}
          startPageIndex={startPageIndex}
          endPageIndex={endPageIndex}
        />
      </>
    );
  }

  return (
    <>
      <div>Product List</div>
    </>
  );
};

export default ProductList;
