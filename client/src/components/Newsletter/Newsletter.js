import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { subscribeAction } from '../../store/actions/userActions'

import ClipLoader from 'react-spinners/ClipLoader'
import './Newsletter.scss'

const Newsletter = () => {
  const INIT_STATE = {
    firstname: '',
    lastname: '',
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
    <div className='n-body'>
      {loading ? (
        <ClipLoader color={'#000'} size={100} loading={loading} />
      ) : (
        <div className='newsletter-container'>
          <div className='newsletter'>
            <h1>Subscribe to our newsletter</h1>
            <p>To stay up to date on new treat boxes & pastries.</p>
            <form className='newsletter-form'>
              <input
                type='text'
                placeholder='First Name'
                name='firstname'
                value={subData.firstname}
                onChange={handleChange}
              />
              <input
                type='text'
                placeholder='Last Name'
                name='lastname'
                value={subData.lastname}
                onChange={handleChange}
              />
              <input
                type='email'
                placeholder='Email Address'
                name='email'
                value={subData.email}
                onChange={handleChange}
              />
            </form>
            <input
              type='submit'
              className='n-btn'
              value='Subscribe'
              onClick={handleSubmit}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Newsletter
