import React from 'react'

const ImageBox = ({ img }) => {
  return (
    <div className='image-box'>
      <img src={img} alt='' />
    </div>
  )
}

export default ImageBox
