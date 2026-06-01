import { Check } from 'lucide-react'
import { aboutHighlights } from '../../data/features'
import SectionHeading from '../ui/SectionHeading'

export default function AboutSection() {
  return (
    <section id="about" className="bg-cream px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br from-blush/40 to-accent/30">
          <img
            src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&h=1000&fit=crop"
            alt="Fashion student working at a sewing machine"
            className="h-full w-full object-cover mix-blend-multiply"
          />
        </div>

        <div>
          <SectionHeading
            align="left"
            eyebrow="About us"
            title="Where creativity meets craftsmanship"
            description="We are a modern fashion design and sewing training institute focused on helping students develop practical tailoring and clothing production skills. Our programs combine creativity, technical sewing knowledge, and real workshop experience."
          />

          <ul className="space-y-3">
            {aboutHighlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-ink/80">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Check className="h-3.5 w-3.5" aria-hidden />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
