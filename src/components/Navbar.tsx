import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";

function joinedClassNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const routes = [
  {
    path: "/blog",
    name: "Blog",
  },
];

const socials = [
  {
    path: "https://twitter.com/movr_loot",
    name: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-4 h-4 fill-current text-dark-200 hover:opacity-70 transition"
      >
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
      </svg>
    ),
  },
  {
    path: "http://discord.gg/ZbUsVNDf3f",
    name: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        className="w-4 h-4 fill-current text-dark-200 hover:opacity-70 transition"
      >
        <path d="M 41.625 10.769531 C 37.644531 7.566406 31.347656 7.023438 31.078125 7.003906 C 30.660156 6.96875 30.261719 7.203125 30.089844 7.589844 C 30.074219 7.613281 29.9375 7.929688 29.785156 8.421875 C 32.417969 8.867188 35.652344 9.761719 38.578125 11.578125 C 39.046875 11.867188 39.191406 12.484375 38.902344 12.953125 C 38.710938 13.261719 38.386719 13.429688 38.050781 13.429688 C 37.871094 13.429688 37.6875 13.378906 37.523438 13.277344 C 32.492188 10.15625 26.210938 10 25 10 C 23.789063 10 17.503906 10.15625 12.476563 13.277344 C 12.007813 13.570313 11.390625 13.425781 11.101563 12.957031 C 10.808594 12.484375 10.953125 11.871094 11.421875 11.578125 C 14.347656 9.765625 17.582031 8.867188 20.214844 8.425781 C 20.0625 7.929688 19.925781 7.617188 19.914063 7.589844 C 19.738281 7.203125 19.34375 6.960938 18.921875 7.003906 C 18.652344 7.023438 12.355469 7.566406 8.320313 10.8125 C 6.214844 12.761719 2 24.152344 2 34 C 2 34.175781 2.046875 34.34375 2.132813 34.496094 C 5.039063 39.605469 12.972656 40.941406 14.78125 41 C 14.789063 41 14.800781 41 14.8125 41 C 15.132813 41 15.433594 40.847656 15.621094 40.589844 L 17.449219 38.074219 C 12.515625 36.800781 9.996094 34.636719 9.851563 34.507813 C 9.4375 34.144531 9.398438 33.511719 9.765625 33.097656 C 10.128906 32.683594 10.761719 32.644531 11.175781 33.007813 C 11.234375 33.0625 15.875 37 25 37 C 34.140625 37 38.78125 33.046875 38.828125 33.007813 C 39.242188 32.648438 39.871094 32.683594 40.238281 33.101563 C 40.601563 33.515625 40.5625 34.144531 40.148438 34.507813 C 40.003906 34.636719 37.484375 36.800781 32.550781 38.074219 L 34.378906 40.589844 C 34.566406 40.847656 34.867188 41 35.1875 41 C 35.199219 41 35.210938 41 35.21875 41 C 37.027344 40.941406 44.960938 39.605469 47.867188 34.496094 C 47.953125 34.34375 48 34.175781 48 34 C 48 24.152344 43.785156 12.761719 41.625 10.769531 Z M 18.5 30 C 16.566406 30 15 28.210938 15 26 C 15 23.789063 16.566406 22 18.5 22 C 20.433594 22 22 23.789063 22 26 C 22 28.210938 20.433594 30 18.5 30 Z M 31.5 30 C 29.566406 30 28 28.210938 28 26 C 28 23.789063 29.566406 22 31.5 22 C 33.433594 22 35 23.789063 35 26 C 35 28.210938 33.433594 30 31.5 30 Z" />
      </svg>
    ),
  },
  {
    path: "https://t.me/joinchat/ucPiJJTQw8FmNzU0",
    name: (
      <svg
        data-icon="telegram"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 496 512"
        className="w-4 h-4 fill-current text-dark-200 hover:opacity-70 transition"
      >
        <path
          fill="currentColor"
          d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"
          className=""
        ></path>
      </svg>
    ),
  },
];

