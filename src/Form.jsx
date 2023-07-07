import React, { useState } from 'react'

const Form = () => {
  const [newItemName, setNewItemName] = useState("");

  return (
    <form onSubmit={}>
      <h4>grocery bud</h4>
      <div className='form-control'>
        <input type="text"  className='form-imput' value={newItemName} onChange={(event)=> setNewItemName(event.target.value) }/>
        <button type='submit' className='btn'></button>
      </div>

    </form>
  )
}

export default Form