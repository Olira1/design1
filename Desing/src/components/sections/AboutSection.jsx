import aboutImage from '../../assets/images/image3.png'
import { aboutHighlights } from '../../data/features'
import SectionHeading from '../ui/SectionHeading'

export default function AboutSection() {
  return (
    <section id="about" className="bg-white px-4 py-20 md:px-6">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl border border-[var(--color-border-soft)]">
          <img
            src={aboutImage}
            alt="Instructor teaching fashion students in a sewing class"
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <SectionHeading
            align="left"
            eyebrow="About Our Institute"
            title="Where creativity meets craftsmanship"
            description="We are a modern fashion design and sewing training institute focused on helping students develop practical tailoring and clothing production skills. Our programs combine creativity, technical sewing knowledge, and hands-on experience to prepare students for professional opportunities in the fashion industry."
          />

          <ul className="mt-8 space-y-3">
            {aboutHighlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-3 text-[var(--color-muted)]"
              >
                <span
                  className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-blush)] text-xs text-[var(--color-accent)]"
                  aria-hidden="true"
                >
                  ✓
                </span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
