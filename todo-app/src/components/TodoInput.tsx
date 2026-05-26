import { useState, type KeyboardEvent } from 'react'

interface Props {
  onAdd: (text: string) => void
}

export default function TodoInput({ onAdd }: Props) {
  const [value, setValue] = useState('')

  const handleAdd = () => {
    const trimmed = value.trim()
    if (!trimmed) return
    onAdd(trimmed)
    setValue('')
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') handleAdd()
  }

  return (
    <div className="todo-input">
      <input
        type="text"
        placeholder="What needs to be done?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}
