import { footerQuickLinks, socialLinks } from '../../data/navigation'
import Button from '../ui/Button'

export default function Footer() {
  return (
    <footer className="border-t border-ink/8 bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <a href="#" className="mb-4 flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-accent font-display text-sm font-bold text-cream">
                A
              </span>
              <span className="font-display text-xl font-semibold">Atelier</span>
            </a>
            <p className="text-sm leading-relaxed text-cream/70">
              A modern fashion design and sewing training institute building the
              next generation of fashion professionals.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-display text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm text-cream/70">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-cream">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-lg">Contact</h4>
            <ul className="space-y-2 text-sm text-cream/70">
              <li>+252 61 000 0000</li>
              <li>hello@atelier.com</li>
              <li>Fashion District, City Center</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-cream/60 hover:text-cream"
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-display text-lg">Newsletter</h4>
            <p className="mb-4 text-sm text-cream/70">
              Get updates on new programs and student stories.
            </p>
            <form
              className="flex gap-2"
              onSubmit={(e) => {
                e.preventDefault()
              }}
            >
              <input
                type="email"
                required
                placeholder="Your email"
                className="min-w-0 flex-1 rounded-full border border-cream/20 bg-cream/10 px-4 py-2.5 text-sm text-cream placeholder:text-cream/40 outline-none focus:border-accent"
              />
              <Button type="submit" variant="accent" size="sm">
                Join
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/10 pt-8 text-center text-sm text-cream/50">
          <p>© 2026 Atelier Fashion Institute. All rights reserved.</p>
          <p className="mt-1">Crafted with care for future fashion professionals.</p>
        </div>
      </div>
    </footer>
  )
}
