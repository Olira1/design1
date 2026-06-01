import Badge from './Badge'
import { cn } from '../../utils/cn'

const alignments = {
  center: 'mx-auto text-center',
  left: 'text-left',
}

export default function SectionHeading({
  align = 'center',
  className,
  description,
  eyebrow,
  level: Heading = 'h2',
  title,
}) {
  return (
    <div className={cn('max-w-3xl', alignments[align], className)}>
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}

      <Heading
        className={cn(
          /*
            Tailwind purpose:
            display font + responsive heading size + balanced wrapping.
            The "level" prop changes the semantic heading tag without changing styling.
          */
          'mt-4 font-[var(--font-display)] text-3xl font-semibold leading-tight text-balance',
          'text-[var(--color-ink)] md:text-5xl',
        )}
      >
        {title}
      </Heading>

      {description ? (
        <p className="mt-5 text-base leading-8 text-[var(--color-muted)] md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}
