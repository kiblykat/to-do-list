import { useState } from 'react'
import './App.css'

export default function App(){
  const [newItem,setNewItem] = useState('')     //this creates the initial state for newItem, an empty string
  const [todoList,setTodoList] = useState([])   //this creates the initial state for todoList, an empty list

  function handleSubmit(e){
    e.preventDefault()

    setTodoList(currentTodoList => {
      return[...currentTodoList, {id:crypto.randomUUID(), title:newItem, completed:false}]
    })

    setNewItem('')
  }
  return (
    <>      
      <form onSubmit={handleSubmit} className='new-item-form'>
        <div className='form-row'>
          <label>New Item</label>
          <input
            value = {newItem}
            onChange={e => setNewItem(e.target.value)}
            type='text' 
            id='item' />
        </div>
        <button className='btn' >Add</button>
      </form>
      <h1 className='header'>Todo List</h1>
      <ul className='list'>
        {todoList.map(elem => {
        return <li key = {elem.id}>      {/*ensure to include key for any map for optimization*/}
            <label>
              <input type='checkbox' id='item' />
                {elem.title}
            </label>
            <button className='btn btn-danger'>Delete</button>
          </li>  
        }
          )}
      </ul>
    </>
  )
}