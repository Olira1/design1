import { learningSteps } from "../../data/steps";
import Card from "../ui/Card";
import howItWorksImage from "../../assets/images/work.png";

export default function HowItWorksSection() {
  if (!learningSteps.length) return null;

  return (
    <section
      id="how-it-works"
      className="bg-[var(--color-white)] px-4 py-20 md:px-6"
    >
      <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-12 items-center">
        {/* BITAA: Section Fakkii (Image) */}
        <div className="lg:col-span-5 flex justify-center items-center h-full">
          <img
            src={howItWorksImage} // Bakka kanatti path fakkii keetii sirreessi
            alt="Digital learning process"
            className="w-full h-[500px] lg:h-[600px] object-cover rounded-2xl"
          />
        </div>

        {/* MIRGA: Section List (Explanation) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Section Headings */}
          <div>
            <h2 className="text-4xl md:text-5xl font-[var(--font-display)] text-[var(--color-ink)] font-bold leading-tight">
              How It Works
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--color-muted)] max-w-xl">
              Thoroughly understanding the market, including competitors,
              trends, and emerging technologies, helps in identifying
              opportunities.
            </p>
          </div>

          {/* Cards List (Walduraa duubaan vertical kan ta'an) */}
          <ol className="space-y-4">
            {learningSteps.map((step) => (
              <Card
                as="li"
                key={step.number}
                interactive={false} // Shadow baay'ee akka hin qabaanneef false gooneera
                className="flex items-start gap-4 p-4 border-none shadow-none bg-transparent"
                // Border fi shadow dhabamsiisuuf beekumsaan olitti override gooneera
              >
                {/* Number / Icon element */}
                <span className="flex-shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-blush)] text-sm font-bold tracking-widest text-[var(--color-accent)]">
                  {step.number}
                </span>

                {/* Content */}
                <div className="space-y-1">
                  <h3 className="font-semibold text-lg text-[var(--color-ink)]">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                    {step.description}
                  </p>
                </div>
              </Card>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
