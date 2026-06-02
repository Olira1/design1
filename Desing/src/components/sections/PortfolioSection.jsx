import { portfolioItems } from '../../data/portfolio'
import { resolveImagePath } from '../../utils/imageResolver'
import SectionHeading from '../ui/SectionHeading'

export default function PortfolioSection() {
  const displayItems = portfolioItems.slice(0, 6)
  const cardTilt = ['-rotate-12', '-rotate-3', 'rotate-0', 'rotate-6', 'rotate-12', 'rotate-2']

  return (
    <section id="portfolio" className="bg-white px-4 py-20 md:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Student Portfolio"
          title="Student Creations & Practical Projects"
          description="Our students gain hands-on experience by creating real clothing projects during training — from sketch to finished piece."
        />

        <div className="portfolio-scroll mt-12 overflow-x-auto pb-6">
          <div className="mx-auto flex min-w-max items-end justify-center gap-6 px-4 md:gap-7">
            {displayItems.map((item, index) => (
              <article
                key={item.id}
                className={`group w-[170px] shrink-0 overflow-hidden rounded-[28px] border border-[#dadcdf] bg-[#f1f2f4] shadow-[0_8px_16px_rgba(180,54,103,0.22)] transition duration-300 ${cardTilt[index] ?? 'rotate-0'} hover:z-10 hover:-translate-y-1 hover:rotate-0 hover:shadow-[0_12px_24px_rgba(180,54,103,0.28)]`}
              >
                <div className="h-[300px] overflow-hidden">
                  <img
                    src={resolveImagePath(item.imageSrc, '')}
                    alt={item.imageAlt}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-2 flex items-center justify-center gap-2" aria-label="Portfolio slide indicators">
          {displayItems.map((item) => (
            <span
              key={`dot-${item.id}`}
              className="h-2.5 w-2.5 rounded-full bg-[#9a3c63]"
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
