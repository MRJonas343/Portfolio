import Image from "next/image"

interface Technology {
	name: string
	icon: string
	alt: string
}

interface ProjectCardProps {
	title: string
	image: string
	imageAlt: string
	titleColor: string
	description: string
	technologies: Technology[]
	codeUrl: string
	liveUrl: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	title,
	image,
	imageAlt,
	titleColor,
	description,
	technologies,
	codeUrl,
	liveUrl,
}) => {
	return (
		<section className="py-10 md:px-4 flex flex-col lg:flex-row">
			<div className="lg:w-[40%]">
				<div className="flex w-full justify-center lg:items-center lg:h-full">
					<Image
						className="w-[60%] max-w-[360px] lg:w-[80%] lg:max-w-[450px] rounded-lg shadow-lg"
						src={image}
						alt={imageAlt}
						width={360}
						height={240}
					/>
				</div>
			</div>

			<div className="lg:w-[60%] lg:p-10">
				<div className="p-6">
					<h3
						className={`text-4xl font-bebas textShadowBright ${titleColor}`}
					>
						{title}
					</h3>
					<p className="text-white font-oswald">{description}</p>
				</div>

				<section className="flex py-4">
					<article className="flex gap-8 flex-col w-4/6">
						{/* Dynamically create rows of technologies (3 per row) */}
						{Array.from(
							{ length: Math.ceil(technologies.length / 3) },
							(_, rowIndex) => {
								const rowTechnologies = technologies.slice(
									rowIndex * 3,
									(rowIndex + 1) * 3,
								)
								const rowKey = rowTechnologies
									.map((tech) => tech.name)
									.join("-")

								return (
									<aside key={rowKey} className="flex justify-around">
										{rowTechnologies.map((tech) => (
											<img
												key={tech.name}
												className="w-10 h-10 object-contain"
												src={tech.icon}
												alt={tech.alt}
												title={tech.name}
											/>
										))}
									</aside>
								)
							},
						)}
					</article>
					<aside className="w-2/6 items-center flex flex-col justify-between gap-5">
						<button
							className="rounded-sm w-28 md:w-full max-w-[272px] font-bebas py-2 text-lg shadowBlueBoton"
							type="button"
							onClick={() => {
								window.location.href = codeUrl
							}}
						>
							view code
						</button>
						<button
							className="rounded-sm w-28 md:w-full max-w-[272px] font-bebas py-2 text-lg shadowYellowBoton"
							type="button"
							onClick={() => {
								window.location.href = liveUrl
							}}
						>
							view project
						</button>
					</aside>
				</section>
			</div>
		</section>
	)
}

export default ProjectCard
