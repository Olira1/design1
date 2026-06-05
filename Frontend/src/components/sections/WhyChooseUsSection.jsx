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
      className="bg-[var(--color-white)] px-4 py-20 md:px-6"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Students Choose Us"
          description="We combine practical fashion training, expert mentorship, and flexible learning so students can grow from beginner to confident creator."
        />

        <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-2">
          {whyChooseUsFeatures.map((feature) => {
            const FeatureIcon = iconMap[feature.icon] ?? Sparkles

            return (
              <Card key={feature.title} interactive>
                <div className="flex items-center gap-2 text-center">
                  <span
                    className="inline-flex mt-3 h-15 items-center justify-center rounded-2xl text-[var(--color-accent)]"
                    aria-hidden="true"
                  >
                    <FeatureIcon size={22} />
                  </span>
                  <span>
                    <h2 className="mt-4 font-[var(--font-display)] text-2xl text-center items-center justify-center font-bold text-[#82264b]">
                      {feature.title}
                    </h2>
                  </span>
                </div>

                <h4 className=" ml-7 font-[var(--font-display)] text-xl text-[#82264b]">
                  {feature.headline}
                </h4>
                <p className=" text-sm leading-7 text-[var(--color-muted)]">
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
