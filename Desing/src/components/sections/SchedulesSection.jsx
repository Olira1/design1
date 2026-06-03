import { CalendarDays, Clock3, GraduationCap, Hammer, Sun, Users } from 'lucide-react'
import { availableSchedules, scheduleCta, trainingModes } from '../../data/schedules'
import Button from '../ui/Button'
import Card from '../ui/Card'
import SectionHeading from '../ui/SectionHeading'

export default function SchedulesSection() {
  const getScheduleIcon = (title) => {
    const iconClasses = 'h-4 w-4'

    if (title === 'Morning Classes') return <Sun className={iconClasses} />
    if (title === 'Afternoon Classes') return <Clock3 className={iconClasses} />
    if (title === 'Weekend Classes') return <CalendarDays className={iconClasses} />

    return <CalendarDays className={iconClasses} />
  }

  const getTrainingModeIcon = (mode) => {
    const iconClasses = 'h-4 w-4'

    if (mode === 'Physical Classroom Training') return <GraduationCap className={iconClasses} />
    if (mode === 'Practical Workshop Sessions') return <Hammer className={iconClasses} />
    if (mode === 'Group-Based Learning') return <Users className={iconClasses} />

    return <GraduationCap className={iconClasses} />
  }

  if (!availableSchedules.length || !trainingModes.length) return null

  return (
    <section id="schedules" className="bg-[#3a4f74] px-4 py-20 md:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Training Schedule"
          title="Flexible Training Schedules"
          className="[&_*]:text-white"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="bg-[var(--color-cream)]">
            <h3 className="font-[var(--font-display)] text-2xl text-[var(--color-ink)]">
              Available Schedules
            </h3>
            <ul className="mt-5 space-y-4">
              {availableSchedules.map((schedule) => (
                <li
                  key={schedule.title}
                  className="border-b border-[var(--color-border-soft)] pb-4 last:border-b-0 last:pb-0"
                >
                  <p className="flex items-center gap-2 text-base font-semibold text-[var(--color-ink)]">
                    <span className="text-[var(--color-accent)]" aria-hidden="true">
                      {getScheduleIcon(schedule.title)}
                    </span>
                    {schedule.title}
                  </p>
                  <p className="text-sm text-[var(--color-muted)]">
                    {schedule.time}
                  </p>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="flex h-full flex-col bg-gradient-hero">
            <p className="inline-flex w-fit rounded-full border border-[var(--color-accent)]/20 bg-white/75 px-3 py-1 text-xs font-semibold tracking-wide text-[var(--color-accent)]">
              {scheduleCta.title}
            </p>
            <h3 className="font-[var(--font-display)] text-2xl text-[var(--color-ink)]">
              Training Modes
            </h3>
            <ul className="mt-5 space-y-3">
              {trainingModes.map((mode) => (
                <li
                  key={mode}
                  className="flex items-start gap-2 text-sm text-[var(--color-muted)]"
                >
                  <span className="mt-0.5 text-[var(--color-accent)]" aria-hidden="true">
                    {getTrainingModeIcon(mode)}
                  </span>
                  <span>{mode}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-7 text-[var(--color-muted)]">
              Choose a schedule that works for you and reserve your seat in the
              next cohort.
            </p>
            <Button href={scheduleCta.href} className="mt-6 w-full sm:w-auto">
              {scheduleCta.buttonLabel}
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
