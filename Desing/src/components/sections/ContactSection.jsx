import { Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'
import { socialLinks } from '../../data/navigation'
import SectionHeading from '../ui/SectionHeading'

const contactItems = [
  { icon: Phone, label: 'Phone', value: '+252 61 000 0000' },
  { icon: MessageCircle, label: 'WhatsApp', value: '+252 61 000 0000' },
  { icon: Send, label: 'Telegram', value: '@AtelierInstitute' },
  { icon: Mail, label: 'Email', value: 'hello@atelier.com' },
  { icon: MapPin, label: 'Address', value: 'Fashion District, City Center' },
]

export default function ContactSection() {
  return (
    <section id="contact" className="bg-cream px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Contact Us" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {contactItems.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="rounded-2xl border border-ink/8 bg-white/60 p-6"
            >
              <Icon className="h-5 w-5 text-accent" aria-hidden />
              <p className="mt-3 text-sm font-medium text-ink/50">{label}</p>
              <p className="mt-1 font-medium text-ink">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm font-medium text-ink/50">Follow Us</p>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-ink/10 bg-white px-5 py-2 text-sm font-medium text-ink transition hover:border-accent hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
