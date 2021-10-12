import React from "react";

import Head from "next/head";
import { NotionAPI } from "notion-client";
import { getPageTitle, getAllPagesInSpace } from "notion-utils";
import { Collection, CollectionRow, NotionRenderer } from "react-notion-x";

import "react-notion-x/src/styles.css";

// used for code syntax highlighting (optional)
import "prismjs/themes/prism-tomorrow.css";

// used for collection views (optional)
import "rc-dropdown/assets/index.css";

// used for rendering equations (optional)
import "katex/dist/katex.min.css";
import SidebarLayout from "@components/layouts/SidebarLayout";

const isDev = process.env.NODE_ENV === "development" || !process.env.NODE_ENV;

const notion = new NotionAPI();

export const getStaticProps = async (context) => {
  const pageId = context.params.pageId as string;
  const recordMap = await notion.getPage(pageId);

  return {
    props: {
      recordMap,
    },
    revalidate: 10,
  };
};

export async function getStaticPaths() {
  if (isDev) {
    return {
      paths: [],
      fallback: true,
    };
  }

  const rootNotionPageId = "067dd719a912471ea9a3ac10710e7fdf";
  const rootNotionSpaceId = "fde5ac74-eea3-4527-8f00-4482710e1af3";

  // This crawls all public pages starting from the given root page in order
  // for next.js to pre-generate all pages via static site generation (SSG).
  // This is a useful optimization but not necessary; you could just as easily
  // set paths to an empty array to not pre-generate any pages at build time.
  const pages = await getAllPagesInSpace(
    rootNotionPageId,
    rootNotionSpaceId,
    notion.getPage.bind(notion),
    {
      traverseCollections: false,
    }
  );

  const paths = Object.keys(pages).map((pageId) => `/${pageId}`);

  return {
    paths,
    fallback: true,
  };
}

export default function NotionPage({ recordMap }) {
  if (!recordMap) {
    return null;
  }

  const title = getPageTitle(recordMap);

  return (
    <>
      <Head>
        <meta name="description" content="React Notion X demo renderer." />
        <title>{title}</title>
      </Head>

      <SidebarLayout>
        <div className="max-w-4xl pt-10 pb-12 mx-auto">
          <h1 className="text-4xl font-semibold text-dark-1000">
            {getPageTitle(recordMap)}
          </h1>

          <NotionRenderer
            recordMap={recordMap}
            fullPage={false}
            darkMode={false}
            components={{
              collection: ({ ...props }) => (
                <div className="sm:contents">
                  <Collection {...props}></Collection>
                </div>
              ),
              // collection: Collection,
              collectionRow: CollectionRow,
            }}
          />
        </div>
      </SidebarLayout>
    </>
  );
}
