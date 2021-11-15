import React from 'react'

import './ProductGallery.scss'

import img1 from '../../static/product/img1.JPG'
import img2 from '../../static/product/img2.JPG'
import img3 from '../../static/product/img3.JPG'
import img4 from '../../static/product/img4.JPG'
import img5 from '../../static/product/img5.JPG'
import img6 from '../../static/product/img6.JPG'
import img7 from '../../static/product/img7.JPG'
import img8 from '../../static/product/img8.jpg'
import img9 from '../../static/product/img9.jpg'
import ImageBox from './ImageBox'

const ProductGallery = () => {
  return (
    <>
      <div className='s-heading'>
        <h1>Our Products</h1>
        <p>Take a look at some of our featured pastries.</p>
      </div>

      <div className='body'>
        <div className='image-gallery'>
          <ImageBox img={img1} />
          <ImageBox img={img2} />
          <ImageBox img={img3} />
          <ImageBox img={img4} />
          <ImageBox img={img5} />
          <ImageBox img={img6} />
          <ImageBox img={img7} />
          <ImageBox img={img8} />
          <ImageBox img={img9} />
        </div>
      </div>
    </>
  )
}

export default ProductGallery
