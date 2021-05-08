import React from "react";

import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import "../styles/tailwind.scss";
import "@assets/prism.css";
import { Provider } from "urql";

import client from "graphql/urqlClient";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider value={client}>
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
    </Provider>
  );
}

export default MyApp;
