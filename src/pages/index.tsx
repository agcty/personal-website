import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Navbar from "@components/Navbar";
import Category from "@components/Category";
import GalleryItem from "@components/DataView/GalleryItem";
import { Item } from "src/types";
import ListItem from "@components/List/ListItem";
import Image from "next/image";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => setScrollY(window.scrollY));
    return window.removeEventListener("scroll", () => null);
  });

  const works: Item[] = [
    {
      img: "/img/zerolens.png",
      link: "/test",
      name: "Zerolens",
      description: "Digital photo studio",
    },
    {
      img: "/img/goglsonnen.png",
      link: "/test",
      name: "Gogl Sonnenschirme",
      description: "Shadow for you and your company",
    },
    {
      img: "https://source.unsplash.com/random",
      link: "/test",
      name: "Zerolens",
      description: "Digital photo studio",
    },
    {
      img: "https://source.unsplash.com/random",
      link: "/test",
      name: "Zerolens",
      description: "Digital photo studio",
    },
  ];

  return (
    <div className="min-h-screen bg-beige-10">
      <Head>
        <title>Next.js advanced start template.</title>
        <meta
          name="description"
          content="Use tailwind css, eslint, prettier & absolute imports instantly.
            Easily extendable zero-config template for pros and beginners."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar borderShown={scrollY > 35} />
      {/* {JSON.stringify(scrollYProgress)} */}
      <main className="relative max-w-screen-xl px-6 mx-auto mt-10 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
        <div className="text-center">
          <Image
            src="/img/alex.jpg"
            className="object-cover object-top p-2 bg-green-500 rounded-full shadow-outline-green"
            width={160}
            height={160}
          />
          <h1 className="mt-5 text-5xl font-bold leading-none tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl text-dark-1100">
            Alex Gogl's Workspace
          </h1>
          <p className="max-w-md mx-auto mt-4 text-lg text-center rounded-md font-base text-dark-800 sm:text-lg md:mt-4 md:text-2xl md:max-w-3xl">
            I’m a product designer, software engineer, and writer, currently
            living in Vienna. Right now I’m building web apps at zerolens.
          </p>

          {/* <div className="mt-3">
            <a className="mt-2 link">@agctyz on Twitter</a>
          </div> */}
        </div>
      </main>

      <section className="max-w-screen-xl px-4 py-6 mx-auto mt-10 sm:rounded-md sm:py-12 sm:mt-12 sm:px-12 md:mt-16 lg:mt-20 xl:mt-28 bg-beige-50">
        <SectionHeading title="Work" link="/work" />

        {/* <Category>📘 Test</Category> */}

        <div className="grid grid-cols-1 gap-4 mt-5 sm:grid-cols-4">
          {works.map((work) => (
            <GalleryItem item={work} key={work.link} />
          ))}
        </div>
      </section>

      <section className="max-w-screen-xl px-4 py-6 mx-auto mt-10 sm:rounded-md sm:py-12 sm:mt-8 sm:px-12 md:mt-16 lg:mt-20 xl:mt-28">
        <SectionHeading title="Latest articles" link="/blog" />
        {/* <Category>📘 Test</Category> */}

        <div className="mt-5">
          {/* <ListItem /> */}

          <section className="mt-10 divide-y divide-y-beige-10">
            <header className="flex divide-x divide-x-beige-10">
              <div className="flex-1 px-4 font-medium text-beige-500">
                Title
              </div>
              <div className="flex-1 px-4">Updated at</div>
              <div className="flex-1 px-4">Tags</div>
            </header>
            <div className="flex border-l border-beige-10">
              <div className="flex-1 px-4">How to validate ideas fast</div>
              <div className="flex-1 px-4">The elon musk challenge</div>
              <div className="flex-1 px-4">Doing things that you love</div>
            </div>
            <div className="flex divide-x divide-x-beige-10">
              <div className="flex-1 px-4">How to validate ideas fast</div>
              <div className="flex-1 px-4">The elon musk challenge</div>
              <div className="flex-1 px-4">Doing things that you love</div>
            </div>
          </section>
        </div>

        <section className="mt-10 divide-y divide-y-beige-10">
          <header className="grid grid-cols-3 divide-x-beige-10">
            <div className="flex-1 px-4">Title</div>
            <div className="flex-1 px-4">Updated at</div>
            <div className="flex-1 px-4">Tags</div>
          </header>
          <div className="flex divide-x divide-x-beige-10">
            <div className="flex-1 px-4">How to validate ideas fast</div>
            <div className="flex-1 px-4">The elon musk challenge</div>
            <div className="flex-1 px-4">Doing things that you love</div>
          </div>
          <div className="flex divide-x divide-x-beige-10">
            <div className="flex-1 px-4">How to validate ideas fast</div>
            <div className="flex-1 px-4">The elon musk challenge</div>
            <div className="flex-1 px-4">Doing things that you love</div>
          </div>
        </section>

        {/* <div className="grid grid-cols-1 gap-4 mt-5 sm:grid-cols-4">
          {works.map((work) => (
            <GalleryItem item={work} key={work.link} />
          ))}
        </div> */}
      </section>
    </div>
  );
}

interface SectionHeadingProps {
  title: string;
  link: string;
}
function SectionHeading({ title, link }: SectionHeadingProps) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-2xl font-bold sm:text-4xl text-dark-900">{title}</h2>
      <Link href={link}>
        <a className="link">View all</a>
      </Link>
    </div>
  );
}
