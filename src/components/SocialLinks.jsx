import { GithubIcon, LinkedinIcon, XIcon } from './BrandIcons'
import { socialLinks } from '../data/profile'

const icons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  x: XIcon,
}

export function SocialLinks() {
  return (
    <ul className="social-links">
      {socialLinks.map((link) => {
        const Icon = icons[link.id] ?? GithubIcon
        return (
          <li key={link.id}>
            <a href={link.href} target="_blank" rel="noreferrer">
              <Icon size={16} />
              {link.label}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
