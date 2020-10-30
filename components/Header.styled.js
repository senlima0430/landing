import styled, { keyframes } from 'styled-components'

const lightUp = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const Title = styled.h1`
  margin: 0;
  font-size: 4rem;
  opacity: 0;
  animation-name: ${lightUp};
  animation-delay: 1s;
  animation-duration: 0.48s;
  animation-fill-mode: forwards;
  position: sticky;
  top: 45%;
`

export const Symbol = styled.img`
  position: absolute;
  top: 45%;
  left: 50%;
  height: auto;
  transform: translate(-50%, -50%);
`

export const Container = styled.header`
  margin: 0 auto;
  width: 90%;
  max-width: 1024px;
  height: calc(100vh - 100px);
  text-align: center;
  position: relative;

  &::after {
    position: absolute;
    content: '';
    display: block;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background: linear-gradient(to top, #000 50%, transparent);
  }
`
