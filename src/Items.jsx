import React from 'react'
import SingleItem from './SingleItem'

const Items = ({items, removeItem, editItem }) => {


  return (
    <div className="items">
      {items.map((item)=>{
        return <SingleItem removeItem={removeItem}
        key={item.id}
        {...item} editItem={editItem}
        />
      })}
    </div>
  )
}

export default Items