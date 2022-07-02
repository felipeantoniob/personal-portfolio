import Link from 'next/link'
import Image from 'next/image'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { motion } from 'framer-motion'

import { stagger, child } from '../animations'

const Header = () => {
  return (
    <header>
      {/* <Navbar bg="dark" expand="lg" className="py-3"> */}
      <Navbar variant="dark" expand="lg" className="py-3">
        <Container fluid>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <motion.div
              className="nav ms-auto align-items-center fs-5"
              style={{ letterSpacing: '3px' }}
              initial="hidden"
              animate="visible"
              viewport={{ once: true }}
              variants={stagger(0.1)}
            >
              <motion.div variants={child}>
                <Nav.Link className="px-3 g-5 ">
                  <Link href="#about">
                    <a className="text-decoration-none nav-link">ABOUT</a>
                  </Link>
                </Nav.Link>
              </motion.div>
              <motion.div variants={child}>
                <Nav.Link className="px-3 g-5">
                  <Link href="#projects">
                    <a className="text-decoration-none nav-link">PROJECTS</a>
                  </Link>
                </Nav.Link>
              </motion.div>
              <motion.div variants={child}>
                <Nav.Link className="px-3 g-5">
                  <Link href="#skills">
                    <a className="text-decoration-none nav-link">SKILLS</a>
                  </Link>
                </Nav.Link>
              </motion.div>

              <motion.div variants={child}>
                <Nav.Link className="px-3 g-5">
                  <Link href="#contact">
                    <a className="text-decoration-none nav-link">CONTACT</a>
                  </Link>
                </Nav.Link>
              </motion.div>
            </motion.div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
