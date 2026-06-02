import { portfolioItems } from '../../data/portfolio'
import { resolveImagePath } from '../../utils/imageResolver'
import SectionHeading from '../ui/SectionHeading'

const cardRotationByIndex = ['-rotate-10', '-rotate-3', 'rotate-0', 'rotate-6', 'rotate-12']

export default function PortfolioSection() {
  const displayItems = portfolioItems.slice(0, 5)

  return (
    <section id="portfolio" className="bg-white px-4 py-20 md:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Student Portfolio"
          title="Student Creations & Practical Projects"
          description="Our students gain hands-on experience by creating real clothing projects during training — from sketch to finished piece."
        />

        <div className="mt-12 overflow-x-auto pb-5">
          <div className="mx-auto flex min-w-max items-end justify-center gap-5 px-4 md:gap-7">
            {displayItems.map((item, index) => (
              <article
                key={item.id}
                className={`group h-[280px] w-[170px] overflow-hidden rounded-[28px] border-2 border-[var(--color-border-soft)] bg-white shadow-[0_8px_16px_rgba(180,54,103,0.18)] ${cardRotationByIndex[index] ?? 'rotate-0'}`}
              >
                <img
                  src={resolveImagePath(item.imageSrc, '')}
                  alt={item.imageAlt}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-1.5" aria-label="Portfolio slide indicators">
          {displayItems.map((item) => (
            <span
              key={`dot-${item.id}`}
              className="h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]/80"
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
