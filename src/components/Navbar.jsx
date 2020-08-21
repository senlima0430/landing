import React from 'react'

import styles from './Navbar.module.css'

export function Navbar() {
  return (
    <nav className={styles.info_bar}>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/senlima0430"
      >
        Github
      </a>
      <a rel="noopener noreferrer" target="_blank" href="https://senlima.blog">
        Blog
      </a>
    </nav>
  )
}
