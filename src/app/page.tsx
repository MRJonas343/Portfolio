import { useState } from "react"

import NavBar from "@/components/NavBar"

const Home = () => {


  const initialClassName = "bg-cyan-500 animate-fade-in-right py-2 px-2"

  const words = ["Web Development Enthusiast"]



  return (
    <>
      <NavBar />


      <section className="text-white animate-duration-slower animate-fade-in-right p-4 h-[40vh] flex flex-col mx-2  z-10 justify-end items-center">
        <div className="font-bebas text-start">
          <h2 className="text-3xl text-gray-400">Jonas Rosales</h2>
          <span className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500" />
          <p className="text-4xl">Software Engineering Student</p>
          <div className="py-2 px-2">
            <p className="text-4xl">➕ Web Development Enthusiast</p>
          </div>
        </div>
      </section>

      <section className="w-[90dvw] mx-[5dvw] bg-transparent h-[55dvh] flex justify-between items-end opacity-80 animate-slide-in-top">
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
        <p className="text-4xl text-white font-bebas text-center pt-5">Projects</p>
      </section>


    </>
  )
}

export default Home
