import { profile } from '../data/profile'
import { ContactSection } from '../components/ContactSection'
import { Hero } from '../components/Hero'
import { PageTransition, Reveal } from '../components/PageTransition'
import { SectionHeading } from '../components/SectionHeading'
import { TechStack } from '../components/TechStack'

export function Home() {
  return (
    <PageTransition>
      <Hero />
      <Reveal>
        <section aria-label="Credibility">
          <div className="stats">
            {profile.stats.map((stat) => (
              <article className="stat" key={stat.label}>
                <strong>{stat.label}</strong>
                <span>{stat.detail}</span>
              </article>
            ))}
          </div>
        </section>
      </Reveal>
      <Reveal>
        <TechStack />
      </Reveal>
      <section aria-labelledby="about-heading">
        <SectionHeading
          id="about-heading"
          eyebrow="Profile"
          title="A product-minded frontend practice."
          description="The work is split into the parts that matter: who I am, how I build, what it produced, and where I want to go next."
        />
        <div className="about-grid">
          {profile.about.map((block, index) => (
            <Reveal key={block.title} delay={index * 0.05}>
              <article className="about-card">
                <h3>{block.title}</h3>
                <p>{block.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <ContactSection />
    </PageTransition>
  )
}
