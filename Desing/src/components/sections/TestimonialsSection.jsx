import { testimonials } from '../../data/testimonials'
import SectionHeading from '../ui/SectionHeading'
import heroBackground from "../../assets/images/testmonial4.png";

export default function TestimonialsSection() {
  const testimonial = testimonials[0]

  if (!testimonial) return null

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden px-4 py-20 md:px-6"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Students Say"
          description="Real feedback from learners who built practical sewing and fashion design skills through our hands-on training."
          className="[&_*]:text-white"
        />

        <figure className="mt-12 rounded-3xl border border-white/20 bg-white/90 p-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-sm md:p-12">
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
