import { Item } from "@types/DataTypes";
import { format } from "date-fns";
import Link from "next/link";
import React from "react";

interface ListItemProps {
  className?: string;
  item: Item;
}

const defaultItem: Item = {
  title: "Blog Post",
  link: "/",
  img: "/",
  description: "My Blog Post",
  id: "1",
  tags: [{ title: "Startups", link: "", className: "" }],
  createdAt: "2020-12-29T23:00:00.000Z",
};

// sm:first:rounded-t-md sm:last:rounded-b-md
function ListItem({ className = "", item = defaultItem }: ListItemProps) {
  return (
    <li className="transition focus:outline-none hover:bg-geist-50 active:bg-geist-10 group first:rounded-t-md last:rounded-b-md">
      <Link href={item.link}>
        <a className={`block transition duration-150 ease-in-out ${className}`}>
          {/* maybe move border classes to top again and use divide instead? not sure if bottom for last element is good */}
          <div className="flex items-center py-4 sm:py-2.5">
            <div className="flex-1 min-w-0 sm:flex sm:items-center sm:justify-between">
              <div>
                <div
                  className="text-lg font-semibold leading-5 underline transition group-hover:underline group-hover:text-dark-800 text-dark-900 overflow-ellipsis"
                  // style={{
                  //   textDecoration: "underline",
                  //   textDecorationColor: "gray",
                  // }}
                >
                  {item.title}
                </div>
                <div className="flex mt-1">
                  <div className="flex items-center text-sm leading-5 text-gray-500">
                    <span>
                      <time dateTime={item.createdAt}>
                        {format(new Date(item.createdAt), "PPP")}
                      </time>
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 mt-1 sm:mt-0">
                <div className="max-w-sm horizontal-flex-scroll">
                  {item.tags?.map((tag) => {
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
              </div>
            </div>
            <div className="flex-shrink-0 ml-5">
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
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default ListItem;
