import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useState } from 'react'
import { testimonials } from '../../data/testimonials'
import SectionHeading from '../ui/SectionHeading'

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0)
  const t = testimonials[index]

  return (
    <section className="bg-gradient-hero px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading title="What Our Students Say" />

        <div className="relative rounded-3xl border border-ink/8 bg-white/70 p-8 backdrop-blur-sm md:p-12">
          <Quote className="mx-auto h-8 w-8 text-accent/40" aria-hidden />
          <blockquote className="mt-4 font-display text-xl leading-relaxed text-ink md:text-2xl">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <footer className="mt-6">
            <p className="font-semibold text-ink">{t.name}</p>
            <p className="text-sm text-ink/60">{t.role}</p>
          </footer>

          <div className="mt-8 flex justify-center gap-3">
            <button
              type="button"
              onClick={() =>
                setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1))
              }
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 bg-cream text-ink hover:bg-ink hover:text-cream"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() =>
                setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1))
              }
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 bg-cream text-ink hover:bg-ink hover:text-cream"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
