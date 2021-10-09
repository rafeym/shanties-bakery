import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { userLoginAction } from '../../store/actions/userActions'
import Spinner from '../Spinner/Spinner'

import './Login.scss'

const Login = () => {
  const dispatch = useDispatch()
  const { loading } = useSelector((state) => state.userReducer)
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  })
  const { email, password } = loginData

  const handleChange = (e) => {
    const { name, value } = e.target
    setLoginData({
      ...loginData,
      [name]: value,
    })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    dispatch(userLoginAction({ email, password }))
  }

  return (
    <>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <div className='split-screen'>
          <div className='right'>
            <form onSubmit={onSubmit}>
              <div className='copy'>
                <h2>Login</h2>
              </div>

              <div className='input-container email'>
                <label>Email</label>
                <input
                  type='text'
                  name='email'
                  value={loginData.email}
                  onChange={handleChange}
                />
              </div>
              <div className='input-container password'>
                <label>Password</label>
                <input
                  type='password'
                  name='password'
                  value={loginData.password}
                  onChange={handleChange}
                />
              </div>
              <input
                className='login-btn'
                type='submit'
                value={loading ? 'Loading...' : 'Login'}
              />
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default Login
