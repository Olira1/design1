import { courses } from '../../data/courses'
import Card from '../ui/Card'
import SectionHeading from '../ui/SectionHeading'

export default function CoursesSection() {
  return (
    <section id="courses" className="bg-[#5E5E5E] px-4 py-20 md:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Training Programs"
          title="Our Training Programs"
          description="Choose from our practical and career-focused programs."
          className="[&_*]:text-white"
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {courses.map((course) => (
            <Card
              key={course.id}
              interactive
              className="flex h-full flex-col rounded-xl border-[#d2d3d8] bg-[#f6f6f8] p-4 shadow-none"
            >
              <div className="flex items-start gap-2.5">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f4d8c8] text-[10px] font-bold text-[#cc5b2b]">
                  {course.title.slice(0, 1)}
                </span>
                <div>
                  <h3 className="font-sans text-[1.55rem] font-extrabold leading-tight text-[#cc5b2b]">
                    {course.title}
                  </h3>
                  <p className="text-xs text-[#595d67]">{course.level}</p>
                </div>
              </div>

              <div className="mt-4 overflow-hidden rounded-lg border border-[#e1e2e8]">
                <img
                  src={course.image}
                  alt={`${course.title} course`}
                  className="h-80 w-full object-cover"
                  loading="lazy"
                />
              </div>

              <p className="mt-4 text-sm leading-6 text-[#5f646f]">
                {course.description}
              </p>

              <p className="mt-4 text-sm font-semibold text-[#666a74]">
                Class will start on{" "}
                <span className="text-[#3f4350]">{course.startDate}</span>
              </p>

              <div className="mt-4 text-sm text-[#555a66]">
                <p>
                  Total Price:{" "}
                  <span className="font-extrabold text-[#cc5b2b]">
                    {course.totalPrice}
                  </span>
                </p>
                <p className="mt-1">
                  If paid in full:{" "}
                  <span className="font-extrabold text-[#cc5b2b]">
                    {course.paidInFullPrice}
                  </span>{" "}
                  <span className="text-[#7a7f89]">{course.discountText}</span>
                </p>
              </div>

              <div className="mt-4 h-px bg-[#dddfe5]" />

              <div className="mt-4 flex flex-wrap items-center gap-2.5">
                <span className="rounded-md border border-[#d0d2d8] bg-[#ecf4ff] px-2.5 py-1 text-[11px] font-semibold text-[#4a78a8]">
                  {course.deliveryMode}
                </span>
                <span className="rounded-md border border-[#d0d2d8] bg-[#fff3ea] px-2.5 py-1 text-[11px] font-semibold text-[#bd6a32]">
                  {course.duration}
                </span>
                <a
                  href="/register"
                  className="rounded-full border border-[#b8adb4] px-5 py-1.5 text-xs font-semibold text-[#6e666e] transition hover:border-[#996073] hover:text-[#996073]"
                >
                  {course.ctaLabel}
                </a>
                <a
                  href="#courses"
                  className="rounded-full border border-[#b8adb4] px-4 py-1.5 text-xs font-semibold text-[#6e666e] transition hover:border-[#996073] hover:text-[#996073]"
                >
                  {course.secondaryCtaLabel}
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
