import { useState } from 'react'
import './App.css'

export default function App(){
  const [newItem,setNewItem] = useState('')     //this creates the initial state for newItem, an empty string
  const [todos,setTodos] = useState([])   //this creates the initial state for todos, an empty list

  function handleSubmit(e){
    e.preventDefault()

    setTodos(currentTodos => {
      return[
        ...currentTodos, 
        {id:crypto.randomUUID(), title:newItem, completed:false},
      ]
    })

    setNewItem('')
  }

  function toggleTodo(id, completed){
    setTodos(currentTodos => {
      return currentTodos.map(elem => {
        if(elem.id === id){
          return { ...elem,completed };
        }       
        
        return elem
      })
    })
  }

  function handleDelete(id){ 
    setTodos(todos => {
      return todos.filter(todo => todo.id !== id)   //filtering through todos and check if equal to deleted elem id.
      })
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
        {todos.map(elem => {
        return( 
          <li key = {elem.id}>      {/*ensure to include key for any kinda map function*/}
            <label>
              <input 
                type='checkbox' 
                checked={todos.completed} 
                onChange={e => toggleTodo(elem.id, e.target.checked)}/>
                {elem.title}
            </label>
            <button className='btn btn-danger' onClick={() => handleDelete(elem.id)}>Delete</button>
          </li>  
        )}
          )}
      </ul>
    </>
  )
}