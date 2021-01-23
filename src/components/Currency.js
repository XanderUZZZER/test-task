import React from 'react'
import { useDispatch } from 'react-redux'
import { setCurrency } from '../actions/productsActions'
import { USD, UAH } from '../constants/productConstants'

const Currency = () => {
  const dispatch = useDispatch()
  return (
    <div className='mb-3'>
      <div>
        <input type="radio" id="UAH" name="currency" value={UAH} defaultChecked onChange={() => dispatch(setCurrency(UAH))} />
        <label htmlFor="UAH">UAH</label>
      </div>
      <div>
        <input type="radio" id="USD" name="currency" value={USD} onChange={() => dispatch(setCurrency(USD))} />
        <label htmlFor="USD">USD</label>
      </div>
    </div>
  )
}

export default Currency
