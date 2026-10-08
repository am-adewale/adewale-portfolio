import { NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { BookOpen, FileText, FolderKanban, Home } from 'lucide-react'

const items = [
  { to: '/', label: 'Home', icon: Home, end: true },
  { to: '/works', label: 'Works', icon: FolderKanban },
  { to: '/studies', label: 'Studies', icon: BookOpen },
  { to: '/cv', label: 'CV', icon: FileText },
]

export function BottomNav() {
  const location = useLocation()
  const reduce = useReducedMotion()
  const activePath = location.pathname.startsWith('/works')
    ? '/works'
    : location.pathname

  return (
    <nav className="bottom-nav" aria-label="Primary">
      {items.map(({ to, label, icon: Icon, end }) => {
        const isActive = end ? activePath === '/' : activePath.startsWith(to)

        return (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive: active }) =>
              `bottom-nav__item${active || isActive ? ' is-active' : ''}`
            }
            aria-current={isActive ? 'page' : undefined}
          >
            {isActive ? (
              <motion.span
                className="bottom-nav__indicator"
                layoutId={reduce ? undefined : 'nav-indicator'}
                transition={{ type: 'spring', stiffness: 420, damping: 34 }}
              />
            ) : null}
            <AnimatePresence>
              {isActive ? (
                <motion.span
                  className="bottom-nav__accent"
                  initial={reduce ? false : { scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  aria-hidden="true"
                />
              ) : null}
            </AnimatePresence>
            <Icon className="bottom-nav__icon" size={18} strokeWidth={1.7} aria-hidden="true" />
            <span className="bottom-nav__label">{label}</span>
          </NavLink>
        )
      })}
    </nav>
  )
}
