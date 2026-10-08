import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from './BrandIcons'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import { ToolTag } from './ToolTag'

export function ProjectCard({ project, index }) {
  const reduce = useReducedMotion()
  const altLayout = index % 2 === 1

  return (
    <motion.article
      className={`project-card${altLayout ? ' project-card--alt' : ''}`}
      initial={reduce ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ duration: 0.4, delay: reduce ? 0 : index * 0.04, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/works/${project.slug}`} className="project-card__media" aria-label={`Open case study: ${project.title}`}>
        <img src={project.image} alt={project.alt} loading="lazy" width="1600" height="1000" />
        <span className="project-card__index" aria-hidden="true">
          {project.id}
        </span>
        <span className="project-card__overlay">View case study</span>
      </Link>
      <div className="project-card__body">
        <div className="project-card__top">
          <span>{project.id}</span>
          <span>{project.label}</span>
        </div>
        <h3>
          <Link to={`/works/${project.slug}`}>
            {project.title}
            <ArrowUpRight className="project-card__arrow" size={18} aria-hidden="true" />
          </Link>
        </h3>
        <p>{project.description}</p>
        <div className="tag-row">
          {project.technologies.map((tech) => (
            <ToolTag key={tech} label={tech} />
          ))}
        </div>
        <div className="project-card__links">
          <Button href={project.liveUrl} variant="primary">
            Live Project
            <ArrowUpRight size={15} aria-hidden="true" />
          </Button>
          <Button href={project.githubUrl} variant="secondary">
            <GithubIcon size={15} />
            GitHub
          </Button>
        </div>
      </div>
    </motion.article>
  )
}
