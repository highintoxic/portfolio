import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
	const projects = [
		{
			id: 6,
			title: "Sonic - Identify Song",
			description:
				"Sonic is a song identification system designed to recognize audio tracks based on their unique acoustic signatures. The system employs the Fast Fourier Transform (FFT) to extract frequency-domain representations of audio signals, from which spectral fingerprints are generated. These fingerprints are subsequently converted into hash values that serve as compact and robust identifiers, enabling efficient storage and retrieval within a database. During identification, query audio segments are processed in the same manner, and their hashes are compared against the stored entries to achieve rapid and accurate song recognition.",
			tech: ["REACT", "TYPESCRIPT", "PRISMA", "POSTGRES", "EXPRESS", "AZURE"],
			github: "https://github.com/highintoxic/sonic",
			live: "https://sonic.kuruvpatel.dev/",
			featured: true,
			preview:
				"https://api.microlink.io?url=https://sonic.kuruvpatel.dev/&screenshot=true&meta=false&embed=screenshot.url",
		},
		{
			id: 1,
			title: "KASHVI CREATION",
			description:
				"Kashvi Creation is an award-winning e-commerce website developed for a saree company as part of Google Winter of Code, where it emerged as the winner. It features both client and admin sides with highly modular sections that the admin can modify. The platform also includes sales analytics and an admin dashboard with auto-generated invoices, making management seamless and efficient.",
			tech: ["NEXT.JS", "TYPESCRIPT", "PRISMA", "MONGODB", "JWT"],
			github: "https://github.com/Hitarth1810/KashviCreation",
			live: "https://kashvi-creation.vercel.app/",
			featured: true,
			preview:
				"https://api.microlink.io?url=https://kashvi-creation.vercel.app/&screenshot=true&meta=false&embed=screenshot.url",
		},
		{
			id: 2,
			title: "Algorithm Visualizer",
			description:
				"An interactive algorithm visualizer that helps you learn sorting algorithms step by step with animations. Explore popular algorithms like Bubble Sort, Merge Sort, Quick Sort, and more to see how data is organized in real time.",
			tech: ["REACT", "TYPESCRIPT", "VITE", "TONE"],
			github: "https://github.com/highintoxic/algo-visu",
			live: "https://algo-visu.kuruvpatel.dev",
			featured: true,
			preview:
				"https://api.microlink.io?url=https://algo-visu.kuruvpatel.dev/&screenshot=true&meta=false&embed=screenshot.url",
		},
		{
			id: 3,
			title: "URL Shortener",
			description:
				"A simple and efficient URL shortening service that allows users to create short links for their long URLs. The service provides analytics to track link clicks and user engagement.",
			tech: ["MONGO", "EXPRESS", "VUE"],

			featured: false,
		},
		{
			id: 4,
			title: "Web Chat App",
			description:
				"A sleek, real-time web chat application that connects people instantly. With a clean interface and seamless messaging.",
			tech: ["MySQL", "TypeORM", "GraphQL", "React"],

			featured: false,
		},
		{
			id: 5,
			title: "ECO BREW",
			description:
				"EcoBrew is an innovative platform dedicated to motivating users to recycle cups and reduce waste. By tracking your recycling efforts, EcoBrew shows you the tangible impact you're making on the environment through real-time statistics, personalized graphs, and insightful metrics. Join the movement, see your progress, and be inspired to make a difference—one cup at a time",
			tech: ["MERN"],

			featured: false,
		},
		{
			id: 6,
			title: "FINWAY",
			description:
				"Finway is your go-to financial hub, offering tools like budget tracking, expense splitting, and financial education to simplify money management. Take control of your finances with ease and confidence, all in one place.",
			tech: ["MERN"],

			live: null,
			featured: false,
		},
	];

	const featuredProjects = projects.filter((p) => p.featured);
	const otherProjects = projects.filter((p) => !p.featured);

	return (
		<section id='projects' className='brutalist-section'>
			<div className='brutalist-container'>
				<div className='text-center mb-16'>
					<h2 className='text-5xl font-black mb-6'>PROJECTS</h2>
					<p className='text-xl font-mono text-muted-foreground'>
						PROJECTS THAT SHOWCASE MY DEVELOPMENT PROWESS
					</p>
				</div>

				{/* Featured Projects */}
				<div className='space-y-16 mb-16'>
					{featuredProjects.map((project) => (
						<div
							key={project.id}
							className='grid lg:grid-cols-2 gap-8 items-center'
						>
							<div className='space-y-6'>
								<h3 className='text-3xl font-black text-accent'>
									{project.title}
								</h3>
								<p className='font-mono text-lg leading-relaxed'>
									{project.description}
								</p>

								<div className='flex flex-wrap gap-2'>
									{project.tech.map((tech) => (
										<span
											key={tech}
											className='bg-muted px-3 py-1 font-mono text-sm border-l-4 border-accent'
										>
											{tech}
										</span>
									))}
								</div>

								<div className='flex gap-4'>
									<Button variant='brutal' className='brutalist-block' asChild>
										<a
											href={project.github}
											target='_blank'
											rel='noopener noreferrer'
										>
											<Github size={16} className='mr-2' />
											CODE
										</a>
									</Button>
									{project.live && (
										<Button
											variant='brutal-outline'
											className='brutalist-block'
											asChild
										>
											<a
												href={project.live}
												target='_blank'
												rel='noopener noreferrer'
											>
												<ExternalLink size={16} className='mr-2' />
												LIVE
											</a>
										</Button>
									)}
								</div>
							</div>

							<div className='brutalist-block bg-card p-8'>
								<div className='aspect-video bg-gradient-to-br from-accent/20 to-background flex items-center justify-center overflow-hidden'>
									<a
										href={project.live || "#"}
										target={project.live ? "_blank" : undefined}
										rel={project.live ? "noopener noreferrer" : undefined}
										className='group relative block w-full h-full'
										aria-label={
											project.live
												? `Open ${project.title} live site`
												: undefined
										}
									>
										<img
											src={project.preview}
											alt={`Preview of ${project.title}`}
											className='object-cover w-full transition-transform duration-300 group-hover:scale-105'
										/>
										<div className='absolute inset-0 flex items-center justify-center bg-background/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity'>
											<ExternalLink
												size={36}
												className='text-accent drop-shadow-lg'
											/>
											<span className='sr-only'>
												Open {project.title} live site
											</span>
										</div>
									</a>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Other Projects Grid */}
				<div className='grid md:grid-cols-2 gap-8'>
					{otherProjects.map((project) => (
						<div key={project.id} className='brutalist-block p-8 bg-card'>
							<h3 className='text-xl font-black mb-4 text-accent'>
								{project.title}
							</h3>
							<p className='font-mono text-sm mb-6 leading-relaxed'>
								{project.description}
							</p>

							<div className='flex flex-wrap gap-2 mb-6'>
								{project.tech.map((tech) => (
									<span
										key={tech}
										className='bg-muted px-2 py-1 font-mono text-xs'
									>
										{tech}
									</span>
								))}
							</div>

							<div className='flex gap-3'>
								<a
									href={project.github}
									target='_blank'
									rel='noopener noreferrer'
									className='text-foreground hover:text-accent transition-colors'
								>
									<Github size={20} />
								</a>
								{project.live && (
									<a
										href={project.live}
										target='_blank'
										rel='noopener noreferrer'
										className='text-foreground hover:text-accent transition-colors'
									>
										<ExternalLink size={20} />
									</a>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProjectsSection;
