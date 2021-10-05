import React from 'react'

import Hero from '../components/Hero/Hero'
import Newsletter from '../components/Newsletter/Newsletter'
import ProductGallery from '../components/ProductGallery/ProductGallery'
import Services from '../components/Services/Services'

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <ProductGallery />
      <Newsletter />
    </>
  )
}

export default Home
