import React, { useEffect, useMemo, useState } from "react";
import { Fragment } from "react";

import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { Params, PostOrPage, Tag } from "@tryghost/content-api";
import clsx from "clsx";
import { format } from "date-fns";
import { GetServerSideProps } from "next";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

import CheckboxGroup, { useCheckboxContext } from "@components/CheckboxGroup";
import Centered from "@components/Layouts/Centered";
import ListItem from "@components/List/ListItem";
import Navbar from "@components/Navbar";
import useScroll from "@hooks/useScroll";
import ghost from "@services/ghost";
import { getTagStyle } from "@utils/helpers";

type MODE_TYPE = "list" | "gallery";

const modes: { name: string; type: MODE_TYPE }[] = [
  { name: "List View", type: "list" },
  { name: "Gallery View", type: "gallery" },
];

const getInitialFilterOptions = (initialFilterOptions) => {
  return {
    ...initialFilterOptions,
    mode: modes.find((mode) => mode.type === initialFilterOptions.mode),
  };
};

export default function Home({ initialFilterOptions }) {
  const { scrollY } = useScroll();

  const [filterOptions, setFilterOptions] = useState(
    getInitialFilterOptions(initialFilterOptions)
  );

  const queryParams = useMemo<Params>(() => {
    const params: Params = { limit: 0, include: ["tags"] };

    if (filterOptions.tags.length > 0) {
      params.filter = `tag:[${filterOptions.tags.join(",")}]`;
    }

    return params;
  }, [filterOptions]);

  const router = useRouter();

  const { data: posts } = useSWR(["posts", queryParams], async (_, params) => {
    return await ghost.posts.browse(queryParams);
  });

  const { data: tags } = useSWR("tags", async () => {
    return await ghost.tags.browse();
  });

  useEffect(() => {
    let baseLink = "/blog";

    const searchParams = new URLSearchParams({
      tags: filterOptions.tags,
      mode: filterOptions.mode.type,
    });

    router.push(`${baseLink}?${searchParams}`, undefined, {
      shallow: true,
    });
  }, [filterOptions]);

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
        <div className="items-center justify-between sm:flex">
          <SectionHeading title="Latest posts" link="/blog" />

          <div className="mt-6 sm:mt-0">
            <Mode
              selected={filterOptions.mode}
              setSelected={(values) =>
                setFilterOptions((options) => ({ ...options, mode: values }))
              }
            />
          </div>
        </div>

        {tags && (
          <CheckboxGroup
            values={filterOptions.tags}
            onChange={(_, values) => {
              setFilterOptions((options) => ({ ...options, tags: values }));
            }}
          >
            <div className="flex flex-wrap pb-2 mt-8 gap-2">
              {tags?.map((tag) => (
                <SelectableTag tag={tag} />
              ))}
            </div>
          </CheckboxGroup>
        )}

        <div className="mt-24">
          {filterOptions.mode.type === "gallery" && (
            <div className="mt-8 grid grid-cols-1 gap-x-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-y-6">
              {posts?.map((post: PostOrPage) => (
                <GalleryItem post={post} key={post.slug} />
              ))}
            </div>
          )}

          {filterOptions.mode.type === "list" && (
            <ul className="mt-5 divide-y divide-dark-200 dark:divide-dark-900">
              {posts?.map((post: PostOrPage) => (
                <ListItemNew post={post} key={post.slug} />
              ))}
            </ul>
          )}
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
      <h2 className="text-2xl font-bold sm:text-3xl text-dark-1000 dark:text-dark-100">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-1 text-lg font-medium text-dark-800 dark:text-dark-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function SelectableTag({ tag }: { tag: Tag }) {
  const { values, onChange } = useCheckboxContext();

  const checked = values.includes(tag.name as string);

  const style = getTagStyle(tag);

  if (checked) {
    style.borderColor = style.color;
  }

  return (
    <div>
      <input
        type="checkbox"
        id={tag.name as string}
        value={tag.name as string}
        className="hidden"
        checked={checked}
        onChange={onChange}
      />

      <label
        htmlFor={tag.name}
        className={clsx(
          `px-4 py-1 sm:py-1 font-semibold text-center transition rounded focus:outline-none text-sm border border-transparent`
        )}
        style={style}
      >
        {tag.name}
      </label>
    </div>
  );
}

// export const getServerSideProps: GetServerSideProps = async ({ query }) => {
//   const queryParams: Params = {
//     limit: 0,
//     include: ["tags"],
//   };

//   if (query.tags) {
//     queryParams.filter = `tag:[${query.tags}]`;
//   }

//   const posts = await ghost.posts.browse(queryParams);

//   const tags = await ghost.tags.browse();

//   return { props: { fallback: { posts } } };
// };

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let initialFilterOptions = { tags: [], mode: modes[0].type };

  if (query.tags) {
    initialFilterOptions.tags = query.tags.split(",");
  }

  if (query.mode) {
    initialFilterOptions.mode = query.mode as string;
  }

  return { props: { initialFilterOptions } };
};

