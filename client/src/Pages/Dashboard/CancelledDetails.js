import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { fetchCancelledOrderAction } from '../../store/actions/orderActions'
import {
  selectLoading,
  selectCancelledOrder,
} from '../../store/selectors/orderSelector'

import { useParams } from 'react-router'

import Details from '../../components/Dashboard/Cancelled/Details/Details'
import Navigation from '../../components/Dashboard/Navigation/Navigation'
import NotFound from '../../components/Dashboard/NotFound/NotFound'
import Spinner from '../../components/Spinner/Spinner'

const CancelledDetails = () => {
  const dispatch = useDispatch()
  const { id } = useParams()

  const cancelledOrder = useSelector(selectCancelledOrder)
  const loading = useSelector(selectLoading)

  useEffect(() => {
    dispatch(fetchCancelledOrderAction(id))
  }, [dispatch, id])

  const { order = {} } = cancelledOrder
  console.log(order)

  return (
    <>
      <Navigation />
      <div className='d-main'>
        {loading ? <Spinner loading={loading} /> : <Details order={order} />}
      </div>
    </>
  )
}

export default CancelledDetails
