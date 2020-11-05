import React from "react";
import Head from "next/head";
import Link from "next/link";
import Navbar from "@components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-beige-50">
      <Head>
        <title>Next.js advanced start template.</title>
        <meta
          name="description"
          content="Use tailwind css, eslint, prettier & absolute imports instantly.
            Easily extendable zero-config template for pros and beginners."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main
        className="max-w-screen-xl px-4 mx-auto mt-10 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28"
        style={{ backgroundImage: 'url("/gradient-bg.png")' }}
      >
        {/* <img
          src="/gradient-bg.png"
          className="absolute top-0"
          alt="background"
        /> */}
        <div className="text-center">
          <h2 className="text-4xl font-bold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl text-dark-1000">
            Alex Gogl's Workspace
          </h2>
          <p className="max-w-md mx-auto mt-3 text-base font-semibold text-mud-300 sm:text-lg md:mt-4 md:text-2xl md:max-w-3xl">
            I write about startups, web design and psychology.
          </p>
          <div className="max-w-md mx-auto mt-5 sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo md:py-4 md:text-lg md:px-10"
              >
                Get started
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="#"
                className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-indigo-600 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-indigo-500 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo md:py-4 md:text-lg md:px-10"
              >
                Live demo
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
