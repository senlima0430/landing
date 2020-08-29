import Head from "next/head";
import { Parallax } from "react-scroll-parallax";

import styles from "../styles/Home.module.css";
import { GridBg } from "../components/GridBg";
import { ProvideArea } from "../components/ProvideArea";

// <p>Sorry but i just know everything</p>

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Senlima Sun</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GridBg />

      <header className={styles.header}>
        <div className={styles.header_content}>
          <Parallax y={[-45, 45]}>
            <h1 className={styles.title}>Senlima Sun</h1>
          </Parallax>
          <p />
          <Parallax className={styles.subtitle} y={[-25, 25]}>
            <h2>Web Engineer</h2>
          </Parallax>
          <Parallax className={styles.description} y={[-10, 10]}>
            <h3>
              Provide website product's development and deployment services.
              Also can build API service for production need.
            </h3>
          </Parallax>
        </div>
      </header>

      <main style={{ marginTop: "10vh" }}>
        <ProvideArea />

        <div className={styles.about_container}>
          <div>
            <a
              className={styles.about_link}
              href="https://github.com/senlima0430"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              className={styles.about_link}
              href="https://senlima.blog"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </a>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>2020 Made by Senlima Sun</p>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
