import { availableSchedules, trainingModes } from '../../data/schedules'
import SectionHeading from '../ui/SectionHeading'

export default function SchedulesSection() {
  return (
    <section id="schedules" className="bg-white px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Flexible Training Schedules" />

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-ink/8 bg-cream/50 p-8">
            <h3 className="font-display text-2xl text-ink">Available Schedules</h3>
            <ul className="mt-6 space-y-4">
              {availableSchedules.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 border-b border-ink/8 pb-4 text-ink/80 last:border-0 last:pb-0"
                >
                  <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-ink/8 bg-cream/50 p-8">
            <h3 className="font-display text-2xl text-ink">Training Modes</h3>
            <ul className="mt-6 space-y-4">
              {trainingModes.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 border-b border-ink/8 pb-4 text-ink/80 last:border-0 last:pb-0"
                >
                  <span className="h-2 w-2 rounded-full bg-blush" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
