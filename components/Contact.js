import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import 'isomorphic-fetch'
import * as yup from 'yup'

import {
  Container,
  Wrapper,
  SideImage,
  Form,
  Input,
  Textarea,
  Submit,
} from './Contact.styled'

const schema = yup.object().shape({
  email: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
})

export default function Contact() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  })

  function onSubmit(data) {
    fetch('/api/contact', {
      method: 'post',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(res => {
      console.log(res)
    })
  }

  return (
    <Container id="contact-me">
      <Wrapper>
        <SideImage />

        <Form onSubmit={handleSubmit(onSubmit)}>
          <h6>Contact me</h6>

          <label htmlFor="email">
            <p>Email</p>
            <Input id="email" ref={register} type="email" name="email" />
          </label>
          <p style={{ color: 'red' }}>{errors.email?.message}</p>

          <label htmlFor="subject">
            <p>Subject</p>
            <Input
              id="subject"
              ref={register}
              type="subject"
              name="subject"
            />
          </label>
          <p style={{ color: 'red' }}>{errors.subject?.message}</p>

          <label htmlFor="message">
            <p>Message</p>
            <Textarea
              id="message"
              ref={register}
              type="message"
              name="message"
            />
          </label>
          <p style={{ color: 'red' }}>{errors.message?.message}</p>

          <Submit type="submit" value="Submit" />
        </Form>
      </Wrapper>
    </Container>
  )
}
