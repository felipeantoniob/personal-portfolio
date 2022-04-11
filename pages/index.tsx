import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Container, Button } from 'react-bootstrap'
import { FaArrowUp } from 'react-icons/fa'
import { motion } from 'framer-motion'

import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Technologies from './components/Technologies'
import About from './components/About'

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
      <main className="main min-vh-100">
        {/* <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}> */}
          <Hero />
          <About />
          <Technologies />
          <Projects />
          <Contact />

          <Container>
            {showButton && (
              <Button
                onClick={scrollToTop}
                variant="secondary"
                className="scroll-to-top-btn ms-auto m-5 text-center"
              >
                <FaArrowUp />
              </Button>
            )}
          </Container>
        {/* </motion.div> */}
      </main>
      <Footer />
    </>
  )
}

export default Home
