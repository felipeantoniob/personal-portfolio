import Image from 'next/image'
import { Card, Col, Modal, Row } from 'react-bootstrap'

interface ProjectModalProps {
  show: boolean
  handleClose: () => void
}

const ProjectModal = ({ show, handleClose }: ProjectModalProps) => {
  return (
    <Modal show={show} onHide={handleClose} size="xl" centered contentClassName="project-modal">
      <Modal.Header className="modal-header p-0">asdf</Modal.Header>
    </Modal>
  )
}

export default ProjectModal
