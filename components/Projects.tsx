import { Container, Row } from 'react-bootstrap'
import Project from './Project'
import { projects } from '../constants/constants'

const Projects = () => {
  return (
    <Container fluid id="projects">
      <Container className="mb-5 py-5">
        <h1 className="text-center pb-5">PROJECTS</h1>
        <Row>
          {projects.map((project, index) => (
            <Project key={project.id} index={index} {...project} />
          ))}
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
