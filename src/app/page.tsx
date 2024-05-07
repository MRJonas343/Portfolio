import { useState } from "react"

import NavBar from "@/components/NavBar"

const Home = () => {


  const initialClassName = "bg-cyan-500 animate-fade-in-right py-2 px-2"

  const words = ["Web Development Enthusiast"]



  return (
    <>
      <NavBar />


      <section className="h-[40vh] flex flex-col items-center justify-center lg:flex-row gap-4">
        <aside className="lg:order-1">
          <img className="w-52 shadowImg lg:w-80" src="/laptop.png" />
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

      <section className="w-[90dvw] mx-[5dvw] bg-transparent h-[55dvh] flex justify-between items-end animate-slide-in-top">
        <div className="w-1 h-[40dvh] bg-purple-600 shadowPurple" />
        <div className="w-1 bg-green-500 h-[50dvh] shadowGreen" />
        <div className="w-1 bg-pink-700 h-[30dvh] shadowPink" />
        <div className="w-1 bg-blue-500 h-[20dvh] shadowBlue" />
        <div className="w-1 bg-blue-500 h-[20dvh] shadowBlue" />
        <div className="w-1 bg-pink-700 h-[30dvh] shadowPink" />
        <div className="w-1 bg-green-500 h-[50dvh] shadowGreen" />
        <div className="w-1 h-[40dvh] bg-purple-600 shadowPurple" />
      </section>

      <section className="bg-slate-950 w-full h-[400px]">
        <p className="text-4xl text-white font-bebas text-center pt-5 animate-slide-in-bottom">Projects</p>
      </section>


    </>
  )
}

export default Home
