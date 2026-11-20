import { getStats } from '../../data/content'
import './Stats.css'

function Stats() {
  const stats = getStats()

  return (
    <ul className="stats">
      {stats.map((stat, index) => (
        <li className="stats__card" key={stat.label}>
          <strong className="stats__value">{stat.value}</strong>
          <span className="stats__label">{stat.label}</span>
          <span className="stats__index" aria-hidden="true">
            {String(index + 1).padStart(2, '0')}
          </span>
        </li>
      ))}
    </ul>
  )
}

export default Stats
