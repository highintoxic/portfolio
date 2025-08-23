import AboutSection from "@/components/sections/AboutSection";
import ChatSection from "@/components/sections/ChatSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";

const Index = () => {
	return (
		<main>
			<HeroSection />
			<AboutSection />
			<SkillsSection />
			<ProjectsSection />
			<ChatSection />
			<ContactSection />
		</main>
	);
};

export default Index;
