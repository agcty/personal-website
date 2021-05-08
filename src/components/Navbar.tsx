import React, { useState } from "react";

import clsx from "clsx";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

const navigationLinks: NavigationLinkProps[] = [
  // {
  //   link: "/",
  //   children: "Home",
  //   comingSoon: false,
  // },
  // {
  //   link: "/work",
  //   children: "Work",
  //   comingSoon: true,
  // },
  // {
  //   link: "/blog",
  //   children: "Blog",
  //   comingSoon: true,
  // },
  // {
  //   link: "about",
  //   children: "About",
  //   comingSoon: true,
  // },
  // {
  //   link: "/components",
  //   children: "Components",
  //   comingSoon: true,
  // },
];

interface NavbarProps {
  borderShown?: boolean;
}
function Navbar({ borderShown = true }: NavbarProps) {
  const navLinks = navigationLinks.map(({ link, children, comingSoon }) => (
    <NavigationLink link={link} key={link} comingSoon={comingSoon}>
      {children}
    </NavigationLink>
  ));

  const [openMobile, setOpenMobile] = useState(false);

  return (
    <nav
      className={clsx("sticky top-0 z-50 py-2 transition", {
        "bg-white": !borderShown,
        "bg-white shadow-nav": borderShown,
      })}
    >
      <div className={clsx("px-4 mx-auto sm:px-5 max-w-screen-2xl")}>
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
          <a
            className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 justify-self-end hover:underline"
            href="https://twitter.com/agctyz"
          >
            Twitter
          </a>
        </div>

        <div className="py-1 sm:hidden">
          <div className="flex items-center justify-between">
            <Link href="/">
              <a className="focus:outline-none focus:ring ring-geist-100 focus:ring-offset-4 rounded inline-flex items-center space-x-1.5 text-sm font-medium text-dark-1000">
                {/* <Image
                  src="/img/alex.JPG"
                  width={20}
                  height={20}
                  className="absolute object-cover w-full h-full rounded-full"
                /> */}

                <span> 👨🏻‍💻 gogl.io</span>
              </a>
            </Link>

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
        className={clsx("h-5 w-5", openedClasses)}
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
        className={clsx("h-5 w-5", closedClasses)}
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

interface NavigationLinkProps {
  children: string;
  link: string;
  comingSoon?: boolean;
}

function NavigationLink({ children, link, comingSoon }: NavigationLinkProps) {
  const router = useRouter();
  const isActive = `/${router.pathname.split("/")[1]}` === link;

  return (
    <Link href={comingSoon ? "/" : link}>
      <a
        className={clsx(
          "px-6 relative py-2 sm:py-1.5 text-sm font-semibold text-center transition duration-150 ease-in-out rounded-md focus:outline-none focus:bg-beige-100 active:bg-beige-100 active:shadow-inset",
          {
            "bg-primary text-beige-500": isActive,
            "text-dark-800 hover:text-beige-500 hover:bg-beige-50": !isActive,
            "opacity-50 bg-beige-50 text-beige-500 cursor-not-allowed ": comingSoon,
          }
        )}
      >
        {children}
      </a>
    </Link>
  );
}

export default Navbar;
