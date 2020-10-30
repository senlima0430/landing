import { useState } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import { Title, Mask, Container, Pic } from './Intro.styled'

export default function Intro() {
  const [maskStyle, setMaskStyle] = useState({
    boxShadow: 'inset 0px 0px 30px 200px #000',
  })

  useScrollPosition(
    ({ currPos }) => {
      const dif = window.innerWidth / 2 + currPos.y
      if (-200 <= dif) {
        const newStyle = {
          boxShadow: `inset 0px 0px 30px ${200 + dif}px #000`,
        }
        if (JSON.stringify(newStyle) === JSON.stringify(maskStyle)) return
        setMaskStyle(newStyle)
      }
    },
    [maskStyle]
  )

  return (
    <Container>
      <Mask style={{ ...maskStyle }} />
      <Title>
        <h3>Lots of tools! Lots of idea</h3>
        <p>
          Can use React, Next js, Vue, Node js, Python, AWS, Docker... <br />
          Help you to build flexible and scalable website services that you
          want
        </p>
      </Title>
      <Pic />
    </Container>
  )
}
