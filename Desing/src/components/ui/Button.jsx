/*
  Step 3: Shared UI Component - Button
  ------------------------------------
  This component gives us one reusable button style for the whole website.
  It can render as:
  - <a> when we pass href
  - <button> when we do not pass href
*/

/*
  Tailwind className groups:
  - baseClasses controls shared layout, spacing, rounded shape, and transitions.
  - variantClasses changes the visual style, like primary, secondary, or ghost.
  - sizeClasses changes padding and text size.
  Keeping className strings here makes JSX cleaner and easier for juniors to read.
*/
const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] disabled:cursor-not-allowed disabled:opacity-60'

const variantClasses = {
  primary:
    'bg-gradient-accent text-white shadow-lg shadow-[var(--color-accent)]/20 hover:brightness-105',
  secondary:
    'border border-[var(--color-border-soft)] bg-white text-[var(--color-ink)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]',
  ghost:
    'text-[var(--color-ink)] hover:bg-[var(--color-blush)]/40 hover:text-[var(--color-accent)]',
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export default function Button({
  children,
  className = '',
  href,
  size = 'md',
  variant = 'primary',
  ...props
}) {
  /*
    finalClassName combines all Tailwind className groups into one string.
    The className prop at the end lets future sections add small custom changes.
  */
  const finalClassName = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  /*
    If href exists, this button should behave like a link.
    This is useful for section links such as #register or #courses.
  */
  if (href) {
    return (
      <a href={href} className={finalClassName} {...props}>
        {children}
      </a>
    )
  }

  /*
    If href does not exist, this is a normal button.
    type="button" prevents accidental form submission by default.
  */
  return (
    <button type="button" className={finalClassName} {...props}>
      {children}
    </button>
  )
}
const variants = {
  primary:
    'bg-ink text-cream hover:bg-ink/90 shadow-sm',
  secondary:
    'bg-cream border border-ink/10 text-ink hover:bg-white',
  accent:
    'bg-gradient-accent text-cream hover:shadow-lg hover:shadow-accent/25',
  gradient:
    'bg-gradient-pink text-white font-semibold hover:shadow-lg hover:shadow-accent/30 hover:brightness-110',
  'outline-light':
    'border border-white/25 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20',
  ghost: 'text-ink hover:bg-ink/5',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-7 py-3.5 text-sm',
  lg: 'px-8 py-4 text-base',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
