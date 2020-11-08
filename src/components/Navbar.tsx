import clsx from "clsx";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React, { useState } from "react";

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
function Navbar({ borderShown }: NavbarProps) {
  const navLinks = navigationLinks.map(({ link, children }) => (
    <NavigationLink link={link} key={link}>
      {children}
    </NavigationLink>
  ));

  const [openMobile, setOpenMobile] = useState(false);

  return (
    <nav
      className={clsx("sticky top-0 z-50 bg-beige-10", {
        "border-b border-gray-100": borderShown || openMobile,
      })}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:grid items-center grid-cols-3 py-1.5 hidden">
          <div className="font-semibold text-dark-1000">👨🏻‍💻 gogl.io</div>
          <div className="grid grid-flow-col gap-1">{navLinks}</div>
        </div>

        <div className="sm:hidden py-1.5">
          <div className="flex items-center justify-between">
            <div className="font-semibold text-dark-1000">👨🏻‍💻 gogl.io</div>

            <Hamburger
              setOpenMobile={setOpenMobile}
              isOpenMobile={openMobile}
            />
          </div>

          {openMobile && (
            <div className="grid grid-flow-row gap-1 mt-5">{navLinks}</div>
          )}
        </div>
      </div>

      {/* <div className="lg:hidden">
        <div className="flex flex-col gap-4 p-2">{navLinks}</div>
      </div> */}
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
  const currUrl = router.pathname;
  const isActive = currUrl === link;

  return (
    <Link href={link}>
      <a
        className={clsx(
          "px-2.5 py-1.5 text-sm font-semibold text-center text-white transition duration-150 ease-in-out rounded-md focus:outline-none focus:text-white focus:bg-beige-200",
          {
            "bg-beige-50 text-beige-500 ": isActive,
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
