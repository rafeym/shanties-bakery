import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { fetchProductsAction } from '../../store/actions/productActions'
import {
  selectAllProducts,
  selectCount,
  selectLoading,
  selectPageLimit,
} from '../../store/selectors/productSelector'

import InventoryTable from '../../components/Dashboard/Inventory/Table/InventoryTable'
import Navigation from '../../components/Dashboard/Navigation/Navigation'
import Spinner from '../../components/Spinner/Spinner'

const Inventory = () => {
  const loading = useSelector(selectLoading)
  const products = useSelector(selectAllProducts)
  const count = useSelector(selectCount)
  const pageLimit = useSelector(selectPageLimit)

  let { page } = useParams()

  if (page === undefined) {
    page = 1
  }

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProductsAction(page))
  }, [page, dispatch])

  return (
    <>
      <Navigation />
      <div className='d-main'>
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <InventoryTable
            products={products}
            count={count}
            page={page}
            pageLimit={pageLimit}
          />
        )}
      </div>
    </>
  )
}

export default Inventory
