import { useEffect, useRef, useState } from 'react'
import logo from '../../assets/images/logo.jpg'
import heroBackground from '../../assets/images/herosection.png'
import Button from '../ui/Button'
import video from '../../assets/Video/video2.mp4'

export default function HeroSection() {
  const heroRef = useRef(null)
  const [isHeaderSolid, setIsHeaderSolid] = useState(false)
  const [activeNavLink, setActiveNavLink] = useState('#hero')

  const navigationLinks = [
    ['Home', '#hero'],
    ['Courses', '#courses'],
    ['Portfolio', '#portfolio'],
    ['How it Works', '#how-it-works'],
    ['FAQ', '#faq'],
    ['Contact', '#contact'],
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return
      const heroBottom = heroRef.current.getBoundingClientRect().bottom
      setIsHeaderSolid(heroBottom <= 0)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  useEffect(() => {
    const sectionIdToHref = new Map(
      navigationLinks.map(([, href]) => [href.slice(1), href]),
    )

    const sections = navigationLinks
      .map(([, href]) => document.querySelector(href))
      .filter(Boolean)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (!visibleEntry?.target?.id) return

        const href = sectionIdToHref.get(visibleEntry.target.id)
        if (href) setActiveNavLink(href)
      },
      {
        threshold: [0.25, 0.5, 0.75],
        rootMargin: '-35% 0px -35% 0px',
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
      observer.disconnect()
    }
  }, [])

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative mb-20 overflow-visible bg-black pb-28 text-white md:pb-36"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster={heroBackground}
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/65" />

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isHeaderSolid
            ? "border-b border-white/10 bg-[#FFF9F3] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-6 md:py-5">
          <a href="#hero" className="inline-flex items-center gap-2.5">
            <img
              src={logo}
              alt="FDTC Academy logo"
              className="h-13 w-13 rounded-full border border-[var(--color-accent)]/70 object-cover"
            />
            <span
              className={`text-lg font-extrabold tracking-wide ${
                isHeaderSolid ? "text-[#C23B6F]" : "text-[#C23B6F]"
              }`}
            >
              IQ
            </span>
          </a>

          <nav className="hidden items-center gap-18 rounded-full border border-white/15 bg-black/35 px-5 py-2 backdrop-blur-sm lg:flex">
            {navigationLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                aria-current={activeNavLink === href ? "page" : undefined}
                className={`text-base italic transition-colors ${
                  activeNavLink === href
                    ? "text-[var(--color-accent)]"
                    : "text-white/90 hover:text-[var(--color-accent)]"
                }`}
                onClick={() => setActiveNavLink(href)}
              >
                {label}
              </a>
            ))}
          </nav>

          <Button href="/register" size="sm" className="min-w-32">
            Register Now
          </Button>
        </div>
      </header>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-24 md:px-6 md:pt-28">
        <div className="mx-auto max-w-4xl pb-56 pt-20 text-center md:pb-64 md:pt-24">
          <h1 className="font-sans text-5xl font-bold leading-tight md:text-7xl text-white">
            Learn Fashion Design{" "}
            <span className="font-[var(--font-display)] italic text-[var(--color-accent)]">
              From Industry Experts
            </span>
            <br />
            {/* From Industry Experts */}
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base font-semibold leading-7 text-white/80 md:text-base">
            Join our immersive in-person fashion design course and master
            creative skills, modern design techniques, and real-world project
            building in a collaborative environment.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/register" className="min-w-40">
              Register Now
            </Button>
            <Button
              href="#schedules"
              // variant="secondary"
              className="min-w-40 border-white/20 bg-gradient-to-r from-[#F94F95] to-[#000000] text-white hover:opacity-90"
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
                  "22",
                  "May 22: Class starts",
                  "The May 2026 batch class will start on May 22 at 1:00pm EST. We will start our class with the first day orientation session.",
                ],
                [
                  "6",
                  "May 6: Scholarship day",
                  "Scholarship applications for the May 2026 batch are due on May 6. Please make sure to submit your application before the cutoff to be considered.",
                ],
                [
                  "100",
                  "100 Students",
                  "As we always do when we start a class, 100 students will start their journey together with a collective goal of reaching the end together.",
                ],
              ].map(([number, title, description], index) => (
                <article
                  key={`${number}-${index}`}
                  className="px-5 md:border-r md:border-[var(--color-border-soft)] md:last:border-r-0"
                >
                  <p className="font-sans text-5xl font-bold text-[#8a2108]">
                    {number}
                  </p>
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
  );
}
