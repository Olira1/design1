import { howItWorksSteps } from '../../data/steps'
import SectionHeading from '../ui/SectionHeading'

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-cream px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Process"
          title="How It Works"
          description="A simple, clear journey from registration to certification."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {howItWorksSteps.map((step) => (
            <div
              key={step.step}
              className="relative rounded-2xl border border-ink/8 bg-white/60 p-6"
            >
              <span className="font-display text-5xl font-bold text-accent/20">
                {String(step.step).padStart(2, '0')}
              </span>
              <h3 className="mt-2 font-display text-xl text-ink">{step.title}</h3>
              <p className="mt-2 text-sm text-ink/65">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
