import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FiDownload } from 'react-icons/fi'

const Resume = () => {
  return (
    <Container id="resume" className="py-5 my-5 border-top border-bottom">
      <Row className="d-flex align-items-center" style={{ height: '12rem' }}>
        <h1 className="text-center">RESUME</h1>
        <FiDownload size="2rem" />
      </Row>
    </Container>
  )
}

export default Resume
