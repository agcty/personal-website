import React from "react";

import { GetStaticProps } from "next";
import Head from "next/head";
import { NotionAPI } from "notion-client";
import { getPageTitle } from "notion-utils";
import { NotionRenderer } from "react-notion-x";

import "react-notion-x/src/styles.css";

// used for code syntax highlighting (optional)
import "prismjs/themes/prism-tomorrow.css";

// used for collection views (optional)
import "rc-dropdown/assets/index.css";

// used for rendering equations (optional)
import "katex/dist/katex.min.css";

const isDev = process.env.NODE_ENV === "development" || !process.env.NODE_ENV;

export const getServerSideProps: GetStaticProps = async (context) => {
  const notion = new NotionAPI({
    authToken:
      "1efa4b90f88f72d6b2fb39e254ab2c14423ecdc0a36793247ce4e894f6989defc4c9d4f2a70f065e87a28f447fd1f2bb100812d42048e94ab33586b2afc01ccc82eb839c9b2e7f97d195a06df8a7",
  });

  const pageId = context.params?.id as string;
  const recordMap = await notion.getPage(pageId);

  return {
    props: {
      recordMap,
    },
    revalidate: 60,
  };
};

// export async function getStaticPaths() {
//   if (isDev) {
//     return {
//       paths: [],
//       fallback: true,
//     };
//   }

//   const rootNotionPageId = "Test-dd366de974c04d62b2b65a8097f485ed";
//   const rootNotionSpaceId = "fde5ac74-eea3-4527-8f00-4482710e1af3";

//   // This crawls all public pages starting from the given root page in order
//   // for next.js to pre-generate all pages via static site generation (SSG).
//   // This is a useful optimization but not necessary; you could just as easily
//   // set paths to an empty array to not pre-generate any pages at build time.
//   const pages = await getAllPagesInSpace(
//     rootNotionPageId,
//     rootNotionSpaceId,
//     notion.getPage.bind(notion),
//     {
//       traverseCollections: false,
//     }
//   );

//   const paths = Object.keys(pages).map((pageId) => `/${pageId}`);

//   return {
//     paths,
//     fallback: true,
//   };
// }

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

      <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} />
    </>
  );
}
