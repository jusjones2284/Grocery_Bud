import React, { useState } from 'react'

const SingleItem = ({name, completed, id, removeItem,editItem }) => {
  const [checked, setChecked] = useState(completed)

  return (
    <div className='single-itme'>
      <input type='checkbox' 
              checked={checked}
              onChange={()=> editItem(id)}
      />
      <p
      style={{
        textTransform: 'capitalize',
        textDecoration: completed && 'line-through'
      }}
      >{name}</p> 
      <button
        className='btn remove-btn'
        type='button'
        onClick={() => removeItem(id)}

      >delete</button>


    </div>
  )
}

export default SingleItem