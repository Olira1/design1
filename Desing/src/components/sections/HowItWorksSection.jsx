import { learningSteps } from '../../data/steps'
import Card from '../ui/Card'
import SectionHeading from '../ui/SectionHeading'

export default function HowItWorksSection() {
  if (!learningSteps.length) return null

  return (
    <section id="how-it-works" className="bg-[var(--color-white)] px-4 py-20 md:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Learning Process"
          title="How It Works"
          description="A simple, clear journey from registration to certification."
        />

        <ol className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {learningSteps.map((step) => (
            <Card
              as="li"
              key={step.number}
              interactive
              className="h-full"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-blush)] text-sm font-bold tracking-widest text-[var(--color-accent)]">
                {step.number}
              </span>
              <h3 className="mt-3 font-[var(--font-display)] text-2xl text-[var(--color-ink)]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                {step.description}
              </p>
            </Card>
          ))}
        </ol>
      </div>
    </section>
  )
}
