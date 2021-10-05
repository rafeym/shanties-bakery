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

const ProductGallery = () => {
  return (
    <>
      <div className='s-heading'>
        <h1>Our Products</h1>
        <p>Take a look at some of our featured pastries.</p>
      </div>

      <div className='body'>
        <div className='image-gallery'>
          <div className='image-box'>
            <img src={img1} alt='' />
            <div className='overlay'>
              <div className='details'>
                <h3 className='title'>Title</h3>
                <span className='category'>Category</span>
              </div>
            </div>
          </div>

          <div className='image-box'>
            <img src={img2} alt='' />
            <div className='overlay'>
              <div className='details'>
                <h3 className='title'>Title</h3>
                <span className='category'>Category</span>
              </div>
            </div>
          </div>

          <div className='image-box'>
            <img src={img3} alt='' />
            <div className='overlay'>
              <div className='details'>
                <h3 className='title'>Title</h3>
                <span className='category'>Category</span>
              </div>
            </div>
          </div>

          <div className='image-box'>
            <img src={img4} alt='' />
            <div className='overlay'>
              <div className='details'>
                <h3 className='title'>Title</h3>
                <span className='category'>Category</span>
              </div>
            </div>
          </div>

          <div className='image-box'>
            <img src={img5} alt='' />
            <div className='overlay'>
              <div className='details'>
                <h3 className='title'>Title</h3>
                <span className='category'>Category</span>
              </div>
            </div>
          </div>

          <div className='image-box'>
            <img src={img6} alt='' />
            <div className='overlay'>
              <div className='details'>
                <h3 className='title'>Title</h3>
                <span className='category'>Category</span>
              </div>
            </div>
          </div>

          <div className='image-box'>
            <img src={img7} alt='' />
            <div className='overlay'>
              <div className='details'>
                <h3 className='title'>Title</h3>
                <span className='category'>Category</span>
              </div>
            </div>
          </div>

          <div className='image-box'>
            <img src={img8} alt='' />
            <div className='overlay'>
              <div className='details'>
                <h3 className='title'>Title</h3>
                <span className='category'>Category</span>
              </div>
            </div>
          </div>

          <div className='image-box'>
            <img src={img9} alt='' />
            <div className='overlay'>
              <div className='details'>
                <h3 className='title'>Title</h3>
                <span className='category'>Category</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductGallery
