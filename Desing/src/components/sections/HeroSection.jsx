import heroImage from '../../assets/images/image6.png'
import Badge from '../ui/Badge'
import Button from '../ui/Button'

export default function HeroSection() {
  return (
    <section id="hero" className="bg-gradient-hero px-4 pb-20 pt-16 md:px-6 md:pb-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
        <div>
          <Badge>New Cohort Enrolling Now</Badge>

          <h1 className="mt-5 font-[var(--font-display)] text-4xl font-semibold leading-tight text-[var(--color-ink)] md:text-6xl">
            Learn Modern <span className="text-[var(--color-accent)]">Fashion Design</span>{' '}
            &amp; Professional Sewing Skills
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-muted)] md:text-lg">
            Join practical training programs designed for beginners and future
            fashion professionals. Build real-world sewing and clothing design
            skills with expert instructors.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#register">Register Now</Button>
            <Button href="#courses" variant="secondary">
              View Courses
            </Button>
            <Button href="#contact" variant="ghost">
              Join Telegram
            </Button>
          </div>

          <dl className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { label: 'Students Trained', value: '500+' },
              { label: 'Practical Learning', value: '100%' },
              { label: 'Certification', value: 'Yes' },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-[var(--color-border-soft)] bg-white/70 px-4 py-4"
              >
                <dt className="text-xs uppercase tracking-wide text-[var(--color-muted)]">
                  {item.label}
                </dt>
                <dd className="mt-1 text-2xl font-bold text-[var(--color-ink)]">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="overflow-hidden rounded-3xl border border-[var(--color-border-soft)] bg-white shadow-xl">
          <img
            src={heroImage}
            alt="Fashion student sewing on a modern machine"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
