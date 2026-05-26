import type { Filter } from '../types'

interface Props {
  current: Filter
  onChange: (filter: Filter) => void
  remainingCount: number
}

const FILTERS: Filter[] = ['all', 'active', 'completed']

export function FilterBar({ current, onChange, remainingCount }: Props) {
  return (
    <div className="filter-bar">
      <span className="count">{remainingCount} item{remainingCount !== 1 ? 's' : ''} left</span>
      <div className="filters">
        {FILTERS.map((f) => (
          <button
            key={f}
            className={f === current ? 'active' : ''}
            onClick={() => onChange(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>
    </div>
  )
}
