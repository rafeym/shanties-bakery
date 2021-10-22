import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import {
  fetchProductAction,
  updateProductAction,
} from '../../../../store/actions/productActions'
import {
  selectLoading,
  selectProduct,
} from '../../../../store/selectors/productSelector'

import Spinner from '../../../Spinner/Spinner'

const UpdateForm = () => {
  const initState = {
    name: '',
    price: 0,
    allergens: [],
    description: '',
  }
  const [formData, setFormData] = useState(initState)
  const [formTitle, setFormTitle] = useState('Update Product')

  const dispatch = useDispatch()
  const loading = useSelector(selectLoading)
  const product = useSelector(selectProduct)

  const { id } = useParams()

  useEffect(() => {
    dispatch(fetchProductAction(id))
  }, [id, dispatch])

  useEffect(() => {
    setFormData({
      name: product.name,
      price: product.price,
      allergens: product.allergens,
      description: product.description,
    })
  }, [product.name, product.price, product.description, product.allergens])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const { name, price, allergens, description } = formData

    const productForm = new FormData()
    productForm.append('name', name)
    productForm.append('price', price)
    productForm.append('allergens', allergens)
    productForm.append('description', description)

    dispatch(updateProductAction(id, productForm))

    if (!name || !price || !description) {
      setFormTitle('Update Product')
    } else {
      setFormTitle('Product Updated!')
    }
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
              {/* <div className='form-column'>
                <label>{currentImage}*</label>
                <input
                  type='file'
                  name='image'
                  id='image'
                  onChange={fileHandle}
                />
              </div> */}
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
            <button onClick={handleSubmit}>Update Product</button>
          </form>
        </div>
      )}
    </>
  )
}

export default UpdateForm