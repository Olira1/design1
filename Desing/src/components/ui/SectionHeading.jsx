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
