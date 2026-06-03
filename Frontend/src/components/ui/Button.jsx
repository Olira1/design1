/*
  Step 3: Build Shared UI Components
  ------------------------
  This file creates a reusable button component for the landing page.
*/
import { cn } from '../../utils/cn'

const buttonVariants = {
  primary:
    'bg-gradient-accent text-white shadow-lg shadow-[var(--color-accent)]/20 hover:brightness-105',
  secondary:
    'border border-[var(--color-border-soft)] bg-white text-[var(--color-ink)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]',
  ghost:
    'text-[var(--color-ink)] hover:bg-[var(--color-blush)]/40 hover:text-[var(--color-accent)]',
}

const buttonSizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export default function Button({
  children,
  className,
  href,
  size = 'md',
  type = 'button',
  variant = 'primary',
  ...props
}) {
  const classes = cn(
    /*
      Shared Tailwind foundation:
      layout + spacing + pill shape + focus/disabled states.
      Variants below only change visual style; they do not repeat this base.
    */
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]',
    'disabled:cursor-not-allowed disabled:opacity-60',
    buttonVariants[variant],
    buttonSizes[size],
    className,
  )

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} type={type} {...props}>
      {children}
    </button>
  )
}
