import { Download } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import { ContactSection } from '../components/ContactSection'
import { PageTransition, Reveal } from '../components/PageTransition'
import { Skills } from '../components/Skills'
import { cvFileName, cvPath, profile } from '../data/profile'
import { experience, skillGroups } from '../data/experience'
import { projects } from '../data/projects'
import { certifications, credential, education } from '../data/studies'

export function CV() {
  return (
    <PageTransition>
      <header className="cv-header">
        <div>
          <span className="eyebrow">Curriculum vitae</span>
          <h1>{profile.name}</h1>
          <p className="secondary">
            {profile.role} · {profile.location}
          </p>
        </div>
        <Button href={cvPath} download={cvFileName}>
          <Download size={16} aria-hidden="true" />
          Download CV
        </Button>
      </header>

      <Reveal>
        <section className="cv-section" aria-labelledby="cv-profile">
          <h2 id="cv-profile">Profile</h2>
          <p className="secondary">{profile.about[0].body}</p>
          <p className="secondary">{profile.about[4].body}</p>
        </section>
      </Reveal>

      <Reveal>
        <section className="cv-section" aria-labelledby="cv-experience">
          <h2 id="cv-experience">Experience</h2>
          <div>
            {experience.map((job) => (
              <article className="cv-job" key={job.role}>
                <div className="cv-job__meta">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="secondary">{job.org}</p>
                  </div>
                  <span className="muted">{job.period}</span>
                </div>
                <ul>
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="cv-section" aria-labelledby="cv-skills">
          <h2 id="cv-skills">Technical Skills</h2>
          <Skills groups={skillGroups} />
        </section>
      </Reveal>

      <Reveal>
        <section className="cv-section" aria-labelledby="cv-education">
          <h2 id="cv-education">Education</h2>
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
        </section>
      </Reveal>

      <Reveal>
        <section className="cv-section" aria-labelledby="cv-certs">
          <h2 id="cv-certs">Certifications</h2>
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
        <section className="cv-section" aria-labelledby="cv-creds">
          <h2 id="cv-creds">Professional Credentials</h2>
          <article className="credential">
            <span className="eyebrow">{credential.year}</span>
            <strong>{credential.title}</strong>
            <p className="secondary">{credential.org}</p>
          </article>
        </section>
      </Reveal>

      <Reveal>
        <section className="cv-section" aria-labelledby="cv-projects">
          <h2 id="cv-projects">Selected Projects</h2>
          <div className="tag-row">
            {projects.map((project) => (
              <Link className="tag" key={project.slug} to={`/works/${project.slug}`}>
                {project.id} {project.title}
              </Link>
            ))}
          </div>
        </section>
      </Reveal>

      <ContactSection />
    </PageTransition>
  )
}
