import React from "react";
import Head from "next/head";

import Navbar from "@components/Navbar";
import Category from "@components/Category";
import GalleryItem from "@components/DataView/GalleryItem";
import { Item } from "@types/DataTypes";
import ListItem from "@components/List/ListItem";
import Image from "next/image";
import { bg1 } from "@assets/svgBackgrounds";
import { gql, useQuery } from "urql";
import useScroll from "@hooks/useScroll";
import client from "graphql/urqlClient";
import { InferGetStaticPropsType } from "next";
import CenteredSection from "@components/Layouts/CenteredSection";

const getPostPaths = gql`
  query GetLatestPosts {
    allPost(sort: { publishedAt: DESC }, limit: 10) {
      title
      _id
      publishedAt
      categories {
        title
        className
        link
      }
      slug {
        current
      }
    }
  }
`;

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const works: Item[] = [
    {
      img: "/img/zerolens.png",
      link: "/",
      title: "Fullstack Engineer @zerolens",
      description: "Digital 3D photo studio",
      id: "1",
      createdAt: "",
    },
    {
      img: "/img/goglsonnen.png",
      link: "/",
      title: "Gogl Sonnenschirme",
      description: "Tech-infused sun umbrella company",
      id: "2",
      createdAt: "",
    },
    {
      img: "/img/shareit.png",
      link: "/",
      title: "shareit.video",
      description: "Share screen recordings instantly",
      id: "3",
      createdAt: "",
    },
  ];

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
    <div className="min-h-screen bg-beige-10" style={{ backgroundImage: bg1 }}>
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

      <main className="max-w-screen-lg px-4 mx-auto mt-10 sm:px-24 sm:mt-12 md:mt-16 lg:mt-20">
        <div className="grid items-center grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <h1 className="mt-5 text-4xl font-bold leading-none tracking-tight sm:text-4xl sm:leading-none md:text-4xl text-dark-1000">
              Hi, I'm Alex! 👋
            </h1>
            <p className="max-w-md mx-auto mt-4 rounded-md text-md font-base text-dark-800 sm:text-md md:mt-4 md:text-lg md:max-w-3xl">
              I'm a product designer, software engineer, and writer, currently
              living in Vienna. Right now, I build fullstack apps at zerolens.
            </p>
            {/* <div className="grid w-full max-w-lg gap-4 mt-4 md:grid-cols-2 rounded-2xl bg-toast-200">
              <button
                type="button"
                className="rounded-lg font-semibold gap-4 flex bg-gradient-to-b from-white to-beige-50 shadow-button text-center py-4 px-6 active:translate-y-0.5 active:shadow-button-active active:bg-gray-100 transform focus:outline-none focus:ring-4"
              >
                <div>🛎 </div>
                <span className="flex-1 mr-2">Make me a toast</span>
              </button>
              <a
                className="rounded-lg flex font-bold bg-beige-100 py-4 px-6 text-toast-800 active:translate-y-0.5 transform"
                data-splitbee-event="Open Link"
                data-splitbee-event-target="GitHub"
                href="https://github.com/timolins/react-hot-toast"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="opacity-100"
                >
                  <path
                    d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
                    fill="currentColor"
                  />
                </svg>
                <span className="flex-1 text-center text-toast-800">
                  GitHub
                </span>
              </a>
            </div> */}
          </div>

          <div className="relative w-32 h-32 row-start-1 rounded-full sm:col-start-2 sm:w-40 sm:h-40 ring-4 ring-beige-100 ring-offset-2 sm:place-self-center">
            <Image
              src="/img/alex.JPG"
              className="object-cover object-top rounded-full"
              width={200}
              height={200}
              priority
            />
          </div>
        </div>
      </main>

      <div className="mt-16 sm:mt-8 md:mt-16 lg:mt-20" />

      <CenteredSection className="bg-beige-50 sm:bg-transparent">
        <div className="grid grid-cols-1 grid-rows-1 sm:-ml-8 sm:-mr-8">
          {/* <div className="hidden w-full h-full shadow bg-beige-300 rounded-3xl col-span-full row-span-full sm:block" /> */}
          <div
            className="hidden w-full h-full shadow from-red-400 via-green-400 to-blue-400 rounded-3xl col-span-full row-span-full sm:block bg-gradient-to-r"
            style={{
              filter: "blur(20px)",
              // background:
              //   "linear-gradient(90deg, rgba(248,113,113,1) 0%, rgba(217,216,34,1) 34%, rgba(52,211,153,1) 63%, rgba(99,179,237,1) 100%)",
            }}
          />
          {/* <div className="hidden w-full transform shadow-lg from-blue-400 via-green-400 to-pink-400 rounded-3xl sm:-rotate-1 col-span-full row-span-full sm:block bg-gradient-to-r" /> */}
          <div className="hidden w-full transform border shadow-lg rounded-3xl bg-beige-50 sm:-rotate-1 col-span-full row-span-full border-beige-100 sm:block" />

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
                    <GalleryItem.Image priority />
                    <GalleryItem.Description />
                  </GalleryItem>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CenteredSection>

      <CenteredSection className="sm:bg-transparent bg-beige-10">
        <SectionHeading title="Latest posts" link="/blog" />
        <ul className="mt-5 -ml-4 -mr-4 divide-y rounded-md bg-beige-10 sm:border divide-beige-100 border-beige-100">
          {posts.map((post) => (
            <ListItem item={post} key={post.title} className="px-4">
              <div className="flex items-center py-4 sm:py-2.5">
                <div className="flex-1 min-w-0 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <ListItem.Title />

                    <div className="flex mt-1">
                      <ListItem.Date />
                    </div>
                  </div>

                  <div className="flex-shrink-0 mt-1 sm:mt-0">
                    <ListItem.Tags />
                  </div>
                </div>

                <div className="flex-shrink-0 ml-5">
                  <ListItem.OpenIcon />
                </div>
              </div>
            </ListItem>
          ))}
        </ul>
      </CenteredSection>

      <style jsx>
        {`
          .custom-grid {
            grid-template-columns: 2rem 1fr 1fr 2rem;
          }

          .beige-blur {
            backdrop-filter: blur(30px) saturate(180%);
            background-color: hsla(30, 40%, 96%, 0.95);
          }
        `}
      </style>
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
  link,
  subtitle = "",
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold sm:text-3xl text-dark-1000">
          {title}
        </h2>
        {/* <Link href={link}>
        <a className="link">View all</a>
      </Link> */}
      </div>
      {subtitle && (
        <h3 className="mt-1 text-lg font-medium text-dark-800">{subtitle}</h3>
      )}
    </div>
  );
}

export async function getStaticProps({ params }) {
  const {
    data,
  }: {
    data?: {
      allPost: {
        slug: { current: string };
        title: string;
        categories: { title: string }[];
        publishedAt: string;
        _id: string;
      }[];
    };
  } = await client.query(getPostPaths).toPromise();

  const posts: Item[] = data.allPost.map((post) => ({
    title: post.title,
    img: "",
    description: "",
    link: `/blog/${post.slug.current}`,
    tags: post.categories,
    createdAt: post.publishedAt,
    id: post._id,
  }));

  return { props: { posts } };
}
