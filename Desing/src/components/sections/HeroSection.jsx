import Button from '../ui/Button'
import HeroNavbar from '../layout/HeroNavbar'

const HERO_BACKGROUND =
  'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1920&q=80'

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BACKGROUND})` }}
        role="img"
        aria-label="Fashion models on a runway"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/80" />

      <HeroNavbar />

      <div className="relative z-20 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-4 pb-44 pt-28 text-center md:px-6 md:pb-52 md:pt-32">
        <h1 className="space-y-1 font-sans text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
          <span className="block">Learn</span>
          <span className="font-display block text-5xl font-normal italic text-accent-light md:text-6xl lg:text-7xl">
            Fashion Design
          </span>
          <span className="block">From Industry Experts</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
          Join our immersive in-person fashion design course and master creative
          skills, modern design techniques, and real-world project building in a
          collaborative environment.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="#register" variant="gradient" size="lg">
            Register Now
          </Button>
          <Button
            href="#schedules"
            variant="outline-light"
            size="lg"
          >
            View Schedule
          </Button>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 180"
          className="block h-28 w-full md:h-40"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            fill="currentColor"
            className="text-cream"
            d="M0,70 C180,115 360,95 520,70 C720,38 900,40 1080,78 C1220,108 1330,118 1440,78 L1440,180 L0,180 Z"
          />
        </svg>
      </div>
    </section>
  )
}
