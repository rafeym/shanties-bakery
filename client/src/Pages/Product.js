import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router'

import { useSelector, useDispatch } from 'react-redux'
import { selectProduct } from '../store/selectors/productSelector'

import Header from '../components/Navbar/Header'
import Footer from '../components/Footer/Footer'
import ProductInfo from '../components/Product/Product'
import { fetchProductAction } from '../store/actions/productActions'
import Spinner from '../components/Spinner/Spinner'
import NotFound from '../components/NotFound/NotFound'

const Product = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch()
  const product = useSelector(selectProduct)

  useEffect(() => {
    const fetchProduct = async () => {
      await dispatch(fetchProductAction(id))
      setLoading(false)
    }
    fetchProduct()
  }, [dispatch, id])

  return (
    <>
      <Header />
      {loading ? (
        <Spinner loading={loading} />
      ) : product === null ? (
        <NotFound />
      ) : (
        <ProductInfo product={product} />
      )}

      <Footer />
    </>
  )
}

export default Product
