import React, { useEffect } from 'react'
import { useHistory } from 'react-router'

import {
  cancelOrderAction,
  fetchOrderAction,
} from '../../store/actions/orderActions'
import { useDispatch, useSelector } from 'react-redux'
import { selectLoading, selectOrder } from '../../store/selectors/orderSelector'

import { useParams } from 'react-router'

import Navigation from '../../components/Dashboard/Navigation/Navigation'
import OrderDetail from '../../components/Dashboard/Orders/OrderDetail'
import NotFound from '../../components/Dashboard/NotFound/NotFound'

import Spinner from '../../components/Spinner/Spinner'

const OrderDetails = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const history = useHistory()

  const order = useSelector(selectOrder)
  const loading = useSelector(selectLoading)

  useEffect(() => {
    dispatch(fetchOrderAction(id))
  }, [dispatch, id])

  const archiveOrder = (id) => {
    console.log(id)
  }

  const cancelOrder = (id) => {
    dispatch(cancelOrderAction(id))
    history.push('/orders')
  }

  return (
    <>
      <Navigation />
      <div className='d-main'>
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <OrderDetail
            order={order}
            archiveOrder={archiveOrder}
            cancelOrder={cancelOrder}
          />
        )}
      </div>
    </>
  )
}

export default OrderDetails
