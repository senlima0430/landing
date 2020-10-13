import "sanitize.css";
import "../styles/global.css";
import Head from "next/head";

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
