import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import SkillsSection from './sections/SkillsSection'
import ProjectsSection from './sections/ProjectsSection'
import ContactSection from './sections/ContactSection'
import Navigation from './Navigation'
import RetroBackground from './RetroBackground'

const Portfolio = () => {
  return (
    <main className="min-h-screen relative">
      <RetroBackground />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}

export default Portfolio