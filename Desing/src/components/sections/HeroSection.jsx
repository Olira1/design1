import logo from '../../assets/images/logo.jpg'
import heroBackground from '../../assets/images/herosection.png'
import Button from '../ui/Button'

export default function HeroSection() {
  return (
    <section id="hero" className="relative overflow-visible bg-black pb-28 text-white md:pb-36 mb-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-6 md:px-6 md:pt-8">
        <div className="flex items-center justify-between gap-4">
          <a href="#hero" className="inline-flex items-center gap-2.5">
            <img
              src={logo}
              alt="FDTC Academy logo"
              className="h-10 w-10 rounded-full border border-[var(--color-accent)]/70 object-cover"
            />
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {[
              ['Home', '#hero'],
              ['Courses', '#courses'],
              ['Portfolio', '#portfolio'],
              ['How it Works', '#how-it-works'],
              ['FAQ', '#faq'],
              ['Contact', '#contact'],
            ].map(([label, href], index) => (
              <a
                key={label}
                href={href}
                className={`text-sm italic transition ${
                  index === 0
                    ? 'text-[var(--color-accent)]'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          <Button href="#register" size="sm" className="min-w-32">
            Register Now
          </Button>
        </div>

        <div className="mx-auto max-w-4xl pb-56 pt-20 text-center md:pb-64 md:pt-24">
          <h1 className="font-sans text-5xl font-bold leading-tight md:text-7xl">
            Learn{' '}
            <span className="font-[var(--font-display)] italic text-[var(--color-accent)]">
              Fashion Design
            </span>
            <br />
            From Industry Experts
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-white/80 md:text-base">
            Join our immersive in-person fashion design course and master creative
            skills, modern design techniques, and real-world project building in a
            collaborative environment.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="#register" className="min-w-40">
              Register Now
            </Button>
            <Button
              href="#schedules"
              variant="secondary"
              className="min-w-40 border-white/20 bg-white/20 text-white hover:bg-white/25 hover:text-white"
            >
              View Schedule
            </Button>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10">
        <svg
          viewBox="0 0 1440 210"
          className="h-28 w-full md:h-36"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            fill="var(--color-white)"
            d="M0,140 C190,205 380,190 600,145 C810,104 1020,118 1200,155 C1310,178 1380,182 1440,167 L1440,210 L0,210 Z"
          />
        </svg>
      </div>

      <div className="absolute inset-x-0 bottom-6 z-20 px-4 md:-bottom-55 md:px-6">
        <div className="mx-auto max-w-5xl text-center">
          <div className="rounded-3xl border border-[var(--color-accent)]/25 bg-white/70 p-6 shadow-[0_10px_30px_rgba(248,79,149,0.15)] backdrop-blur-sm md:p-8">
            <div className="grid gap-6 md:grid-cols-3 md:gap-0">
              {[
                [
                  '22',
                  'May 22: Class starts',
                  'The May 2026 batch class will start on May 22 at 1:00pm EST. We will start our class with the first day orientation session.',
                ],
                [
                  '6',
                  'May 6: Scholarship day',
                  'Scholarship applications for the May 2026 batch are due on May 6. Please make sure to submit your application before the cutoff to be considered.',
                ],
                [
                  '100',
                  '100 Students',
                  'As we always do when we start a class, 100 students will start their journey together with a collective goal of reaching the end together.',
                ],
              ].map(([number, title, description], index) => (
                <article
                  key={`${number}-${index}`}
                  className="px-5 md:border-r md:border-[var(--color-border-soft)] md:last:border-r-0"
                >
                  <p className="font-sans text-5xl font-bold text-[#8a2108]">{number}</p>
                  <h3 className="mt-3 text-3xl font-semibold text-[var(--color-ink)]">
                    {title}
                  </h3> 
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)] md:text-base">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
