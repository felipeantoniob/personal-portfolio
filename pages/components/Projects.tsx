// import { projects } from '../../constants'
import { Container, Row } from 'react-bootstrap'
import Project from './Project'
import { projects } from '../../constants/constants'

const Projects = () => {
  return (
    <Container fluid className="bg-dark-2" id="projects">
      <Container className="mb-5 py-5 ">
        <h1 className="text-center pb-5">PROJECTS</h1>
        <Row>
          {projects.map((project) => (
            <Project
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              codeUrl={project.codeUrl}
              siteUrl={project.siteUrl}
            />
          ))}
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
