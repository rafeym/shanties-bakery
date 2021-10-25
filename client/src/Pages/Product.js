import React, { useEffect } from 'react'

import { useParams } from 'react-router'

import { useSelector, useDispatch } from 'react-redux'
import {
  selectLoading,
  selectProduct,
} from '../store/selectors/productSelector'

import Header from '../components/Navbar/Header'
import Footer from '../components/Footer/Footer'
import ProductInfo from '../components/Product/Product'
import { fetchProductAction } from '../store/actions/productActions'
import Spinner from '../components/Spinner/Spinner'

const Product = () => {
  const { id } = useParams()

  const dispatch = useDispatch()
  const product = useSelector(selectProduct)
  const loading = useSelector(selectLoading)

  useEffect(() => {
    dispatch(fetchProductAction(id))
  }, [dispatch, id])

  return (
    <>
      <Header />
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <ProductInfo product={product} />
      )}

      <Footer />
    </>
  )
}

export default Product
