import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import BrandIntro from './components/BrandIntro.jsx'
import ProductShowcase from './components/ProductShowcase.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import CookingSection from './components/CookingSection.jsx'
import QualitySection from './components/QualitySection.jsx'
import AboutUs from './components/AboutUs.jsx'
import ContactSection from './components/ContactSection.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/ui/BackToTop.jsx'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <Hero />
        <BrandIntro />
        <ProductShowcase />
        <WhyChooseUs />
        <CookingSection />
        <QualitySection />
        <AboutUs />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </MotionConfig>
  )
}
