import { Mail, MessageCircle } from 'lucide-react'
import { profile } from '../data/profile'
import { Button } from './Button'
import { Reveal } from './PageTransition'
import { SocialLinks } from './SocialLinks'

export function ContactSection() {
  return (
    <Reveal>
      <section className="contact-panel" id="contact" aria-labelledby="contact-heading">
        <span className="eyebrow">Contact</span>
        <h2 id="contact-heading">Have a project in mind?</h2>
        <p>
          Whether you&apos;re looking to build a new product, improve an existing interface, or
          need a reliable frontend developer, I&apos;d love to hear from you.
        </p>
        <div className="contact-panel__actions">
          <Button href={`mailto:${profile.email}`}>
            <MessageCircle size={16} aria-hidden="true" />
            Let&apos;s Talk
          </Button>
          <Button href={`mailto:${profile.email}`} variant="secondary">
            <Mail size={16} aria-hidden="true" />
            Email Me
          </Button>
        </div>
        <SocialLinks />
      </section>
    </Reveal>
  )
}
