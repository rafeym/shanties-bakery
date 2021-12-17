import React, { useEffect, useState } from 'react'

import _ from 'lodash'

import { useParams } from 'react-router'

import { useDispatch, useSelector } from 'react-redux'
import {
  fetchOrderAction,
  updateOrderDeliveryStatusAction,
} from '../../../store/actions/orderActions'

import { selectOrder } from '../../../store/selectors/orderSelector'

import Spinner from '../../Spinner/Spinner'
import './UpdateOrderForm.scss'
import NotFound from '../NotFound/NotFound'

const UpdateDeliveryStatusForm = () => {
  const [deliveryStat, setDeliveryStat] = useState(false)
  const [loading, setLoading] = useState(true)

  const order = useSelector(selectOrder)

  const { orderNumber } = order

  const { id } = useParams()
  const dispatch = useDispatch()

  const orderEmpty = _.isEmpty(order)

  useEffect(async () => {
    await dispatch(fetchOrderAction(id))
    setLoading(false)
  }, [dispatch, id])

  useEffect(() => {
    setDeliveryStat(order.deliveryStatus)
  }, [order.deliveryStatus])

  const handleDeliveryChange = (e) => {
    setDeliveryStat(e.target.value)
  }

  const updateOrderDeliveryStatus = (e) => {
    e.preventDefault()

    dispatch(updateOrderDeliveryStatusAction(id, deliveryStat))
  }

  return (
    <>
      {loading ? (
        <Spinner loading={loading} />
      ) : orderEmpty ? (
        <NotFound
          url='/orders'
          buttonTxt='Go To Orders'
          text='Unable to find the order your looking for.'
        />
      ) : (
        <div className='form-container'>
          <h1>Order #{orderNumber}</h1>
          <form>
            <div className='form-row'>
              <div className='form-column'>
                <label>Delivery Status</label>
                <select
                  name='deliveryStat'
                  value={deliveryStat}
                  onChange={handleDeliveryChange}
                  disabled={deliveryStat ? true : false}
                >
                  <option value={false}>Not Delivered</option>
                  <option value={true}>Delivered</option>
                </select>
              </div>
            </div>

            <button onClick={updateOrderDeliveryStatus}>
              Update Delivery Status
            </button>
          </form>
        </div>
      )}
    </>
  )
}

export default UpdateDeliveryStatusForm
