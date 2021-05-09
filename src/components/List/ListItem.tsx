import React from "react";

import clsx from "clsx";
import { format } from "date-fns";
import Link from "next/link";

import { Item, Tag } from "@typed/DataTypes";

interface ListItemProps {
  className?: string;
  item: Item;
  children: React.ReactNode;
}

// sm:first:rounded-t-md sm:last:rounded-b-md
function ListItem({ className = "", item, children }: ListItemProps) {
  return (
    <li className="transition focus:outline-none group first:rounded-t-md last:rounded-b-md">
      <Link href={item.link}>
        <a className={`block transition duration-150 ease-in-out ${className}`}>
          {children}
        </a>
      </Link>
    </li>
  );
}

ListItem.Title = function ListItemTitle({ children }: { children: string }) {
  return (
    <h3 className="font-semibold leading-5 transition group-hover:underline group-hover:text-dark-700 text-dark-1000 overflow-ellipsis">
      {children}
    </h3>
  );
};

ListItem.Date = function ListItemDate({ createdAt }: { createdAt: string }) {
  return (
    <div className="flex items-center text-sm leading-5 text-gray-500">
      <span>
        <time dateTime={createdAt}>{format(new Date(createdAt), "PPP")}</time>
      </span>
    </div>
  );
};

ListItem.Tag = function ListItemTags({ tag }: { tag: Tag }) {
  const { title } = tag;
  const names = clsx({
    "bg-green-100 text-green-600": title === "Startups",
  });

  return (
    <span
      className={`px-2.5 py-0.5 sm:py-1 text-xs sm:text-sm font-semibold text-center transition rounded focus:outline-none ${names}`}
    >
      {tag.title}
    </span>
  );
};

ListItem.OpenIcon = function ListItemOpenIcon() {
  return (
    <svg
      className="w-5 h-5 text-dark-1000 group-hover:text-dark-600"
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
