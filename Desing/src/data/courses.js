/*
  Step 2: Courses data
  --------------------
  Each object represents one training program card.
  Later, CoursesSection can map over this array to render all cards.
*/

export const courses = [
  {
    id: "ai-powered-fullstack",
    title: "AI Powered Fullstack Application Development",
    duration: "6 Months",
    level: "class",
    description:
      "Learn to build AI Powered Application from the ground up, starting with the fundamentals and advancing to enterprise-scale deployment.",
    startDate: "Jul 25th, 2026",
    totalPrice: "2400.00",
    paidInFullPrice: "1600.00",
    discountText: "(34% discount for one time payment)",
    deliveryMode: "Online",
    ctaLabel: "Register",
    secondaryCtaLabel: "Discover More",
  },
  {
    id: "aws",
    title: "AWS",
    duration: "3 Months",
    level: "class",
    description:
      "Crafted to train participants how to manage cloud infrastructure using Amazon Web Services (AWS).",
    startDate: "Jun 27th, 2026",
    totalPrice: "1200.00",
    paidInFullPrice: "900.00",
    discountText: "(25% discount for one time payment)",
    deliveryMode: "Online",
    ctaLabel: "Register",
    secondaryCtaLabel: "Discover More",
  },
  {
    id: "database-administration",
    title: "Database Administration",
    duration: "3 Months",
    level: "class",
    description:
      "Designed to equip students with the knowledge and skills necessary to manage and maintain SQL Server 2022 databases.",
    startDate: "Jun 27th, 2026",
    totalPrice: "1200.00",
    paidInFullPrice: "900.00",
    discountText: "(25% discount for one time payment)",
    deliveryMode: "Online",
    ctaLabel: "Register",
    secondaryCtaLabel: "Discover More",
  },
  {
    id: "mulesoft-development",
    title: "MuleSoft Development",
    duration: "3 Months",
    level: "class",
    description:
      "Aims to prepare participants for creating and integrating APIs and applications within the MuleSoft platform.",
    startDate: "Jun 27th, 2026",
    totalPrice: "1200.00",
    paidInFullPrice: "900.00",
    discountText: "(25% discount for one time payment)",
    deliveryMode: "Online",
    ctaLabel: "Register",
    secondaryCtaLabel: "Discover More",
  },
];

/*
  This smaller array is useful for the registration form select input.
  It avoids repeating course names manually in another file.
*/
export const courseOptions = courses.map((course) => course.title);
