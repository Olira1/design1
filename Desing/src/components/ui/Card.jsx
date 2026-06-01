/*
  Step 3: Shared UI Component - Card
  ----------------------------------
  A card is a reusable container for course cards, feature cards,
  contact cards, and other boxed content.
*/

/*
  Tailwind className group:
  - rounded-3xl gives cards the soft modern landing-page shape.
  - border and bg-white separate the card from the cream background.
  - p-6 adds consistent inside spacing.
  - shadow-sm gives a subtle lift without making the design heavy.
  - transition/hover improves the feel when cards are interactive.
*/
const cardClasses =
  'rounded-3xl border border-[var(--color-border-soft)] bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl'

export default function Card({ children, className = '', as: Component = 'article' }) {
  /*
    The "as" prop lets us choose the HTML tag later.
    By default, an article is good for self-contained cards.
  */
  return <Component className={`${cardClasses} ${className}`}>{children}</Component>
}
export default function Card({ children, className = '' }) {
  return (
    <article
      className={`rounded-2xl border border-ink/8 bg-white/60 p-6 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md ${className}`}
    >
      {children}
    </article>
  )
}
