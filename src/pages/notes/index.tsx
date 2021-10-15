import React from "react";

import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";

import Centered from "@components/Layouts/Centered";
import ListItem from "@components/List/ListItem";
import Navbar from "@components/Navbar";
import useScroll from "@hooks/useScroll";
import ghost from "@services/ghost";
import Link from "next/link";

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { scrollY } = useScroll();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-1100">
      <Head>
        <title>Alex Gogl - Software Engineer</title>
        <meta
          name="description"
          content="I'm a product designer, software engineer, and writer, currently
          living in Vienna. Right now, I build fullstack apps at zerolens."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar borderShown={scrollY > 35} />

      <div className="px-4 sm:hidden">
        <hr className="dark:border-dark-800" />
      </div>

      <Centered className="sm:bg-transparent">
        <SectionHeading title="Latest posts" link="/blog" />

        <div className="grid grid-cols-3 mt-12">
          {posts.map((post) => (
            <div className="bg-[rgb(15,15,15)] rounded-lg p-4">
              {/* <h1 className="font-semibold dark:text-dark-100 text-xl">
                {post.title}
              </h1> */}
              <div className="prose prose-sm dark:prose-dark">
                <div dangerouslySetInnerHTML={{ __html: post.html ?? "" }} />
              </div>
            </div>
          ))}
        </div>
      </Centered>
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
  title = "",
  subtitle = "",
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold sm:text-3xl text-dark-1000 dark:text-dark-100">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="mt-1 text-lg font-medium text-dark-800 dark:text-dark-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export async function getStaticProps() {
  const posts = await ghost.posts.browse({
    filter: "tag:[note]",
    include: ["tags"],
    limit: 10,
  });

  return { props: { posts }, revalidate: 60 };
}
