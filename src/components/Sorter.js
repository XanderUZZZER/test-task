import React from 'react'
import { useDispatch } from 'react-redux'
import { Form } from 'react-bootstrap'
import { sort } from '../actions/productsActions'

const Sorter = () => {
  const dispatch = useDispatch()

  return (
    <div className='my-3'>
      <h3>Sort</h3>
      <Form.Check
        type="radio"
        id="sortDesc"
        label="descending price"
        name="sort"
        value="desc"
        defaultChecked
        onChange={(e) => dispatch(sort(e.target.value))}
      />
      <Form.Check
        type="radio"
        id="sortAsc"
        label="ascending price"
        name="sort"
        value="asc"
        onChange={(e) => dispatch(sort(e.target.value))}
      />
      <Form.Check
        type="radio"
        id="sortName"
        label="name"
        name="sort"
        value="name"
        onChange={(e) => dispatch(sort(e.target.value))}
      />
    </div >
  )
}

export default Sorter
