import { techStackRows } from '../data/techStack'
import { SectionHeading } from './SectionHeading'

function MarqueeRow({ items, direction = 'left', duration = '36s' }) {
  return (
    <div className={`marquee marquee--${direction}`}>
      <div className="marquee__track" style={{ animationDuration: duration }}>
        <ul className="marquee__group">
          {items.map((item) => (
            <li key={item}>
              <span className="tag">{item}</span>
            </li>
          ))}
        </ul>
        <ul className="marquee__group" aria-hidden="true">
          {items.map((item) => (
            <li key={`${item}-copy`}>
              <span className="tag">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function TechStack() {
  const [rowOne, rowTwo] = techStackRows

  return (
    <section className="tech-stack" aria-labelledby="tech-stack-heading">
      <SectionHeading
        id="tech-stack-heading"
        eyebrow="Tech stack"
        title="Tools I build with."
        description="The languages, libraries, and habits behind my interfaces. A living stack, never a scorecard.."
      />
      <div className="tech-stack__rows">
        <MarqueeRow items={rowOne} direction="left" duration="38s" />
        <MarqueeRow items={rowTwo} direction="right" duration="32s" />
      </div>
    </section>
  )
}
