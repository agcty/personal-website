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
      link: "/work/zerolens",
      name: "Fullstack Engineer @zerolens",
      description: "Digital 3D photo studio",
      id: "1",
    },
    {
      img: "/img/goglsonnen.png",
      link: "/work/goglsonnenschirme",
      name: "Gogl Sonnenschirme",
      description: "Tech-infused sun umbrella company",
      id: "2",
    },
    {
      img: "/img/shareit.png",
      link: "/work/shareit",
      name: "shareit.video",
      description: "Share screen recordings instantly",
      id: "3",
    },
    {
      img: "https://source.unsplash.com/random",
      link: "/test",
      name: "Zerolens",
      description: "Digital 3D photo studio",
      id: "4",
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
      <main className="max-w-screen-xl px-6 mx-auto mt-10 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
        <div className="text-center">
          <div className="relative mx-auto bg-red-500 rounded-full w-36 h-36 ring-4 ring-beige-100">
            <Image
              src="/img/alex.jpg"
              className="object-cover object-top bg-green-500 rounded-full"
              width={160}
              height={160}
            />
          </div>
          {/* <img
            src="/img/alex.jpg"
            className="object-cover object-top p-2 bg-green-500 rounded-full ring-2 ring-green-400"
            width={160}
            height={160}
          /> */}
          <h1 className="mt-5 text-4xl font-bold leading-none tracking-tight sm:text-5xl sm:leading-none md:text-4xl text-dark-1000">
            Hey, I'm Alex!
          </h1>
          <p className="max-w-md mx-auto mt-4 text-lg text-center rounded-md font-base text-dark-800 sm:text-lg md:mt-4 md:text-2xl md:max-w-3xl">
            I'm a product designer, software engineer, and writer, currently
            living in Vienna. Right now, I build fullstack apps at zerolens.
          </p>

          {/* <div className="mt-3">
            <a className="mt-2 link">@agctyz on Twitter</a>
          </div> */}
        </div>
      </main>

      <div className="bg-beige-50">
        <section className="max-w-screen-xl px-4 py-12 mx-auto mt-4 sm:rounded-md sm:py-12 sm:mt-8 sm:px-12 md:mt-16 lg:mt-20">
          <div className="">
            <SectionHeading
              title="Work"
              link="/work"
              subtitle="Things I'm currently working on"
            />

            {/* <Category>📘 Test</Category> */}

            <div className="grid grid-cols-1 mt-8 gap-x-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6">
              {works.map((work) => (
                <GalleryItem item={work} key={work.id} />
              ))}
            </div>
          </div>
        </section>
      </div>

      <section className="max-w-screen-xl px-4 py-12 mx-auto mt-4 sm:rounded-md sm:py-12 sm:mt-8 sm:px-12 md:mt-16 lg:mt-20">
        <SectionHeading title="Writing" link="/blog" className="" />
        {/* <Category>📘 Test</Category> */}

        <div className="mt-5 -ml-4 -mr-4">
          <div>
            <ul className="divide-y divide-beige-100">
              <ListItem className="px-4 sm:px-4" />
              <ListItem className="px-4 sm:px-4" />
              <ListItem className="px-4 sm:px-4" />
              <ListItem className="px-4 sm:px-4" />
              <ListItem className="px-4 sm:px-4" />
              <ListItem className="px-4 sm:px-4" />
              <ListItem className="px-4 sm:px-4" />
              <ListItem className="px-4 sm:px-4" />
              <ListItem className="px-4 sm:px-4" />
              <ListItem className="px-4 sm:px-4" />
              <ListItem className="px-4 sm:px-4" />
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  link: string;
  className?: string;
}
function SectionHeading({
  title,
  link,
  subtitle,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <div className="flex items-center justify-between">
        <h2 className="text-4xl font-bold sm:text-4xl text-dark-1000">
          {title}
        </h2>
        {/* <Link href={link}>
        <a className="link">View all</a>
      </Link> */}
      </div>
      {subtitle && (
        <h3 className="mt-1 text-xl font-medium text-dark-900">{subtitle}</h3>
      )}
    </div>
  );
}
