import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { fetchOrdersAction } from '../../store/actions/orderActions'
import {
  selectLoading,
  selectOrders,
  selectCount,
  selectPageLimit,
} from '../../store/selectors/orderSelector'

import Navigation from '../../components/Dashboard/Navigation/Navigation'
import Table from '../../components/Dashboard/Table/Table'
import Spinner from '../../components/Spinner/Spinner'

const Orders = () => {
  const loading = useSelector(selectLoading)
  const orders = useSelector(selectOrders)
  const count = useSelector(selectCount)
  const pageLimit = useSelector(selectPageLimit)

  let { page } = useParams()

  if (page === undefined) {
    page = 1
  }

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchOrdersAction(page))
  }, [page, dispatch])

  return (
    <>
      <Navigation />
      <div className='d-main'>
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <Table
            orders={orders}
            count={count}
            page={page}
            pageLimit={pageLimit}
          />
        )}
      </div>
    </>
  )
}

export default Orders
