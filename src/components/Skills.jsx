import React from 'react'
import { GoBrowser, GoServer, GoCircuitBoard } from 'react-icons/go'

import styles from './Skills.module.css'

export function Skills() {
  return (
    <article className={styles.skills_container}>
      <h2 className={styles.title}>I provide</h2>
      <ul className={styles.skills_list}>
        <li className={styles.skills_item}>
          <GoBrowser />
          <section>
            <h3>Web application</h3>
            <p>
              Use any framework and tools to provide high quality product. Also
              can design a little bit.
            </p>
          </section>
        </li>
        <li className={styles.skills_item}>
          <GoServer />
          <section>
            <h3>API service</h3>
            <p>
              Build 3rd party OAuth, file upload, database control, crawler with
              Nodejs or Python.
            </p>
          </section>
        </li>
        <li className={styles.skills_item}>
          <GoCircuitBoard />
          <section>
            <h3>DevOps</h3>
            <p>
              Build Docker image for multiple stage. Used Github Action, GitLab
              CI and Jenkin for CI / CD.
            </p>
          </section>
        </li>
      </ul>
    </article>
  )
}
