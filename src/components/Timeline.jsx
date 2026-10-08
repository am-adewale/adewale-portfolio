export function Timeline({ items }) {
  return (
    <ol className="timeline">
      {items.map((item) => (
        <li className="timeline__item" key={`${item.year}-${item.title}`}>
          <span className="timeline__year">{item.year}</span>
          <h3>{item.title}</h3>
          {item.org ? <p className="timeline__org">{item.org}</p> : null}
          <p>{item.body}</p>
        </li>
      ))}
    </ol>
  )
}
