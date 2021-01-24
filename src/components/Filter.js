import React, { useRef, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, InputGroup } from 'react-bootstrap'
import { filterPrice } from '../actions/productsActions'

const Filter = () => {
  const products = useSelector(state => state.products.products)
  const currency = useSelector(state => state.products.currency)
  const [minPrice, setMinPrice] = useState(Math.min(...products.map(product => product.price)) * currency)
  const [maxPrice, setMaxPrice] = useState(Math.max(...products.map(product => product.price)) * currency)

  const dispatch = useDispatch()

  const minInputRef = useRef()
  const maxInputRef = useRef()

  useEffect(() => {
    setMinPrice((Math.min(...products.map(product => product.price)) * currency).toFixed())
    setMaxPrice((Math.max(...products.map(product => product.price)) * currency).toFixed())
  }, [products, currency])

  return (
    <div className='my-4'>
      <h3>Price Filter</h3>
      <InputGroup className='my-2'>
        <InputGroup.Prepend>
          <InputGroup.Text>Max</InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control
          type="number" id="maxPrice" name="price"
          min={minPrice || 0}
          max={maxPrice || 100}
          ref={maxInputRef}
          defaultValue={maxPrice}
          onChange={e => {
            dispatch(filterPrice(minInputRef.current.value / currency, maxInputRef.current.value / currency))
          }}
        />
      </InputGroup>
      <InputGroup className='my-3'>
        <InputGroup.Prepend>
          <InputGroup.Text>Min</InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control
          type="number" id="minPrice" name="price"
          min={minPrice || 0}
          max={maxPrice || 100}
          ref={minInputRef}
          defaultValue={minPrice}
          onChange={e => {
            dispatch(filterPrice(minInputRef.current.value / currency, maxInputRef.current.value / currency))
          }}
        />
      </InputGroup>
    </div>
  )
}

export default Filter
