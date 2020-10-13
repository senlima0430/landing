import Cursor from "../components/cursor";

export default function Home() {
  return (
    <div className="container">
      <Cursor />

      <header>
        <nav className="navbar">
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
        <div className="slogan">
          <h1 className="title">Senlima</h1>
          <h2>Full Stack Developer</h2>
        </div>
      </main>
    </div>
  );
}
