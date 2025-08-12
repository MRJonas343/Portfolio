"use client"

import IconSkill from "@/components/IconSkill"
import NavBar from "@/components/NavBar"
import ProjectCard from "@/components/ProjectCard"
import EmailIcon from "@mui/icons-material/Email"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import LocalPhoneIcon from "@mui/icons-material/LocalPhone"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import Projects from "./Projects.json"
import Skils from "./Skills.json"
import { DataContact } from "./types"

export default function Page() {
	const [purpleClassName, setPurpleClassName] = useState(
		"w-1 h-[35vh] shadowPurple lg:h-[40vh] md:w-3",
	)
	const [greenClassName, setGreenClassName] = useState(
		"w-1 h-[45vh] shadowGreen lg:h-[50vh] md:w-3",
	)
	const [pinkClassName, setPinkClassName] = useState(
		"w-1 h-[28vh] shadowPink lg:h-[30vh] md:w-3",
	)
	const [blueClassName, setBlueClassName] = useState(
		"w-1 h-[20vh] shadowBlue lg:h-[20vh] md:w-3",
	)
	const [textGreenClassName, setTextGreenClassName] = useState(
		"text-3xl lg:text-5xl text-green-500 textShadow",
	)
	const [textPurple, setTextPurple] = useState(
		"text-3xl lg:text-5xl pt-1 text-purple-700 textShadow",
	)
	const [iconClassName, setIconClassName] = useState(
		"w-10 h-10 iconShadow",
	)

	useEffect(() => {
		setInterval(() => {
			setPurpleClassName(
				"w-1 h-[35vh] shadowPurple lg:h-[40vh] shadowPurpleBright md:w-3",
			)
			setGreenClassName(
				"w-1 h-[45vh] lg:h-[50vh] shadowGreenBright md:w-3",
			)
			setPinkClassName(
				"w-1 h-[28vh] lg:h-[30vh] shadowPinkBright md:w-3",
			)
			setBlueClassName(
				"w-1 h-[20vh] shadowBlue lg:h-[20vh] shadowBlueBright md:w-3",
			)
			setTextGreenClassName(
				"text-3xl lg:text-5xl text-green-500 textShadowBright",
			)
			setTextPurple(
				"text-3xl lg:text-5xl pt-1 text-purple-700 textShadowBright",
			)
			setIconClassName("w-10 h-10 iconShadowBright")
		}, 2000)
		setInterval(() => {
			setPurpleClassName(
				"w-1 h-[35vh] shadowPurple lg:h-[40vh] md:w-3",
			)
			setGreenClassName("w-1 h-[45vh] shadowGreen lg:h-[50vh] md:w-3")
			setPinkClassName("w-1 h-[28vh] shadowPink lg:h-[30vh] md:w-3")
			setBlueClassName("w-1 h-[20vh] shadowBlue lg:h-[20vh] md:w-3")
			setTextGreenClassName(
				"text-3xl  lg:text-5xl text-green-500 textShadow",
			)
			setTextPurple(
				"text-3xl lg:text-5xl pt-1 text-purple-700 textShadow",
			)
			setIconClassName("w-10 h-10 iconShadow")
		}, 4000)
	}, [])

	//* Form (React Hook Form)
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm<DataContact>()

	//* Function to send the form
	async function getForm(data: DataContact) {
		const response = await fetch("/api/emails", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})

		const result = await response.json()

		if (result.message === "Email sent") {
			MySwal.fire({
				title: "Email sent",
				icon: "success",
				text: "I will contact you soon",
				background: "#1a202c",
				color: "#fff",
			})
		} else {
			MySwal.fire({
				title: "Error",
				icon: "error",
				text: "An error occurred, try again later",
			})
		}

		reset()
	}
	const MySwal = withReactContent(Swal)

	const RedirectGithub = () => {
		window.location.href = "https://github.com/MRJonas343"
	}

	const RedirectLinkedIn = () => {
		window.location.href =
			"https://www.linkedin.com/in/jonas-rosales-gonzalez-29b577285"
	}

	return (
		<>
			<NavBar />

			<section className="mt-16 lg:mt-10 h-[350px] flex flex-col items-center justify-center md:flex-row gap-4 md:mb-0 md:gap-14">
				<aside className="md:order-1 w-28 h-40 md:w-52">
					<Image
						className="rounded-full border-4 border-purple-700"
						src="/avatar.jpg"
						alt="myPhoto"
						width={200}
						height={200}
					/>
				</aside>
				<div className="font-bebas flex flex-col animate-duration-slower animate-fade-in-right p-4  mx-2 justify-end items-center">
					<div>
						<h2 className="text-white text-3xl">Jonas Rosales</h2>
						<span className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500" />
						<p className={textGreenClassName}>Software Engineer</p>
						<div className="flex py-2 gap-3 items-center">
							<img
								className={iconClassName}
								src="/plus.png"
								alt="plus"
							/>
							<p className={textPurple}>Cloud && Dev Ops</p>
						</div>
						<div className="flex w-full justify-between py-4 items-center">
							<GitHubIcon
								sx={{ fontSize: "2rem" }}
								className="iconGithub cursor-pointer"
								onClick={RedirectGithub}
							/>
							<LinkedInIcon
								sx={{ fontSize: "2rem" }}
								className="iconLinkedIn cursor-pointer"
								onClick={RedirectLinkedIn}
							/>
							<button
								type="button"
								className="rounded-sm font-bebas py-2 w-24 text-md shadowBlueBoton lg:w-28"
							>
								Get my CV
							</button>
						</div>
					</div>
				</div>
			</section>

			<section className="mx-6 h-[50vh] flex justify-between items-end animate-slide-in-top">
				<div className={purpleClassName} />
				<div className={greenClassName} />
				<div className={pinkClassName} />
				<div className={blueClassName} />
				<div className={blueClassName} />
				<div className={pinkClassName} />
				<div className={greenClassName} />
				<div className={purpleClassName} />
			</section>

			<section className="mx-2 md:mx4 h-auto pb-4 px-2 md:px-4">
				<h2
					id="projects"
					className="text-5xl text-green-500 textShadowBright pb-4 font-bebas text-center pt-10 animate-slide-in-bottom"
				>
					Projects
				</h2>

				{Projects.map((project) => (
					<ProjectCard
						key={project.id}
						title={project.title}
						image={project.image}
						imageAlt={project.imageAlt}
						titleColor={project.titleColor}
						description={project.description}
						technologies={project.technologies}
						codeUrl={project.codeUrl}
						liveUrl={project.liveUrl}
					/>
				))}

				<h2
					id="skills"
					className="text-5xl text-[#0f73d7] textShadowBright pb-4 font-bebas text-center pt-10 animate-slide-in-bottom"
				>
					Skills
				</h2>

				<article className="grid grid-cols-2 gap-7 place-items-center mt-6 h-auto pb-4 md:grid-cols-4 lg:gap-12 lg:mx-10 xl:mx-32">
					{Skils.map((skill) => {
						return (
							<IconSkill
								key={skill.id}
								imgSrc={skill.src}
								altText={skill.alt}
							/>
						)
					})}
				</article>

				<h2
					id="contact"
					className="text-5xl text-green-700 textShadowBright font-bebas text-center animate-slide-in-bottom pt-14 pb-6"
				>
					Contact me
				</h2>

				<section className="flex flex-col items-center mb-10">
					<div className="max-w-[800px] flex flex-col w-full">
						<div className="w-full flex flex-col gap-6 py-4 font-oswald pl-2">
							<div className="text-white flex gap-4">
								<LocalPhoneIcon />
								<p>Mobile: +52 (984) 143-3126</p>
							</div>
							<div className="text-white flex gap-4">
								<EmailIcon />
								<p>angeljonasrosales@gmail.com</p>
							</div>
						</div>
						<form onSubmit={handleSubmit(getForm)}>
							<div className="p-2 w-full">
								<div className="relative">
									<label
										htmlFor="name"
										className="font-oswald py-4 text-lg md:text-xl text-white"
									>
										Your Name
									</label>
									<input
										id="name"
										type="text"
										className="w-full text-white mt-2 font-Secundaria bg-[#374151] rounded  focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none py-1 px-1 leading-8 transition-colors duration-200 ease-in-out "
										{...register("name", {
											required: true,
											maxLength: 100,
											pattern: /^[A-Za-z]+$/i,
										})}
									/>
									{errors.name?.type === "required" && (
										<p className="text-red-600">
											This field is required
										</p>
									)}
									{errors.name?.type === "maxLength" && (
										<p className="text-red-600">
											Your name can not be longer that 100 letters
										</p>
									)}
									{errors.name?.type === "pattern" && (
										<p className="text-red-600">
											Your name should just have letters
										</p>
									)}
									<p className="text-[#151327]">&quot;</p>
									<label
										htmlFor="email"
										className="font-oswald text-lg md:text-xl text-white"
									>
										Your Email
									</label>
									<input
										id="email"
										type="email"
										className="w-full text-white font-Secundaria bg-[#374151] rounded focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none py-2 px-1 leading-8 transition-colors duration-200 ease-in-out "
										{...register("email", {
											required: true,
											maxLength: 100,
										})}
									/>
									{errors.email?.type === "required" && (
										<p className="text-red-600">
											This field is required
										</p>
									)}
									{errors.email?.type === "maxLength" && (
										<p className="text-red-600">
											Your email can not be longer that 100 letters
										</p>
									)}
									{errors.email?.type === "pattern" && (
										<p className="text-red-600">
											Your email should just have letters
										</p>
									)}
								</div>
							</div>
							<div className="p-2 w-full">
								<div className="relative">
									<label
										htmlFor="message"
										className="text-white text-lg font-oswald md:text-xl"
									>
										Type your message
									</label>
									<textarea
										id="Message"
										className="w-full bg-[#374151] text-white mt-2 rounded  focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out "
										{...register("message", {
											required: true,
											maxLength: 500,
										})}
									/>
									{errors.message?.type === "required" && (
										<p className="text-red-600">
											This field is required
										</p>
									)}
									{errors.message?.type === "maxLength" && (
										<p className="text-red-600">
											Your message can not be longer that 500 letters
										</p>
									)}
								</div>
							</div>
							<div className="p-4  mt-2">
								<button
									className="rounded-sm w-36 md:w-full max-w-[272px]  font-bebas py-2 text-xl shadowBlueBoton"
									type="submit"
								>
									Submit 📬
								</button>
							</div>
						</form>
					</div>
				</section>
			</section>
		</>
	)
}
