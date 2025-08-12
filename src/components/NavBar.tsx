"use client"
import Link from "next/link"
import { useState } from "react"

const NavBar: React.FC = () => {
	const [isExpanded, setIsExpanded] = useState(false)
	const btnClassName = isExpanded
		? "bg-close-menu fixed top-4 right-4  w-6 h-6 bg-cover bg-center cursor-pointer transition-all z-40 md:hidden"
		: "w-6 h-6 bg-cover fixed top-4 right-4  bg-center cursor-pointer transition-all z-40 md:hidden bg-open-menu"

	const changeMenuIcon = () => {
		setIsExpanded(!isExpanded)
	}

	return (
		<nav className="w-[95%] mx-auto overflow-hidden h-9 mt-4 flex items-center justify-between font-bebas text-3xl text-3d text-white">
			<Link
				href="/"
				className="hover:scale-110 ease-in-out duration-200"
			>
				<p className="p-2 text-blue-500 textShadowTitle">
					Jonas Rosales
				</p>
			</Link>
			<label
				htmlFor="btn-open-menu"
				className={btnClassName}
				onClick={changeMenuIcon}
			/>

			<input
				id="btn-open-menu"
				type="checkbox"
				className="peer hidden"
			/>
			<div className="fixed top-0 left-0 w-screen h-screen backdrop-blur-md bg-indigo-950/60  md:bg-transparent flex justify-center items-center inset-0 translate-x-full peer-checked:translate-x-0 transition-transform md:static  md:translate-x-0 z-30 md:hidden">
				<div className="lg:mr-28">
					<ul className="tracking-wide backdrop-blur-lg md:outline-none absolute inset-x-0 top-24 p-12 w-[90%] mx-auto rounded-lg h-max text-center grid gap-10 md:w-max md:bg-transparent md:p-0 md:grid-flow-col md:static">
						<li className="hover:scale-110 hoverText hoverTextBlue">
							<a href="#projects">Projects</a>
						</li>
						<li className="hover:scale-110 hoverText hoverTextGreen">
							<a href="#skills">Skills</a>
						</li>
						<li className="hover:scale-110 hoverText hoverTextPink">
							<a href="#about">About</a>
						</li>
						<li className="hover:scale-110 hoverText hoverTextPink">
							<a href="#contact">Contact</a>
						</li>
					</ul>
				</div>
			</div>
			<ul className="tracking-wide hidden backdrop-blur-lg  h-max md:grid gap-10 w-max md:bg-transparent md:grid-flow-col">
				<li className="hover:scale-110 hoverText hoverTextBlue">
					<a href="#projects">Projects</a>
				</li>
				<li className="hover:scale-110 hoverText hoverTextGreen">
					<a href="#skills">Skills</a>
				</li>
				<li className="hover:scale-110 hoverText hoverTextPink">
					<a href="#contact">Contact</a>
				</li>
			</ul>
		</nav>
	)
}

export default NavBar