export default function Navbar({
  classNames = "",
  scroll,
}: {
  classNames?: string;
  scroll?: boolean;
}) {
  const { asPath } = useRouter();

  return (
    <Disclosure
      as="nav"
      className={clsx(
        `${classNames} sticky top-0 transition-bg z-30 bg-white dark:bg-dark-1100`
      )}
    >
      {({ open, close }) => (
        <div
          className={clsx(`border-b border-transparent`, {
            "border-dark-200 dark:border-dark-1000": scroll || open,
          })}
        >
          <div className="px-4 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
            <div className="flex justify-between h-14">
              <div className="contents">
                <div className="flex items-center flex-shrink-0">
                  <Link href="/">
                    <a>
                      <span className="text-base font-bold text-dark-900 dark:text-dark-200">
                        👨🏻‍💻 gogl.io
                      </span>
                    </a>
                  </Link>
                </div>

                <div className="flex items-center mr-2 -ml-2 md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 text-dark-400  hover:text-dark-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block w-6 h-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

                <div className="hidden md:ml-6 md:flex md:space-x-8">
                  {routes.map((route) => (
                    <Link href={route.path} key={route.path}>
                      <a
                        className={clsx({
                          "inline-flex items-center px-1 pt-1 font-medium border-b-2 text-dark-100 border-accent dark:text-dark-200 dark:hover:text-dark-500":
                            asPath === route.path,
                          "inline-flex items-center px-1 pt-1 font-medium border-b-2 border-transparent text-dark-1000 hover:border-dark-300 hover:text-dark-900 dark:text-dark-200 dark:hover:text-dark-500":
                            asPath !== route.path,
                        })}
                      >
                        {route.name}
                      </a>
                    </Link>
                  ))}
                </div>

                {/* <div className="hidden md:ml-6 md:flex md:space-x-4">
                  {socials.map((route) => (
                    <Link href={route.path} key={route.path}>
                      <a
                        className={clsx({
                          "inline-flex items-center px-1 pt-1 text-lg font-medium border-b-2 text-dark-100 border-accent":
                            asPath === route.path,
                          "inline-flex items-center px-1 pt-1 text-lg font-medium border-b-2 border-transparent text-dark-500 hover:border-dark-300 hover:text-dark-700":
                            asPath !== route.path,
                        })}
                      >
                        {route.name}
                      </a>
                    </Link>
                  ))}
                </div> */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {routes.map((route) => (
                <Link href={route.path} key={route.path}>
                  <a
                    className={clsx({
                      "block py-2 pl-3 pr-4 text-lg font-medium text-dark-1000 dark:text-dark-200 border-l-4 border-accent bg-accent sm:pl-5 sm:pr-6":
                        asPath === route.path,
                      "block py-2 pl-3 pr-4 text-lg font-medium border-l-4 border-transparent text-dark-1000 dark:text-dark-200 hover:bg-dark-200 dark:hover:bg-dark-800 hover:border-accent hover:text-dark-900 dark:hover:text-dark-300 sm:pl-5 sm:pr-6":
                        asPath !== route.path,
                    })}
                  >
                    {route.name}
                  </a>
                </Link>
              ))}

              {/* {socials.map((route) => (
                <Link href={route.path} key={route.path}>
                  <a
                    className={clsx({
                      "block py-2 pl-3 pr-4 text-lg font-medium text-white border-l-4 border-accent bg-accent sm:pl-5 sm:pr-6":
                        asPath === route.path,
                      "block py-2 pl-3 pr-4 text-lg font-medium border-l-4 border-transparent text-dark-500 hover:bg-dark-900 hover:border-accent hover:text-dark-700 sm:pl-5 sm:pr-6":
                        asPath !== route.path,
                    })}
                  >
                    {route.name}
                  </a>
                </Link>
              ))} */}
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}
