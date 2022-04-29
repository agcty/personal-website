import React from "react";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Centered from "@components/Layouts/Centered";
import ListItem from "@components/List/ListItem";
import Navbar from "@components/Navbar";
import useScroll from "@hooks/useScroll";
import { allPosts, Post } from "contentlayer/generated";

export default function Home() {
  // const works: Item[] = [
  //   {
  //     img: "/img/zerolens.png",
  //     link: "/",
  //     title: "Fullstack Engineer @zerolens",
  //     description: "Digital 3D photo studio",
  //     id: "1",
  //     createdAt: "",
  //   },
  //   {
  //     img: "/img/goglsonnen.png",
  //     link: "/",
  //     title: "Gogl Sonnenschirme",
  //     description: "Tech-infused sun umbrella company",
  //     id: "2",
  //     createdAt: "",
  //   },
  //   {
  //     img: "/img/shareit.png",
  //     link: "/",
  //     title: "shareit.video",
  //     description: "Share screen recordings instantly",
  //     id: "3",
  //     createdAt: "",
  //   },
  // ];

  const { scrollY } = useScroll();

  // const [result, reexecuteQuery] = useQuery({
  //   query: getPostPaths,
  // });

  // const { data, fetching, error } = result;

  // const postList: Item = data?.allPost?.map((post) => ({
  //   title: post.title,
  //   img: "",
  //   description: "",
  //   link: `/blog/${post.slug.current}`,
  //   tags: post.categories,
  // }));

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-1100">
      <Head>
        <title>Alex Gogl - Software Engineer</title>
        <meta name="description" content="Web3 dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar scroll={scrollY > 35} />

      {/* <div class="py-12 sm:py-14 px-8 sm:px-10 text-left bg-gradient-to-r from-green-400 to-blue-500">
        <div class="max-w-screen-2xl sm:px-3 mx-auto">
          <div class="flex flex-row mx-3 text-white">
            <div class="flex-1">
              <div class="text-xl sm:text-2xl">Discover &amp; Showcase</div>
              <div class="text-4xl sm:text-6xl">Your Favorite</div>
              <div class="text-4xl sm:text-6xl">Crypto Art.</div>
            </div>
          </div>
        </div>
      </div> */}

      <main className="mx-auto mt-10 max-w-screen-xl px-6 sm:mt-12 sm:px-24 md:mt-16 lg:mt-20">
        <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-2">
          <div>
            <h1 className="mt-12 text-4xl font-bold leading-none tracking-tight text-dark-1000 dark:text-white sm:mt-5 sm:text-4xl sm:leading-none md:text-4xl">
              Hey, I'm Alex
            </h1>
            <p className="text-ase font-base mx-auto mt-4 max-w-md rounded-md text-dark-800 dark:text-dark-400 sm:text-sm md:mt-4 md:max-w-3xl md:text-base">
              I'm a software engineer working and writing on all things web3. I
              spend all of my free time connecting with other people in the
              space so if you want to reach out, my{" "}
              <Link href="https://twitter.com/agctyz">
                <a className="link underline">DMs</a>
              </Link>{" "}
              are always open!
            </p>
          </div>

          <div className="relative row-start-1 h-32 w-32 rounded-full ring-2 ring-dark-100 ring-offset-2 dark:ring-dark-1000 dark:ring-offset-dark-900 sm:col-start-2 sm:h-40 sm:w-40 sm:place-self-center">
            <Image
              src="/img/profile.png"
              className="rounded-full object-cover object-top"
              width={200}
              height={200}
              priority
            />
          </div>
        </div>
      </main>

      <div className="mt-16 sm:mt-8 md:mt-16 lg:mt-20" />

      <div className="px-4 sm:hidden">
        <hr className="dark:border-dark-800" />
      </div>

      {/* <Centered className="bg-geist-10 sm:bg-transparent">
        <div className="grid grid-cols-1 grid-rows-1 sm:-ml-8 sm:-mr-8">
          <div
            className="hidden w-full h-full bg-blue-500 shadow rounded-3xl col-span-full row-span-full sm:block"
            style={{
              filter: "blur(20px)",
            }}
          />
          <div className="hidden w-full transform bg-white border shadow-lg rounded-3xl sm:-rotate-1 col-span-full row-span-full border-beige-100 sm:block" />

          <div className="relative sm:px-8 row-span-full col-span-full">
            <div className="rounded-md sm:py-12">
              <SectionHeading
                title="Work"
                link="/work"
                subtitle="Things I'm currently working on"
              />
              <div className="grid grid-cols-1 mt-8 gap-x-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-y-6">
                {works.map((work) => (
                  <GalleryItem item={work} key={work.id}>
                    <GalleryItem.Image>
                      <Image
                        src={work.img}
                        loading="eager"
                        layout="fill"
                        className="absolute object-cover w-full h-full"
                      />
                    </GalleryItem.Image>
                    <GalleryItem.Description />
                  </GalleryItem>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Centered> */}

      {/* <div className="grid grid-cols-4 gap-6 mx-auto max-w-screen-2xl">
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div> */}

      <Centered className="sm:bg-transparent">
        <SectionHeading title="Latest posts" link="/blog" />

        <ul className="mt-5 divide-y divide-dark-200 dark:divide-dark-900">
          {allPosts.slice(0, 10).map((post: Post) => (
            <ListItem item={post} key={post.title}>
              <div className="flex items-center py-4 sm:py-2.5">
                <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <ListItem.Title>{post.title}</ListItem.Title>

                    <div className="mt-0.5 flex">
                      <ListItem.Date createdAt={post.date} />
                    </div>
                  </div>

                  {/* <div className="mt-2 flex-shrink-0 sm:mt-0">
                    <div className="horizontal-flex-scroll max-w-sm">
                      {post.tags.map((tag) => (
                        <ListItem.Tag
                          color={tags}
                          key={tag.name}
                          className="text-xs sm:text-sm"
                        />
                      ))}
                    </div>
                  </div> */}
                </div>

                <div className="ml-5 flex-shrink-0">
                  <ListItem.OpenIcon />
                </div>
              </div>
            </ListItem>
          ))}
        </ul>
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
        <h2 className="text-2xl font-bold text-dark-1000 dark:text-dark-100 sm:text-3xl">
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
