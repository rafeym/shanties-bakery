import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/Navbar/Header'
import Footer from '../components/Footer/Footer'
import ContactComponent from '../components/Contact/Contact'

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact</title>
        <meta name='description' content='Contact' />
      </Helmet>
      <Header />
      <ContactComponent />
      <Footer />
    </>
  )
}

export default Contact
