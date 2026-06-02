import Button from '../ui/Button'

export default function CTASection() {
  return (
    <section className="px-4 pb-20 md:px-6">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-accent px-6 py-14 text-white md:px-12">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/80">
            Your Future Awaits
          </p>
          <h2 className="mt-4 font-[var(--font-display)] text-4xl font-semibold leading-tight md:text-5xl">
            Start Your Fashion Journey Today
          </h2>
          <p className="mt-5 text-sm leading-7 text-white/85 md:text-base">
            Build practical sewing and fashion design skills with expert-led
            training programs.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              href="#register"
              variant="secondary"
              className="border-white/70 bg-white text-[var(--color-accent-deep)]"
            >
              Register Now
            </Button>
            <Button
              href="#contact"
              variant="secondary"
              className="border-white/70 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              Contact Us
            </Button>
            <Button
              href="#contact"
              variant="ghost"
              className="text-white hover:bg-white/10 hover:text-white"
            >
              Join Telegram
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
