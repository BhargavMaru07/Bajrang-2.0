import { useState } from "react";

export const usePagination = (perPageReords, totalPageRecords) => {
  const totalPages = Math.ceil(totalPageRecords / perPageReords);
  const [startPageIndex, setStartPageIndex] = useState(0);
  const [endPageIndex, setEndPageIndex] = useState(perPageReords - 1);
  const [currentPageIndex, setCurrentPageIndex] = useState(1);

  //function
  const displayPage = (pageNo) => {
    setCurrentPageIndex(pageNo);
    let end_page_index = perPageReords * pageNo - 1;
    let start_page_index = perPageReords * pageNo - perPageReords;
    setStartPageIndex(start_page_index);
    setEndPageIndex(end_page_index);

    if (start_page_index == perPageReords) {
      setStartPageIndex(start_page_index - 1);
    }
  };

  return [
    totalPages,
    startPageIndex,
    endPageIndex,
    currentPageIndex,
    displayPage,
  ];
};
