import Link from 'next/link'
import Image from 'next/image'
import { Container, Navbar, Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" expand="lg" className="py-3">
        <Container>
          {/* <Navbar.Brand>
          <Link href="/" passHref>
            <Image
              src="http://via.placeholder.com/128x77"
              alt="logo"
              width={128}
              height={77}
              className="mx-2"
            />
          </Link>
        </Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center fs-5" style={{ letterSpacing: '3px' }}>
              <Nav.Link className="px-3 g-5">
                <Link href="#about">
                  <a className="text-decoration-none link-light">ABOUT</a>
                </Link>
              </Nav.Link>
              <Nav.Link className="px-3 g-5">
                <Link href="#skills">
                  <a className="text-decoration-none link-light">SKILLS</a>
                </Link>
              </Nav.Link>
              <Nav.Link className="px-3 g-5">
                <Link href="#projects">
                  <a className="text-decoration-none link-light">PROJECTS</a>
                </Link>
              </Nav.Link>

              <Nav.Link className="px-3 g-5">
                <Link href="#contact">
                  <a className="text-decoration-none link-light">CONTACT</a>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
