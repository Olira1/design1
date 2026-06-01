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
