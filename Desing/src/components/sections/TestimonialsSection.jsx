import { testimonials } from '../../data/testimonials'
import SectionHeading from '../ui/SectionHeading'

export default function TestimonialsSection() {
  const testimonial = testimonials[0]

  return (
    <section className="bg-white px-4 py-20 md:px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Testimonials" title="What Our Students Say" />

        <figure className="mt-12 rounded-3xl border border-[var(--color-border-soft)] bg-[var(--color-cream)] p-8 text-center md:p-12">
          <blockquote className="font-[var(--font-display)] text-2xl leading-relaxed text-[var(--color-ink)] md:text-4xl">
            “{testimonial.quote}”
          </blockquote>

          <figcaption className="mt-8">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-accent)] text-lg font-semibold text-white">
              {testimonial.initials}
            </span>
            <p className="mt-3 text-base font-semibold text-[var(--color-ink)]">
              {testimonial.name}
            </p>
            <p className="text-sm text-[var(--color-muted)]">{testimonial.role}</p>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
