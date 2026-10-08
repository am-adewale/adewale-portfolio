import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import { profile } from '../data/profile'
import { Button } from './Button'
import { ProfileImage } from './ProfileImage'

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section className="hero" aria-labelledby="hero-name">
      <div className="hero__copy">
        <span className="eyebrow">Frontend Developer</span>
        <h1 id="hero-name" className="hero__name">
          {profile.name}
        </h1>
        <p className="hero__role">{profile.role}</p>
        <p className="hero__headline">{profile.headline}</p>
        <p className="hero__summary">{profile.summary}</p>
        <div className="hero__actions">
          <Button to="/works">
            View My Work
            <ArrowRight size={16} aria-hidden="true" />
          </Button>
          <Button href={`mailto:${profile.email}`} variant="secondary">
            <Mail size={16} aria-hidden="true" />
            Contact Me
          </Button>
        </div>
        <div className="hero-status">
          <span>
            <i aria-hidden="true" />
            Based in {profile.location}
          </span>
          <span>
            <i aria-hidden="true" />
            {profile.availability}
          </span>
        </div>
      </div>
      <motion.div
        className="hero__visual"
        initial={reduce ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={reduce ? undefined : { y: -6, scale: 1.015 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <ProfileImage size="hero" />
      </motion.div>
    </section>
  )
}
