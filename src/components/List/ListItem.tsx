import React from "react";

function ListItem() {
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-md">
      <ul>
        <li>
          <a
            href="#"
            className="block transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
          >
            <div className="flex items-center px-4 py-4 sm:px-6">
              <div className="flex-1 min-w-0 sm:flex sm:items-center sm:justify-between">
                <div>
                  <div className="text-sm font-medium leading-5 text-indigo-600 truncate">
                    Back End Developer
                    <span className="ml-1 font-normal text-gray-500">
                      in Engineering
                    </span>
                  </div>
                  <div className="flex mt-2">
                    <div className="flex items-center text-sm leading-5 text-gray-500">
                      <svg
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        Closing on
                        <time dateTime="2020-01-07">January 7, 2020</time>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0 mt-4 sm:mt-0">
                  <div className="flex overflow-hidden">
                    <img
                      className="inline-block w-6 h-6 text-white rounded-full shadow-solid"
                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <img
                      className="inline-block w-6 h-6 -ml-1 text-white rounded-full shadow-solid"
                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <img
                      className="inline-block w-6 h-6 -ml-1 text-white rounded-full shadow-solid"
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                      alt=""
                    />
                    <img
                      className="inline-block w-6 h-6 -ml-1 text-white rounded-full shadow-solid"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
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
        </li>
        <li className="border-t border-gray-200">
          <a
            href="#"
            className="block transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
          >
            <div className="flex items-center px-4 py-4 sm:px-6">
              <div className="flex-1 min-w-0 sm:flex sm:items-center sm:justify-between">
                <div>
                  <div className="text-sm font-medium leading-5 text-indigo-600 truncate">
                    Back End Developer
                    <span className="ml-1 font-normal text-gray-500">
                      in Engineering
                    </span>
                  </div>
                  <div className="flex mt-2">
                    <div className="flex items-center text-sm leading-5 text-gray-500">
                      <svg
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        Closing on
                        <time dateTime="2020-01-07">January 7, 2020</time>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0 mt-4 sm:mt-0">
                  <div className="flex overflow-hidden">
                    <img
                      className="inline-block w-6 h-6 text-white rounded-full shadow-solid"
                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <img
                      className="inline-block w-6 h-6 -ml-1 text-white rounded-full shadow-solid"
                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <img
                      className="inline-block w-6 h-6 -ml-1 text-white rounded-full shadow-solid"
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                      alt=""
                    />
                    <img
                      className="inline-block w-6 h-6 -ml-1 text-white rounded-full shadow-solid"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
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
        </li>
        <li className="border-t border-gray-200">
          <a
            href="#"
            className="block transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
          >
            <div className="flex items-center px-4 py-4 sm:px-6">
              <div className="flex-1 min-w-0 sm:flex sm:items-center sm:justify-between">
                <div>
                  <div className="text-sm font-medium leading-5 text-indigo-600 truncate">
                    Back End Developer
                    <span className="ml-1 font-normal text-gray-500">
                      in Engineering
                    </span>
                  </div>
                  <div className="flex mt-2">
                    <div className="flex items-center text-sm leading-5 text-gray-500">
                      <svg
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        Closing on
                        <time dateTime="2020-01-07">January 7, 2020</time>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0 mt-4 sm:mt-0">
                  <div className="flex overflow-hidden">
                    <img
                      className="inline-block w-6 h-6 text-white rounded-full shadow-solid"
                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <img
                      className="inline-block w-6 h-6 -ml-1 text-white rounded-full shadow-solid"
                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <img
                      className="inline-block w-6 h-6 -ml-1 text-white rounded-full shadow-solid"
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                      alt=""
                    />
                    <img
                      className="inline-block w-6 h-6 -ml-1 text-white rounded-full shadow-solid"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
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
        </li>
      </ul>
    </div>
  );
}

export default ListItem;
