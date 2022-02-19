import {
  DiReact,
  DiHtml5,
  DiCss3,
  DiSass,
  DiGit,
  DiTerminal,
  DiBootstrap,
  DiJsBadge,
  DiNodejsSmall,
} from 'react-icons/di'
import {
  SiFirebase,
  SiTypescript,
  SiMongodb,
  SiNextdotjs,
  SiJest,
  SiDocker,
  SiExpress,
} from 'react-icons/si'
import { Container, Row, Col } from 'react-bootstrap'

const Technologies = () => {
  return (
    <>
      <Container
        className="min-vh-100 d-flex align-items-center justify-content-center mb-5"
        id="skills"
      >
        <Row xs={4} className="fw-bold">
          <Col xs={12} className="text-center pb-5 mb-5 ">
            <h1>SKILLS</h1>
          </Col>
          <Col className="text-center py-3">
            <DiHtml5 size="5rem" />
            <p>HTML5</p>
          </Col>
          <Col className="text-center py-3">
            <DiCss3 size="5rem" />
            <p>CSS3</p>
          </Col>
          <Col className="text-center py-3">
            <DiJsBadge size="5rem" />
            <p>JAVASCRIPT + ES6</p>
          </Col>
          <Col className="text-center py-3">
            <SiTypescript size="5rem" />
            <p>TYPESCRIPT</p>
          </Col>
          <Col className="text-center py-3">
            <SiMongodb size="5rem" />
            <p>MONGODB</p>
          </Col>
          <Col className="text-center py-3">
            <SiExpress size="5rem" />
            <p>EXPRESS</p>
          </Col>
          <Col className="text-center py-3">
            <DiReact size="5rem" />
            <p>REACT</p>
          </Col>
          <Col className="text-center py-3">
            <DiNodejsSmall size="5rem" />
            <p>NODE JS</p>
          </Col>
          <Col className="text-center py-3">
            <SiNextdotjs size="5rem" />
            <p>NEXT JS</p>
          </Col>
          <Col className="text-center py-3">
            <SiFirebase size="5rem" />
            <p>FIREBASE</p>
          </Col>
          <Col className="text-center py-3">
            <DiSass size="5rem" />
            <p>SASS</p>
          </Col>
          <Col className="text-center py-3">
            <DiBootstrap size="5rem" />
            <p>BOOTSTRAP</p>
          </Col>
          <Col className="text-center py-3">
            <SiJest size="5rem" />
            <p>JEST</p>
          </Col>
          <Col className="text-center py-3">
            <SiDocker size="5rem" />
            <p>DOCKER</p>
          </Col>
          <Col className="text-center py-3">
            <DiGit size="5rem" />
            <p>GIT</p>
          </Col>
          <Col className="text-center py-3">
            <DiTerminal size="5rem" />
            <p>TERMINAL</p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Technologies
