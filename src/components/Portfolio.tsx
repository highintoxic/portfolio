import { useState, useEffect } from "react";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";
import Navigation from "./Navigation";
import RetroBackground from "./RetroBackground";
import ChatSection from "./sections/ChatSection";
import CursorTracker from "./CursorTracker";
import RetroLoader from "./RetroLoader";

const Portfolio = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Show loading screen for 2 seconds
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 2000);

		return () => clearTimeout(timer);
	}, []);

	if (isLoading) {
		return <RetroLoader />;
	}

	return (
		<main className='min-h-screen relative'>
			<RetroBackground />
			<CursorTracker />
			<Navigation />
			<HeroSection />
			<AboutSection />
			<SkillsSection />
			<ProjectsSection />
			<ChatSection />
			<ContactSection />
		</main>
	);
};

export default Portfolio;
