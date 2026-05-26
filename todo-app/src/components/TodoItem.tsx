import type { Todo } from '../types'

interface Props {
  todo: Todo
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

export default function TodoItem({ todo, onToggle, onDelete }: Props) {
  return (
    <li className={`todo-item${todo.completed ? ' completed' : ''}`}>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span>{todo.text}</span>
      </label>
      <button className="delete-btn" onClick={() => onDelete(todo.id)}>
        ✕
      </button>
    </li>
  )
}
