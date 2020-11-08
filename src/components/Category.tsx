import clsx from "clsx";
import React from "react";

interface CategoryProps {
  children: string;
  isActive?: boolean;
}

function Category({ children, isActive = false }: CategoryProps) {
  return (
    <button
      className={clsx(
        "font-medium text-dark-1000 border-b-2 border-transparent focus:outline-none focus:border-dark-1000 hover:border-dark-1000 pb-1",
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
