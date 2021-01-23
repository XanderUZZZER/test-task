import React, { useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { filterPrice } from '../actions/productsActions'

const Filter = () => {
  const products = useSelector(state => state.products.filteredProducts)
  const [minPrice, setMinPrice] = useState(Math.min(...products.map(product => product.price)))
  const [maxPrice, setMaxPrice] = useState(Math.max(...products.map(product => product.price)))

  const dispatch = useDispatch()

  const minInputRef = useRef()
  const maxInputRef = useRef()

  return (
    <div className='mb-3'>
      <div>
        <label htmlFor="maxPrice">Max price</label>
        <input type="number" id="maxPrice" name="price"
          min={minPrice || 0}
          max={maxPrice || 100}
          ref={maxInputRef}
          value={maxInputRef.current?.value || maxPrice}
          onChange={e => dispatch(filterPrice(minInputRef.current.value, maxInputRef.current.value))}
        />
      </div>
      <div>
        <label htmlFor="minPrice">Min price</label>
        <input type="number" id="minPrice" name="price"
          min={minPrice || 0}
          max={maxPrice || 100}
          ref={minInputRef}
          value={minInputRef.current?.value || minPrice}
          onChange={e => {
            dispatch(filterPrice(minInputRef.current.value, maxInputRef.current.value))
          }}
        />
      </div>
    </div>
  )
}

export default Filter
