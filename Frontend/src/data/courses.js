import image2 from "../assets/images/Basic sweng training1.png";
import image3 from "../assets/images/two.jpg";
import image4 from "../assets/images/Pattern Making1.png";
import image5 from "../assets/images/SRyXK.jpg";

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
      "Learn sewing fundamentals and machine usage from the ground up.",
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
      "Master clothing design principles and unlock fashion creativity.",
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
      "Professional clothing measurement and precise cutting techniques.",
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
      "Design and sew elegant cultural, ceremonial, and bridal outfits.",
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
