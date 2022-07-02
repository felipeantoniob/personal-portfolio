import { useState } from 'react'
import { Card, Col, Button } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'
import { MdInfo } from 'react-icons/md'

import ProjectModal from './ProjectModal'

// interface ProjectProps {
//   title: string
//   image: string
//   description: string
//   codeUrl: string
//   siteUrl: string
// }

interface ProjectProps {
  title: string
  image: string
  description: string
  codeUrl: string
  siteUrl: string
  id: number
  technologies: string[]
}

const Project = ({ ...project }: ProjectProps) => {
  const [show, setShow] = useState(false)

  const handleClose = (): void => setShow(false)
  const handleShow = (): void => setShow(true)

  return (
    <Col xs={12} sm={12} md={6} lg={6} className="mb-4 g-5 d-flex">
      <Card bg="dark" className="project-card mx-2 border-0 shadow-sm">
        <div className="my-auto position-relative left-0 top-0 cursor-pointer hover-img">
          <Image
            className="card-img-top"
            src={project.image}
            alt={project.title}
            width={640}
            height={360}
            onClick={handleShow}
          />
          <div className="position-absolute top-50 start-50 translate-middle text-light icon-info">
            <MdInfo size="4rem" />
          </div>
        </div>
        <Card.Body>
          <Card.Title className="text-center mb-4 fs-2">{project.title}</Card.Title>
          <Card.Text className="mb-5">{project.description}</Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between border-top  py-3">
          <a
            className="text-decoration-none link-light"
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>
          <a
            className="text-decoration-none link-light"
            href={project.siteUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            LIVE SITE
          </a>
        </Card.Footer>
      </Card>
      <ProjectModal show={show} handleClose={handleClose} {...project} />
    </Col>
  )
}

export default Project
