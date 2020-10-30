import Head from "next/head";
import { ParallaxProvider } from 'react-scroll-parallax';
import "sanitize.css";

import "../styles/global.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider>
      <Head>
        <title>Senlima Sun</title>
      </Head>
      <Component {...pageProps} />
    </ParallaxProvider>
  );
}
