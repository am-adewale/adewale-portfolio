import { Link } from 'react-router-dom'

const variants = {
  primary: 'btn btn--primary',
  secondary: 'btn btn--secondary',
  ghost: 'btn btn--ghost',
}

export function Button({
  as,
  to,
  href,
  variant = 'primary',
  children,
  className = '',
  ...props
}) {
  const classes = `${variants[variant] ?? variants.primary} ${className}`.trim()

  if (to) {
    return (
      <Link className={classes} to={to} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    const isPlaceholder = href === '#'
    const isExternal = /^https?:/i.test(href)
    return (
      <a
        className={classes}
        href={href}
        onClick={isPlaceholder ? (event) => event.preventDefault() : undefined}
        aria-disabled={isPlaceholder ? true : undefined}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noreferrer' : undefined}
        {...props}
      >
        {children}
      </a>
    )
  }

  const Comp = as ?? 'button'
  return (
    <Comp className={classes} type={Comp === 'button' ? 'button' : undefined} {...props}>
      {children}
    </Comp>
  )
}
