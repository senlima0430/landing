import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
  padding: 10vh 0;
`

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 90%;
  height: 100%;
  max-width: 1024px;
  display: grid;
  gap: 3rem;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(2, 1fr);
`

export const SideImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(/images/building.jpg);
  background-position: center center;
  background-size: cover;
`

export const Form = styled.form`
  h6 {
    margin-top: 0;
    font-size: 2rem;
    margin-bottom: 0.5em;
  }

  p {
    margin: 0.25rem;
  }
`

export const Input = styled.input`
  border: none;
  padding: 0.75em;
  padding-left: 1em;
  border-radius: 8px;
  width: 100%;
  font-size: 0.75rem;
  background: transparent;
  color: white;
  border: 1px solid white;
  transition: border 0.28s;
  margin-bottom: 0.5em;

  &:hover {
    border: 1px solid #2dd397;
  }
`

export const Textarea = styled.textarea`
  padding: 0.75em;
  width: 100%;
  resize: none;
  color: white;
  height: 100px;
  border-radius: 8px;
  overflow-y: scroll;
  scrollbar-width: none;
  background: transparent;
  border: 1px solid white;
  transition: border 0.28s;
  font-family: Roboto;
  font-size: 0.75rem;

  &:hover {
    border: 1px solid #2dd397;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`

export const Submit = styled.input`
  cursor: pointer;
  border: none;
  margin-top: 3em;
  padding: 0.5em 1.5em;
  background: white;
  font-size: 0.75rem;
  color: black;
  border-radius: 8px;
  box-shadow: 1px 1px 2px 0px white;
  transition: box-shadow 0.28s;

  &:hover {
    box-shadow: 1px 1px 0px 2px white;
  }
`
