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
								SYSTEMS.
							</p>
							<p className='text-lg leading-relaxed'>
								MY BACKEND EXPERTISE INCLUDES API ARCHITECTURE, DATABASE DESIGN,
								SERVER OPTIMIZATION, AND MICROSERVICES. ON THE FRONTEND, I
								CREATE RESPONSIVE, INTERACTIVE USER EXPERIENCES WITH MODERN
								FRAMEWORKS.
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

				{/* Education & Experience Section */}
				<div className='mt-24'>
					<h3 className='text-4xl font-black mb-12 text-center'>
						<GlitchText text='EDUCATION & EXPERIENCE' />
					</h3>

					{/* Education */}
					<div className='mb-16'>
						<h4 className='text-2xl font-black mb-8 text-accent'>EDUCATION</h4>
						<div className='grid md:grid-cols-2 gap-8'>
							<InteractiveCard className='p-8 bg-card'>
								<div className='mb-4'>
									<div className='text-accent font-black text-xl mb-2'>
										BACHELOR OF TECHNOLOGY
									</div>
									<div className='font-mono text-lg mb-2'>
										SARDAR VALLABHBHAI NATIONAL INSTITUTE OF TECHNOLOGY
									</div>
									<div className='font-mono text-sm text-muted-foreground mb-1'>
										ARTIFICIAL INTELLIGENCE
									</div>
									<div className='font-mono text-sm text-muted-foreground'>
										2023 - 2027
									</div>
								</div>
								<p className='font-mono text-sm leading-relaxed'>
									SPECIALIZED IN ARTIFICIAL INTELLIGENCE, MACHINE LEARNING, AND
									DEEP LEARNING ALGORITHMS. FOCUSED ON AI SYSTEMS DESIGN AND
									INTELLIGENT APPLICATION DEVELOPMENT.
								</p>
							</InteractiveCard>

							<InteractiveCard className='p-8 bg-card'>
								<div className='mb-4'>
									<div className='text-accent font-black text-xl mb-2'>
										CONTINUOUS LEARNING
									</div>
									<div className='font-mono text-lg mb-2'>SELF-TAUGHT</div>
									<div className='font-mono text-sm text-muted-foreground mb-1'>
										VARIOUS PLATFORMS
									</div>
									<div className='font-mono text-sm text-muted-foreground'>
										2020 - PRESENT
									</div>
								</div>
								<p className='font-mono text-sm leading-relaxed'>
									CONSTANTLY UPGRADING SKILLS IN MODERN WEB TECHNOLOGIES, CLOUD
									COMPUTING, DEVOPS, AND EMERGING DEVELOPMENT PRACTICES.
								</p>
							</InteractiveCard>
						</div>
					</div>

					{/* Experience */}
					<div className='mb-16'>
						<h4 className='text-2xl font-black mb-8 text-accent'>
							EXPERIENCE & ACHIEVEMENTS
						</h4>
						<div className='space-y-6'>
							<InteractiveCard className='p-8 bg-card'>
								<div className='grid md:grid-cols-3 gap-6'>
									<div>
										<div className='text-accent font-black text-xl mb-2'>
											FULL-STACK DEVELOPER INTERN
										</div>
										<div className='font-mono text-md text-muted-foreground mb-1'>
											100Gaj
										</div>
										<div className='font-mono text-sm text-muted-foreground'>
											3 MONTHS
										</div>
									</div>
									<div className='md:col-span-2'>
										<p className='font-mono text-sm leading-relaxed mb-4'>
											DEVELOPING SCALABLE WEB APPLICATIONS WITH MODERN TECH
											STACKS FOR ESTATE EQUITY. SPECIALIZING IN NEXT.JS,
											NODE.JS, MONGODB.
										</p>
										<div className='flex flex-wrap gap-2'>
											<span className='px-2 py-1 bg-accent/20 text-accent font-mono text-xs'>
												NEXT.JS
											</span>
											<span className='px-2 py-1 bg-accent/20 text-accent font-mono text-xs'>
												NODE.JS
											</span>
											<span className='px-2 py-1 bg-accent/20 text-accent font-mono text-xs'>
												MONGODB
											</span>
										</div>
									</div>
								</div>
							</InteractiveCard>

							<InteractiveCard className='p-8 bg-card'>
								<div className='grid md:grid-cols-3 gap-6'>
									<div>
										<div className='text-accent font-black text-xl mb-2'>
											GOOGLE WINTER OF CODE WINNER
										</div>
										<div className='font-mono text-sm text-muted-foreground mb-1'>
											KASHVI CREATION
										</div>
										{/* <div className='font-mono text-sm text-muted-foreground'>
											2023 - 2024
										</div> */}
									</div>
									<div className='md:col-span-2'>
										<p className='font-mono text-sm leading-relaxed mb-4 uppercase'>
											A FULL FLEDGED E-COMMERCE PLATFORM WITH sales analytics
											and an admin dashboard with auto-generated invoices,
											making management seamless and efficient.
										</p>
										<div className='flex flex-wrap gap-2'>
											<span className='px-2 py-1 bg-accent/20 text-accent font-mono text-xs'>
												NEXT.JS
											</span>
											<span className='px-2 py-1 bg-accent/20 text-accent font-mono text-xs'>
												MONGODB
											</span>
											<span className='px-2 py-1 bg-accent/20 text-accent font-mono text-xs'>
												PRISMA
											</span>
											<span className='px-2 py-1 bg-accent/20 text-accent font-mono text-xs'>
												NODE.JS
											</span>
										</div>
									</div>
								</div>
							</InteractiveCard>
						</div>
					</div>

					{/* Combined Stats */}
					{/* <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
						<InteractiveCard className='p-6 bg-card text-center hover-tilt'>
							<div className='text-2xl font-black text-accent mb-2'>
								CGPA 8.5+
							</div>
							<div className='font-mono text-xs'>ACADEMIC PERFORMANCE</div>
						</InteractiveCard>
						<InteractiveCard className='p-6 bg-card text-center hover-tilt'>
							<div className='text-2xl font-black text-accent mb-2'>
								2+ YEARS
							</div>
							<div className='font-mono text-xs'>EXPERIENCE</div>
						</InteractiveCard>
						<InteractiveCard className='p-6 bg-card text-center hover-tilt'>
							<div className='text-2xl font-black text-accent mb-2'>
								15+ PROJECTS
							</div>
							<div className='font-mono text-xs'>COMPLETED</div>
						</InteractiveCard>
						<InteractiveCard className='p-6 bg-card text-center hover-tilt'>
							<div className='text-2xl font-black text-accent mb-2'>
								5+ CERTS
							</div>
							<div className='font-mono text-xs'>TECH CERTIFICATIONS</div>
						</InteractiveCard>
					</div> */}
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
