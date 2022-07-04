import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'

const About = (): JSX.Element => {
  return (
    <Container id="about" fluid>
      <Container className="d-flex align-items-center min-vh-100 mb-5">
        <Row className="g-5 py-5">
          <Col>
            <motion.div
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7 }}
              variants={{
                visible: { opacity: 1, scale: 1, x: 0 },
                hidden: { opacity: 0, scale: 1, x: 0 },
              }}
            >
              <h1 className="mb-4">ABOUT ME</h1>

              <p className="fs-5">
                Having the knowledge and skills to create websites and applications from the ground
                up satisfies a part of me that truly enjoys problem-solving and the production
                process.
              </p>
              <p className="fs-5 mb-5">
                I am an effective communicator, collaborator, critical thinker, and project
                organizer, and I hope these skills along with my continued education in the field
                will bolster my capability as a web developer and aid me in helping others bring
                their ideas to life on the web efficiently and creatively.
              </p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default About
