import InteractiveCard from "../InteractiveCard";
import GlitchText from "../GlitchText";

const AboutSection = () => {
	return (
		<section id='about' className='brutalist-section'>
			<div className='brutalist-container'>
				<div className='grid lg:grid-cols-2 gap-16 items-center'>
					<div>
						<h2 className='text-5xl font-black mb-8'>
							<GlitchText text='ABOUT ME' />
						</h2>
						<div className='space-y-6 font-mono'>
							<p className='text-lg leading-relaxed'>
								I'M A PASSIONATE FULL-STACK WEB DEVELOPER AND AI/ML INTEGRATION WHO BELIEVES IN THE POWER OF
								CLEAN CODE AND BRUTAL DESIGN. I CRAFT DIGITAL EXPERIENCES THAT
								ARE BOTH FUNCTIONAL AND VISUALLY STRIKING.
							</p>
							<p className='text-lg leading-relaxed'>
								WITH EXPERTISE IN MODERN WEB TECHNOLOGIES, I TRANSFORM IDEAS
								INTO POWERFUL, SCALABLE WEB APPLICATIONS THAT MAKE AN IMPACT.
							</p>
							<div className='pt-4'>
								<InteractiveCard className='p-6 bg-card'>
									<div className='text-accent font-black text-xl mb-2'>
										LOCATION
									</div>
									<div className='font-mono'>INDIA / WORLDWIDE</div>
								</InteractiveCard>
							</div>
						</div>
					</div>

					<div className='space-y-6'>
						<InteractiveCard className='p-6 bg-card'>
							<h3 className='font-black text-2xl mb-4 text-accent'>
								PHILOSOPHY
							</h3>
							<p className='font-mono leading-relaxed'>
								"CODE IS POETRY. DESIGN IS REBELLION. TOGETHER THEY CREATE
								DIGITAL EXPERIENCES THAT BREAK THE CONVENTIONAL AND EMBRACE THE
								BOLD."
							</p>
						</InteractiveCard>

						<div className='grid grid-cols-2 gap-4'>
							<InteractiveCard className='p-6 bg-card text-center hover-tilt'>
								<div className='text-3xl font-black text-accent mb-2'>
									7+ YRS
								</div>
								<div className='font-mono text-sm'>BUILDING SINCE</div>
							</InteractiveCard>
							<InteractiveCard className='p-6 bg-card text-center hover-tilt'>
								<div className='text-3xl font-black text-accent mb-2'>
									15+
								</div>
								<div className='font-mono text-sm'>PROJECTS</div>
							</InteractiveCard>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
