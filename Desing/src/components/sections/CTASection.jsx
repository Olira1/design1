import { ArrowRight, Send } from 'lucide-react'
import Button from '../ui/Button'

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-ink px-4 py-20 text-cream md:px-6 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-accent/20 to-blush/10" />
      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl">
          Start Your Fashion Journey Today
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-cream/70">
          Build practical sewing and fashion design skills with expert-led
          training programs.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="#register" variant="accent">
            Register Now
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
          <Button
            href="#contact"
            variant="secondary"
            className="border-cream/20 bg-cream/10 text-cream hover:bg-cream/20"
          >
            Contact Us
          </Button>
          <Button
            href="#contact"
            variant="ghost"
            className="text-cream hover:bg-cream/10"
          >
            <Send className="h-4 w-4" aria-hidden />
            Join Telegram
          </Button>
        </div>
      </div>
    </section>
  )
}
