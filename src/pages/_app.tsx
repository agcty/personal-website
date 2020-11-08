import React from "react";
import { AppProps } from "next/app";
import "../styles/tailwind.scss";
import "@assets/prism.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default MyApp;
