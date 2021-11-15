import React, { useEffect } from 'react'

import { fetchOrderAction } from '../../store/actions/orderActions'
import { useDispatch, useSelector } from 'react-redux'
import { selectLoading, selectOrder } from '../../store/selectors/orderSelector'

import { useParams } from 'react-router'

import Navigation from '../../components/Dashboard/Navigation/Navigation'
import OrderDetail from '../../components/Dashboard/Orders/OrderDetail'

import Spinner from '../../components/Spinner/Spinner'

const OrderDetails = () => {
  const dispatch = useDispatch()
  const { id } = useParams()

  const order = useSelector(selectOrder)
  const loading = useSelector(selectLoading)

  useEffect(() => {
    dispatch(fetchOrderAction(id))
  }, [dispatch, id])

  return (
    <>
      <Navigation />
      <div className='d-main'>
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <OrderDetail order={order} />
        )}
      </div>
    </>
  )
}

export default OrderDetails
