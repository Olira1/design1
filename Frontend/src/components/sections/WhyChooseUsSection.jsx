import { whyChooseUsFeatures } from '../../data/features'
import {
  Scissors,
  GraduationCap,
  CalendarDays,
  BadgeCheck,
  Wallet,
  Cog,
  Sparkles,
} from 'lucide-react'
import Card from '../ui/Card'
import SectionHeading from '../ui/SectionHeading'

const iconMap = {
  scissors: Scissors,
  teacher: GraduationCap,
  calendar: CalendarDays,
  certificate: BadgeCheck,
  wallet: Wallet,
  machine: Cog,
}

export default function WhyChooseUsSection() {
  return (
    <section
      id="why-choose-us"
      className="bg-[var(--color-white)] px-4 py-12 sm:py-20 md:px-6"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Students Choose Us"
          description="We combine practical fashion training, expert mentorship, and flexible learning so students can grow from beginner to confident creator."
        />

        <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-2">
          {whyChooseUsFeatures.map((feature) => {
            const FeatureIcon = iconMap[feature.icon] ?? Sparkles

            return (
              <Card
                key={feature.title}
                interactive
                className="rounded-2xl bg-[#FFF9F3] p-4 sm:rounded-3xl sm:p-6"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <span
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-accent)]/10 text-[var(--color-accent)] sm:h-12 sm:w-12"
                    aria-hidden="true"
                  >
                    <FeatureIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </span>
                  <span>
                    <h3 className="font-[var(--font-display)] text-lg font-bold leading-snug text-[#82264b] sm:text-2xl">
                      {feature.title}
                    </h3>
                  </span>
                </div>

                <h4 className="mt-2 font-[var(--font-display)] text-base leading-snug text-[#82264b] sm:mt-3 sm:text-xl">
                  {feature.headline}
                </h4>
                <p className="mt-2 text-sm leading-6 text-[var(--color-muted)] sm:mt-3 sm:leading-7">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
