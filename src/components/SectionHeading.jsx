export function SectionHeading({ eyebrow, title, description, as: Tag = 'h2', id }) {
  return (
    <header className="section-heading">
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <Tag id={id}>{title}</Tag>
      {description ? <p>{description}</p> : null}
    </header>
  )
}
