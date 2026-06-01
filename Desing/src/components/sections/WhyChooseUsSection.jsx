import { whyChooseUs } from '../../data/features'
import Card from '../ui/Card'
import SectionHeading from '../ui/SectionHeading'

export default function WhyChooseUsSection() {
  return (
    <section className="bg-white px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Why Students Choose Us" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map(({ icon: Icon, title, description }) => (
            <Card key={title}>
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <Icon className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="font-display text-xl text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">
                {description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
