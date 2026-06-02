import aboutImage from '../../assets/images/evan.png'
import { aboutHighlights } from '../../data/features'
import SectionHeading from '../ui/SectionHeading'

export default function AboutSection() {
  return (
    <section id="about" className="bg-white px-4 py-20 md:px-6 mt-20 pt-60">
      <div>
        <h2 className="mx-auto text-4xl font-bold text-center pb-15 bg-gradient-to-r from-[#F94F95] to-[#000000] bg-clip-text text-transparent">
          About Our Institute
        </h2>
      </div>
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            // eyebrow="About Our Institute"
            title="Where creativity meets craftsmanship"
            description="We are a modern fashion design and sewing training institute focused on helping students develop practical tailoring and clothing production skills. Our programs combine creativity, technical sewing knowledge, and hands-on experience to prepare students for professional opportunities in the fashion industry."
          />

          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
            {aboutHighlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-3 text-[var(--color-muted)]"
              >
                <span
                  className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-blush)] text-xs text-[var(--color-accent)]"
                  aria-hidden="true"
                >
                  ✓
                </span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="[perspective:1000px] w-full max-w-500px justify-self-center">
          <div className="overflow-hidden rounded-3xl border border-[var(--color-border-soft)] shadow-[-10px_20px_30px_rgba(0,0,0,0.3)] [transform:rotateY(-6deg)_rotateX(0deg)_rotateZ(0deg)]">
            <img
              src={aboutImage}
              alt="Instructor teaching fashion students in a sewing class"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
