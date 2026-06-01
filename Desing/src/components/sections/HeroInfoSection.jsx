const heroInfoItems = [
  {
    number: '22',
    title: 'May 22: Class starts',
    description:
      'The May 2026 batch class will start on May 22 at 1:00pm EST. We will start our class with the first day orientation session.',
  },
  {
    number: '6',
    title: 'May 6: Scholarship day',
    description:
      'Scholarship applications for the May 2026 batch are due on May 6. Please make sure to submit your application before the cutoff to be considered.',
  },
  {
    number: '100',
    title: '100 Students',
    description:
      'As we always do when we start a class, 100 students will start their journey together with a collective goal of reaching the end together.',
  },
]

export default function HeroInfoSection() {
  return (
    <section className="relative z-20 bg-cream pb-20 pt-8 md:pb-28 md:pt-12 mb-40">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="overflow-hidden rounded-lg border border-ink/5 bg-white/95 shadow-2xl shadow-ink/10 backdrop-blur-sm">
          <div className="grid md:grid-cols-3">
            {heroInfoItems.map((item) => (
              <article
                key={item.title}
                className="border-b border-ink/10 px-8 py-10 text-center last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
              >
                <p className="font-display text-4xl font-bold text-[#8a2108] md:text-5xl">
                  {item.number}
                </p>
                <h3 className="mt-4 text-base font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-ink/60">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
