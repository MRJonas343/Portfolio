import NavBar from "@/components/NavBar"

const Home = () => {
  return (
    <>
      <NavBar />


      <section className="text-white p-4 h-[80dvh] flex flex-col mx-2  z-10 justify-center items-center">
        <div className="font-bebas text-start">
          <h2 className="text-3xl text-gray-400">Jonas Rosales</h2>
          <span className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500" />
          <p className="text-4xl">Software Engineer</p>
          <p className="text-4xl">➕ Sys Admin</p>
        </div>
      </section>


    </>
  )
}

export default Home
