import AboutSection from '../components/sections/AboutSection'
import ContactSection from '../components/sections/ContactSection'
import CoursesSection from '../components/sections/CoursesSection'
import CTASection from '../components/sections/CTASection'
import FAQSection from '../components/sections/FAQSection'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import HeroSection from '../components/sections/HeroSection'
import HowItWorksSection from '../components/sections/HowItWorksSection'
import PortfolioSection from '../components/sections/PortfolioSection'
import RegistrationSection from '../components/sections/RegistrationSection'
import SchedulesSection from '../components/sections/SchedulesSection'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import WhyChooseUsSection from '../components/sections/WhyChooseUsSection'

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <AboutSection />
        <CoursesSection />
        <PortfolioSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <HowItWorksSection />
        <SchedulesSection />
        <FAQSection />
        <RegistrationSection />
        <ContactSection />
        <CTASection />
      </main>

      <Footer />
    </>
  )
}
