import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Form = ({addItem, items}) => {

  const [newItemName, setNewItemName] = useState('');
  

  function handleSubmit(e){
    e.preventDefault();
    if(!newItemName) {
      toast.error('please provide a value')
      return
    }; 
    addItem(newItemName);
    setNewItemName('');

  }


  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <div className='form-control'>
        <input 
         type='text'
         className='form-control'
         value={newItemName}
         onChange={(e)=> setNewItemName(e.target.value)}
        />
        <button type='submit' className='btn'>add item</button>
      </div>
    </form>
  )
}

export default Form