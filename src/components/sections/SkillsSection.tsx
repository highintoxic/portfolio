import InteractiveCard from "../InteractiveCard";
import GlitchText from "../GlitchText";
import {
	ReactLogo,
	NextLogo,
	TailwindLogo,
	RTKLogo,
	NodeLogo,
	ExpressLogo,
	PostgresLogo,
	MongoLogo,
	RedisLogo,
	TensorflowLogo,
	TypescriptLogo,
	WebsocketIcon,
	GraphQLLogo,
	GitLogo,
	DockerLogo,
	AzureLogo,
	DigitalOceanLogo,
	FigmaLogo,
} from "@/assets/icons";

const SkillsSection = () => {
	const skills = [
		{
			category: "FRONTEND",
			items: [
				{ skill: "REACT", logo: ReactLogo },
				{ skill: "NEXT.JS", logo: NextLogo },
				{ skill: "TAILWIND", logo: TailwindLogo },
				{ skill: "RTK", logo: RTKLogo },
			],
		},
		{
			category: "BACKEND",
			items: [
				{ skill: "NODE.JS", logo: NodeLogo },
				{ skill: "EXPRESS", logo: ExpressLogo },
				{ skill: "POSTGRESQL", logo: PostgresLogo },
				{ skill: "MONGODB", logo: MongoLogo },
				{ skill: "REDIS", logo: RedisLogo },
				{ skill: "TENSORFLOW.JS", logo: TensorflowLogo },
				{ skill: "TYPESCRIPT", logo: TypescriptLogo },
				{ skill: "WEBSOCKETS", logo: WebsocketIcon },
				{ skill: "GRAPHQL", logo: GraphQLLogo },
			],
		},
		{
			category: "TOOLS",
			items: [
				{ skill: "GIT", logo: GitLogo },
				{ skill: "DOCKER", logo: DockerLogo },
				{ skill: "AZURE", logo: AzureLogo },
				{ skill: "DIGITAL OCEAN", logo: DigitalOceanLogo },
				{ skill: "FIGMA", logo: FigmaLogo },
			],
		},
	];

	return (
		<section id='skills' className='brutalist-section bg-card'>
			<div className='brutalist-container'>
				<div className='text-center mb-16'>
					<h2 className='text-5xl font-black mb-6'>
						<GlitchText text='TECHNICAL ARSENAL' />
					</h2>
					<p className='text-xl font-mono text-muted-foreground'>
						TOOLS & TECHNOLOGIES I WIELD TO BUILD THE WEB
					</p>
				</div>

				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{skills.map((skill, index) => (
						<div key={skill.category} className='space-y-4'>
							<InteractiveCard className='p-6 bg-background border-accent hover-tilt'>
								<h3 className='font-black text-xl mb-4 text-accent'>
									{skill.category}
								</h3>
								<div className='space-y-3'>
									{skill.items.map((item) => {
										const Logo = item.logo;
										return (
											<div
												key={item.skill}
												className='flex items-center gap-2 font-mono text-sm bg-muted p-2 border-l-4 border-accent transition-all duration-300 hover:translate-x-2'
											>
												{Logo ? (
													<Logo
														className='h-5 w-5 shrink-0'
														title={item.skill}
													/>
												) : (
													<span className='inline-block h-5 w-5' />
												)}
												<span>{item.skill}</span>
											</div>
										);
									})}
								</div>
							</InteractiveCard>
						</div>
					))}
				</div>

				<div className='mt-16'>
					<InteractiveCard className='p-8 bg-accent text-accent-foreground text-center'>
						<h3 className='text-2xl font-black mb-4'>ALWAYS LEARNING</h3>
						<p className='font-mono'>
							CURRENTLY EXPLORING: AI/ML INTEGRATION, WEB3, AND ADVANCED
							PERFORMANCE OPTIMIZATION
						</p>
					</InteractiveCard>
				</div>
			</div>
		</section>
	);
};

export default SkillsSection;
