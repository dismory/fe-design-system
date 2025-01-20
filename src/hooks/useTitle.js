import React from "react";

export const useTitle = (title) => {
  React.useEffect(() => {
    document.title = title;
  }, [title]);
};

export default useTitle;
