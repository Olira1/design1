import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { portfolioItems } from '../../data/portfolio'
import Button from '../ui/Button'
import SectionHeading from '../ui/SectionHeading'

export default function PortfolioSection() {
  const [index, setIndex] = useState(0)
  const item = portfolioItems[index]

  const prev = () =>
    setIndex((i) => (i === 0 ? portfolioItems.length - 1 : i - 1))
  const next = () =>
    setIndex((i) => (i === portfolioItems.length - 1 ? 0 : i + 1))

  return (
    <section id="portfolio" className="bg-cream px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Portfolio"
          title="Student Creations & Practical Projects"
          description="Our students gain hands-on experience by creating real clothing projects during training — from sketch to finished piece."
        />

        <div className="relative overflow-hidden rounded-3xl bg-ink/5">
          <div className="grid lg:grid-cols-2">
            <div className="aspect-[4/5] lg:aspect-auto">
              <img
                key={item.id}
                src={item.image}
                alt={item.title}
                className="h-full min-h-[320px] w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
              <p className="text-sm font-semibold tracking-widest text-accent uppercase">
                {item.category}
              </p>
              <h3 className="mt-2 font-display text-3xl text-ink md:text-4xl">
                {item.title}
              </h3>
              <p className="mt-4 text-ink/65">
                Real student work from our workshop — built with guidance from
                expert instructors using professional techniques.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <button
                  type="button"
                  onClick={prev}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white text-ink transition hover:bg-ink hover:text-cream"
                  aria-label="Previous project"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white text-ink transition hover:bg-ink hover:text-cream"
                  aria-label="Next project"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
                <span className="ml-2 text-sm text-ink/50">
                  {index + 1} / {portfolioItems.length}
                </span>
              </div>
              <Button href="#register" variant="primary" className="mt-8 w-fit">
                Reserve Your Spot
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
