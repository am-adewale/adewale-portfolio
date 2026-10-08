export function Skills({ groups }) {
  return (
    <div className="skill-groups">
      {groups.map((group) => (
        <section key={group.title} className="skill-group" aria-labelledby={`skill-${group.title}`}>
          <h3 id={`skill-${group.title}`}>{group.title}</h3>
          <div className="tag-row">
            {group.items.map((item) => (
              <span className="tag" key={item}>
                {item}
              </span>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
