// import { projects } from '../../constants'
import { Container, Row } from 'react-bootstrap'
import OldProject from './OldProject'
import Project from './Project'
import { projects } from '../../constants/constants'

const Projects = () => {
  return (
    <Container fluid className="bg-dark-23" id="projects">
      <Container className="mb-5 py-5">
        <h1 className="text-center pb-5">PROJECTS</h1>
    
        <Row>
          {projects.map((project, index) => (
            <Project key={project.id} index={index} {...project} />
            // <OldProject key={project.id} {...project} />

          ))}
        </Row>
     
      </Container>
    </Container>
  )
}

export default Projects
