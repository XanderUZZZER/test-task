import React from 'react'


const Filter = () => {
  return (
    <div className='mb-3'>
      <div>
        <label htmlFor="minPrice">Min price</label>
        <input type="number" id="minPrice" name="price" min="10" max="100" />
      </div>
      <div>
        <label htmlFor="maxPrice">Max price</label>
        <input type="number" id="maxPrice" name="price" min="10" max="100" />
      </div>
    </div>
  )
}

export default Filter
