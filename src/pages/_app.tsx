import React from "react";
import { AppProps } from "next/app";
import "../styles/tailwind.scss";
import "@assets/prism.css";
import { Provider } from "urql";
import client from "graphql/urqlClient";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
