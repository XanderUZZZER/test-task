import React from 'react'

const Sorter = () => {
  return (
    <div className='mb-3'>
      <div>
        <input type="radio" id="sortDesc" name="sort" value="desc" defaultChecked />
        <label htmlFor="sortDesc">Sort descending</label>
      </div>
      <div>
        <input type="radio" id="sortAsc" name="sort" value="asc" />
        <label htmlFor="sortAsc">Sort ascending</label>
      </div>
      <div>
        <input type="radio" id="sortName" name="sort" value="name" />
        <label htmlFor="sortName">Sort by name</label>
      </div>
    </div>
  )
}

export default Sorter
