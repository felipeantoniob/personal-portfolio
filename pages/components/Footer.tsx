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
          {/* <Link href="/">
            <a className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-house-door-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
              </svg>
            </a>
          </Link> */}
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

          <li className="ms-3">
            <a aria-label="dev" className="text-muted" href="https://dev.to/felipeantoniob">
              <FaDev size="1.5rem" />
            </a>
          </li>
        </ul>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
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
