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
    <section id="schedules" className="bg-[#5E5E5E] px-4 py-12 sm:py-20 md:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Training Schedule"
          title="Flexible Training Schedules"
          className="[&_*]:text-white [&>h2]:text-2xl sm:[&>h2]:text-5xl"
        />

        <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="bg-[var(--color-cream)] p-4 sm:p-6">
            <h3 className="font-[var(--font-display)] text-xl text-[var(--color-ink)] sm:text-2xl">
              Available Schedules
            </h3>
            <ul className="mt-4 space-y-3 sm:mt-5 sm:space-y-4">
              {availableSchedules.map((schedule) => (
                <li
                  key={schedule.title}
                  className="border-b border-[var(--color-border-soft)] pb-3 last:border-b-0 last:pb-0 sm:pb-4"
                >
                  <p className="flex items-center gap-2 text-sm font-semibold text-[var(--color-ink)] sm:text-base">
                    <span
                      className="text-[var(--color-accent)]"
                      aria-hidden="true"
                    >
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

          <Card className="flex h-full flex-col bg-gradient-hero p-4 sm:p-6">
            <p className="inline-flex w-fit rounded-full border border-[var(--color-accent)]/20 bg-white/75 px-3 py-1 text-xs font-semibold tracking-wide text-[var(--color-accent)]">
              {scheduleCta.title}
            </p>
            <h3 className="font-[var(--font-display)] text-xl text-[var(--color-ink)] sm:text-2xl">
              Training Modes
            </h3>
            <ul className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">
              {trainingModes.map((mode) => (
                <li
                  key={mode}
                  className="flex items-start gap-2 text-sm text-[var(--color-muted)]"
                >
                  <span
                    className="mt-0.5 text-[var(--color-accent)]"
                    aria-hidden="true"
                  >
                    {getTrainingModeIcon(mode)}
                  </span>
                  <span>{mode}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-6 text-[var(--color-muted)] sm:mt-5 sm:leading-7">
              Choose a schedule that works for you and reserve your seat in the
              next cohort.
            </p>
            <Button href={scheduleCta.href} className="mt-5 w-full sm:mt-6 sm:w-auto">
              {scheduleCta.buttonLabel}
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
