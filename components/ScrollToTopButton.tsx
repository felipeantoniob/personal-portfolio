import { useEffect, useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import { BsFillArrowUpSquareFill } from 'react-icons/bs'

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const ScrollToTopButton = () => {
    const [showButton, setShowButton] = useState(false)


  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 500) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
  }, [])

  return (
    <Container>
      <div>
        <Button
          onClick={scrollToTop}
          variant="secondary"
          className={`btn-scroll-to-top ms-auto m-5 p-0 text-center ${showButton ? 'fade-in' : ''}`}
        >
          <BsFillArrowUpSquareFill size="2.5rem" />
        </Button>
      </div>
    </Container>
  )
}

export default ScrollToTopButton
