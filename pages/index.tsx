import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Container, Button } from 'react-bootstrap'
import { BsFillArrowUpSquareFill } from 'react-icons/bs'
import { motion } from 'framer-motion'

import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Technologies from './components/Technologies'
import About from './components/About'
import Resume from './components/Resume'

const Home: NextPage = () => {
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <Head>
        <title>Felipe Buencamino</title>
        <meta name="description" content="Felipe Buencamino's portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        {/* <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}> */}
        <Hero />
        <About />
        <Projects />
        <Technologies />
        {/* <Resume /> */}
        <Contact />

        <Container>
          <div>
            <Button
              onClick={scrollToTop}
              variant="secondary"
              className={`btn-scroll-to-top ms-auto m-5 p-0 text-center ${
                showButton ? 'fade-in' : ''
              }`}
            >
              <BsFillArrowUpSquareFill size="2.5rem" />
            </Button>
          </div>
        </Container>
        {/* </motion.div> */}
      </main>
      <Footer />
    </>
  )
}

export default Home
