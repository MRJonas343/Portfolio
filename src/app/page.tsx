"use client"

import { useEffect, useState } from "react"
import NavBar from "@/components/NavBar"

const Home = () => {


  const [purpleClassName, setPurpleClassName] = useState("w-1 h-[35dvh] bg-purple-600 shadowPurple lg:h-[40dvh]")
  const [greenClassName, setGreenClassName] = useState("w-1 bg-green-500 h-[45dvh] shadowGreen lg:h-[50dvh]")
  const [pinkClassName, setPinkClassName] = useState("w-1 bg-pink-700 h-[25dvh] shadowPink lg:h-[30dvh]")
  const [blueClassName, setBlueClassName] = useState("w-1 bg-blue-500 h-[15dvh] shadowBlue lg:h-[20dvh]")

  useEffect(() => {
    setInterval(() => {
      setPurpleClassName("w-1 h-[35dvh] bg-purple-600 shadowPurple lg:h-[40dvh] shadowPurpleBright")
      setGreenClassName("w-1 bg-green-500 h-[45dvh] shadowGreen lg:h-[50dvh] shadowGreenBright")
      setPinkClassName("w-1 bg-pink-700 h-[25dvh] shadowPink lg:h-[30dvh] shadowPinkBright")
      setBlueClassName("w-1 bg-blue-500 h-[15dvh] shadowBlue lg:h-[20dvh] shadowBlueBright")
    }, 2000)
    setInterval(() => {
      setPurpleClassName("w-1 h-[35dvh] bg-purple-600 shadowPurple lg:h-[40dvh]")
      setGreenClassName("w-1 bg-green-500 h-[45dvh] shadowGreen lg:h-[50dvh]")
      setPinkClassName("w-1 bg-pink-700 h-[25dvh] shadowPink lg:h-[30dvh]")
      setBlueClassName("w-1 bg-blue-500 h-[15dvh] shadowBlue lg:h-[20dvh]")
    }, 4000)
  }, [])


  return (
    <>
      <NavBar />

      <section className="mt-20 lg:mt-10 mb-10 h-[40vh] flex flex-col items-center justify-center md:flex-row gap-4 md:items-center">
        <aside className="md:order-1">
          <img className="w-52" src="/computadora.png" />
        </aside>
        <div className="font-bebas flex flex-col animate-duration-slower animate-fade-in-right p-4  mx-2 justify-end items-center">
          <div>
            <h2 className="text-3xl text-blue-500 textShadow">Jonas Rosales</h2>
            <span className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500" />
            <p className="text-4xl text-green-600 textShadow">Software Engineering Student</p>
            <div className="flex py-2 gap-3 items-center">
              <img className="w-10 h-10 shadowImg" src="/plus.png" />
              <p className="text-4xl pt-1 text-purple-700 textShadow">Web Development Enthusiast</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-6 bg-transparent h-[50dvh] flex justify-between items-end animate-slide-in-top">
        <div className={purpleClassName} />
        <div className={greenClassName} />
        <div className={pinkClassName} />
        <div className={blueClassName} />
        <div className={blueClassName} />
        <div className={pinkClassName} />
        <div className={greenClassName} />
        <div className={purpleClassName} />
      </section>

      <section className="bg-slate-950 w-full h-[400px]">
        <p className="text-4xl text-white font-bebas text-center pt-5 animate-slide-in-bottom">Projects</p>
      </section>


    </>
  )
}

export default Home
