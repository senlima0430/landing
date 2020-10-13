import "sanitize.css";
import Head from "next/head";

import "styles/global.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Senlima Sun</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
