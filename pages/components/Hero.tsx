import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { stagger, child } from '../../animations'

const Hero = () => {
  return (
    <Container fluid id="hero">
      <Container className="mb-5">
        <Row className="align-items-center g-5 py-5 min-vh-100">
          <Col lg={6}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              // viewport={{ once: true }}
              variants={stagger(0.3)}
            >
              <motion.h3 variants={child} className="lh-1 mb-3">
                Hi, my name is
              </motion.h3>
              <motion.h1 variants={child} className="display-3 fw-bold lh-1 mb-3">
                Felipe Buencamino.
              </motion.h1>
              <motion.h1 variants={child} className="display-6  lh-1 mb-3">
                I build things for the web.
              </motion.h1>
              <motion.p variants={child} className="lead">
                I&apos;m a full stack software engineer specializing in front-end web development.
              </motion.p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Hero
