import { useState } from 'react'
import { faqs } from '../../data/faqs'
import { cn } from '../../utils/cn'
import SectionHeading from '../ui/SectionHeading'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="bg-[var(--color-cream)] px-4 py-12 sm:py-20 md:px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          className="[&>h2]:text-2xl sm:[&>h2]:text-5xl"
        />

        <div className="mt-8 space-y-2.5 sm:mt-12 sm:space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <article
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-[var(--color-border-soft)] bg-white"
              >
                <button
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left sm:gap-4 sm:px-5 sm:py-4"
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className="text-sm font-semibold leading-6 text-[var(--color-ink)] sm:text-base">
                    {faq.question}
                  </span>
                  <span
                    className={cn(
                      'inline-flex h-6 w-6 items-center justify-center rounded-full border border-[var(--color-border-soft)] text-[var(--color-accent)] transition sm:h-7 sm:w-7',
                      isOpen && 'rotate-45',
                    )}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                {isOpen ? (
                  <p className="border-t border-[var(--color-border-soft)] px-4 py-3 text-sm leading-6 text-[var(--color-muted)] sm:px-5 sm:py-4 sm:leading-7">
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
