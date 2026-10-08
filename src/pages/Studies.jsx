import { ContactSection } from '../components/ContactSection'
import { PageTransition, Reveal } from '../components/PageTransition'
import { SectionHeading } from '../components/SectionHeading'
import { Skills } from '../components/Skills'
import { Timeline } from '../components/Timeline'
import {
  certifications,
  credential,
  developmentAreas,
  education,
  learningTimeline,
} from '../data/studies'

export function Studies() {
  return (
    <PageTransition>
      <SectionHeading
        eyebrow="Studies"
        title="Education, credentials, and craft."
        description="Degree, professional licence, certifications, and the technical practice I keep sharpening."
      />

      <Reveal>
        <article className="credential">
          <span className="eyebrow">{education.year}</span>
          <strong>{education.title}</strong>
          <p className="secondary">{education.org}</p>
          <p>{education.note}</p>
          <div className="tag-row studies-coursework">
            {education.coursework.map((item) => (
              <span className="tag" key={item}>
                {item}
              </span>
            ))}
          </div>
        </article>
      </Reveal>

      <Reveal>
        <section className="studies-certs" aria-labelledby="certs-heading">
          <SectionHeading
            id="certs-heading"
            title="Certifications"
            description="Formal programmes that sit alongside the degree and the CPN licence."
          />
          <div className="studies-certs__grid">
            {certifications.map((item) => (
              <article className="credential" key={item.title}>
                <span className="eyebrow">{item.year}</span>
                <strong>{item.title}</strong>
                <p className="secondary">{item.org}</p>
                <p>{item.note}</p>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <article className="credential">
          <span className="eyebrow">{credential.year}</span>
          <strong>{credential.title}</strong>
          <p className="secondary">{credential.org}</p>
          <p>{credential.note}</p>
        </article>
      </Reveal>

      <Reveal>
        <section>
          <SectionHeading
            title="Practice timeline"
            description="A short record of how the work has been trained from college through professional licence."
          />
          <Timeline items={learningTimeline} />
        </section>
      </Reveal>

      <Reveal>
        <section>
          <SectionHeading
            title="Areas of professional development"
            description="Presented as fields of practice, not fake skill percentages."
          />
          <Skills groups={developmentAreas} />
        </section>
      </Reveal>
      <ContactSection />
    </PageTransition>
  )
}
