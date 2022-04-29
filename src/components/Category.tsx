import React from "react";

import clsx from "clsx";

interface CategoryProps {
  children: string;
  isActive?: boolean;
}

function Category({ children, isActive = false }: CategoryProps) {
  return (
    <button
      className={clsx(
        "border-b-2 border-transparent pb-1 font-medium text-dark-1000 hover:border-dark-1000 focus:border-dark-1000 focus:outline-none",
        {
          underline: isActive,
        }
      )}
      type="button"
    >
      {children}
    </button>
  );
}

export default Category;
