import React from "react";
import Head from "next/head";

import Navbar from "@components/Navbar";
import Category from "@components/Category";
import GalleryItem from "@components/DataView/GalleryItem";
import { Item } from "@types/DataTypes";
import ListItem from "@components/List/ListItem";
import Image from "next/image";
import { bg1, bg4 } from "@assets/svgBackgrounds";
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
    <div className="min-h-screen" style={{ background: bg1 }}>
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

      <main className="max-w-screen-lg px-6 mx-auto mt-10 sm:px-24 sm:mt-12 md:mt-16 lg:mt-20">
        <div className="grid items-center grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <h1 className="mt-12 text-4xl font-bold leading-none tracking-tight sm:mt-5 sm:text-4xl sm:leading-none md:text-4xl text-dark-1000">
              Hi, I'm Alex! 👋
            </h1>
            <p className="max-w-md mx-auto mt-4 rounded-md text-md font-base text-dark-800 sm:text-md md:mt-4 md:text-lg md:max-w-3xl">
              I'm a product designer, software engineer, and writer, currently
              living in Vienna. Right now, I build fullstack apps at zerolens.
            </p>
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

      <div className="px-4 sm:hidden">
        <hr className="" />
      </div>

      <CenteredSection className="bg-geist-10 sm:bg-transparent">
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
      </CenteredSection>

      <div className="px-4 sm:hidden">
        <hr className="" />
      </div>

      <CenteredSection className="sm:bg-transparent">
        <SectionHeading title="Latest posts" link="/blog" />

        <ul className="mt-5 divide-y divide-dark-200">
          {posts.map((post) => (
            <ListItem item={post} key={post.title}>
              <div className="flex items-center py-4 sm:py-2.5">
                <div className="flex-1 min-w-0 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <ListItem.Title />

                    <div className="flex mt-0.5">
                      <ListItem.Date />
                    </div>
                  </div>

                  <div className="flex-shrink-0 mt-2 sm:mt-0">
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
        <h2 className="text-2xl font-bold sm:text-3xl text-dark-1000">
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
