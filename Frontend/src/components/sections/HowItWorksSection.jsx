import { learningSteps } from "../../data/steps";
import {
  BookOpenCheck,
  Scissors,
  Lightbulb,
  Shirt,
  BadgeCheck,
  BriefcaseBusiness,
  Sparkles,
} from "lucide-react";
import Card from "../ui/Card";
import howItWorksImage from "../../assets/images/0YAXt.jpg";

const stepIconMap = {
  "01": BookOpenCheck,
  "02": Scissors,
  "03": Lightbulb,
  "04": Shirt,
  "05": BadgeCheck,
  "06": BriefcaseBusiness,
};

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
              Your Path to Becoming a Fashion Designer
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--color-muted)] max-w-xl">
              Every successful fashion designer starts with a single step. Our
              structured learning journey takes you from the fundamentals of
              sewing and garment construction to creating professional designs
              and building a portfolio you can be proud of.
            </p>
          </div>

          {/* Cards List (Walduraa duubaan vertical kan ta'an) */}
          <ol className="space-y-4">
            {learningSteps.map((step) => {
              const StepIcon = stepIconMap[step.number] ?? Sparkles;

              return (
                <Card
                  as="li"
                  key={step.number}
                  interactive={false} // Shadow baay'ee akka hin qabaanneef false gooneera
                  className="flex items-start gap-4 p-4 border-none shadow-none bg-transparent"
                  // Border fi shadow dhabamsiisuuf beekumsaan olitti override gooneera
                >
                  {/* Number / Icon element */}
                  <span className="flex-shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full text-[var(--color-accent)]">
                    <StepIcon size={18} aria-hidden="true" />
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
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
