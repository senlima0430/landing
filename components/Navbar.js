import {
  FaLinkedin,
  FaRssSquare,
  FaGithubSquare,
  FaTwitterSquare,
} from 'react-icons/fa'

import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.container}>
      <a
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/senlima0430"
      >
        <FaGithubSquare />
      </a>
      <a
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/senlima4"
      >
        <FaTwitterSquare />
      </a>
      <a
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/senlima/"
      >
        <FaLinkedin />
      </a>
      <a
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
        href="https://senlima.blog"
      >
        <FaRssSquare />
      </a>
    </nav>
  )
}
