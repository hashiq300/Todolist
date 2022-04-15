import { useEffect, useState } from 'react'
import Container from './components/Container'
import Input from './components/Input'
import TodoList from './components/TodoList'

function App() {
  const [todos,setTodos] = useState(JSON.parse(localStorage.getItem("TODOS"))== null? []:JSON.parse(localStorage.getItem("TODOS")))
  const [input,setInput] = useState("")
  useEffect(() => {
      localStorage.setItem("TODOS",JSON.stringify(todos))
      setTimeout(() => setTodos(JSON.parse(localStorage.getItem("TODOS"))),200)

  },[todos])
  return (
    <Container>
      <Input setTodos={setTodos} todos={todos} input={input} setInput={setInput}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </Container>
  )
}

export default App
