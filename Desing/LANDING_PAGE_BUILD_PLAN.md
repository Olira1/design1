# Atelier Landing Page Build Plan

## Goal

Rebuild the landing page from `https://stitch-artistry-academy.lovable.app/` as a clean React + Vite + Tailwind project, section by section.

The goal is not to write everything at once. The goal is to build it like a senior software developer would: foundation first, reusable pieces second, page sections third, polish last.

## Current Starting Point

The project is currently clean and ready for step-by-step development:

- `src/App.jsx` is empty and returns `null`
- `src/index.css` only imports Tailwind
- The folder structure already exists:
  - `src/assets/images`
  - `src/components/layout`
  - `src/components/sections`
  - `src/components/ui`
  - `src/data`
  - `src/hooks`
  - `src/pages`
  - `src/utils`

## Step 1: Foundation Setup

Start with global styling in `src/index.css`.

Add:

- Tailwind theme tokens
- Font choices
- Main colors
- Body reset
- Smooth scrolling
- Basic reusable gradient utilities

Recommended design tokens:

- Background: warm cream
- Text: deep brown or charcoal
- Accent: pink / rose
- Secondary accent: soft peach
- Borders: light warm gray

Do not build sections yet. First make the design system ready.

## Step 2: Prepare Static Data

Create the page content in `src/data`.

Recommended files:

- `navigation.js`
- `courses.js`
- `features.js`
- `portfolio.js`
- `testimonials.js`
- `steps.js`
- `schedules.js`
- `faqs.js`

This keeps content separate from components. Later, if you want to change text, courses, links, or FAQ answers, you edit data files instead of digging through JSX.

## Step 3: Build Shared UI Components

Create reusable UI pieces in `src/components/ui`.

Recommended components:

- `Button.jsx`
- `Badge.jsx`
- `Card.jsx`
- `SectionHeading.jsx`

Keep these components simple. Avoid over-engineering.

The goal is to reuse the same button, card, and heading styles across the full landing page.

## Step 4: Build Layout Components

Create layout components in `src/components/layout`.

Recommended components:

- `Header.jsx`
- `Footer.jsx`

The header should include:

- Logo
- Navigation links
- Register button
- Mobile menu

The footer should include:

- Brand text
- Quick links
- Contact information
- Newsletter form

## Step 5: Create The Page Shell

Create `src/pages/HomePage.jsx`.

At first, only render:

- `Header`
- Empty `main`
- `Footer`

Then update `src/App.jsx` to render `HomePage`.

This gives you the page skeleton before adding individual sections.

## Step 6: Build Sections In Visual Order

Create section components in `src/components/sections`.

Build them in this order:

1. `HeroSection.jsx`
2. `AboutSection.jsx`
3. `CoursesSection.jsx`
4. `PortfolioSection.jsx`
5. `WhyChooseUsSection.jsx`
6. `TestimonialsSection.jsx`
7. `HowItWorksSection.jsx`
8. `SchedulesSection.jsx`
9. `FAQSection.jsx`
10. `RegistrationSection.jsx`
11. `ContactSection.jsx`
12. `CTASection.jsx`

After each section:

- Save the file
- Run the app
- Compare visually with the reference site
- Fix spacing and responsiveness before moving to the next section

## Step 7: Hero Section Details

The hero is the most important section.

It should include:

- Header/navigation at the top
- Main headline
- Highlighted `Fashion Design` text
- Short description
- CTA buttons:
  - Register Now
  - View Courses
  - Join Telegram
- Supporting stats or image area

Build the hero carefully before continuing.

## Step 8: About Section Details

The About section should include:

- Section label: `About Our Institute`
- Heading: `Where creativity meets craftsmanship`
- Description paragraph
- Bullet list:
  - Practical hands-on learning
  - Experienced instructors
  - Modern sewing equipment
  - Beginner-friendly programs
  - Flexible class schedules
- Supporting image

## Step 9: Courses Section Details

The Courses section should show four training programs:

- Basic Sewing Training
- Fashion Design
- Pattern Making
- Bridal & Traditional Wear

Each course card should include:

- Course title
- Duration
- Level
- Description
- Apply Now button

## Step 10: Portfolio Section Details

The Portfolio section should show student work.

Use a clean image grid.

Recommended content:

- Handmade pink dress
- Traditional cultural clothing
- Fashion sketches
- Handmade garment
- Sewing workshop flatlay
- Evening dress on mannequin

## Step 11: Why Choose Us Section

Create six benefit cards:

- Practical Training
- Expert Instructors
- Flexible Schedules
- Certification
- Affordable Programs
- Modern Equipment

Each card should have:

- Icon or simple visual mark
- Title
- Short description

## Step 12: Testimonials Section

Start with one testimonial first.

Example:

> The practical classes helped me start sewing professionally after only a few months.

Student:

- Amina H.
- Basic Sewing Graduate

Later, you can add carousel behavior if needed.

## Step 13: How It Works Section

Build a six-step process:

1. Register Online
2. Team Contacts You
3. Choose Course & Schedule
4. Practical Training
5. Complete Real Projects
6. Receive Certificate

Use numbered cards.

## Step 14: Training Schedule Section

Create two main areas:

Available schedules:

- Morning Classes: 8:00 AM – 11:00 AM
- Afternoon Classes: 2:00 PM – 5:00 PM
- Weekend Classes: Sat & Sun

Training modes:

- Physical Classroom Training
- Practical Workshop Sessions
- Group-Based Learning

Include a `Reserve Your Spot` CTA.

## Step 15: FAQ Section

Build an FAQ accordion.

Questions:

- Do I need previous sewing experience?
- Are sewing machines provided?
- Will I receive a certificate?
- Are weekend classes available?
- How long are the programs?

Start with simple open/close state inside the component.

## Step 16: Registration Section

Build the registration form UI.

Fields:

- Full Name
- Phone Number
- Gender
- Age
- City
- Course Interested In
- Skill Level
- Preferred Schedule
- Why do you want to join?
- Where did you hear about us?

At first, prevent default submit and show a basic placeholder behavior. Backend integration can come later.

## Step 17: Contact Section

Show:

- Phone
- WhatsApp
- Telegram
- Email
- Address
- Social links

Use clean cards or a two-column layout.

## Step 18: Final CTA Section

Create a strong closing section:

- Heading: `Start Your Fashion Journey Today`
- Supporting text
- Buttons:
  - Register Now
  - Contact Us
  - Join Telegram

## Step 19: Responsive Design Pass

Test these screen sizes:

- Mobile: 360px to 430px
- Tablet: 768px
- Desktop: 1024px and above

Check:

- Header menu
- Button wrapping
- Section spacing
- Image sizing
- Grid layouts
- Form layout

## Step 20: Accessibility And Quality Pass

Before finishing:

- Add useful `alt` text to all images
- Use semantic tags: `header`, `main`, `section`, `footer`
- Ensure form inputs have labels
- Ensure buttons are keyboard accessible
- Check color contrast
- Run `npm run build`
- Run `npm run lint` if configured

## Recommended Architecture

```text
src/
├── assets/
│   └── images/
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
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
├── pages/
│   └── HomePage.jsx
├── utils/
├── App.jsx
├── main.jsx
└── index.css
```

## Senior Developer Notes

- Build one section at a time.
- Do not mix all content directly inside JSX.
- Put repeatable content into `src/data`.
- Create shared UI only when a pattern repeats.
- Keep components small and readable.
- Avoid premature backend work.
- Make the static page perfect first, then add behavior.
- After every major step, run and visually inspect the page.

