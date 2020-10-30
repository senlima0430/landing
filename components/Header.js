import { useState } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import { Container, Title, Symbol } from './Header.styled'

export default function Header() {
  const [symbolStyle, setSymbolStyle] = useState({
    width: '200px',
  })

  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y > window.innerHeight * -1) {
        const newStyle = {
          width: `${200 - currPos.y}px`,
        }
        if (JSON.stringify(newStyle) === JSON.stringify(symbolStyle)) return
        setSymbolStyle(newStyle)
      }
    },
    [symbolStyle]
  )

  return (
    <Container>
      <Title>Senlima</Title>
      <Symbol
        src="/images/header-infinite.svg"
        alt="infinite symbol"
        style={{ ...symbolStyle }}
      />
    </Container>
  )
}
