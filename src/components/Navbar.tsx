import clsx from "clsx";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="border border-gray-100 bg-beige-50">
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-3 py-3">
          <ARecord />

          <div className="grid grid-flow-col gap-3">
            <NavButton link="/">Home</NavButton>
            <NavButton link="/work">Work</NavButton>
            <NavButton link="/blog">Blog</NavButton>
            <NavButton link="/components">Components</NavButton>
          </div>
        </div>
      </div>
    </nav>
  );
}

function ARecord() {
  return (
    <div className="text-sm font-semibold">
      <a
        href="#"
        className="px-2.5 py-1.5 text-center transition duration-150 ease-in-out bg-gray-300 rounded-md focus:outline-none focus:text-white focus:bg-gray-700 text-gray-50 border border-gray-100 shadow-inner"
      >
        A
      </a>

      <a
        href="#"
        className="px-2.5 py-1.5 text-center transition duration-150 ease-in-out bg-gray-300 rounded-md focus:outline-none focus:text-white focus:bg-gray-700 text-gray-50 border border-gray-100 shadow-inner ml-1"
      >
        gogl.io
      </a>
    </div>
  );
}

interface NavButtonProps {
  children: string;
  link: string;
}
function NavButton({ children, link }: NavButtonProps) {
  const router = useRouter();
  const currUrl = router.pathname;
  const isActive = currUrl === link;

  return (
    <Link href={link}>
      <a
        className={clsx(
          "px-3 py-1.5 text-sm font-semibold text-center text-white transition duration-150 ease-in-out rounded-md focus:outline-none focus:text-white focus:bg-beige-200",
          {
            "bg-beige-100 text-beige-500": isActive,
            "text-dark-800 hover:text-beige-500 hover:bg-beige-100": !isActive,
          }
        )}
      >
        {children}
      </a>
    </Link>
  );
}
export default Navbar;
