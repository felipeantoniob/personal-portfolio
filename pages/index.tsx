import type { NextPage } from 'next'
import Head from 'next/head'

import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import ScrollToTopButton from '../components/ScrollToTopButton'
import Technologies from '../components/Technologies'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Felipe Buencamino</title>
        <meta name="description" content="Felipe Buencamino's portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Technologies />
        <Contact />

        <ScrollToTopButton />
      </main>
      <Footer />
    </>
  )
}

export default Home
