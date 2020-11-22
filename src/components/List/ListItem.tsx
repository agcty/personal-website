import Link from "next/link";
import React from "react";

interface ListItemProps {
  className?: string;
}

// sm:first:rounded-t-md sm:last:rounded-b-md
function ListItem({ className = "" }: ListItemProps) {
  return (
    <li className="sm:rounded-md hover:bg-gray-50 focus:outline-none focus:bg-gray-50">
      <Link href="/">
        <a
          className={`block transition duration-150 ease-in-out  ${className}`}
        >
          <div className="flex items-center py-4 sm:py-2.5 border-b border-beige-100">
            <div className="flex-1 min-w-0 sm:flex sm:items-center sm:justify-between">
              <div>
                <div className="text-lg font-semibold leading-5 underline group-hover:text-dark-800 text-dark-900 overflow-ellipsis undline-">
                  Back End Developer
                </div>
                <div className="flex mt-1">
                  <div className="flex items-center text-sm leading-5 text-gray-500">
                    <span>
                      <time dateTime="2020-01-07">January 7, 2020</time>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 mt-1 sm:mt-0">
                <div className="max-w-sm horizontal-flex-scroll">
                  <span className="px-2.5 py-0.5 sm:py-1 text-sm font-semibold text-center text-green-600 transition rounded focus:outline-none focus:text-white focus:bg-beige-200 bg-green-100">
                    Startups
                  </span>

                  <span className="px-2.5 py-0.5 sm:py-1 text-sm font-semibold text-center text-green-600 transition rounded focus:outline-none focus:text-white focus:bg-beige-200 bg-green-100">
                    Idea Validation
                  </span>
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
