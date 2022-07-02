import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import { fadeInUp } from '../../animations/index'
import { motion } from 'framer-motion'

const About = (): JSX.Element => {
  return (
    <Container id="about" fluid className="bg-dark-23">
      <Container className="d-flex align-items-center min-vh-100 mb-5">
        <Row className="g-5 py-5">
          {/* <Col md="auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              variants={{
                visible: { opacity: 1, scale: 1, x: 0 },
                hidden: { opacity: 0, scale: 1, x: -60 },
              }}
            >
              <Image
                src="http://via.placeholder.com/463x463"
                alt="a headshot of Felipe Buencamino"
                width={463}
                height={463}
              />
            </motion.div>
          </Col> */}
          <Col>
            <motion.div
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              variants={{
                visible: { opacity: 1, scale: 1, x: 0 },
                hidden: { opacity: 0, scale: 1, x: 60 },
              }}
            >
              <h1 className="mb-4">ABOUT ME</h1>
              {/* <p className="lh-lg fs-5">
                I like making beautiful things, whether it&apos;s software or art, and some previous
                limited experience I had with HTML sparked an interest in web development that I was
                thrilled to pursue.
              </p> */}
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
              {/* <p className="fs-5">
                Feel free to get in touch at the bottom of this page if you&apos;re interested in
                working with me, I&apos;m always looking for opportunities to expand upon my skills
                and am currently seeking a full-time junior web developer position or internship!
              </p> */}
              {/* <a className=" text-light fw-bold fs-4">View my resume!</a> */}
            </motion.div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default About
