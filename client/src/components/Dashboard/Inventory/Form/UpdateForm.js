import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import _ from 'lodash'

import { useDispatch, useSelector } from 'react-redux'
import {
  fetchProductAction,
  updateProductAction,
} from '../../../../store/actions/productActions'
import { selectProduct } from '../../../../store/selectors/productSelector'

import Spinner from '../../../Spinner/Spinner'
import NotFound from '../../NotFound/NotFound'

const UpdateForm = () => {
  const initState = {
    name: '',
    price: 0,
    allergens: [],
    serving: '',
    description: '',
  }
  const [formData, setFormData] = useState(initState)
  const [formTitle, setFormTitle] = useState('Update Product')
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch()
  const product = useSelector(selectProduct)

  const productEmpty = _.isEmpty(product)

  const { id } = useParams()

  useEffect(() => {
    async function fetchProduct() {
      await dispatch(fetchProductAction(id))
      setLoading(false)
    }
    fetchProduct()
  }, [id, dispatch])

  useEffect(() => {
    setFormData({
      name: product.name,
      price: product.price,
      allergens: product.allergens,
      serving: product.serving,
      description: product.description,
    })
  }, [
    product.name,
    product.price,
    product.description,
    product.allergens,
    product.serving,
  ])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const { name, price, allergens, description, serving } = formData

    const productForm = new FormData()
    productForm.append('name', name)
    productForm.append('price', price)
    productForm.append('allergens', allergens)
    productForm.append('serving', serving)
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
      ) : productEmpty ? (
        <NotFound
          url='/inventory'
          buttonTxt='Go To Inventory'
          text='Unable to find the inventory item.'
        />
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
                <label>Serving</label>
                <input
                  type='text'
                  placeholder='Product Serving'
                  name='serving'
                  value={formData.serving}
                  onChange={handleChange}
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
            <button onClick={handleSubmit}>Update Product</button>
          </form>
        </div>
      )}
    </>
  )
}

export default UpdateForm
