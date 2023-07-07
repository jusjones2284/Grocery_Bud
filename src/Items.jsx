import React from 'react'
import SingleItem from './SingleItem'

const Items = ({items, removeItems}) => {
  console.log(items);
  return (
    <div className='items'>
      {items.map((item) => {
        return <SingleItem item={item} removeItems={removeItems} key={item.id}/>
      })}
    </div>
  )
}

export default Items