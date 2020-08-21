import React from 'react'

import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <div
        style={{
          margin: '0 auto',
          width: '90%',
          maxWidth: '968px'
        }}
      >
        <Skills />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}
