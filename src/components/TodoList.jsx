import React from 'react'

function TodoList({ todos, setTodos }) {
  return (
    <div>
        <ul>
          {todos.length != 0? null:<p style={{color:'red'}}>No Todos</p>}
          {todos.map((todo) => {return <Todo todos={todos} setTodos={setTodos} key={todo.id} todo={todo}/>})} 
        </ul>
    </div>
  )
}

function Todo({ todo, setTodos, todos }) {
  const deleteTodo = () => {
      setTodos((todosN) => todosN.filter(todoN => todoN.id != todo.id))
  }
  const checkBox = (j) => {
    let temporaryTodos = [...todos]
    for(let i = 0;i < temporaryTodos.length;i++){
      if(temporaryTodos[i].id === j){
        temporaryTodos[i].checked = !temporaryTodos[i].checked
        setTodos(temporaryTodos)
      }
    }
  }
    return (
        <li>
          <p style={{textDecoration:todo.checked == true? "line-through":"none",fontStyle:todo.checked == true? "italic":"normal"}}><input type="checkbox" defaultChecked={todo.checked} onClick={() => checkBox(todo.id)}/>{todo.todo}</p>
          <button onClick={deleteTodo}>Delete</button>
        </li>
    )
}

export default TodoList