import {
  FaLanguage,
  FaFireAlt,
  FaAccessibleIcon,
  FaServer,
  FaJenkins,
  FaRegLightbulb,
} from 'react-icons/fa'

import { Container, Content, Col } from './Subject.styled'

export default function Subject() {
  return (
    <Container>
      <Content>
        <Col>
          <FaAccessibleIcon />
          <h5>a11y</h5>
          <p>
            Support web can be use by everybody, because it should be and must
            be
          </p>
        </Col>
        <Col>
          <FaLanguage />
          <h5>i18n</h5>
          <p>
            Keep your ambitions for the global market, let every country's
            people know your idea
          </p>
        </Col>
        <Col>
          <FaFireAlt />
          <h5>high quality</h5>
          <p>
            Stabilize your product. Using multiple tools to make your
            management cost down a lot
          </p>
        </Col>
        <Col>
          <FaServer />
          <h5>api services</h5>
          <p>
            Build GraphQL, RESTful, WebSockets to make feature to be implement
          </p>
        </Col>
        <Col>
          <FaJenkins />
          <h5>devops</h5>
          <p>
            Build a fast, rigorous deployment process, reduce manual steps and
            more focus on development
          </p>
        </Col>
        <Col>
          <FaRegLightbulb />
          <h5>creative</h5>
          <p>
            Many ideas and thoughts about how to make product and world become
            more better.
          </p>
        </Col>
      </Content>
    </Container>
  )
}
