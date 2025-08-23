import { Button } from "@/components/ui/button";
import {
	ArrowDown,
	Github,
	Linkedin,
	Mail,
	Terminal,
	Code2,
} from "lucide-react";
import { useState, useEffect } from "react";
import GlitchText from "../GlitchText";
import InteractiveCard from "../InteractiveCard";

const HeroSection = () => {
	const [glitchTrigger, setGlitchTrigger] = useState(false);
	const [currentTime, setCurrentTime] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => setCurrentTime(new Date()), 1000);
		const glitchTimer = setInterval(() => {
			setGlitchTrigger((prev) => !prev);
		}, 3000);

		return () => {
			clearInterval(timer);
			clearInterval(glitchTimer);
		};
	}, []);

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section className='min-h-screen flex items-center justify-center pt-20'>
			<div className='brutalist-container'>
				<div className='grid lg:grid-cols-2 gap-12 items-center'>
					<div className='space-y-8'>
						<div className='space-y-4'>
							<div className='flex items-center gap-4 mb-4 font-mono text-sm text-accent'>
								<Terminal size={16} />
								<span className='typewriter'>
									{currentTime.toLocaleTimeString()} - SYSTEM ONLINE
								</span>
							</div>
							<h1 className='text-6xl lg:text-8xl font-black'>
								Kuruv
								<br />
								<span className='text-accent'>Patel</span>
							</h1>
							<p className='text-xl font-mono text-muted-foreground max-w-md'>
								  FULL-STACK & BACKEND DEVELOPER, BUILDING INTELLIGENT APPLICATIONS
								AND DIGITAL EXPERIENCES.
							</p>
						</div>

						<div className='flex gap-4'>
							<Button
								variant='brutal'
								size='lg'
								onClick={() => scrollToSection("projects")}
							>
								VIEW WORK
							</Button>
							<Button
								variant='brutal-outline'
								size='lg'
								onClick={() => scrollToSection("contact")}
							>
								CONTACT
							</Button>
						</div>

						<div className='flex gap-6 pt-4'>
							<a
								href='https://github.com/highintoxic'
								className='text-foreground hover:text-accent transition-all duration-300 hover:scale-125 hover:rotate-12'
							>
								<Github size={24} />
							</a>
							<a
								href='https://linkedin.com/in/kuruvpatel'
								className='text-foreground hover:text-accent transition-all duration-300 hover:scale-125 hover:rotate-12'
							>
								<Linkedin size={24} />
							</a>
							<a
								href='mailto:kuruv.pateldr@gmail.com'
								className='text-foreground hover:text-accent transition-all duration-300 hover:scale-125 hover:rotate-12'
							>
								<Mail size={24} />
							</a>
						</div>
					</div>

					<div className='hidden lg:block'>
						<InteractiveCard className='p-8 bg-card'>
							<div className='aspect-square bg-gradient-to-br from-accent/20 to-background flex items-center justify-center relative'>
								<div className='text-8xl font-black text-accent/30 float'>
									<Code2 />
								</div>
								<div className='absolute top-4 right-4 font-mono text-xs text-accent opacity-50'>
									Kuruv Patel
								</div>
								<div className='absolute bottom-4 left-4 font-mono text-xs text-accent opacity-50'>
									v2.0.24
								</div>
							</div>
						</InteractiveCard>
					</div>
				</div>

				<div className='absolute -bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce'>
					<ArrowDown className='text-accent' size={32} />
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
