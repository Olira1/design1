# Project Folder Structure

Based on the **Atelier** reference site and a standard React + Vite landing-page layout (as commonly suggested in website analysis workflows).

```
src/
├── assets/
│   └── images/          # Local images (logos, photos)
├── components/
│   ├── layout/
│   │   ├── Header.jsx   # Top navigation + mobile menu
│   │   └── Footer.jsx   # Footer links, newsletter
│   ├── sections/
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── CoursesSection.jsx
│   │   ├── PortfolioSection.jsx
│   │   ├── WhyChooseUsSection.jsx
│   │   ├── TestimonialsSection.jsx
│   │   ├── HowItWorksSection.jsx
│   │   ├── SchedulesSection.jsx
│   │   ├── FAQSection.jsx
│   │   ├── RegistrationSection.jsx
│   │   ├── ContactSection.jsx
│   │   └── CTASection.jsx
│   └── ui/
│       ├── Button.jsx
│       ├── Badge.jsx
│       ├── Card.jsx
│       └── SectionHeading.jsx
├── data/
│   ├── navigation.js
│   ├── courses.js
│   ├── features.js
│   ├── portfolio.js
│   ├── testimonials.js
│   ├── steps.js
│   ├── schedules.js
│   └── faqs.js
├── hooks/
│   └── useCarousel.js
├── pages/
│   └── HomePage.jsx
├── utils/
│   └── scrollTo.js
├── App.jsx
├── main.jsx
└── index.css
```

## How to run

```bash
npm run dev
```

Open the local URL shown in the terminal to preview the site.
