import React from "react";

import { format } from "date-fns";
import Link from "next/link";

import type { Post } from "contentlayer/generated";

interface ListItemProps {
  className?: string;
  item: Post;
  children: React.ReactNode;
}

// sm:first:rounded-t-md sm:last:rounded-b-md
function ListItem({ className = "", item, children }: ListItemProps) {
  return (
    <li className="group transition first:rounded-t-md last:rounded-b-md focus:outline-none">
      <Link href={item.url}>
        <a className={`block transition duration-150 ease-in-out ${className}`}>
          {children}
        </a>
      </Link>
    </li>
  );
}

ListItem.Title = function ListItemTitle({ children }: { children?: string }) {
  return (
    <h3 className="overflow-ellipsis font-semibold leading-5 text-dark-1000 transition group-hover:text-dark-700 group-hover:underline dark:text-dark-200 dark:group-hover:text-dark-500">
      {children}
    </h3>
  );
};

ListItem.Date = function ListItemDate({ createdAt }: { createdAt: string }) {
  return (
    <div className="flex items-center text-sm leading-5 text-gray-500 dark:text-dark-500">
      <span>
        <time dateTime={createdAt}>{format(new Date(createdAt), "PPP")}</time>
      </span>
    </div>
  );
};

ListItem.Tag = function ListItemTags({
  color,
  children,
  className = "",
}: {
  color: string;
  children: string;
  className?: string;
}) {
  const style: React.CSSProperties = {
    color: color,
    backgroundColor: `${color}0D`,
  };

  return (
    <span
      className={`rounded px-2.5 py-1 text-center font-semibold capitalize transition focus:outline-none sm:py-1 ${className}`}
      style={style}
    >
      {children}
    </span>
  );
};

ListItem.OpenIcon = function ListItemOpenIcon() {
  return (
    <svg
      className="h-5 w-5 text-dark-1000 group-hover:text-dark-600 dark:text-dark-500"
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
