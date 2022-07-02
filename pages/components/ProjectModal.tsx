import Image from 'next/image'
import { Card, Col, Modal, Row } from 'react-bootstrap'

interface ProjectModalProps {
  show: boolean
  handleClose: () => void
  title: string
  image: string
  description: string
  codeUrl: string
  siteUrl: string
  id: number
  technologies: string[]
}

const ProjectModal = ({ show, handleClose, ...project }: ProjectModalProps) => {
  return (
    <Modal show={show} onHide={handleClose} size="xl" centered contentClassName="project-modal">
      {/* <Modal.Header className="modal-header p-0 justify-content-center">
        <h1>{project.title}</h1>
      </Modal.Header> */}

      <Modal.Body>
        <div className="text-center">
          <Image
            className="card-img-top"
            src={project.image}
            alt={project.title}
            width={1280}
            height={720}
          />
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default ProjectModal
