"use client"
import { useState, useEffect } from "react"

import NavBar from "@/components/NavBar"

const Home = () => {


  const initialClassName = "bg-cyan-500 animate-fade-in-right py-2 px-2"

  const words = ["Web Development Enthusiast"]



  return (
    <>
      <NavBar />


      <section className="text-white animate-duration-slower animate-fade-in-right p-4 h-[80dvh] flex flex-col mx-2  z-10 justify-center items-center">
        <div className="font-bebas text-start">
          <h2 className="text-3xl text-gray-400">Jonas Rosales</h2>
          <span className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500" />
          <p className="text-4xl">Software Engineering Student</p>
          <div className="py-2 px-2">
            <p className="text-4xl">➕ Web Development Enthusiast</p>
          </div>
        </div>
      </section>


    </>
  )
}

export default Home
