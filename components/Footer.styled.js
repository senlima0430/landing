import styled from 'styled-components'

export const Container = styled.footer`
  position: relative;
  width: 100%;
`

export const Content = styled.div`
  margin: 0 auto;
  padding: 2.5rem 0;
  width: 90%;
  max-width: 1024px;
  border-top: 1px solid white;

  p {
    margin: 0;
    margin-top: 0.5rem;
    font-weight: 300;
  }
`

export const Strokes = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: auto;
  height: 100%;
`
