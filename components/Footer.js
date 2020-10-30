import Image from 'next/image'

import { Container, Content, Strokes } from './Footer.styled'

export default function Footer() {
  return (
    <Container>
      <Content>
        <Image
          src="/images/avatar.png"
          alt="Senlima Sun's avatar"
          width={40}
          height={40}
        />
        <p>Made by Senlima Sun in 2020</p>
      </Content>
      <Strokes src="/images/footer-strokes.svg" alt="dress strokes" />
    </Container>
  )
}
