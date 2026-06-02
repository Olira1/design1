import { courses } from '../../data/courses'
import { resolveImagePath } from '../../utils/imageResolver'
import Button from '../ui/Button'
import Card from '../ui/Card'
import SectionHeading from '../ui/SectionHeading'

export default function CoursesSection() {
  return (
    <section id="courses" className="bg-[var(--color-cream)] px-4 py-20 md:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Training Programs"
          title="Our Training Programs"
          description="Choose from practical sewing and fashion design programs designed for beginners and future professionals."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {courses.map((course) => (
            <Card key={course.id} interactive className="flex h-full flex-col p-0">
              <img
                src={resolveImagePath(course.imageSrc, '')}
                alt={course.title}
                className="h-52 w-full rounded-t-3xl object-cover"
              />

              <div className="flex flex-1 flex-col p-6">
                <h3 className="mt-4 font-[var(--font-display)] text-2xl text-[var(--color-ink)]">
                  {course.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-[var(--color-muted)]">
                  {course.description}
                </p>

                <dl className="mt-4 space-y-2 text-sm">
                  <div className="flex items-center justify-between gap-3 rounded-xl bg-[var(--color-blush)]/40 px-3 py-2">
                    <dt className="font-semibold text-[var(--color-ink)]">Duration</dt>
                    <dd className="text-[var(--color-accent)]">{course.duration}</dd>
                  </div>
                  <div className="flex items-center justify-between gap-3 rounded-xl border border-[var(--color-border-soft)] px-3 py-2">
                    <dt className="font-semibold text-[var(--color-ink)]">Level</dt>
                    <dd className="text-[var(--color-muted)]">{course.level}</dd>
                  </div>
                </dl>

                <Button href="#register" className="mt-6 w-full">
                  {course.ctaLabel}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
