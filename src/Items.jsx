import React from 'react'
import SingleItem from './SingleItem'

const Items = ({items, removeItems}) => {
  return (
    <div className='items'>
      {items.map((item) => {
        return <SingleItem item={item}/>
      })}
    </div>
  )
}

export default Items