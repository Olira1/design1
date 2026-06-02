import { useState } from 'react'
import { faqs } from '../../data/faqs'
import { cn } from '../../utils/cn'
import SectionHeading from '../ui/SectionHeading'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="bg-[var(--color-cream)] px-4 py-20 md:px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />

        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <article
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-[var(--color-border-soft)] bg-white"
              >
                <button
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className="text-base font-semibold text-[var(--color-ink)]">
                    {faq.question}
                  </span>
                  <span
                    className={cn(
                      'inline-flex h-7 w-7 items-center justify-center rounded-full border border-[var(--color-border-soft)] text-[var(--color-accent)] transition',
                      isOpen && 'rotate-45',
                    )}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                {isOpen ? (
                  <p className="border-t border-[var(--color-border-soft)] px-5 py-4 text-sm leading-7 text-[var(--color-muted)]">
                    {faq.answer}
                  </p>
                ) : null}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
