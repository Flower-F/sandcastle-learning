import type { Filter } from '../types'

interface Props {
  current: Filter
  onChange: (filter: Filter) => void
}

const filters: Filter[] = ['all', 'active', 'completed']

export default function FilterBar({ current, onChange }: Props) {
  return (
    <div className="filter-bar">
      {filters.map((f) => (
        <button
          key={f}
          className={f === current ? 'active' : ''}
          onClick={() => onChange(f)}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  )
}
