import styles from "styles/home.css";
import { Cursor } from "components/cursor";

export default function Home() {
  return (
    <div className={styles.container}>
      <Cursor />

      <header>
        <nav className={styles.navbar}>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/senlima0430"
          >
            github
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/senlima4"
          >
            twitter
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/senlima/"
          >
            linkedin
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://senlima.blog"
          >
            blog
          </a>
        </nav>
      </header>

      <main>
        <div className={styles.slogan}>
          <h1 className={styles.title}>Senlima</h1>
          <h2>Full Stack Developer</h2>
        </div>
      </main>
    </div>
  );
}
