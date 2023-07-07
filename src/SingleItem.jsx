import React from 'react'

const SingleItem = ({item, removeItems }) => {
  return (
    <div className='single-item'>
      <input type='checkbox'/>
      <p>{item.name}</p>
      <button></button>

    </div>
  )
}

export default SingleItem