import { Item } from "@types/DataTypes";
import { format } from "date-fns";
import Link from "next/link";
import React from "react";
import { ItemContext, useItemContext } from "src/contexts/ItemContext";

interface ListItemProps {
  className?: string;
  item: Item;
  children: React.ReactNode;
}

// sm:first:rounded-t-md sm:last:rounded-b-md
function ListItem({ className = "", item, children }: ListItemProps) {
  return (
    <ItemContext.Provider value={item}>
      <li className="transition focus:outline-none hover:bg-beige-50 active:bg-geist-10 group first:rounded-t-md last:rounded-b-md hover:bg-transparent">
        <Link href={item.link}>
          <a
            className={`block transition duration-150 ease-in-out ${className}`}
          >
            {children}
          </a>
        </Link>
      </li>
    </ItemContext.Provider>
  );
}

ListItem.Title = function ListItemTitle() {
  const { title } = useItemContext();
  return (
    <div
      className="text-lg font-semibold leading-5 underline transition group-hover:underline group-hover:text-dark-800 text-dark-900 overflow-ellipsis"
      // style={{
      //   textDecoration: "underline",
      //   textDecorationColor: "gray",
      // }}
    >
      {title}
    </div>
  );
};

ListItem.Date = function ListItemDate() {
  const { createdAt } = useItemContext();
  return (
    <div className="flex items-center text-sm leading-5 text-gray-500">
      <span>
        <time dateTime={createdAt}>{format(new Date(createdAt), "PPP")}</time>
      </span>
    </div>
  );
};

ListItem.Tags = function ListItemTags() {
  const { tags } = useItemContext();
  return (
    <div className="max-w-sm horizontal-flex-scroll">
      {tags?.map((tag) => {
        return (
          <span
            key={tag.title}
            className={`px-2.5 py-0.5 sm:py-1 text-sm font-semibold text-center ${tag.className} transition rounded focus:outline-none`}
          >
            {tag.title}
          </span>
        );
      })}
    </div>
  );
};

ListItem.OpenIcon = function ListItemOpenIcon() {
  return (
    <svg
      className="w-5 h-5 text-gray-400"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default ListItem;
