import { useState, useMemo } from 'react'
import type { Todo, Filter } from './types'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import FilterBar from './components/FilterBar'
import './App.css'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [filter, setFilter] = useState<Filter>('all')

  const addTodo = (text: string) => {
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text, completed: false },
    ])
  }

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    )
  }

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((t) => t.id !== id))
  }

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'active':
        return todos.filter((t) => !t.completed)
      case 'completed':
        return todos.filter((t) => t.completed)
      default:
        return todos
    }
  }, [todos, filter])

  const remaining = todos.filter((t) => !t.completed).length

  return (
    <div className="app">
      <h1>Todo App</h1>
      <TodoInput onAdd={addTodo} />
      <FilterBar current={filter} onChange={setFilter} />
      <TodoList
        todos={filteredTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
      <p className="count">{remaining} item{remaining !== 1 ? 's' : ''} left</p>
    </div>
  )
}

export default App
