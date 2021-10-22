import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { createProductAction } from '../../../../store/actions/productActions'
import Spinner from '../../../Spinner/Spinner'

import './Form.scss'

const Form = () => {
  const initState = {
    name: '',
    price: 0,
    allergens: [],
    description: '',
    image: '',
  }
  const [formData, setFormData] = useState(initState)
  const [currentImage, setCurrentImage] = useState('Choose Image')
  const [formTitle, setFormTitle] = useState('Create Product')

  const dispatch = useDispatch()
  const { loading } = useSelector((state) => state.productReducer)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const fileHandle = (e) => {
    const { files, name } = e.target
    if (files.length !== 0) {
      setCurrentImage(files[0].name)

      setFormData({
        ...formData,
        [name]: files[0],
      })

      const reader = new FileReader()
      reader.readAsDataURL(files[0])
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const { name, price, allergens, description, image } = formData

    const productForm = new FormData()
    productForm.append('name', name)
    productForm.append('price', price)
    productForm.append('allergens', allergens)
    productForm.append('description', description)
    productForm.append('image', image)

    dispatch(createProductAction(productForm))

    if (!name || !price || !description || !image) {
      setFormTitle('Create Product')
    } else {
      setFormTitle('Product Created!')
    }
  }

  const clearForm = (e) => {
    e.preventDefault()
    setFormData(initState)
    setCurrentImage('Choose Image')
    setFormTitle('Create Product')
  }

  return (
    <>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <div className='form-container'>
          <h1>{formTitle}</h1>
          <p>Fill in all the required fields *</p>
          <form>
            <div className='form-row'>
              <div className='form-column'>
                <label>Product Name*</label>
                <input
                  type='text'
                  placeholder='Product Name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className='form-column'>
                <label>Product Price*</label>
                <input
                  type='number'
                  placeholder='Product Price'
                  name='price'
                  value={formData.price}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='form-row'>
              <div className='form-column'>
                <label>Allergens</label>
                <input
                  type='text'
                  placeholder='Product Allergens'
                  name='allergens'
                  value={formData.allergens}
                  onChange={handleChange}
                />
              </div>
              <div className='form-column'>
                <label>{currentImage}*</label>
                <input
                  type='file'
                  name='image'
                  id='image'
                  onChange={fileHandle}
                />
              </div>
            </div>
            <div className='form-row'>
              <div className='form-column'>
                <label>Product Description*</label>
                <textarea
                  name='description'
                  value={formData.description}
                  onChange={handleChange}
                  id='desc'
                  rows='3'
                  placeholder='Enter product description...'
                ></textarea>
              </div>
            </div>
            <button onClick={handleSubmit}>Create Product</button>
            <button onClick={clearForm} style={{ marginLeft: '10px' }}>
              Clear Form
            </button>
          </form>
        </div>
      )}
    </>
  )
}

export default Form
