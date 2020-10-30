import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 90%;
  height: 80vh;
  max-width: 1024px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  margin-top: 5rem;
  width: 100%;
  height: 300px;
  display: grid;
  gap: 1rem;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(3, 1fr);
`

export const Col = styled.div`
  text-align: left;

  svg {
    font-size: 1.5rem;
  }

  h5 {
    margin: 0;
    font-size: 1.25rem;
    border-bottom: 1px solid white;
  }
`
