import { nanoid } from "nanoid";
import Form from "./Form";
import { useState } from "react";
import Items from "./Items";

const getLocalStorage = ()=>{
  let list = localStorage.getItem('list');

}

const setLocalStorage = (items)=>{
  localStorage.setItem('list', JSON.stringify(items))
}

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (itemName)=>{
    const newItem ={
      name: itemName,
      completed: false, 
      id: nanoid(),
    } 
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
  }

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    setLocalStorage(newItems)
    
  };

  const editItem =(itemId)=>{
    console.log(itemId);
    const newItems = items.map((item) => {
      if(item.id === itemId){
        const newItem = {...item, completed:!item.completed};
        console.log(newItem);
        return newItem;
      }
      return item
    })
    setItems(newItems)
  }

  

  return(
  
  <section className="section-center">
    <Form addItem={addItem}  items={items}/>
    <Items items={items} removeItem={removeItem} editItem={editItem}/>
  </section>

  ) 
};

export default App;
