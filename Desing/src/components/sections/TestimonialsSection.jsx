import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { testimonials } from '../../data/testimonials'
import SectionHeading from '../ui/SectionHeading'
import heroBackground from '../../assets/images/testmonial4.png'

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const testimonial = testimonials[activeIndex]

  const showNextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length)
  }

  const showPreviousTestimonial = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  }

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

        <figure className="relative mt-12 rounded-3xl border border-white/20 bg-white/90 p-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-sm md:p-12">
          <button
            type="button"
            onClick={showPreviousTestimonial}
            className="absolute left-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-accent)]/35 bg-white text-[var(--color-accent)] transition hover:scale-105 hover:bg-[var(--color-accent)] hover:text-white md:left-6 md:top-6"
            aria-label="Show previous testimonial"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={showNextTestimonial}
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-accent)]/35 bg-white text-[var(--color-accent)] transition hover:scale-105 hover:bg-[var(--color-accent)] hover:text-white md:right-6 md:top-6"
            aria-label="Show next testimonial"
          >
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>

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

        <div className="mt-5 flex items-center justify-center gap-2" aria-label="Testimonial slide indicators">
          {testimonials.map((item, index) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={activeIndex === index ? 'true' : undefined}
              onClick={() => setActiveIndex(index)}
              className={`rounded-full transition ${
                activeIndex === index
                  ? 'h-2.5 w-5 bg-[var(--color-accent)]'
                  : 'h-2.5 w-2.5 bg-white/65 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
