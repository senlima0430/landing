import Head from "next/head";
import { ToastContainer } from 'react-toastify';
import { ParallaxProvider } from 'react-scroll-parallax';

import "sanitize.css";
import 'react-toastify/dist/ReactToastify.min.css';

import "../styles/global.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Senlima Sun</title>
      </Head>

      <ParallaxProvider>
        <Component {...pageProps} />
        <ToastContainer
          position="bottom-right"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </ParallaxProvider>
    </>
  );
}
