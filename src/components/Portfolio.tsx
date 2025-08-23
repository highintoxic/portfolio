import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import SkillsSection from './sections/SkillsSection'
import ProjectsSection from './sections/ProjectsSection'
import ContactSection from './sections/ContactSection'
import Navigation from './Navigation'
import RetroBackground from './RetroBackground'
import ChatSection from './sections/ChatSection'

const Portfolio = () => {
  return (
    <main className="min-h-screen relative">
      <RetroBackground />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ChatSection />
      <ContactSection />
    </main>
  )
}

export default Portfolio