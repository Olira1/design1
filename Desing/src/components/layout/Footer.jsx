import { footerQuickLinks, socialLinks } from '../../data/navigation'
import Button from '../ui/Button'

export default function Footer() {
  const handleNewsletterSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <footer className="border-t border-[var(--color-border-soft)] bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <section>
            <a href="#hero" className="inline-flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-accent text-sm font-bold text-white">
                A
              </span>
              <span className="font-[var(--font-display)] text-xl font-semibold text-[var(--color-ink)]">
                Atelier
              </span>
            </a>

            <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
              A modern fashion design and sewing training institute building the
              next generation of fashion professionals.
            </p>

            <div className="mt-5 flex flex-wrap gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="rounded-full border border-[var(--color-border-soft)] px-3 py-1.5 text-xs font-semibold text-[var(--color-muted)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                  rel="noreferrer"
                  target="_blank"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </section>

          <section>
            <h3 className="font-[var(--font-display)] text-xl font-semibold text-[var(--color-ink)]">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--color-muted)] transition hover:text-[var(--color-accent)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="font-[var(--font-display)] text-xl font-semibold text-[var(--color-ink)]">
              Contact
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-[var(--color-muted)]">
              <li>+252 61 000 0000</li>
              <li>hello@atelier.com</li>
              <li>Fashion District, City Center</li>
            </ul>
          </section>

          <section>
            <h3 className="font-[var(--font-display)] text-xl font-semibold text-[var(--color-ink)]">
              Newsletter
            </h3>
            <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
              Get updates on new programs and student stories.
            </p>

            <form className="mt-4 flex gap-2" onSubmit={handleNewsletterSubmit}>
              <input
                aria-label="Your email address"
                className="min-w-0 flex-1 rounded-full border border-[var(--color-border-soft)] px-4 py-2.5 text-sm text-[var(--color-ink)] outline-none placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)]"
                placeholder="Your email"
                required
                type="email"
              />
              <Button size="sm" type="submit">
                Join
              </Button>
            </form>
          </section>
        </div>

        <div className="mt-12 border-t border-[var(--color-border-soft)] pt-6 text-center text-sm text-[var(--color-muted)]">
          <p>© 2026 Atelier Fashion Institute. All rights reserved.</p>
          <p className="mt-1">Crafted with care for future fashion professionals.</p>
        </div>
      </div>
    </footer>
  )
}
