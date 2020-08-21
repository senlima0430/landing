import React, { Suspense } from 'react'

import styles from './Header.module.css'

const LinesBackground = React.lazy(() => import('./LinesBackground'))

export function Header() {
  return (
    <header>
      <div className={styles.header_three_bg}>
        <Suspense fallback={<div className={styles.header_grid_bg} />}>
          <LinesBackground />
        </Suspense>
      </div>
      <div className={styles.header_context}>
        <div className={styles.header_text_container}>
          <h1 className={styles.header_title}>Senlima Sun</h1>
          <h2 className={styles.header_subtitle}>Web Engineer</h2>
        </div>
      </div>
    </header>
  )
}
