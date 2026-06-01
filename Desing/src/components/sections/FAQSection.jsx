import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { faqs } from '../../data/faqs'
import SectionHeading from '../ui/SectionHeading'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="bg-cream px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading title="Frequently Asked Questions" />

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const open = openIndex === i
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-ink/8 bg-white/70"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-medium text-ink"
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  aria-expanded={open}
                >
                  {faq.question}
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-accent transition-transform ${open ? 'rotate-180' : ''}`}
                    aria-hidden
                  />
                </button>
                {open && (
                  <p className="border-t border-ink/8 px-6 pb-5 text-sm leading-relaxed text-ink/65">
                    {faq.answer}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
