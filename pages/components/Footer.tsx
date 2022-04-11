import Image from 'next/image'
import Link from 'next/link'

import { Container, Col } from 'react-bootstrap'
import { BsGithub } from 'react-icons/bs'
import { FaTelegramPlane, FaDev } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'

const Footer = () => {
  return (
    <footer>
      <Container className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <Col md={4} className="d-flex align-items-center">
          <span className="text-muted">&copy; Designed by Felipe Buencamino, 2022</span>
        </Col>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a aria-label="github" className="text-muted" href="https://github.com/felipeantoniob/">
              <BsGithub size="1.5rem" />
            </a>
          </li>
          <li className="ms-3">
            <a aria-label="mail" className="text-muted" href="mailto:felipebuencamino@gmail.com">
              <GrMail size="1.5rem" />
            </a>
          </li>
          <li className="ms-3">
            <a aria-label="telegram" className="text-muted" href="https://t.me/felipeantoniob">
              <FaTelegramPlane size="1.5rem" />
            </a>
          </li>
          {/* <li className="ms-3">
            <a aria-label="dev" className="text-muted" href="https://dev.to/felipeantoniob">
              <FaDev size="1.5rem" />
            </a>
          </li> */}
        </ul>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none text-muted"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a> */}
      </Container>
    </footer>
  )
}

export default Footer
