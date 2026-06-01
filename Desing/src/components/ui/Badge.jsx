/*
  Step 3: Shared UI Component - Badge
  -----------------------------------
  A badge is a small label used above headings, for example:
  "New Cohort Enrolling Now" or "Training Programs".
*/

/*
  Tailwind className group:
  - inline-flex keeps icon/text aligned on one row.
  - rounded-full creates the pill shape.
  - bg/text/border classes use our Step 1 design tokens.
  - tracking-widest and uppercase make the badge feel premium and clear.
*/
const badgeClasses =
  'inline-flex items-center gap-2 rounded-full border border-[var(--color-border-soft)] bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] shadow-sm backdrop-blur'

export default function Badge({ children, className = '' }) {
  /*
    The decorative dot is a simple brand accent.
    aria-hidden keeps screen readers focused on the real badge text.
  */
  return (
    <span className={`${badgeClasses} ${className}`}>
      <span
        className="h-2 w-2 rounded-full bg-[var(--color-accent)]"
        aria-hidden="true"
      />
      {children}
    </span>
  )
}
import { Sparkles } from 'lucide-react'

export default function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-xs font-semibold tracking-widest text-ink/70 uppercase shadow-sm backdrop-blur-sm">
      <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden />
      {children}
    </span>
  )
}
