import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`

export const Mask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
`

export const Title = styled.div`
  width: 60%;
  height: 200px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, -50%);
  mix-blend-mode: difference;

  h3 {
    margin: 0;
    font-size: 2.5rem;
  }
`

export const scroll = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(0, -390px, 0);
  }
`

export const Pic = styled.div`
  background-image: url(/images/skills.png);
  background-position: center center;
  background-size: 430px;
  position: absolute;
  top: 0px;
  left: 0px;
  height: 250%;
  width: 100%;
  animation-name: ${scroll};
  animation-duration: 30s;
  opacity: 0.5;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`
