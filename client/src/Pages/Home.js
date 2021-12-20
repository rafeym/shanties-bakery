import React from 'react'

import Hero from '../components/Hero/Hero'
import Newsletter from '../components/Newsletter/Newsletter'
import ProductGallery from '../components/ProductGallery/ProductGallery'
import Services from '../components/Services/Services'
import Header from '../components/Navbar/Header'
import Footer from '../components/Footer/Footer'

import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name='description' content='Shanties Bakery Home' />
      </Helmet>
      <Header />
      <Hero />
      <Services />
      <ProductGallery />
      <Newsletter />
      <Footer />
    </>
  )
}

export default Home
