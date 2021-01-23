import React from 'react'

const Currency = () => {
  return (
    <div className='mb-3'>
      <div>
        <input type="radio" id="USD" name="currency" value="USD" defaultChecked />
        <label htmlFor="USD">USD</label>
      </div>
      <div>
        <input type="radio" id="UAH" name="currency" value="UAH" />
        <label htmlFor="UAH">UAH</label>
      </div>
    </div>
  )
}

export default Currency
