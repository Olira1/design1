import contactImage from '../../assets/images/image11.png'
import { socialLinks } from '../../data/navigation'
import SectionHeading from '../ui/SectionHeading'

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-[var(--color-cream)] px-4 py-20 md:px-6"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Get In Touch" title="Contact Us" />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Phone", "+252 61 000 0000"],
              ["WhatsApp", "+252 61 000 0000"],
              ["Telegram", "@AtelierInstitute"],
              ["Email", "hello@atelier.com"],
              ["Address", "Fashion District, City Center"],
            ].map(([label, value]) => (
              <article
                key={label}
                className="rounded-2xl border border-[var(--color-border-soft)] bg-white p-5"
              >
                <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
                  {label}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-muted)]">
                  {value}
                </p>
              </article>
            ))}

            <article className="rounded-2xl border border-[var(--color-border-soft)] bg-white p-5 sm:col-span-2">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
                Follow Us
              </h3>
              <div className="mt-3 flex flex-wrap gap-2.5">
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
            </article>
          </div>

          <div className="[perspective:1000px]">
            <div className="overflow-hidden rounded-3xl border border-[var(--color-border-soft)] bg-white [perspective:1000px] [transform:rotateY(-6deg)_rotateX(0deg)_rotateZ(0deg)] shadow-[-10px_20px_30px_rgba(0,0,0,0.3)]">
              <img
                src={contactImage}
                alt="Fashion designer working in a tailoring studio"
                className="h-full w-full object-cover hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
