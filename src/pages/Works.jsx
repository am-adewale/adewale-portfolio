import { useParams } from 'react-router-dom'
import { ContactSection } from '../components/ContactSection'
import { ProjectCard } from '../components/ProjectCard'
import { ProjectDetail } from '../components/ProjectDetail'
import { PageTransition } from '../components/PageTransition'
import { SectionHeading } from '../components/SectionHeading'
import { TechStack } from '../components/TechStack'
import { getProjectBySlug, projects } from '../data/projects'

export function Works() {
  const { slug } = useParams()
  const project = slug ? getProjectBySlug(slug) : null

  if (slug && project) {
    return <ProjectDetail project={project} />
  }

  if (slug && !project) {
    return (
      <PageTransition>
        <SectionHeading title="Project not found" description="That case study is not in the archive." />
      </PageTransition>
    )
  }

  return (
    <PageTransition>
      <SectionHeading
        eyebrow="Works"
        title="Selected product work."
        description="Large previews, not a grid of tiny cards. Each piece is a product surface — storefront, marketplace, operations, or interface."
      />
      <div className="project-list">
        {projects.map((item, index) => (
          <ProjectCard key={item.slug} project={item} index={index} />
        ))}
      </div>
      <TechStack />
      <ContactSection />
    </PageTransition>
  )
}
