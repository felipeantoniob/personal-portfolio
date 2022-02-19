import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import { fadeInUp } from '../../animations/index'
import { motion } from 'framer-motion'

const About = (): JSX.Element => {
  return (
    <Container id="about" fluid className="bg-dark-2">
      <Container className="min-vh-100 d-flex align-items-center mb-5 ">
        <Row className="g-5 py-5">
          <Col md="auto">
            <Image src="http://via.placeholder.com/463x463" alt="image" width={463} height={463} />
          </Col>
          <Col>
            <motion.div variants={fadeInUp}>
              <h1 className="mb-4">ABOUT ME</h1>
              <p className="lh-lg fs-5">
                I&apos;m always looking for opportunities to expand upon my skills and am currently
                seeking a full-time junior web developer position or internship.
              </p>
              <p className="lh-lg fs-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit rerum provident
                possimus vitae corrupti laudantium, impedit deserunt esse cum voluptates a neque
                expedita qui excepturi amet quo voluptas. Voluptas, quas. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ex est dolore illum.
              </p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default About
