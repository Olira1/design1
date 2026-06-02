import { availableSchedules, scheduleCta, trainingModes } from '../../data/schedules'
import Button from '../ui/Button'
import SectionHeading from '../ui/SectionHeading'

export default function SchedulesSection() {
  return (
    <section id="schedules" className="bg-white px-4 py-20 md:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Training Schedule"
          title="Flexible Training Schedules"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <article className="rounded-3xl border border-[var(--color-border-soft)] bg-[var(--color-cream)] p-6">
            <h3 className="font-[var(--font-display)] text-2xl text-[var(--color-ink)]">
              Available Schedules
            </h3>
            <ul className="mt-5 space-y-4">
              {availableSchedules.map((schedule) => (
                <li key={schedule.title} className="border-b border-[var(--color-border-soft)] pb-4 last:border-b-0 last:pb-0">
                  <p className="text-base font-semibold text-[var(--color-ink)]">
                    {schedule.title}
                  </p>
                  <p className="text-sm text-[var(--color-muted)]">{schedule.time}</p>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-[var(--color-border-soft)] bg-[var(--color-cream)] p-6">
            <h3 className="font-[var(--font-display)] text-2xl text-[var(--color-ink)]">
              Training Modes
            </h3>
            <ul className="mt-5 space-y-3">
              {trainingModes.map((mode) => (
                <li key={mode} className="flex items-start gap-2 text-sm text-[var(--color-muted)]">
                  <span className="mt-1 text-[var(--color-accent)]" aria-hidden="true">
                    •
                  </span>
                  <span>{mode}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-[var(--color-border-soft)] bg-gradient-hero p-6">
            <h3 className="font-[var(--font-display)] text-2xl text-[var(--color-ink)]">
              {scheduleCta.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
              Choose a schedule that works for you and reserve your seat in the
              next cohort.
            </p>
            <Button href={scheduleCta.href} className="mt-6 w-full">
              {scheduleCta.buttonLabel}
            </Button>
          </article>
        </div>
      </div>
    </section>
  )
}
