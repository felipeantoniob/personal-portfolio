import { Card, Col, Button } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'

type ProjectTypes = {
  title: string
  image: string
  description: string
  codeUrl: string
  siteUrl: string
}

const Project = ({ title, image, description, codeUrl, siteUrl }: ProjectTypes) => {
  return (
    <Col xs={12} sm={12} md={6} lg={6} className="mb-4 g-5 d-flex">
      <Card bg="dark" className="project-card mx-2 border-0 shadow-sm ">
        <div>
          <Image
            className="card-img-top"
            src={image}
            alt="Card image cap"
            width={640}
            height={360}
          />
        </div>
        <Card.Body>
          <Card.Title className="text-center mb-4 fs-2">{title}</Card.Title>
          <Card.Text className="mb-5">{description}</Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between border-top  py-3">
          <a className="text-decoration-none link-light" href={codeUrl}>
            GITHUB
          </a>
          <a className="text-decoration-none link-light" href={siteUrl}>
            LIVE SITE
          </a>
        </Card.Footer>
      </Card>
    </Col>
  )
}

export default Project
