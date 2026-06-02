import { portfolioItems } from '../../data/portfolio'
import { resolveImagePath } from '../../utils/imageResolver'
import SectionHeading from '../ui/SectionHeading'

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-white px-4 py-20 md:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Student Portfolio"
          title="Student Creations & Practical Projects"
          description="Our students gain hands-on experience by creating real clothing projects during training — from sketch to finished piece."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-3xl border border-[var(--color-border-soft)] bg-white"
            >
              <img
                src={resolveImagePath(item.imageSrc, '')}
                alt={item.imageAlt}
                className="h-72 w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                  {item.category}
                </p>
                <h3 className="mt-2 font-[var(--font-display)] text-2xl text-[var(--color-ink)]">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
