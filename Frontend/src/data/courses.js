import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image4.png";
import image5 from "../assets/images/image5.png";

/*
  Step 2: Courses data
  --------------------
  Each object represents one training program card.
  Later, CoursesSection can map over this array to render all cards.
*/

export const courses = [
  {
    id: "ai-powered-fullstack",
    title: "Basic Sewing Training",
    duration: "6 Months",
    level: "class",
    description:
      "Learn to build AI Powered Application from the ground up, starting with the fundamentals and advancing to enterprise-scale deployment.",
    image: image2,
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
    title: "Fashion Design",
    duration: "3 Months",
    level: "class",
    description:
      "Crafted to train participants how to manage cloud infrastructure using Amazon Web Services (AWS).",
    image: image3,
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
    title: "Pattern Making",
    duration: "3 Months",
    level: "class",
    description:
      "Designed to equip students with the knowledge and skills necessary to manage and maintain SQL Server 2022 databases.",
    image: image4,
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
    title: "Bridal & Traditional Wear",
    duration: "3 Months",
    level: "class",
    description:
      "Aims to prepare participants for creating and integrating APIs and applications within the MuleSoft platform.",
    image: image5,
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
