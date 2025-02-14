import { useState } from "react";

export const usePagination = (perPageRecords, totalPageRecords) => {
  const totalPages = Math.ceil(totalPageRecords / perPageRecords);
  const [startPageIndex, setStartPageIndex] = useState(0);
  const [endPageIndex, setEndPageIndex] = useState(perPageRecords - 1);
  const [currentPageIndex, setCurrentPageIndex] = useState(1);

  //function
  const displayPage = (pageNo) => {
    setCurrentPageIndex(pageNo);
    let start_page_index = perPageRecords * (pageNo - 1);
    let end_page_index = start_page_index + perPageRecords - 1;
    setStartPageIndex(start_page_index);
    setEndPageIndex(end_page_index);
  };

  return [
    totalPages,
    startPageIndex,
    endPageIndex,
    currentPageIndex,
    displayPage,
  ];
};
