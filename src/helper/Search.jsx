import React from "react";
import { useFilterContext } from "../Context/FilterContext";

const SearchBar = () => {
  const {
    filters: { text },
    updateFilterValue,
  } = useFilterContext();
  return (
    <form className="max-w-md sm:w-9/12" onSubmit={(e) => e.preventDefault()}>
      <label
        htmlFor="default-search"
        className="sr-only mb-2 text-sm font-medium text-gray-900"
      >
        Search
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
          <svg
            className="h-4 w-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          name="text"
          value={text.toLowerCase()}
          className="block w-full rounded-lg border border-btn bg-gray-50 p-3 ps-10 text-sm text-gray-900 outline-none"
          placeholder="Search Hodi, Spring..."
          onChange={updateFilterValue}
          required
          autoComplete="off"
        />
      </div>
    </form>
  );
};

export default SearchBar;
