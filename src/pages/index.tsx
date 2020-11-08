import React, { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Navbar from "@components/Navbar";
import Prism from "prismjs";

export default function Home() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

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

      <main className="relative max-w-screen-xl px-4 mx-auto mt-10 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
        <div className="text-center">
          <h1 className="text-4xl font-bold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl text-dark-1000">
            Alex Gogl's Workspace
          </h1>
          <p className="max-w-md mx-auto mt-3 text-base font-base text-mud-300 sm:text-lg md:mt-4 md:text-2xl md:max-w-3xl">
            I'm a software engineer living in Vienna. Right now I'm working at
            zerolens and build products on the side.
          </p>

          {/* <div className="grid w-7/12 grid-cols-1 mx-auto mt-5 rounded-md sm:grid-cols-2 bg-dark-900">
            <pre>
              <code>
                {`{
                  "@context": "https://schema.org",
                  "@type": "Person",
                  "name": "Alex Gogl",
                  "email": "alex@gogl.io",
                  "jobTitle": "Software Engineer",
                  "birthPlace": "Vienna, Austria"
                  "image": "/images/profile.png"
  }
                    `}
              </code>
            </pre>
            <div>test</div>
          </div> */}

          {/* <div className="max-w-md mx-auto mt-5 sm:flex sm:justify-center md:mt-8">
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
          </div> */}
        </div>

        <section className="mt-12">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold sm:text-4xl text-dark-900">
              Work
            </h2>
            <a className="text-sm font-medium text-blue-500">View all</a>
          </div>

          <div className="grid grid-cols-1 gap-4 mt-5 sm:grid-cols-3">
            <div className="h-64 bg-white rounded-md" />
            <div className="h-64 bg-white rounded-md" />
            <div className="h-64 bg-white rounded-md" />
          </div>
        </section>
      </main>

      {/* <img
        src="/gradient-bg.png"
        className="absolute top-0 left-0 right-0 mx-auto"
        alt="background"
        width={700}
      /> */}
    </div>
  );
}
