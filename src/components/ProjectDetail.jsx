import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { GithubIcon } from './BrandIcons'
import { Button } from './Button'
import { PageTransition } from './PageTransition'
import { ToolTag } from './ToolTag'

export function ProjectDetail({ project }) {
  return (
    <PageTransition>
      <article className="case-study">
        <Button to="/works" variant="ghost">
          <ArrowLeft size={16} aria-hidden="true" />
          All works
        </Button>
        <header>
          <span className="eyebrow">
            {project.id} — {project.label}
          </span>
          <h1>{project.title}</h1>
        </header>
        <div className="case-study__hero">
          <img src={project.image} alt={project.alt} width="1600" height="1000" />
        </div>
        <div className="project-card__links">
          <Button href={project.liveUrl}>
            Live Project
            <ArrowUpRight size={15} aria-hidden="true" />
          </Button>
          <Button href={project.githubUrl} variant="secondary">
            <GithubIcon size={15} />
            GitHub Repository
          </Button>
        </div>
        <div className="case-grid">
          <section className="case-block">
            <h2>Overview</h2>
            <p>{project.overview}</p>
          </section>
          <section className="case-block">
            <h2>Problem</h2>
            <p>{project.problem}</p>
          </section>
          <section className="case-block">
            <h2>Solution</h2>
            <p>{project.solution}</p>
          </section>
          <section className="case-block">
            <h2>Technologies</h2>
            <div className="tag-row">
              {project.technologies.map((tech) => (
                <ToolTag key={tech} label={tech} />
              ))}
            </div>
            {project.aiService ? <p className="empty-note" style={{ marginTop: '0.85rem' }}>{project.aiService}</p> : null}
          </section>
        </div>
        <section className="case-block">
          <h2>Features</h2>
          <ul>
            {project.features.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        {project.aiCapabilities ? (
          <section className="case-block">
            <h2>AI capabilities</h2>
            <ul>
              {project.aiCapabilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ) : null}
        <section className="case-block">
          <h2>Results</h2>
          <ul>
            {project.results.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <p className="empty-note">Some Projects Live and GitHub links will be connected as soon as the public URLs are ready.</p>
      </article>
    </PageTransition>
  )
}
