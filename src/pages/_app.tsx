import React from "react";

import splitbee from "@splitbee/web";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";

import "../styles/tailwind.scss";

import "@assets/prism.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  splitbee.init();

  return (
    <>
      <DefaultSeo
        title="Alex Gogl - Software Engineer"
        description="I write about how our future will look and how we can improve it."
        twitter={{
          handle: "@agctyz",
          site: "gogl.io",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
