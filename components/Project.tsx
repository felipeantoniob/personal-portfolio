import { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Image from 'next/image'
import { MdInfo } from 'react-icons/md'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { motion } from 'framer-motion'

import ProjectModal from './ProjectModal'

interface ProjectProps {
  index: number
  title: string
  image: string
  description: string
  codeUrl: string
  siteUrl: string
  id: number
  technologies: string[]
}

const Project = ({ index, ...project }: ProjectProps) => {
  const [show, setShow] = useState(false)

  const handleClose = (): void => setShow(false)
  const handleShow = (): void => setShow(true)

  return (
    <Row className="mb-5 py-5">
      <Col className={`pb-5 order-1 ${index % 2 === 0 ? 'order-lg-1' : 'order-lg-2'}`}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1, y: 0 },
            hidden: { opacity: 0, scale: 1, y: 60 },
          }}
        >
          <div
            className="my-auto position-relative left-0 top-0 cursor-pointer hover-img"
            onClick={handleShow}
          >
            <Image
              className="card-img-top"
              src={project.image}
              alt={project.title}
              width={640}
              height={360}
            />
            <div className="position-absolute top-50 start-50 translate-middle text-light icon-info">
              <MdInfo size="4rem" />
            </div>
          </div>
        </motion.div>
      </Col>
      <Col
        xs={12}
        lg={6}
        className={`text-center mb-5 order-2 ${
          index % 2 === 0 ? 'order-lg-2 text-lg-end' : 'order-lg-1 text-lg-start'
        } `}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1, y: 0 },
            hidden: { opacity: 0, scale: 1, y: 60 },
          }}
        >
          <h2 className="mb-5 fw-bold">{project.title}</h2>
          <h5 className="mb-5">{project.description}</h5>
          <p className="mb-5">
            {project.technologies.map((technology, index) => (
              <span key={index} className=" font-monospace mb-3">
                {technology} &nbsp;
              </span>
            ))}
          </p>
          <div>
            <a
              className={`icon-github ${index % 2 === 0 ? 'p-2' : 'pe-2'}`}
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
            >
              <FiGithub size="2rem" />
            </a>
            <a
              className={`icon-external-link ${index % 2 === 0 ? 'p-s2' : 'p-2'}`}
              href={project.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live Site"
            >
              <FiExternalLink size="2rem" />
            </a>
          </div>
        </motion.div>
      </Col>
      <ProjectModal show={show} handleClose={handleClose} {...project} />
    </Row>
  )
}

export default Project
