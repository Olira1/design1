import { learningSteps } from '../../data/steps'
import SectionHeading from '../ui/SectionHeading'

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-[var(--color-cream)] px-4 py-20 md:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Learning Process"
          title="How It Works"
          description="A simple, clear journey from registration to certification."
        />

        <ol className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {learningSteps.map((step) => (
            <li
              key={step.number}
              className="rounded-3xl border border-[var(--color-border-soft)] bg-white p-6"
            >
              <span className="text-sm font-semibold tracking-widest text-[var(--color-accent)]">
                {step.number}
              </span>
              <h3 className="mt-3 font-[var(--font-display)] text-2xl text-[var(--color-ink)]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
