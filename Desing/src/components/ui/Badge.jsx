import { cn } from '../../utils/cn'

export default function Badge({ children, className }) {
  return (
    <span
      className={cn(
        /*
          Tailwind purpose:
          compact pill label + subtle glass background + brand-colored text.
          This is used for section eyebrow labels such as "Training Programs".
        */
        'inline-flex items-center gap-2 rounded-full border border-[var(--color-border-soft)]',
        'bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]',
        'shadow-sm backdrop-blur',
        className,
      )}
    >
      <span
        className="h-2 w-2 rounded-full bg-[var(--color-accent)]"
        aria-hidden="true"
      />
      {children}
    </span>
  )
}
