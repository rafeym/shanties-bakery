import React, { useEffect } from 'react'
import { useParams } from 'react-router'

import { useDispatch, useSelector } from 'react-redux'
import { fetchCancelledOrdersAction } from '../../store/actions/orderActions'
import {
  selectCancelledOrders,
  selectCount,
  selectLoading,
  selectPageLimit,
} from '../../store/selectors/orderSelector'

import Navigation from '../../components/Dashboard/Navigation/Navigation'
import Table from '../../components/Dashboard/Cancelled/Table/Table'
import Spinner from '../../components/Spinner/Spinner'

const Cancelled = () => {
  const dispatch = useDispatch()

  const cancelledOrders = useSelector(selectCancelledOrders)
  const loading = useSelector(selectLoading)
  const count = useSelector(selectCount)
  const pageLimit = useSelector(selectPageLimit)

  let { page } = useParams()

  if (page === undefined) {
    page = 1
  }

  useEffect(() => {
    dispatch(fetchCancelledOrdersAction(page))
  }, [dispatch, page])

  return (
    <>
      <Navigation />
      <div className='d-main'>
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <Table
            cancelledOrders={cancelledOrders}
            count={count}
            page={page}
            pageLimit={pageLimit}
          />
        )}
      </div>
    </>
  )
}

export default Cancelled
