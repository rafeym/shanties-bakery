import React from 'react'

import Hero from '../components/Hero/Hero'
import Newsletter from '../components/Newsletter/Newsletter'
import ProductGallery from '../components/ProductGallery/ProductGallery'
import Services from '../components/Services/Services'
import Header from '../components/Navbar/Header'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <>
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
