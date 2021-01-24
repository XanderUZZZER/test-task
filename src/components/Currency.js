import React from 'react'
import { Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { setCurrency } from '../actions/productsActions'
import { USD, UAH } from '../constants/productConstants'

const Currency = () => {
  const dispatch = useDispatch()
  return (
    <div className='my-3'>
      <h3>Currency</h3>
      <Form.Check
        type="radio"
        label="UAH"
        name="currency"
        id="UAH"
        value={UAH}
        defaultChecked
        onChange={() => dispatch(setCurrency(UAH))}
      />
      <Form.Check
        type="radio"
        label="USD"
        name="currency"
        id="USD"
        value={USD}
        onChange={() => dispatch(setCurrency(USD))}
      />
    </div>
  )
}

export default Currency
