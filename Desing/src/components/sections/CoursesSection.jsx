import { ArrowRight, Clock } from 'lucide-react'
import { courses } from '../../data/courses'
import Button from '../ui/Button'
import Card from '../ui/Card'
import SectionHeading from '../ui/SectionHeading'

export default function CoursesSection() {
  return (
    <section id="courses" className="bg-white px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Programs"
          title="Our Training Programs"
          description="Choose from practical sewing and fashion design programs designed for beginners and future professionals."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <Card key={course.id} className="flex flex-col">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-accent font-display text-lg font-bold text-cream">
                {course.title.charAt(0)}
              </div>
              <h3 className="font-display text-xl text-ink">{course.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65">
                {course.description}
              </p>
              <p className="mt-4 flex items-center gap-1.5 text-xs font-medium text-accent">
                <Clock className="h-3.5 w-3.5" aria-hidden />
                {course.duration}
              </p>
              <Button
                href="#register"
                variant="ghost"
                size="sm"
                className="mt-4 w-fit px-0"
              >
                Apply Now
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
