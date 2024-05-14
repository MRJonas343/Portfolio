"use client"

import { useEffect, useState } from "react"
import NavBar from "@/components/NavBar"
import IconSkill from "@/components/IconSkill"
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Skils from "./Skills.json"

const Home = () => {

  const [purpleClassName, setPurpleClassName] = useState("w-1 h-[35vh] shadowPurple lg:h-[40vh] md:w-3")
  const [greenClassName, setGreenClassName] = useState("w-1 h-[45vh] shadowGreen lg:h-[50vh] md:w-3")
  const [pinkClassName, setPinkClassName] = useState("w-1 h-[28vh] shadowPink lg:h-[30vh] md:w-3")
  const [blueClassName, setBlueClassName] = useState("w-1 h-[20vh] shadowBlue lg:h-[20vh] md:w-3")
  const [textGreenClassName, setTextGreenClassName] = useState("text-3xl lg:text-5xl text-green-500 textShadow")
  const [textPurple, setTextPurple] = useState("text-3xl lg:text-5xl pt-1 text-purple-700 textShadow")
  const [iconClassName, setIconClassName] = useState("w-10 h-10 iconShadow")

  useEffect(() => {
    setInterval(() => {
      setPurpleClassName("w-1 h-[35vh] shadowPurple lg:h-[40vh] shadowPurpleBright md:w-3")
      setGreenClassName("w-1 h-[45vh] lg:h-[50vh] shadowGreenBright md:w-3")
      setPinkClassName("w-1 h-[28vh] lg:h-[30vh] shadowPinkBright md:w-3")
      setBlueClassName("w-1 h-[20vh] shadowBlue lg:h-[20vh] shadowBlueBright md:w-3")
      setTextGreenClassName("text-3xl lg:text-5xl text-green-500 textShadowBright")
      setTextPurple("text-3xl lg:text-5xl pt-1 text-purple-700 textShadowBright")
      setIconClassName("w-10 h-10 iconShadowBright")
    }, 2000)
    setInterval(() => {
      setPurpleClassName("w-1 h-[35vh] shadowPurple lg:h-[40vh] md:w-3")
      setGreenClassName("w-1 h-[45vh] shadowGreen lg:h-[50vh] md:w-3")
      setPinkClassName("w-1 h-[28vh] shadowPink lg:h-[30vh] md:w-3")
      setBlueClassName("w-1 h-[20vh] shadowBlue lg:h-[20vh] md:w-3")
      setTextGreenClassName("text-3xl  lg:text-5xl text-green-500 textShadow")
      setTextPurple("text-3xl lg:text-5xl pt-1 text-purple-700 textShadow")
      setIconClassName("w-10 h-10 iconShadow")
    }, 4000)
  }, [])


  return (
    <>
      <NavBar />

      <section className="mt-16 lg:mt-10 h-[350px] flex flex-col items-center justify-center md:flex-row gap-4 md:mb-0 md:gap-14">
        <aside className="md:order-1 w-28 h-40 md:w-52">
          <img src="/hombre.png" />
        </aside>
        <div className="font-bebas flex flex-col animate-duration-slower animate-fade-in-right p-4  mx-2 justify-end items-center">
          <div>
            <h2 className={"text-white text-3xl"}>Jonas Rosales</h2>
            <span className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500" />
            <p className={textGreenClassName}>Software Engineering Student</p>
            <div className="flex py-2 gap-3 items-center">
              <img className={iconClassName} src="/plus.png" />
              <p className={textPurple}>Web Development Enthusiast</p>
            </div>
            <div className="flex w-full justify-between py-4 items-center">
              <GitHubIcon sx={{ fontSize: '2rem' }} className="iconGithub cursor-pointer" />
              <LinkedInIcon sx={{ fontSize: '2rem' }} className="iconLinkedIn cursor-pointer" />
              <button className="rounded-sm font-bebas py-2 w-24 text-md shadowBlueBoton lg:w-28">Get my CV</button>
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


      <section className="w-full h-auto pb-4 px-4">
        <h2 className="text-5xl text-green-500 textShadowBright pb-4 font-bebas text-center pt-10 animate-slide-in-bottom">Projects</h2>

        <section className="p-6 flex flex-col lg:flex-row mb-4">

          <div className="lg:w-[40%]">
            <div className="flex w-full justify-center lg:items-center lg:h-full">
              <img className="w-[60%] max-w-[360px]" src="/BeeSMRTImg.png" alt="BeeSMRT" />
            </div>
          </div>

          <div className="lg:w-[60%] lg:p-10 lg:items-center">
            <div className="p-6">
              <h3 className="text-4xl font-bebas textShadowBright text-pink-600">BeeSMRT Games</h3>
              <p className="text-white font-oswald">BeeSMRT is a web application that allows users to practice their English through role-playing games, this is my most ambitious application in which I have implemented a lot of technologies and libraries and I am not even 10% of the final project.</p>
            </div>

            <section className="flex py-4">
              <article className="flex gap-8 flex-col w-4/6">
                <aside className="flex justify-around">
                  <img className="w-10" src="/vitejs.svg" alt="" />
                  <img className="w-10" src="/typescript.svg" alt="" />
                  <img className="w-10" src="/react.svg" alt="" />
                </aside>
                <aside className="flex justify-around">
                  <img className="w-10" src="/nodejs.svg" alt="" />
                  <img className="w-10" src="/expressjs_dark.svg" alt="" />
                  <img className="w-10" src="/mysql.svg" alt="" />
                </aside>
              </article>
              <aside className="w-2/6 flex flex-col justify-between">
                <button className="rounded-sm font-bebas py-2 text-lg shadowBlueBoton">view code</button>
                <button className="rounded-sm font-bebas py-2 text-lg shadowYellowBoton">view project</button>
              </aside>
            </section>
          </div>
        </section>

        <section className="p-6 flex flex-col lg:flex-row mb-5 lg:mb-6">

          <div className="lg:w-[40%]">
            <div className="flex w-full justify-center lg:items-center lg:h-full">
              <img className="w-[60%] max-w-[360px]" src="/BeeSMRTImg.png" alt="BeeSMRT" />
            </div>
          </div>

          <div className="lg:w-[60%] lg:p-10">
            <div className="p-6">
              <h3 className="text-4xl font-bebas textShadowBright text-red-700">Portfolio</h3>
              <p className="text-white font-oswald">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia perferendis laborum odio a ex, adipisci est atque repellendus nam sunt ullam officiis consequatur incidunt optio eum dolore. Consequuntur, cum optio.</p>
            </div>

            <section className="flex py-4">
              <article className="flex gap-8 flex-col w-4/6">
                <aside className="flex justify-around">
                  <img className="w-12" src="/nextjs_logo_dark.svg" alt="" />
                  <img className="w-10" src="/typescript.svg" alt="" />
                  <img className="w-10" src="/react.svg" alt="" />
                </aside>
                <aside className="flex justify-around">
                  <img className="w-10" src="/tailwindcss.svg" alt="" />
                  <img className="w-10" src="/prisma_dark.svg" alt="" />
                  <img className="w-6" src="/mongodb.svg" alt="" />
                </aside>
              </article>
              <aside className="w-2/6 flex flex-col justify-between">
                <button className="rounded-sm font-bebas py-2 text-lg shadowBlueBoton">view code</button>
                <button className="rounded-sm font-bebas py-2 text-lg shadowYellowBoton">view project</button>
              </aside>
            </section>
          </div>
        </section>

        <section className="p-6 flex flex-col lg:flex-row">

          <div className="lg:w-[40%]">
            <div className="flex w-full justify-center lg:items-center lg:h-full">
              <img className="w-[60%] max-w-[360px]" src="/Manage.png" alt="Mangment" />
            </div>
          </div>

          <div className="lg:w-[60%] lg:p-10">
            <div className="p-6">
              <h3 className="text-4xl font-bebas textShadowBright text-green-700">Managment Static Web Page</h3>
              <p className="text-white font-oswald">Static website I developed when I was learning responsive design with Tailwind and semantic html.</p>
            </div>

            <section className="flex py-4">
              <article className="flex gap-8 flex-col w-4/6">
                <aside className="flex justify-around">
                  <img className="w-12" src="/html5.svg" alt="" />
                  <img className="w-10" src="/tailwindcss.svg" alt="" />
                </aside>
              </article>
              <aside className="w-2/6 flex flex-col justify-between gap-5">
                <button className="rounded-sm font-bebas py-2 text-lg shadowBlueBoton">view code</button>
                <button className="rounded-sm font-bebas py-2 text-lg shadowYellowBoton">view project</button>
              </aside>
            </section>
          </div>
        </section>


        <h2 className="text-5xl text-purple-700 textShadowBright pb-4 font-bebas text-center pt-10 animate-slide-in-bottom">Skills</h2>

        <article className="grid grid-cols-2 gap-7 place-items-center mt-6 h-auto pb-4 md:grid-cols-4 lg:gap-12 lg:mx-10">
          {Skils.map((skill, index) => {
            return (
              <IconSkill key={index} imgSrc={skill.src} altText={skill.alt} />
            )
          })}
        </article>



      </section>




    </>
  )
}

export default Home
