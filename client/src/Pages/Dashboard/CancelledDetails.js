import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { fetchCancelledOrderAction } from '../../store/actions/orderActions'
import { selectCancelledOrder } from '../../store/selectors/orderSelector'

import { useParams } from 'react-router'

import Details from '../../components/Dashboard/Cancelled/Details/Details'
import Navigation from '../../components/Dashboard/Navigation/Navigation'
import Spinner from '../../components/Spinner/Spinner'

const CancelledDetails = () => {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const { id } = useParams()

  const cancelledOrder = useSelector(selectCancelledOrder)

  useEffect(async () => {
    await dispatch(fetchCancelledOrderAction(id))
    setLoading(false)
  }, [dispatch, id])

  const { order = {} } = cancelledOrder

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
