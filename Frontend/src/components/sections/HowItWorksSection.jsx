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
      className="bg-[var(--color-white)] px-4 py-12 sm:py-20 md:px-6"
    >
      <div className="mx-auto grid max-w-7xl gap-8 sm:gap-12 lg:grid-cols-12 lg:items-center">
        {/* BITAA: Section Fakkii (Image) */}
        <div className="flex h-full items-center justify-center lg:col-span-5">
          <img
            src={howItWorksImage} // Bakka kanatti path fakkii keetii sirreessi
            alt="Digital learning process"
            className="h-[260px] w-full rounded-2xl object-cover sm:h-[500px] lg:h-[600px]"
          />
        </div>

        {/* MIRGA: Section List (Explanation) */}
        <div className="space-y-4 sm:space-y-6 lg:col-span-7">
          {/* Section Headings */}
          <div>
            <h2 className="font-[var(--font-display)] text-2xl font-bold leading-tight text-[var(--color-ink)] sm:text-4xl md:text-5xl">
              Your Path to Becoming a Fashion Designer
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--color-muted)] sm:mt-4 sm:leading-7">
              Every successful fashion designer starts with a single step. Our
              structured learning journey takes you from the fundamentals of
              sewing and garment construction to creating professional designs
              and building a portfolio you can be proud of.
            </p>
          </div>

          {/* Cards List (Walduraa duubaan vertical kan ta'an) */}
          <ol className="space-y-2.5 sm:space-y-4">
            {learningSteps.map((step) => {
              const StepIcon = stepIconMap[step.number] ?? Sparkles;

              return (
                <Card
                  as="li"
                  key={step.number}
                  interactive={false} // Shadow baay'ee akka hin qabaanneef false gooneera
                  className="flex items-start gap-3 border-none bg-transparent p-2 shadow-none sm:gap-4 sm:p-4"
                  // Border fi shadow dhabamsiisuuf beekumsaan olitti override gooneera
                >
                  {/* Number / Icon element */}
                  <span className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-[var(--color-accent)] sm:h-10 sm:w-10">
                    <StepIcon size={16} aria-hidden="true" />
                  </span>

                  {/* Content */}
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold text-[var(--color-ink)] sm:text-lg">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-6 text-[var(--color-muted)] sm:leading-relaxed">
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
