import { cn } from '../../utils/cn'

export default function Card({
  as: Component = 'article',
  children,
  className,
  interactive = false,
  ...props
}) {
  return (
    <Component
      className={cn(
        /*
          Tailwind purpose:
          reusable white surface + soft radius + subtle border/shadow.
          "interactive" adds motion only when a card is meant to feel clickable.
        */
        'rounded-3xl border border-[var(--color-border-soft)] bg-white p-6 shadow-sm',
        interactive && 'transition duration-200 hover:-translate-y-1 hover:shadow-xl',
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
