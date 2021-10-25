import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'

import Header from '../components/Navbar/Header'
import Footer from '../components/Footer/Footer'
import ProductCard from '../components/Products/ProductCard'
import Pagination from '../components/Pagination/Pagination'
import Spinner from '../components/Spinner/Spinner'

import {
  selectAllProducts,
  selectCount,
  selectLoading,
  selectPageLimit,
} from '../store/selectors/productSelector'
import { fetchProductsAction } from '../store/actions/productActions'

import './styles/Menu.scss'

const Menu = () => {
  const loading = useSelector(selectLoading)
  const products = useSelector(selectAllProducts)
  const count = useSelector(selectCount)
  const pageLimit = useSelector(selectPageLimit)
  const dispatch = useDispatch()

  let { page } = useParams()

  if (page === undefined) {
    page = 1
  }

  useEffect(() => {
    dispatch(fetchProductsAction(page))
  }, [dispatch, page])

  return (
    <>
      <Header />
      <section id='menu-products'>
        <div className='product-container'>
          {loading ? (
            <Spinner loading={loading} />
          ) : (
            products.map((prod) => (
              <ProductCard
                key={prod._id}
                name={prod.name}
                price={prod.price}
                img={prod.cloudinary_secure_url}
                id={prod._id}
              />
            ))
          )}
        </div>
      </section>
      <div className='pagination-container'>
        <Pagination
          page={page}
          count={count}
          pageLimit={pageLimit}
          url='menu'
        />
      </div>
      <Footer />
    </>
  )
}

export default Menu
