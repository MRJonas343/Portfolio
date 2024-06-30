"use client"

import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import NavBar from "@/components/NavBar"
import IconSkill from "@/components/IconSkill"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import LocalPhoneIcon from "@mui/icons-material/LocalPhone"
import EmailIcon from "@mui/icons-material/Email"
import Skils from "./Skills.json"
import { DataContact } from "./types"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

const Home = () => {
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
			"https://www.linkedin.com/in/angel-jonas-rosales-gonzalez-29b577285/"
	}

	return (
		<>
			<NavBar />

			<section className="mt-16 lg:mt-10 h-[350px] flex flex-col items-center justify-center md:flex-row gap-4 md:mb-0 md:gap-14">
				<aside className="md:order-1 w-28 h-40 md:w-52">
					<img src="/hombre.png" alt="myPhoto" />
				</aside>
				<div className="font-bebas flex flex-col animate-duration-slower animate-fade-in-right p-4  mx-2 justify-end items-center">
					<div>
						<h2 className="text-white text-3xl">Jonas Rosales</h2>
						<span className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500" />
						<p className={textGreenClassName}>
							Software Engineering Student
						</p>
						<div className="flex py-2 gap-3 items-center">
							<img
								className={iconClassName}
								src="/plus.png"
								alt="plus"
							/>
							<p className={textPurple}>Web Development Enthusiast</p>
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

				<section className="py-10 md:px-4 flex flex-col lg:flex-row">
					<div className="lg:w-[40%]">
						<div className="flex w-full justify-center lg:items-center lg:h-full">
							<img
								className="w-[60%] max-w-[360px]"
								src="/BeeSMRTImg.png"
								alt="BeeSMRT"
							/>
						</div>
					</div>

					<div className="lg:w-[60%] lg:p-10 lg:items-center">
						<div className="p-6">
							<h3 className="text-4xl font-bebas textShadowBright text-pink-600">
								BeeSMRT Games
							</h3>
							<p className="text-white font-oswald">
								BeeSMRT is a web application that allows users to
								practice their English through role-playing games,
								this is my most ambitious application in which I have
								implemented a lot of technologies and libraries and I
								am not even 10% of the final project.
							</p>
						</div>

						<section className="flex py-4">
							<article className="flex gap-8 flex-col w-4/6">
								<aside className="flex justify-around">
									<img
										className="w-10"
										src="/vitejs.svg"
										alt="vite"
									/>
									<img
										className="w-10"
										src="/typescript.svg"
										alt="ts"
									/>
									<img className="w-10" src="/react.svg" alt="rc" />
								</aside>
								<aside className="flex justify-around">
									<img className="w-10" src="/nodejs.svg" alt="nd" />
									<img
										className="w-10"
										src="/expressjs_dark.svg"
										alt="ex"
									/>
									<img className="w-10" src="/mysql.svg" alt="sql" />
								</aside>
							</article>
							<aside className="w-2/6 flex flex-col justify-between items-center">
								<button
									type="button"
									className="rounded-sm font-bebas w-28 md:w-full max-w-[272px] py-2 text-lg shadowBlueBoton"
									onClick={() => {
										window.location.href =
											"https://github.com/MRJonas343/BeeSMRT2"
									}}
								>
									view code
								</button>
								<button
									type="button"
									className="rounded-sm font-bebas w-28 md:w-full max-w-[272px]  py-2 text-lg shadowYellowBoton"
									onClick={() => {
										window.location.href =
											"https://beesmrt2.vercel.app/"
									}}
								>
									view project
								</button>
							</aside>
						</section>
					</div>
				</section>

				<section className="py-10  md:px-4 flex flex-col lg:flex-row">
					<div className="lg:w-[40%]">
						<div className="flex w-full justify-center lg:items-center lg:h-full">
							<img
								className="w-[60%] max-w-[360px]"
								src="/BeeSMRTImg.png"
								alt="BeeSMRT"
							/>
						</div>
					</div>

					<div className="lg:w-[60%] lg:p-10">
						<div className="p-6">
							<h3 className="text-4xl font-bebas textShadowBright text-red-700">
								Portfolio
							</h3>
							<p className="text-white font-oswald">
								Lorem ipsum, dolor sit amet consectetur adipisicing
								elit. Quia perferendis laborum odio a ex, adipisci est
								atque repellendus nam sunt ullam officiis consequatur
								incidunt optio eum dolore. Consequuntur, cum optio.
							</p>
						</div>

						<section className="flex py-4">
							<article className="flex gap-8 flex-col w-4/6">
								<aside className="flex justify-around">
									<img
										className="w-12"
										src="/nextjs_logo_dark.svg"
										alt=""
									/>
									<img
										className="w-10"
										src="/typescript.svg"
										alt=""
									/>
									<img className="w-10" src="/react.svg" alt="" />
								</aside>
								<aside className="flex justify-around">
									<img
										className="w-10"
										src="/tailwindcss.svg"
										alt=""
									/>
									<img
										className="w-10"
										src="/prisma_dark.svg"
										alt=""
									/>
									<img className="w-6" src="/mongodb.svg" alt="" />
								</aside>
							</article>
							<aside className="w-2/6 items-center flex flex-col justify-between">
								<button
									className="rounded-sm w-28 md:w-full max-w-[272px]  font-bebas py-2 text-lg shadowBlueBoton"
									type="button"
									onClick={() => {
										window.location.href =
											"https://github.com/MRJonas343/Portfolio"
									}}
								>
									view code
								</button>
								<button
									className="rounded-sm w-28 md:w-full max-w-[272px]  font-bebas py-2 text-lg shadowYellowBoton"
									type="button"
									onClick={() => {
										window.location.href =
											"https://jonas-one.vercel.app/"
									}}
								>
									view project
								</button>
							</aside>
						</section>
					</div>
				</section>

				<section className="py-10 md:px-4 flex flex-col lg:flex-row">
					<div className="lg:w-[40%]">
						<div className="flex w-full justify-center lg:items-center lg:h-full">
							<img
								className="w-[60%] max-w-[360px]"
								src="/Manage.png"
								alt="Mangment"
							/>
						</div>
					</div>

					<div className="lg:w-[60%] lg:p-10">
						<div className="p-6">
							<h3 className="text-4xl font-bebas textShadowBright text-green-700">
								Managment Static Web Page
							</h3>
							<p className="text-white font-oswald">
								Static website I developed when I was learning
								responsive design with Tailwind and semantic html.
							</p>
						</div>

						<section className="flex py-4">
							<article className="flex gap-8 flex-col w-4/6">
								<aside className="flex justify-around">
									<img className="w-12" src="/html5.svg" alt="" />
									<img
										className="w-10"
										src="/tailwindcss.svg"
										alt=""
									/>
								</aside>
							</article>
							<aside className="w-2/6 items-center flex flex-col justify-between gap-5">
								<button
									className="rounded-sm w-28 md:w-full max-w-[272px]  font-bebas py-2 text-lg shadowBlueBoton"
									type="button"
									onClick={() => {
										window.location.href =
											"https://github.com/MRJonas343/MRJonas343.Managment.io"
									}}
								>
									view code
								</button>
								<button
									className="rounded-sm w-28 md:w-full max-w-[272px]  font-bebas py-2 text-lg shadowYellowBoton"
									type="button"
									onClick={() => {
										window.location.href =
											"https://mrjonas343.github.io/MRJonas343.Managment.io/"
									}}
								>
									view project
								</button>
							</aside>
						</section>
					</div>
				</section>

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
					id="about"
					className="text-5xl text-orange-500 textShadowBright pb-4 font-bebas text-center pt-14 animate-slide-in-bottom"
				>
					Who am I?
				</h2>

				<article className="mb-4 md:flex md:flex-row md:p-5 max-w-[890px] md:mx-auto">
					<div className="flex mx-2 py-10 justify-center md:order-1 md:w-1/3">
						<img className="w-52" src="/hombre.png" alt="myPhoto" />
					</div>
					<div className="flex flex-col mx-4 md:w-2/3 md:justify-center">
						<p className="text-white font-oswald">
							You have a{" "}
							<span className="text-red-600 textShadowBright">
								crazy idea
							</span>
							, then I am the ideal developer for you. I am familiar
							with the entire development process, from{" "}
							<span className="text-blue-600 textShadowBright">
								requirements
							</span>{" "}
							gathering to{" "}
							<span className="text-green-600 textShadowBright">
								deployment
							</span>
							. So if you hire me, you will get a lot of value.
						</p>

						<p className="text-white font-oswald py-4">
							Apart from coding, I do other activities such as
							taekwondo, calisthenics, and a lot of physical activity.
						</p>

						<span className="text-white font-oswald text-center py-4 text-2xl mb-4">
							Soft Skills:
						</span>
						<ul className="text-white font-oswald flex w-full justify-around">
							<li className="text-purple-600 textShadowBright">
								Proactive
							</li>
							<li className="textShadowBright text-yellow-400">
								Communication
							</li>
							<li className="textShadowBright text-orange-600">
								Teamwork
							</li>
						</ul>
					</div>
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
									<p className="text-[#151327]">"</p>
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
										{...register("Message", {
											required: true,
											maxLength: 500,
										})}
									/>
									{errors.Message?.type === "required" && (
										<p className="text-red-600">
											This field is required
										</p>
									)}
									{errors.Message?.type === "maxLength" && (
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

export default Home
