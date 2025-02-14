import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Pagination2 = ({ count, displayPage, startPageIndex, endPageIndex, totalResults }) => {
  return (
    <Stack
      spacing={6}
      className="flex sm:!flex-row items-center !justify-between"
    >
      <div className="!mt-4">
        <p className="text-sm text-gray-700">
          Showing <span className="font-medium">{startPageIndex + 1}</span> to{" "}
          <span className="font-medium">{endPageIndex + 1}</span> of{" "}
          <span className="font-medium">{totalResults}</span> results
        </p>
      </div>
      <Pagination
        onChange={(event, value) => displayPage(value)}
        count={count}
        variant="outlined"
        shape="rounded"
        className="sm:!mt-0 !mt-4"
      />
    </Stack>
  );
};

export default Pagination2;
