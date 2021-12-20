import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/Navbar/Header'
import Footer from '../components/Footer/Footer'
import FAQ from '../components/Info/Info'

const Info = () => {
  return (
    <>
      <Helmet>
        <title>FAQ</title>
        <meta name='description' content='FAQ' />
      </Helmet>
      <Header />
      <FAQ />
      <Footer />
    </>
  )
}

export default Info
