import aboutImage from "../../assets/images/2manager.jpg";
import { BookOpen, CalendarClock, GraduationCap, Scissors, Shirt } from 'lucide-react'
import { aboutHighlights } from '../../data/features'
import SectionHeading from '../ui/SectionHeading'

export default function AboutSection() {
  const getHighlightIcon = (highlight) => {
    const iconClasses = 'h-3.5 w-3.5'

    if (highlight === 'Practical hands-on learning') return <Scissors className={iconClasses} />
    if (highlight === 'Experienced instructors') return <GraduationCap className={iconClasses} />
    if (highlight === 'Modern sewing equipment') return <Shirt className={iconClasses} />
    if (highlight === 'Beginner-friendly programs') return <BookOpen className={iconClasses} />
    if (highlight === 'Flexible class schedules') return <CalendarClock className={iconClasses} />

    return <Scissors className={iconClasses} />
  }

  return (
    <section id="about" className="mt-8 bg-white px-4 py-16 sm:mt-10 sm:py-20 md:px-6 md:mt-50">
      <div>
        <h2 className="mx-auto pb-10 text-center text-3xl font-bold bg-gradient-to-r from-[#F94F95] to-[#000000] bg-clip-text text-transparent sm:pb-12 sm:text-4xl">
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
                className="flex items-start gap-3 "
              >
                <span
                  className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full  text-xs text-[var(--color-accent)]"
                  aria-hidden="true"
                >
                  {getHighlightIcon(highlight)}
                </span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="[perspective:1000px] w-full max-w-[500px] justify-self-center">
          <div className="overflow-hidden rounded-3xl border border-[var(--color-border-soft)] shadow-[-10px_20px_30px_rgba(0,0,0,0.3)] [transform:rotateY(-2deg)_rotateX(0deg)_rotateZ(0deg)] sm:[transform:rotateY(-6deg)_rotateX(0deg)_rotateZ(0deg)]">
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
