/*
  Step 2: Courses data
  --------------------
  Each object represents one training program card.
  Later, CoursesSection can map over this array to render all cards.
*/

export const courses = [
  {
    id: 'basic-sewing-training',
    title: 'Basic Sewing Training',
    duration: '3 Months',
    level: 'Beginner',
    description: 'Learn sewing fundamentals and machine usage from the ground up.',
    ctaLabel: 'Apply Now',
  },
  {
    id: 'fashion-design',
    title: 'Fashion Design',
    duration: '4 Months',
    level: 'All Levels',
    description: 'Master clothing design principles and unlock fashion creativity.',
    ctaLabel: 'Apply Now',
  },
  {
    id: 'pattern-making',
    title: 'Pattern Making',
    duration: '2 Months',
    level: 'Intermediate',
    description:
      'Professional clothing measurement and precise cutting techniques.',
    ctaLabel: 'Apply Now',
  },
  {
    id: 'bridal-traditional-wear',
    title: 'Bridal & Traditional Wear',
    duration: '3 Months',
    level: 'Advanced',
    description:
      'Design and sew elegant cultural, ceremonial, and bridal outfits.',
    ctaLabel: 'Apply Now',
  },
]

/*
  This smaller array is useful for the registration form select input.
  It avoids repeating course names manually in another file.
*/
export const courseOptions = courses.map((course) => course.title)
export const courses = [
  {
    id: 'basic-sewing',
    title: 'Basic Sewing Training',
    description:
      'Learn sewing fundamentals and machine usage from the ground up.',
    duration: '2 months',
  },
  {
    id: 'fashion-design',
    title: 'Fashion Design',
    description:
      'Master clothing design principles and unlock fashion creativity.',
    duration: '3 months',
  },
  {
    id: 'pattern-making',
    title: 'Pattern Making',
    description:
      'Professional clothing measurement and precise cutting techniques.',
    duration: '3 months',
  },
  {
    id: 'bridal-traditional',
    title: 'Bridal & Traditional Wear',
    description:
      'Design and sew elegant cultural, ceremonial, and bridal outfits.',
    duration: '4 months',
  },
]

export const courseOptions = courses.map((c) => c.title)
