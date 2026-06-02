/*
  Step 2: Courses data
  --------------------
  Each object represents one training program card.
  Later, CoursesSection can map over this array to render all cards.
*/

export const courses = [
  {
    id: "basic-sewing-training",
    title: "Basic Sewing Training",
    duration: "3 Months",
    level: "Beginner",
    description:
      "Learn sewing fundamentals and machine usage from the ground up.",
    ctaLabel: "Apply Now",
    imageSrc: "../assets/images/image3.jpg",
  },
  {
    id: "fashion-design",
    title: "Fashion Design",
    duration: "4 Months",
    level: "All Levels",
    description:
      "Master clothing design principles and unlock fashion creativity.",
    ctaLabel: "Apply Now",
    imageSrc: "../assets/images/image4.jpg",
  },
  {
    id: "pattern-making",
    title: "Pattern Making",
    duration: "2 Months",
    level: "Intermediate",
    description:
      "Professional clothing measurement and precise cutting techniques.",
    ctaLabel: "Apply Now",
    imageSrc: "../assets/images/image5.jpg",
  },
  {
    id: "bridal-traditional-wear",
    title: "Bridal & Traditional Wear",
    duration: "3 Months",
    level: "Advanced",
    description:
      "Design and sew elegant cultural, ceremonial, and bridal outfits.",
    ctaLabel: "Apply Now",
    imageSrc: "../assets/images/image6.jpg",
  },
];

/*
  This smaller array is useful for the registration form select input.
  It avoids repeating course names manually in another file.
*/
export const courseOptions = courses.map((course) => course.title);
