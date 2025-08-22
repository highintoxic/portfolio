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
								I'M A FULL-STACK DEVELOPER WITH A STRONG EMPHASIS ON BACKEND
								SYSTEMS AND A PASSION FOR ARTIFICIAL INTELLIGENCE. I SPECIALIZE
								IN BUILDING ROBUST, SCALABLE APPLICATIONS AND INTEGRATING
								INTELLIGENT AI/ML FEATURES.
							</p>
							<p className='text-lg leading-relaxed'>
								MY EXPERTISE LIES IN TRANSFORMING COMPLEX IDEAS INTO POWERFUL,
								EFFICIENT, AND IMPACTFUL WEB SOLUTIONS, FROM THE DATABASE TO THE
								USER INTERFACE.
							</p>
							<div className='pt-4'>
								<InteractiveCard className='p-6 bg-card'>
									<div className='text-accent font-black text-xl mb-2'>
										LOCATION
									</div>
									<div className='font-mono'>INDIA / REMOTE</div>
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
								<div className='text-3xl font-black text-accent mb-2'>15+</div>
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
