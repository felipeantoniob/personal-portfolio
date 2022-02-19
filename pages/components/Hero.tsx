import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'

const Hero = () => {
  return (
    <Container id="hero" className="mb-5">
      <Row className="flex-lg-row-reverse align-items-center g-5 py-5 min-vh-100">
        <Col xs={10} sm={8} lg={6}>
          {/* <Image
            src="http://via.placeholder.com/700x500"
            className="d-block mx-lg-auto img-fluid"
            alt="Picture"
            width={700}
            height={500}
            loading="lazy"
          /> */}
        </Col>
        <Col lg={6}>
          <h3 className="lh-1 mb-3"> Hi, my name is</h3>
          <h1 className="display-3 fw-bold lh-1 mb-3"> Felipe Buencamino.</h1>
          <h1 className="display-6  lh-1 mb-3"> I build things for the web.</h1>
          <p className="lead">
            I&apos;m a freelance software engineer specializing in both front-end and back-end web
            development.
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default Hero