function GalleryItem({ post }: { post: PostOrPage }) {
  return (
    <Link href={`/blog/${post.slug}`} key={post.slug}>
      <a
        aria-label={post.title}
        className="flex flex-col overflow-hidden bg-white transition border-[0.25px] dark:bg-dark-1100 duration-100 ease-in-out rounded-md border-dark-200 dark:border-dark-1000 dark:hover:border-dark-900 group hover:border-dark-300 focus:border-dark-200 transform hover:-translate-y-0.5"
      >
        <div className="relative overflow-hidden h-52">
          {post.feature_image && (
            <Image
              src={post?.feature_image ?? ""}
              loading="eager"
              layout="fill"
              className="absolute object-cover w-full h-full"
              alt="blog post image"
            />
          )}
        </div>

        <div className="flex flex-col justify-between flex-1 group-hover:bg-[#fafafb] dark:bg-dark-1100 dark:group-hover:bg-dark-1000">
          <div className="px-4 py-5">
            <time
              dateTime={post?.published_at ?? ""}
              className="text-xs text-dark-700 dark:text-dark-500"
            >
              {format(new Date(post.published_at ?? ""), "PPP")}
            </time>

            <div className="mt-1 text-sm text-dark-1100 group-hover:text-dark-800 dark:text-dark-300 dark:group-hover:text-dark-300">
              {post.title}
            </div>

            <div className="text-sm text-dark-700">{post.meta_description}</div>
          </div>

          <div className="flex justify-between">
            <div className="flex items-center" />
          </div>
        </div>
      </a>
    </Link>
  );
}

function ListItemNew({ post }: { post: PostOrPage }) {
  return (
    <ListItem item={post} key={post.title}>
      <div className="flex items-center py-4 sm:py-2.5">
        <div className="flex-1 min-w-0 sm:flex sm:items-center sm:justify-between">
          <div>
            <ListItem.Title>{post.title}</ListItem.Title>

            <div className="flex mt-0.5">
              <ListItem.Date createdAt={post.created_at ?? ""} />
            </div>
          </div>

          <div className="flex-shrink-0 mt-2 sm:mt-0">
            <div className="max-w-sm horizontal-flex-scroll">
              {post?.tags?.map((tag) => (
                <ListItem.Tag
                  tag={tag}
                  key={tag.name}
                  className="text-xs sm:text-sm"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 ml-5">
          <ListItem.OpenIcon />
        </div>
      </div>
    </ListItem>
  );
}

function Mode({ selected, setSelected }) {
  return (
    <div className="z-10 w-44">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow cursor-default dark:text-dark-300 dark:bg-dark-1000 focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
            <span className="block truncate">{selected.name}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white shadow-md dark:bg-dark-1000 dark:text-dark-300 rounded-md max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm dark:ring-dark-1000">
              {modes.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `${
                      active
                        ? "dark:text-dark-300 dark:bg-dark-900"
                        : "dark:text-dark-300"
                    }
                          cursor-default select-none relative py-2 pl-10 pr-4`
                  }
                  value={person}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`${
                          selected ? "font-medium" : "font-normal"
                        } block truncate`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span
                          className={`${
                            active ? "text-amber-600" : "text-amber-600"
                          }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                        >
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
