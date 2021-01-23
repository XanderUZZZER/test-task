import React from 'react'
import { useDispatch } from 'react-redux'
import { sortAsc, sortDesc, sortName } from '../actions/productsActions'

const Sorter = () => {
  const dispatch = useDispatch()

  return (
    <div className='mb-3'>
      <div>
        <input type="radio" id="sortDesc" name="sort" value="desc" defaultChecked onChange={() => dispatch(sortDesc())} />
        <label htmlFor="sortDesc">Sort descending</label>
      </div>
      <div>
        <input type="radio" id="sortAsc" name="sort" value="asc" onChange={() => dispatch(sortAsc())} />
        <label htmlFor="sortAsc">Sort ascending</label>
      </div>
      <div>
        <input type="radio" id="sortName" name="sort" value="name" onChange={() => dispatch(sortName())} />
        <label htmlFor="sortName">Sort by name</label>
      </div>
    </div>
  )
}

export default Sorter
