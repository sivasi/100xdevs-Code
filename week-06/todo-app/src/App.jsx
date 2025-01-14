// import { response } from 'express'
import { useEffect, useState } from 'react'
function App() {

  const [todos, setTodos] = useState([])
  useEffect(() => {
    setInterval(() => {
      fetch("http://localhost:3000/todos")
      .then(async (response) => {
        const json = await response.json()
        setTodos(json.todos)
      })
    }, 20000)
  }, [])
  
  return (
    <div style={{display: "flex"}}>
      {todos.map((todo) => {
        return (
          <ToDoCard key={todo.id}>
            <h1>{todo.title}</h1>
            <h4>{todo.description}</h4>
          </ToDoCard>
        );
      })}
    </div>
  )
}

function ToDoCard({children}) {
  return <div style={{border: "2px solid black", padding: 10, margin: 10}}>
    {children}
  </div>
}

export default App
