import React, { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Bajrang Latkan | ${title}`;
  }, []);
  return 0;
};

export default useTitle;
