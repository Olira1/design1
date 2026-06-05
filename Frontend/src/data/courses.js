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
    duration: "In A Months",
    level: "class",
    description:
      "Build a strong foundation in sewing by learning machine operation, fabric handling, stitching techniques, and garment construction through practical, hands-on training.",
    image: image2,
    startDate: "Sewing Machine Skills",
    totalPrice: "Fabric Handling",
    paidInFullPrice: "Practical Projects",
    discountText: "(34% discount for one time payment)",
    deliveryMode: "Online",
    ctaLabel: "Register",
    secondaryCtaLabel: "Discover More",
  },
  {
    id: "aws",
    title: "Pattern Making As A Single",
    duration: "In A Months",
    level: "class",
    description:
      "Explore fashion concepts, design principles, sketching techniques, and creative processes that help transform your ideas into professional clothing designs.",
    image: image3,
    startDate: "Fashion Illustration",
    totalPrice: "Design Principles",
    paidInFullPrice: "Creative Development",
    discountText: "(25% discount for one time payment)",
    deliveryMode: "Online",
    ctaLabel: "Register",
    secondaryCtaLabel: "Discover More",
  },
  {
    id: "database-administration",
    title: "Pattern Making As A Group",
    duration: "In A Months",
    level: "class",
    description:
      "Develop the skills to create accurate clothing patterns, take measurements, and prepare professional templates used in modern garment production.",
    image: image4,
    startDate: "Body Measurements",
    totalPrice: "Pattern Drafting",
    paidInFullPrice: "Garment Construction",
    discountText: "(25% discount for one time payment)",
    deliveryMode: "Online",
    ctaLabel: "Register",
    secondaryCtaLabel: "Discover More",
  },
  {
    id: "mulesoft-development",
    title: "Bridal Wear",
    duration: "In A Months",
    level: "class",
    description:
      "Learn specialized techniques for designing and sewing bridal dresses and traditional outfits with attention to detail, fit, and craftsmanship.",
    image: image5,
    startDate: "Bridal Design",
    totalPrice: "Traditional Wear",
    paidInFullPrice: "Advanced Finishing",
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
