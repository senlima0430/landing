import React from 'react'

import styles from './Footer.module.css'

export function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.footer_links}>
        <a href="https://senlima.blog">Blog</a>
        <a href="https://twitter.com/senlima4">Twitter</a>
        <a href="https://github.com/senlima0430">Github</a>
        <a href="https://www.linkedin.com/in/senlima">Linkedin</a>
      </div>
      <div>
        <p>Made by Senlima Sun</p>
      </div>
    </div>
  )
}
