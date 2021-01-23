import React, { useRef, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
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
    <div className='my-3'>
      <div>
        <label htmlFor="maxPrice">Max price</label>
        <input type="number" id="maxPrice" name="price"
          min={minPrice || 0}
          max={maxPrice || 100}
          ref={maxInputRef}
          value={maxPrice}

          onChange={e => {
            setMaxPrice(e.target.value)
            dispatch(filterPrice(minInputRef.current.value / currency, maxInputRef.current.value / currency))
          }}
        />
      </div>
      <div>
        <label htmlFor="minPrice">Min price</label>
        <input type="number" id="minPrice" name="price"
          min={minPrice || 0}
          max={maxPrice || 100}
          ref={minInputRef}
          value={minPrice}
          onChange={e => {
            setMinPrice(e.target.value)
            dispatch(filterPrice(minInputRef.current.value / currency, maxInputRef.current.value / currency))
          }}
        />
      </div>
    </div>
  )
}

export default Filter
