import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;600&display=swap"
          />
          <meta name="msapplication-config" content="/browserconfig.xml" />
          <meta name="msapplication-TileColor" content="#8f00ff" />
          <meta name="theme-color" content="#8f00ff" />
          <meta name="description" content="Software Engineer that focus on website and service development" />
          <link rel="canonical" href="https://senlima.info" />
          <script async src="https://ackee.senlima0430.vercel.app/tracker.js" data-ackee-server="https://ackee.senlima0430.vercel.app" data-ackee-domain-id="6d59df5e-38ea-4633-a864-aa1b4152f63f"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
