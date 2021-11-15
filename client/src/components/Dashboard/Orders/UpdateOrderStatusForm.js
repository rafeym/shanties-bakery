import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { useDispatch, useSelector } from 'react-redux'
import {
  fetchOrderAction,
  updateOrderStatusAction,
} from '../../../store/actions/orderActions'

import {
  selectOrder,
  selectLoading,
} from '../../../store/selectors/orderSelector'

import Spinner from '../../Spinner/Spinner'
import './UpdateOrderForm.scss'

const UpdateOrderForm = () => {
  const [orderStat, setOrderStat] = useState(false)

  const order = useSelector(selectOrder)
  const loading = useSelector(selectLoading)

  const { orderNumber } = order

  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchOrderAction(id))
  }, [dispatch, id])

  useEffect(() => {
    setOrderStat(order.orderStatus)
  }, [order.orderStatus])

  const handleOrderChange = (e) => {
    setOrderStat(e.target.value)
  }

  const updateOrderStatus = (e) => {
    e.preventDefault()

    dispatch(updateOrderStatusAction(id, orderStat))
  }

  return (
    <>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <div className='form-container'>
          <h1>Order #{orderNumber}</h1>
          <form>
            <div className='form-row'>
              <div className='form-column'>
                <label>Order Status</label>
                <select
                  name='orderStat'
                  value={orderStat}
                  onChange={handleOrderChange}
                  disabled={orderStat ? true : false}
                >
                  <option value={false}>Not Fulfilled</option>
                  <option value={true}>Fulfilled</option>
                </select>
              </div>
            </div>

            <button onClick={updateOrderStatus}>Update Order Status</button>
          </form>
        </div>
      )}
    </>
  )
}

export default UpdateOrderForm
