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
