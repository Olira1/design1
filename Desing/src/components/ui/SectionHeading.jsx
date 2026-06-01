/*
  Step 3: Shared UI Component - SectionHeading
  --------------------------------------------
  Most sections need the same heading pattern:
  small eyebrow text, large title, and optional description.
*/

import Badge from './Badge'

/*
  Tailwind className groups:
  - wrapperClasses controls width, spacing, and alignment for the heading block.
  - titleClasses uses the display font from Step 1 and responsive text sizes.
  - descriptionClasses keeps paragraph text readable and not too wide.
  Grouping these classes makes it clear which part of the UI each className affects.
*/
const alignmentClasses = {
  center: 'mx-auto text-center',
  left: 'text-left',
}

const wrapperClasses = 'max-w-3xl'

const titleClasses =
  'mt-4 font-[var(--font-display)] text-3xl font-semibold leading-tight text-balance text-[var(--color-ink)] md:text-5xl'

const descriptionClasses =
  'mt-5 text-base leading-8 text-[var(--color-muted)] md:text-lg'

export default function SectionHeading({
  align = 'center',
  className = '',
  description,
  eyebrow,
  title,
}) {
  /*
    The heading is flexible:
    - eyebrow is optional
    - description is optional
    - title is the main required text for each section
  */
  return (
    <div className={`${wrapperClasses} ${alignmentClasses[align]} ${className}`}>
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}

      <h2 className={titleClasses}>{title}</h2>

      {description ? <p className={descriptionClasses}>{description}</p> : null}
    </div>
  )
}
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}) {
  const alignClass =
    align === 'center' ? 'text-center mx-auto' : 'text-left max-w-xl'

  return (
    <div className={`mb-12 max-w-3xl ${alignClass} ${className}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold tracking-widest text-accent uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl leading-tight text-ink md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink/70 md:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}
