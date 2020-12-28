import clsx from "clsx";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";

const navigationLinks: NavigationLinkProps[] = [
  {
    link: "/",
    children: "Home",
  },
  {
    link: "/work",
    children: "Work",
  },
  {
    link: "/blog",
    children: "Blog",
  },
  {
    link: "about",
    children: "About",
  },
  {
    link: "/components",
    children: "Components",
  },
];

interface NavbarProps {
  borderShown: boolean;
}
function Navbar({ borderShown = true }: NavbarProps) {
  const navLinks = navigationLinks.map(({ link, children }) => (
    <NavigationLink link={link} key={link}>
      {children}
    </NavigationLink>
  ));

  const [openMobile, setOpenMobile] = useState(false);

  return (
    <nav
      className={clsx("sticky top-0 z-50", {
        "border-b border-gray-100": borderShown || openMobile,
        "bg-transparent": !borderShown,
        "bg-beige-10": borderShown,
      })}
    >
      <div className={clsx("px-4 mx-auto sm:px-5 max-w-screen-xl")}>
        <div className="items-center hidden grid-cols-3 py-2 sm:grid">
          <div className="font-semibold text-dark-1000">
            <Link href="/">
              <a className="mr-0.5 focus:outline-none focus:ring ring-beige-100 focus:ring-offset-4 rounded transition">
                👨🏻‍💻 gogl.io
              </a>
            </Link>
          </div>
          <div className="inline-grid grid-flow-col gap-x-4 justify-self-center">
            {navLinks}
          </div>
        </div>

        <div className="sm:hidden py-1.5">
          <div className="flex items-center justify-between">
            <div className="font-semibold text-dark-1000">
              <Link href="/">
                <a className="mr-0.5 focus:outline-none focus:ring ring-beige-100 focus:ring-offset-4 rounded">
                  👨🏻‍💻 gogl.io
                </a>
              </Link>
            </div>

            <Hamburger
              setOpenMobile={setOpenMobile}
              isOpenMobile={openMobile}
            />
          </div>

          {openMobile && (
            <div className="grid grid-flow-row mt-5 gap-y-3">{navLinks}</div>
          )}
        </div>
      </div>
    </nav>
  );
}

function Hamburger({ setOpenMobile, isOpenMobile }) {
  const openedClasses = clsx({ hidden: isOpenMobile, block: !isOpenMobile });
  const closedClasses = clsx({ hidden: !isOpenMobile, block: isOpenMobile });
  return (
    <button
      onClick={(): void => setOpenMobile(!isOpenMobile)}
      type="button"
      className="inline-flex items-center justify-center p-2 transition duration-150 ease-in-out rounded-md text-dark-800 lg:hidden hover:text-gray-500 focus:outline-none focus:text-gray-500"
    >
      <svg
        className={clsx("h-6 w-6", openedClasses)}
        stroke="currentColor"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>

      <svg
        className={clsx("h-6 w-6", closedClasses)}
        stroke="currentColor"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
}

function ARecord() {
  return (
    <a className="text-sm font-semibold sm:flex">
      {/* <span className="px-2.5 py-1.5 text-center transition duration-150 ease-in-out bg-gray-300 rounded-md focus:outline-none focus:text-white focus:bg-gray-700 text-gray-50 border border-gray-100 shadow-inner">
        A
      </span> */}

      <span className="px-2.5 py-1.5 text-center transition duration-150 ease-in-out bg-gray-300 rounded-md focus:outline-none focus:text-white focus:bg-gray-700 text-gray-50 border border-gray-100 shadow-inner ml-1">
        gogl.io
      </span>
    </a>
  );
}

interface NavigationLinkProps {
  children: string;
  link: string;
}

function NavigationLink({ children, link }: NavigationLinkProps) {
  const router = useRouter();
  const isActive = `/${router.pathname.split("/")[1]}` === link;

  return (
    <Link href={link}>
      <a
        className={clsx(
          "px-6 py-2 sm:py-1.5 text-sm font-semibold text-center transition duration-150 ease-in-out rounded-md focus:outline-none focus:bg-beige-100 active:bg-beige-100 active:shadow-inset",
          {
            "bg-beige-50 text-beige-500": isActive,
            "text-dark-800 hover:text-beige-500 hover:bg-beige-50": !isActive,
          }
        )}
      >
        {children}
      </a>
    </Link>
  );
}

export default Navbar;
