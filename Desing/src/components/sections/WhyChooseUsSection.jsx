import { whyChooseUsFeatures } from '../../data/features'
import Card from '../ui/Card'
import SectionHeading from '../ui/SectionHeading'

const iconMap = {
  scissors: 'S',
  teacher: 'E',
  calendar: 'F',
  certificate: 'C',
  wallet: 'A',
  machine: 'M',
}

export default function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="bg-[var(--color-cream)] px-4 py-20 md:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Students Choose Us"
          description="We combine practical fashion training, expert mentorship, and flexible learning so students can grow from beginner to confident creator."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUsFeatures.map((feature) => (
            <Card key={feature.title} interactive>
              <span
                className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-blush)] text-sm font-bold text-[var(--color-accent)]"
                aria-hidden="true"
              >
                {iconMap[feature.icon] ?? '?'}
              </span>
              <h3 className="mt-4 font-[var(--font-display)] text-2xl text-[var(--color-ink)]">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
