import { contactDetails } from '../../data/contact'
import { socialLinks } from '../../data/navigation'
import SectionHeading from '../ui/SectionHeading'

const contactIconById = {
  phone: 'P',
  whatsapp: 'W',
  telegram: 'T',
  email: 'E',
  address: 'A',
}

const socialIconByLabel = {
  Instagram: 'I',
  Facebook: 'F',
  Telegram: 'T',
  TikTok: 'K',
}

export default function ContactSection() {
  if (!contactDetails.length) return null

  return (
    <section id="contact" className="bg-[var(--color-cream)] px-4 py-20 md:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Get In Touch" title="Contact Us" />

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-[var(--color-border-soft)] bg-white p-4 shadow-sm">
            {contactDetails.map((item) => (
              <article
                key={item.id}
                className="mb-3 flex items-center gap-3 rounded-2xl border border-[var(--color-border-soft)] bg-[#fbfbfb] px-3 py-2.5 last:mb-0"
              >
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-peach)] text-[10px] font-bold text-[var(--color-accent-deep)]">
                  {contactIconById[item.id] ?? '?'}
                </span>
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[#9b8f89]">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      className="truncate text-xs text-[var(--color-ink)] transition hover:text-[var(--color-accent)]"
                      href={item.href}
                      rel="noreferrer"
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="truncate text-xs text-[var(--color-ink)]">{item.value}</p>
                  )}
                </div>
              </article>
            ))}

            <article className="mt-3 rounded-2xl border border-[var(--color-border-soft)] bg-[#fbfbfb] px-3 py-3">
              <h3 className="text-[10px] font-semibold uppercase tracking-wider text-[#9b8f89]">
                Follow Us
              </h3>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-[var(--color-border-soft)] bg-white text-[10px] font-semibold text-[var(--color-muted)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                    rel="noreferrer"
                    target="_blank"
                  >
                    {socialIconByLabel[social.label] ?? social.label.slice(0, 1)}
                  </a>
                ))}
              </div>
            </article>
          </div>

          <div>
            <div className="overflow-hidden rounded-2xl border border-[var(--color-border-soft)] bg-white shadow-sm">
              <iframe
                title="IQ TDTC location map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=45.23%2C2.00%2C45.45%2C2.20&layer=mapnik"
                className="h-[270px] w-full md:h-[300px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
