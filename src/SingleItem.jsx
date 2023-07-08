import React, { useState } from 'react'

const SingleItem = ({item, removeItems }) => {
  const [isChecked, setIsChecked] = useState(item.completed)
  
  return (
    <div className='single-item'>
      <input type='checkbox'/>
      <p>{item.name}</p>
      <button className='btn remove-btn' type='button'> delete </button>

    </div>
  )
}

export default SingleItem