import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { subscribeAction } from '../../store/actions/userActions'

import ClipLoader from 'react-spinners/ClipLoader'
import './Newsletter.scss'

const Newsletter = () => {
  const INIT_STATE = {
    email: '',
  }
  const [subData, setSubData] = useState(INIT_STATE)
  const dispatch = useDispatch()
  const { loading } = useSelector((state) => state.userReducer)

  const handleChange = (e) => {
    const { name, value } = e.target

    setSubData({
      ...subData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(subscribeAction(subData))
    setSubData(INIT_STATE)
  }
  return (
    <>
      <section className='newsletter'>
        <div className='newsletter-content'>
          <div className='newsletter-text'>
            <h2>SUBSCRIBE TO OUR NEWSLETTER!</h2>
            <p>To stay up to date on new treat boxes & pastries.</p>
          </div>
          <form className='newsletter-form'>
            {loading ? (
              <ClipLoader color={'#000'} size={50} loading={loading} />
            ) : (
              <>
                {' '}
                <input
                  type='email'
                  name='email'
                  value={subData.email}
                  onChange={handleChange}
                />
                <div className='newsletter-btn' onClick={handleSubmit}>
                  Subscribe
                </div>{' '}
              </>
            )}
          </form>
        </div>
      </section>
    </>
  )
}

export default Newsletter
